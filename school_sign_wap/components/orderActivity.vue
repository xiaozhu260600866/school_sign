<template>
	<view>
		<view class="buy_activity flex p15 bg-f" v-for="item in data">
			<view class="cover pr15">
				<image class="img bdr4" :src="item.firstCover" mode="aspectFill"></image>
			</view>
			<view class="info flex1 flex-d-column flex-between">
				<view class="name wrap3">{{item.title}}</view>
				<view class="num flex-between lh-1 flex-end Arial fs-14">
					<view class="price">￥<text class="fs-20">{{item.price}}</text></view>
					<!-- <view class="num fc-6 fs-16">x1</view> -->
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