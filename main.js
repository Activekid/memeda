import Vue from 'vue'
import App from './App'

import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'

import uniRequest from 'uni-request';

import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}

Vue.component('page-head', pageHead)
Vue.component('page-foot', pageFoot)

// uni.clearStorage();
uniRequest.defaults.baseURL = ''; // 'http://www.xuebabiji.club'; // h5留空，小程序和APP填域名
uniRequest.defaults.headers.post['Content-Type'] = 'application/json';
// http request 请求拦截器，有token值则配置上token值
uniRequest.interceptors.request.use(
  config => {
	try {
		config.headers.Authorization = uni.getStorageSync('token');
		return config;
	} catch(e) {
		console.log(e);
	}
  },
  error => {
    return Promise.reject(error); // 返回错误信息
  }
);
// http response 拦截器, 拦截 -1 状态（未登录或token过期），重定向到登录
uniRequest.interceptors.response.use(
  response => {
    switch (response.data.ok) {
      case -1:
        // 返回 -1 清除token信息并跳转到登录页面
		try {
			uni.setStorageSync('token', '');
			setTimeout(function(){
				// #ifdef H5 || MP-WEIXIN
				var pages = getCurrentPages(), page = pages[pages.length - 1], queryStr = '';
				for(var k in page.$mp.query){
					queryStr += (k + '=' + page.$mp.query[k] + '&');
				}
				if(queryStr){
					queryStr = '&' + queryStr.substring(0, queryStr.length - 1);
				}
				console.log('/pages/login/login?from=/' + page.route + queryStr);
				if (page.route !== 'pages/guide/guide' && page.route !== 'pages/login/login') {
					uni.redirectTo({
						url: '/pages/login/login?from=/' + page.route + queryStr
					});
				}
				// #endif
				
				// #ifdef APP-PLUS
				uni.redirectTo({
					url: '/pages/login/login'
				});
				// #endif
			}, 100);
		} catch(e) {
			console.log(e);
		}
    }
    return response;
  },
  error => {
    return Promise.reject(error); // 返回错误信息
  }
);
Vue.prototype.$request = uniRequest;

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
