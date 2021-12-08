<template>
	<view class="pin-lists">
		<view class="pin-item block-sec" v-for="item in data">
			<myform :ruleform="ruleform" :vaildate="vaildate" :append="true" :data="item" @callBack="goto('/pages/activity/show?id='+item.id,1)">
				<view slot="content">
					<view class="img">
						<image class="image" :src="item.firstCover" mode="aspectFill"></image>
						<view class="sold" v-if="item.orderNum>0">{{ item.orderNum }}人已报名</view>
					</view>
					<view class="info p15">
						<view class="title wrap2 fs-16 lh-1_6">{{ item.title }}</view>
						<view class="flex-end mt10">
							<view class="flex1 flex-baseline Arial lh-1 fs-14">
								<text class="price">￥<text class="fs-24">{{item.price}}</text></text>
								<text class="original">￥{{ item.new_price }}</text>
							</view>
							<!-- <view class="todetail">立即报名</view> -->
							<dx-button type="primary" size="medium" round >立即报名</dx-button>
						</view>
					</view>
				</view>
			</myform>
		</view>
	</view>
</template>
<script type="text/javascript">
	export default {
		props: ['data'],
		data() {
			return {
				ruleform:{},
				vaildate:{},
			}
		},
		methods: {
		}
	}
</script>
<style lang="scss" scoped>
.pin-lists{
	.pin-item{
		position: relative;overflow: hidden;
		.img{
			position: relative;
			.sold{position: absolute;bottom: 20rpx;right: 20rpx;background: rgba($color: #000000, $alpha: 0.5);height: 50rpx;line-height: 50rpx;border-radius: 25rpx;color: #fff;font-size: 28rpx;padding: 0 15rpx;}
			.image{width: 100%;display: flex;height: 280rpx;}
		}
		.limit{padding: 0 20rpx;font-size: 24rpx;color: #999;}
		.title{text-align: justify;}
		.original{color: #999;text-decoration: line-through;padding-left: 10rpx;}
		.todetail{background: $color-primary;height: 80rpx;line-height: 80rpx;border-radius: 40rpx;padding: 0 40rpx;color: #fff;}
	}
}
</style>
