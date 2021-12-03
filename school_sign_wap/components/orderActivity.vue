<template>
	<view>
		<view class="buy_activity flex p15 bg-f" v-for="item in data">
			<view class="cover pr15">
				<image class="img bdr4" :src="item.cover"></image>
			</view>
			<view class="info flex1 flex-d-column flex-between">
				<view class="name wrap3">{{item.name}}</view>
				<view class="num flex-between lh-1 flex-end Arial fs-14">
					<view class="price">￥<text class="fs-17">{{item.amount}}</text></view>
					<view class="num fc-6">x {{item.num}}</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script type="text/javascript">
export default {
	props: ['data'],
	data() {
		return {
			
		}
	},
	methods: {
	}
}

</script>
<style lang="scss">
.buy_activity{
	.cover{
		.img{width: 240rpx;height: 240rpx;display: flex;}
	}
}
</style>