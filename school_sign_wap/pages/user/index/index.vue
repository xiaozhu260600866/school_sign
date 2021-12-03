<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view>
			<view class="head-info main-bg">
				<view class="utop fc-white">
					<view class="uinfo" v-if="!data2.user.userInfo.name">
						<view class="header-img">
							<!-- <image class="img" :src="getSiteName+'/images/nouser01.png'"> -->
							<image class="img" src="/static/C01.png">
						</view>
						<myform :ruleform="ruleform" :vaildate="vaildate" :append="true" :data="v" @callBack="ajax">
							<view slot="content">
								<view class="login-nav pl20 pr15 lh-28 fs-14 bdr14">立即登录<span class="iconfont icon-right fs-10 pl3"></span></view>
							</view>
						</myform>
					</view>
					<view class="uinfo" v-else>
						<view class="header-img">
							<image class="img" :src="data2.user.headerPic" />
						</view>
						<view class="flex1">
							<view class="fs-18">{{ data2.user.nickname?data2.user.nickname:data2.user.userInfo.name}}</view>
							<view class="Arial fs-15">{{ data2.user.userInfo.phone}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="block-sec group-lists">
				<dx-list-cell arrow name="我的订单" iconName="order-fill" iconSize="18" iconColor="#f60" @click="goto('/pages/order/lists',1)">
					<view slot="right" class="flex-right">
						<view class="num">99</view>
					</view>
				</dx-list-cell>
				<dx-list-cell arrow name="联系我们" iconName="tel-fill" iconSize="18" iconColor="#f60" @click="tel(data2.phone)">
					<view slot="right">一键拔号</view>
				</dx-list-cell>
				<dx-list-cell arrow name="联系地址" iconName="location-fill" iconSize="19" iconColor="#f60">
					<view slot="right">一键导航</view>
				</dx-list-cell>
			</view>
		</view>
	</view>
</template>

<script>
	import dxListCell from "doxinui/components/list-cell/list-cell"
	export default {
		components:{dxListCell},
		data() {
			return {
				formAction: '/shop/user',
				actIndex: 0,
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				role_type: uni.getStorageSync('role_type'),
				getSiteName: this.getSiteName(),
				ruleform:{},
				vaildate:{},
				data2:{
					phone: '0750-3229010',
					user:{
						headerPic:'/static/pic.jpg',
						userInfo:{
							name:'梅子',
							nickname:'东信科技-梅',
							phone:'13380951183'
						}
					}
				}
			}
		},
		onReachBottom() {
			this.hasMore(this);
		},
		onPullDownRefresh() {
			this.data.nextPage = 1;
			this.ajax();
		},
		onShareAppMessage() {
			this.shareSource(this, '商城');
		},
		onLoad(options) {
			this.ajax();
		},
		onShow(){
			this.onShow(this);
		},
		methods: {
			ajax() {
				this.getAjax(this).then(msg => {
					console.log(this.data);
				});
			}
		}
	}
</script>
<style lang="scss">
@import "./index.scss";
</style>