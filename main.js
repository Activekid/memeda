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

uniRequest.defaults.baseURL = 'https://unidemo.dcloud.net.cn';
uniRequest.defaults.headers.post['Content-Type'] = 'application/json';
// http request 请求拦截器，有token值则配置上token值
uniRequest.interceptors.request.use(
  config => {
    var token = '';
	try {
		token = uni.getStorageSync('token');
	} catch(e) {
		console.log(e);
	}
    if (token) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加
      config.headers.Authorization = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error); // 返回错误信息
  }
);
// http response 拦截器, 拦截403状态（token过期），重新登录
uniRequest.interceptors.response.use(
  response => {
    switch (response.data.code) {
      case 403:
        // 返回 403 清除token信息并跳转到登录页面
		try {
			uni.setStorageSync('token', '');
			uni.navigateTo({
				url: '/pages/login/login'
			});
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
uniRequest.get('/ajax/echo/text?name=uni-app', {
	firstname : 'firstname',
	lastname : 'lastname'
}).then(function (response) {
	console.log(response);
}).catch(function (error) {
	console.log(error);
});
Vue.prototype.$request = uniRequest;

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
