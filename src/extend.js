import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import Vuex from 'vuex';
import VueLazyload from 'vue-lazyload';
import BaiduMap from 'vue-baidu-map';
import VuePaginate from 'vue-paginate'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper);
Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(VuePaginate)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: 'http://s.qunarzz.com/piao_topic/image/common/default/288x288.png',
  attempt: 1
})

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'ItGUcMmiA6r3XESMFiE6oLM0NtdWZIqf'
})

FastClick.attach(document.body);

export default {}
