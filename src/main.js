import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
// 引入 HeyUI
import HeyUI from 'heyui'
Vue.use(HeyUI)
// 导入 css 和 js 样式，全局
require("heyui/themes/index.css");
import "heyui/themes/index.less";
// 导入页面初始化样式
// import './style/common.css'
// 导入假数据
require('./mock/mock')
Vue.prototype.$axios=Axios

Vue.config.productionTip = false

new Vue({
  router, 
  render: h => h(App)
}).$mount('#app')
