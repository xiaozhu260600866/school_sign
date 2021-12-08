<template>
  <div>
    <!-- 如果不是商城+登陆版本start -->
    <dx-table6 :data="data" :global-data="userRecord" :operate-width="100" />
  </div>
</template>

<script type="text/javascript">
	import userRecord from './layouts/user_record'
	export default {
		components: {
			'dx-table6': resolve => require(['xiaozhu/vue/components/admin/dx_table.vue'], resolve)
		},
		data() {
			return {
				formAction: '/admin/user/amount-record?type=0',
				data: this.formatData(this),
				siteName: this.getSiteName(),
				userRecord: userRecord
			}
		},
		mounted() {
			this.ajax()
		},
		methods: {
			ajax() {
				this.getAjax(this, {}, msg => {

				})
			}

		}

	}
</script>
