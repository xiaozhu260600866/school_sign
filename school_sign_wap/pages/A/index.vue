<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view>
			123内容
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
			return this.shareSource(this, '');
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
@import "./index.scss";
</style>