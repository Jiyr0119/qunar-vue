import Vue from 'vue'
import VueExtend from './extend'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

FastClick.attach(document.body);

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource)
Vue.use(VueLazyload, {
	preLoad: 1.0,
	attempt: 1,
	loading: 'https://gw.alicdn.com/tps/i1/TB147JCLFXXXXc1XVXXxGsw1VXX-112-168.png',
	listenEvents: [ 'scroll' ]
})

import store from './store'
new Vue({

	beforeCreate: function() {
		var playItem = "";
		var city = '北京';
		var code = "+86";
		try {
			code = window.localStorage.code;
			playItem = window.localStorage.playItem ;
			if(playItem == undefined) {
				playItem = "全部分类"
			}
			city = window.localStorage.city ? window.localStorage.city : city;
		} catch(e) {}

		this.$store.commit("changeCity", city);
		this.$store.commit("changeCode", code);
		this.$store.commit("changePlayItem", playItem);
	},

  	el: '#app',
  	router,
  	store,
  	template: '<App/>',
  	components: { App }
})