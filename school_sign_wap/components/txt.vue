<template>
	<view>
		引入组件
	</view>
</template>
<script type="text/javascript">
	export default {
		props: [],
		data() {
			return {
				
			}
		},
		methods: {
		}
	}
</script>
<style type="text/css" scoped="" lang="scss">
.page-head{position: fixed;top: 0;left: 0;width: 100%;z-index: 10;}
.page-head .head-icon{width: 86px;height: 32px;border: 1rpx #e5e5e5 solid;border-radius: 16px;}
.page-head .head-icon .item{width: 42px;line-height: 30px;text-align: center;position: relative;}
.page-head .head-icon .item:first-child:after{content: "";display: block;position: absolute;right: 0;top: 50%;margin-top: -8px;height: 16px;width: 1rpx;background: #e1e1e1;}
.page-head .head-name{text-align: center;padding-right: 106px;}
</style>
