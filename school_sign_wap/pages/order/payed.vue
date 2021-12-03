<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view>
			<block v-if="detail.payed_at">
				<dx-results txt="支付成功" @click="goto('/pages/index/index',2)"></dx-results>
			</block>
			<block v-if="!detail.payed_at">
				<dx-results txt="支付失败" :success="false"  @click="goto('/pages/index/index',2)"></dx-results>
			</block>
		</view>
	</view>
</template>

<script>
	import dxResults from "doxinui/components/results/results"
	export default {
		components:{dxResults},
		data() {
			return {
				formAction: '/shop/order/payed',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				detail:{
					payed_at: 1,
				},
				getSiteName: this.getSiteName(),
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
			//this.ajax();
		},
		methods: {
			
			ajax() {
				this.getAjax(this).then(msg => {
					this.detail = msg.detail;
				});
			}
		}
	}
</script>
