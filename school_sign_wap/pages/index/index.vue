<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view v-if="data.show">
			<activity-lists :data="data.lists.data"></activity-lists>
		</view>
	</view>
</template>

<script>
	import activityLists from '@/components/activityLists'
	export default {
		components: {activityLists},
		data() {
			return {
				formAction: '/activity/lists',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				ruleform:{},
				vaildate:{},
				activityLists:[{
					cover:'/static/mine-bg.png',
					name:'伊艺舞蹈艺术五周年庆，迎双11重磅福利来袭！！三人成团支付11.11元抢购（旧生领取100元代金劵,新生领取6节中国舞课程）',
					sold: 276,
					price:11.11,
					new_price: 300
				}]
			}
		},
		
		onLoad(options) {
			this.ajax();
		},
		methods: {
			onShow(){
				this.onShow(this);
			},
			onPullDownRefresh() {
				this.data.nextPage = 1;
				this.ajax();
			},
			checkAuth(v){
				return this.goto(v.url,v.type);
			},
			onShareAppMessage() {
				this.shareSource(this, '活动');
			},
			ajax() {
				this.getAjax(this).then(msg => {
					
				});
			}
		}
	}
</script>
<style scoped="" lang="scss">
@import "./index.scss";
</style>