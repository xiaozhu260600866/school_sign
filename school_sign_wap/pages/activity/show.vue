<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view class="pb60" v-if="data.show">
			<view class="banner">
				<myswiper :lists="data.cover"  purl="activity"></myswiper>
			</view>
			<view class="activity_info p15 bg-f">
				<view class="name fs-18">{{data.detail.title}}</view>
				<view class="price_group flex-between flex-end lh-1 fs-14 mt20">
					<view class="left flex-baseline">
						<view class="price">￥<text class="fs-30">{{data.detail.price}}</text></view>
						<view class="cprice pl10">￥{{data.detail.new_price}}</view>
					</view>
					<view class="right fs-16 fc-6"><text class="Arial">{{data.detail.orderNum}}</text>人已报名</view>
				</view>
			</view>
			<view class="activity_show mt10 bg-f">
				<dx-title name="活动详情" borderColor="#F60" :borderWidth="60" :borderR="4" nameColor="#333" :nameSize="17" nameBold="bold" Bline></dx-title>
				<view class="content">
					<u-parse :content="data.detail.content" v-if="data.detail.content" />
				</view>
			</view>
			<view id="show_footer">
				<view class="left plr8">
					<button class="btn-item" hover-class="none" @click="goto('/pages/index/index',2)">
						<view class="icon dxi-icon dxi-icon-home4"></view>
						<view class="txt">首页</view>
					</button>
					<button class="btn-item" hover-class="none" open-type="share">
						<view class="icon dxi-icon dxi-icon-share"></view>
						<view class="txt">分享</view>
					</button>
				</view>
				<view class="right flex1 w-b100 pr5" v-if="data.detail.maxNum > data.detail.orderNum  ">
					<view class="r-nav">
						<myform :ruleform="ruleform" :vaildate="vaildate" @callBack="toBuy" myclass="r-item r-item-red" title="立即下单"></myform>
					</view>
				</view>
				<view class="right flex1 w-b100 pr5" v-else>
					<view class="r-nav">
						<view class="r-item r-item-default">报名人数已满</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import dxTitle from "doxinui/components/title/title"
	import uParse from '@/components/gaoyia-parse/parse.vue'
	export default {
		components:{dxTitle,uParse},
		data() {
			return {
				formAction: '/activity/show',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				detail:{
					name:'伊艺舞蹈艺术五周年庆，迎双11重磅福利来袭！！三人成团支付11.11元抢购（旧生领取100元代金劵,新生领取6节中国舞课程）',
					sold: 276,
					price:11.11,
					new_price: 300,
					content:"<p><img src='https://redu.doxinsoft.com/ueditor/php/upload/image/20211025/1635156753860823.jpg' title='1635156753860823.jpg' alt='版21.jpg'/></p>"
				},
				ruleform:{},
				vaildate:{},
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
			return this.shareSource(this, this.data.detail.title);
		},
		onLoad(options) {
			this.ajax();
		},
		methods: {
			toBuy() {
				return this.goto('/pages/order/buy?id='+this.data.detail.id,1);
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