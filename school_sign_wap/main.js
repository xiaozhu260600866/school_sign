import Vue from 'vue'
import App from './App'
import myfun from 'xiaozhu/uniapp/js/myfun.js' //引入自定义方法
import filter from 'xiaozhu/uniapp/js/filter.js' //引入自定义方法
import myfun2 from './public/js/myfun.js' //引入自定义方法
import ajax from 'xiaozhu/uniapp/js/ajax.js' //引入自定义方法
import message from 'xiaozhu/uniapp/js/message.js' //引入自定义方法
import date from 'xiaozhu/uniapp/js/date.js' //引入自定义方法
import vaildate from 'xiaozhu/uniapp/js/vaildate.js' //引入自定义方法

import store from './vuex/index.js'
Vue.prototype.$store=store;


//全局组件
import myswiper from 'xiaozhu/uniapp/components/swiper'
Vue.component(
	'myswiper',
	myswiper
);
import dxSwiper from 'doxinui/components/swiper/swiper'
Vue.component(
	'dxSwiper',
	dxSwiper
);
import page from 'xiaozhu/uniapp/components/default'
Vue.component(
	'page',
	page
);
import hasMore from 'xiaozhu/uniapp/components/hasMore'
Vue.component(
	'hasMore',
	hasMore
);
import authorize from 'xiaozhu/uniapp/components/authorize'
Vue.component(
	'authorize',
	authorize
);
import weui_input from 'xiaozhu/uniapp/components/weui_input'
Vue.component(
	'weui-input',
	weui_input
);
import myform from 'xiaozhu/uniapp/components/myform'
Vue.component(
	'myform',
	myform
);
import diag from 'xiaozhu/uniapp/components/diag'
Vue.component(
	'diag',
	diag
);
import dxAddress from "xiaozhu/uniapp/components/addressAndCity";
Vue.component(
	'dx-address',
	dxAddress
);
import floatBtn from 'xiaozhu/uniapp/components/floatBtn'
Vue.component(
	'floatBtn',
	floatBtn
);
import dxButton from "doxinui/components/button/button"
Vue.component(
	'dxButton',
	dxButton
);
import dxftButton from "doxinui/components/button/footer-button"
Vue.component(
	'dxftButton',
	dxftButton
);

Vue.config.productionTip = false
Vue.use(myfun);
Vue.use(ajax);
Vue.use(myfun2);
Vue.use(date);
Vue.use(filter);
Vue.use(vaildate);


import 'provider.js';


uni.setStorageSync('siteName', 'https://boss.doxinsoft.com');

uni.removeStorageSync('jsdk');
uni.removeStorageSync('distribution');
//uni.setStorageSync('openid', 'oyoAn4-vXElcBaNwAhGFM5-nVvRQ');
App.mpType = 'app'



let timer2 = setInterval(()=>{
	let newOpenid = uni.getStorageSync("openid");
	let card_user_id = uni.getStorageSync("card_user_id");
	let site_name = uni.getStorageSync("site_name");
	if(newOpenid && card_user_id){
		clearInterval(timer2);
		let time3 = setInterval(()=>{
			let newUrl = uni.getStorageSync('siteName') + '/user/messageNum?source=wechatapp&openid='+newOpenid+'&api_token=' + newOpenid+"&card_user_id="+card_user_id+'&site_name='+site_name;
			uni.request({
					url: newUrl,
					data: {},
					method: 'GET',
					success: res => {
						uni.setStorage({
							key: "messageNum",
							data: res.data.messageNum
						})	
					}
				});
		},120000);
	}

},500);
import '@/public/css/app.scss';
import 'doxinui/css/global_upx.css';
import 'doxinui/css/global_icon.css';
import '@/public/weui/weui.css';
import "@/public/font/iconfont.css";

const app = new Vue({
	...App
})
app.$mount()
