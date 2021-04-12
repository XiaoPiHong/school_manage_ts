import axios from 'axios';
import qs from 'qs';

/**
 * 根据环境变量区分接口的默认地址
 */
switch (process.env.NODE_ENV) {
  // 生产环境（部署到服务器的环境）
  case "production":
    axios.defaults.baseURL = "http://127.0.0.1:8081";
    break;
  // 测试环境
  case "test":
    axios.defaults.baseURL = "http://127.0.0.1:8080";
    break;
  // 默认环境（开发环境）
  default:
    axios.defaults.baseURL = "http://127.0.0.1:3000";
}
/**
 * 设置超时时间和跨域是否允许携带凭证
 */
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;
/**
 * 设置post请求头，告知服务器请求主体的数据格式，这里的格式是（xxx=xxx&xxx=xxx），application/x-www-form-urlencoded（这里主要是看服务器要求什么格式）
 */
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = data => qs.stringify(data);//这里的transformRequest只对post请求有效，这里的data就是我们的请求参数，这里的目的是把对象转成xxx=xxx&xxx=xxx的格式（这里用到的qs是第三方库，这里的qs还有一个parse的方法，就是把xxx=xxx&xxx=xxx格式转成json字符串）
/**
 * 设置请求拦截器,拦截器就是（客户端发请求-》请求拦截器-》服务器）
 * 一般请求的时候都要token校验（了解JWT算法）,请求的时候，客户端把token带上，服务器会校验我们带过去的token是否符合服务器的算法、规则，是的话才允许请求
 * TOKEN校验：接受服务器的token，存储到vuex/本地存储中，每一次向服务器发请求，我们应该把token带上
 */
axios.interceptors.request.use(config => {//成功的拦截
  //携带上token
  let token = localStorage.getItem('token')
  token && (config.headers.Authorization = token)
  return config;
}, error => {//失败的拦截
  return Promise.reject(error)
});
/**
 * 重点：响应拦截器
 * 服务器返回信息-》【响应拦截器】拦截的处理-》客户端获取到信息
 *
 */
// 这里是axios一段配置，默认认为状态码>=200且 <300才算成功
axios.defaults.validateStatus = status => {
  //自定义响应成功的HTTP状态码
  return /^(2|3)\d{2}$/.test(String(status))
}
axios.interceptors.response.use((response) => {//response是返回的响应信息，主要有什么可以查看：http://axios-js.com/zh-cn/
  return response.data;
}, error => {//这里状态码不是2开头的都会到这里
  let { response } = error//这里是解构赋值
  if (response) {//=》服务器返回结果了处理
    switch (response.status) {
      case 401://=>权限（一般是当前请求需要用户验证，一般是未登录）
        break;
      case 403://=>服务器拒绝执行（一般是token过期）
        break;
      case 404://=>找不到页面
        break;
    }
  } else {//=》服务器连结果都没有返回（主要可能有两种情况：断网了/服务器崩了）
    //判断当前有无网络
    if (!window.navigator.onLine) {
      //断网处理：可以跳转到断网页面
      return;
    }
    return Promise.reject(error)
  }
});
export default axios



