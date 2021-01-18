const path = require('path')//Node.js path 模块提供了一些用于处理文件路径的小工具

module.exports = {
  publicPath: '/',//部署应用包时的基本 URL（也就是我们index.html页面用到资源的路径，这里/表示的是public目录下）,默认就是'/'
  outputDir: './dist',//当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  assetsDir: './',//放置生成的静态资源 (js、css、img、fonts) 的 (注意：一定是相对于 outputDir 的相对路径) 目录
  indexPath: './index.html',//指定生成的 index.html 的输出路径 (注意：一定是相对于 outputDir)。也可以是一个绝对路径
  pages: {
    index: {
      entry: 'src/main.ts',// page 的入口
      template: 'public/index.html',// 模板来源
      filename: 'index.html',// 在 dist/index.html 的输出
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '教学管理系统',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js',
  },
  // lintOnSave: false,//是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效
  productionSourceMap: false,//如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。(map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。也就是说map文件相当于是查看源码的一个东西。如果不需要定位问题，并且不想被看到源码，就把productionSourceMap 置为false，既可以减少包大小，也可以加密源码)
  css: {
    extract: true,//是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)(Default: 生产环境下是 true，开发环境下是 false)
    sourceMap: false,//是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。(默认为false)
    loaderOptions: {//向 CSS 相关的 loader 传递选项
      less: {//这里的选项会传递给 less-loader
        javascriptEnabled: true//这里好像是解决less-loader版本的问题（目前不是很清楚）
      }
    },
  },
  parallel: require('os').cpus().length > 1,//是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。(Default: require('os').cpus().length > 1)
  pwa: {},

  // webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',//把项目中的 vue 换成 “编译 + 运行” 版本(修改 Vue 被导入时候的包的路径,我们可以去node_modules/vue/package.json中的main节点查看默认导入时用的是哪个版本，默认都是vue.runtime.common.js版本的，该版本有许多的语法用不了，所以需要修改)
        '@': path.resolve(__dirname, "src"),
        '@a': path.resolve(__dirname, "src/assets"),
        '@c': path.resolve(__dirname, "src/components"),
        '@v': path.resolve(__dirname, "src/views")//只是一个别名而已。这里设置别名是为了让后续引用的地方减少路径的复杂度。//例如有src/components/a.vue，如果在src/router/index.js 里，正常引用 A 组件：import A from '../../components/a.vue'如果设置了 alias 后。alias: {'vue$': 'vue/dist/vue.esm.js','@': resolve('src')}引用的地方路径就可以这样了import A from '@/components/a.vue'这里的 @ 就起到了【resolve('src')】路径的作用。
      }
    }
  },

  // webpack-dev-server相关配置
  devServer: {
    host: '0.0.0.0',//是否可以通过localhost和127.0.0.1访问（不写时默认是0.0.0.0，都是可以的，写本机ip时只能通过本机ip访问）
    port: 3000,//端口
    open: true,//运行时浏览器打开项目
    https: false,// https: true,//开启HTTPS，注意https参数为true，port同时为443
    // disableHostCheck: true,//当将此项配置设置为 true 时，将会跳过 host 检查. 这是不推荐的 因为不检查host的应用容易受到DNS重新绑定攻击
    // allowedHosts: [
    //   'host.com',
    //   'subdomain.host.com',
    //   'subdomain2.host.com',
    //   'host2.com'
    // ],//该选项允许将允许访问开发服务器的服务列入白名单,不在名单中的不可以访问
    hot: true,//开启热模块替换（默认不写就是开启）
    // hotOnly: true,//在编译失败/成功的情况下，启用热模块替换，而不刷新页面作为回退（注意：hotOnly: true/false一定要搭配hot: false使用的，否则如果不写hot: true或则写了hot: true都是无论是编译失败或则成功了都启用热模块替换，怎么都不会进行刷新页面）
    proxy: null,//API跨域请求代理（会把默认域名http://localhost:8081地址改成 target 对应的http://www.test.com地址，但是在浏览器的F12下，Network->Headers中看到还是http://localhost:8081/allin/policy/getProductInfo， 但是真正的请求的地址则是http://www.test.com/allin/policy/getProductInfo。上面的参数列表中有一个changeOrigin参数, 是一个布尔值, 设置为true, 本地就会虚拟一个服务器接收你的请求并代你发送该请求，解决跨域问题，详情使用查看：https://www.cnblogs.com/liuguiqian/p/11362211.html）
  }
};