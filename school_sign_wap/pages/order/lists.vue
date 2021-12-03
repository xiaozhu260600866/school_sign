<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view>
			<dx-tabs :tabs="[
				{name: '全部', value:12},
				{name: '待核销', value:1},
				{name: '已核销', value:9}
			]" @change="change" v-model="listStatus" :isFixed="true" bottom="50%" bgColor="#f60" color="#fff" selectedColor="#f60" :sliderWidth="146" :sliderHeight="62" sliderBgColor="#fff" :unlined="true" :height="92" :size="30" :selectedSize="30"></dx-tabs>
			<view class="mt65">
				<view class="order_lists">
					<view class="order_item block-sec" v-for="parent in orderLists">
						<view class="order_t ">
							<view class="left">
								<view class="p">订单编号：<text class="Arial">{{parent.order_no}}</text></view>
								<view class="p">下单日期：<text class="Arial">{{parent.created_at}}</text></view>
							</view>
							<view class="right main-color">{{parent.status}}</view>
						</view>
						<orderLists :data="parent.products"></orderLists>
						<view class="order_count">共<text class="Arial plr3">{{parent.num}}</text>件商品
							合计：￥<text class="Arial fs-16 fc-red">{{ parent.amount}}</text>
						</view>
						<view class="btn-group">
							<!-- 待支付 取消订单&去支付-->
							<view class="btn-item">
								<view class="btn-nav obtn" @click="goto('/pages/order/detail',1)">订单详情</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import dxTabs from "doxinui/components/tabs/tabs"
	import orderLists from '@/components/orderLists'
	export default {
		components:{dxTabs,orderLists},
		data() {
			return {
				formAction: '/shop/user/bing',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				orderLists:[{
					order_no:'2021032215332102',
					created_at:'2021-03-22 15:33:21',
					products:[{
						getProduct:{
							firstCover:'/static/mine-bg.png',
							name:'伊艺舞蹈艺术五周年庆，迎双11重磅福利来袭！！三人成团支付11.11元抢购（旧生领取100元代金劵,新生领取6节中国舞课程）',
						},
						amount:11.11,
						num:1,
					}],
					num: 3,
					amount: 239.00,
					status: '待核销',
				}]
			}
		},
		
		onLoad(options) {
			//this.ajax();
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
<style scoped="" lang="scss">
@import "./lists.scss";
</style>