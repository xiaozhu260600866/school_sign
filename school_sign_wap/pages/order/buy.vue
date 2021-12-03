<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view class="pb70">
			<view class="buy_activity flex p15 bg-f">
				<view class="cover pr15">
					<image class="img bdr4" :src="detail.activity.cover"></image>
				</view>
				<view class="info flex1 flex-d-column flex-between">
					<view class="name wrap3">{{detail.activity.name}}</view>
					<view class="num flex-between lh-1 flex-end Arial fs-14">
						<view class="price">￥<text class="fs-17">{{detail.activity.price}}</text></view>
						<view class="num fc-6">x {{detail.activity.num}}</view>
					</view>
				</view>
			</view>
			<view class="buy_wirte block-sec">
				<weui-input v-model="ruleform.name" label="姓名" type="text" name="name" datatype="require"></weui-input>
				<weui-input v-model="ruleform.cardID" label="身份证号码" type="text" name="cardID"></weui-input>
				<weui-input v-model="ruleform.phone" label="联系电话" type="number" name="phone"></weui-input>
				<weui-input v-model="ruleform.organization" label="所在学校/机构" type="number" name="organization"></weui-input>
				<weui-input v-model="ruleform.time" label="活动日期" name="time" changeField="value" type="select" dataKey="timeArr" left></weui-input>
			</view>
			<view id="calculation" class="block-sec">
				<view class="list-group">
					<p class="txt">订单金额</p>
					<p class="fs-16 price">￥{{ productData.price }}</p>
				</view>
				<view class="list-group">
					<p class="txt">支付方式</p>
					<p class="fs-16">微信支付</p>
				</view>
			</view>
			<view id="footer">
				<view class="f_left price fs-18 plr10">￥
					<span class="fs-24">{{ productData.price }}</span>
				</view>
				<view class="f_right">
					<!-- <view class="submit" @click="orderSubmitRemind">确认支付</view> -->
					<myform :ruleform="ruleform" :vaildate="vaildate" @callBack="submit" myclass="nav" title="确认支付"></myform>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formAction: '/shop/user/bing',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				ruleform:{},
				detail:{
					activity:{
						cover:'/static/pic.jpg',
						name:'伊艺舞蹈艺术五周年庆，迎双11重磅福利来袭！！三人成团支付11.11元抢购（旧生领取100元代金劵,新生领取6节中国舞课程）',
						price:11.11,
						num: 1,
					}
				},
				productData:{price: 11.11},
				timeArr: [
					{value: 1,label: '2022-01-01'},
					{value: 2,label: '2022-02-01'},
					{value: 3,label: '2022-03-01'},
				],
			}
		},
		
		onLoad(options) {
			//this.ajax();
		},
		methods: {
			submit(){
				return this.goto('/pages/order/payed',1);
			},
			ajax() {
				this.getAjax(this).then(msg => {
					console.log(this.data);
				});
			}
		}
	}
</script>
<style scoped="" lang="scss">
@import "./index.scss";
</style>