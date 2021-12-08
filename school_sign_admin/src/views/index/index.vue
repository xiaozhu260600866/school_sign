<template>
  <div class="box">
    <h1>欢迎光临后台管理系统</h1>
  </div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				formAction: '/admin/user/boss-count',
				data: this.formatData(this),
				siteName: this.getSiteName()
			}
		},
		watch: {
			'$route': 'ajax'
		},
		mounted() {
			// this.ajax()
		},
		methods: {
			ajax() {
				this.getAjax(this, {}, msg => {
				  // this.$nextTick(()=>{
				  //   this.$refs.createEdit.ajax('',this.data,this.globalData.data.formFields);
				  // })
				})
			}
		}
	}
</script>

<style>
.box{height: 100%;display: flex;justify-content: center;margin-top: 310px;}
.box h1{font-weight: normal;}

</style>
