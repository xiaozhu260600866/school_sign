<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view class="pb30" v-if="data.show">
			<!-- <view class="order-status pt20 pb80 text-center main-bg">
				<view class="fs-20 fc-white">{{ orderData.status }}</view>
				<view class="fs-14 mt5 fc-e">核销时请打开此页面给我们工作人员进行核销</view>
			</view> -->
			<view class="coupon-item">
				<orderActivity :data="[data.detail.getActivity]"></orderActivity>
				<dx-list-cell nameColor="#777" name="姓名">
					<view slot="right">{{ data.detail.name }}</view>
				</dx-list-cell>
				<dx-list-cell nameColor="#777" name="身份证">
					<view slot="right">{{ data.detail.idCard }}</view>
				</dx-list-cell>
				<dx-list-cell nameColor="#777" name="联系电话">
					<view slot="right">{{ data.detail.phone }}</view>
				</dx-list-cell>
				<dx-list-cell nameColor="#777" name="所在学校/机构">
					<view slot="right">{{ data.detail.organization }}</view>
				</dx-list-cell>
				<dx-list-cell nameColor="#777" name="活动日期">
					<view slot="right">{{ data.detail.time }}</view>
				</dx-list-cell>
				<dx-list-cell nameColor="#777" name="支付时间">
					<view slot="right">{{ data.detail.payed_at }}</view>
				</dx-list-cell>
			</view>
		</view>
	</view>
</template>

<script>
	import orderActivity from '@/components/orderActivity'
	import dxListCell from "doxinui/components/list-cell/list-cell"
	export default {
		components:{orderActivity,dxListCell},
		data() {
			return {
				formAction: '/activity/order/detail',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				orderData:{
					status:'待核销',
					name:'梅子',
					cardID:'4407822013060325633',
					phone:'13380951183',
					organization:'紫茶小学',
					time:'2022-02-01',
					payed_at:'2021-12-03 15:22:22',
					writeoff_at: ''
				},
				detail:{
					activity:[{
						cover:'/static/pic.jpg',
						name:'伊艺舞蹈艺术五周年庆，迎双11重磅福利来袭！！三人成团支付11.11元抢购（旧生领取100元代金劵,新生领取6节中国舞课程）',
						amount:11.11,
						num: 1,
					}]
				},
			}
		},
		
		onLoad(options) {
			this.ajax();
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
@import "./index.scss";
</style>