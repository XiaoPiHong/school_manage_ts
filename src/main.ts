import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import '@a/Theme/Index.less'

import axios from './assets/Config/Http'
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ViewUI, {
  transfer: true // 所有带浮层的组件，将浮层放置在 body 内
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
