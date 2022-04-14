<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view class="pb70" v-if="data.show">
			<view class="buy_activity flex p15 bg-f">
				<view class="cover pr15">
					<image class="img bdr4" :src="data.detail.firstCover" mode="aspectFill"></image>
				</view>
				<view class="info flex1 flex-d-column flex-between">
					<view class="name wrap3">{{data.detail.title}}</view>
					<view class="num flex-between lh-1 flex-end Arial fs-14">
						<view class="price">￥<text class="fs-20">{{data.detail.price}}</text></view>
						<!-- <view class="num fc-6">x 1</view> -->
					</view>
				</view>
			</view>
			<view class="buy_wirte block-sec">
				<weui-input v-model="ruleform.name" label="孩子姓名" type="text" name="name" datatype="require"></weui-input>
				<weui-input v-model="ruleform.age" label="孩子年龄" type="number" name="age" datatype="require"></weui-input>
				<weui-input v-model="ruleform.organization" label="孩子所属学校" type="text" name="organization"></weui-input>
				<weui-input v-model="ruleform.parents" label="家长姓名" type="text" name="parents" datatype="require"></weui-input>
				<weui-input v-model="ruleform.phone" label="家长联系电话" type="number" name="phone" datatype="require"></weui-input>
				<weui-input v-model="ruleform.time" label="活动日期" name="time" changeField="value" datatype="require" type="select" dataKey="timeArr"
				 left></weui-input>
				<!-- <weui-input v-model="ruleform.idCard" label="身份证号码" type="text" name="idCard" datatype="require"></weui-input>
				 -->
			</view>
			
			<view id="calculation" class="block-sec">
				<view class="list-group">
					<p class="txt">订单金额</p>
					<p class="fs-16 price">￥{{ data.detail.price }}</p>
				</view>
				<view class="list-group">
					<p class="txt">支付方式</p>
					<p class="fs-16">微信支付</p>
				</view>
			</view>
			<view id="footer">
				<view class="f_left price fs-18 plr10">￥
					<span class="fs-24">{{ data.detail.price }}</span>
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
				formAction: '/activity/show',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				ruleform:{},
				vaildate:{},
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
				
				],
			}
		},
		
		onLoad(options) {
			this.ajax();
		},
		methods: {
			submit(){
				this.ruleform.activity_id = this.data.detail.id;
				this.ruleform.amount = this.data.detail.price;
				this.postAjax("/activity/order",this.ruleform).then(msg2=>{
					  if(msg2.data.status == 2){
						  console.log("a")
							this.payUniapp(msg2.data.config, msg => {
								return this.goto("/pages/order/payed?order_no="+msg2.data.order_no);
							}, msg => {
								return this.goto("/pages/order/payed?order_no="+msg2.data.order_no);
							});
					  }
				});
				
			},
			ajax() {
				this.timeArr = [];
				this.getAjax(this).then(msg => {
				
					msg.detail.dates1.split(",").forEach(v=>{
						this.timeArr.push({label:v,value:v})
					})
				});
			}
		}
	}
</script>
<style scoped="" lang="scss">
@import "./index.scss";
</style>