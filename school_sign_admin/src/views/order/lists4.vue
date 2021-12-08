<template>
  <div>
    <dx-table :data="data" :global-data="globalData" :operate-width="200" @submitBeforeCallBack="submitBeforeCallBack">
      <div slot="operate" slot-scope="scope">
        <el-button @click="exportWord(scope.row)">導出word</el-button>
      </div>

    </dx-table>
    <pay ref="pay" />
    <payAll ref="payAll" />
  </div>
</template>
<script type="text/javascript">
	import pay from './layouts/pay.vue'
	import payAll from './layouts/pay_all.vue'
	import globalData from './layouts/order4.js'
	export default {
		components: {
			'dx-table': resolve => require(['xiaozhu/elementAdmin/components/dx_table.vue'], resolve),
			pay,
			payAll
			// "dx-create-edit": resolve => require(["xiaozhu/elementAdmin/components/create_edit.vue"], resolve),
		},
		data() {
			return {
				formAction: '/admin/order/lists',
				data: this.formatData(this),
				siteName: this.getSiteName(),
				globalData: globalData
			}
		},
		watch: {
			'$route': 'ajax'
		},
		mounted() {
			setTimeout(() => {
				this.ajax()
			}, 100)
		},
		methods: {
			exportWord(row) {
				return window.open(this.siteName + '/ajax/exportWord?id=' + row.id)
			},
			payAll(row) {
				const user_id = []
				const ids = []
				let price = 0
				row.forEach(v => {
					if (!this.in_array(user_id, v.user_id)) {
						user_id.push(v.user_id)
					}
					price += parseFloat(v.price)
					ids.push(v.id)
				})
				if (user_id.length > 1) {
					return getError('是能够是一个会员进行结算')
				}
				this.$refs.payAll.ajax({
					price: price,
					user_id: user_id[0],
					name: row[0].name,
					phone: row[0].phone,
					ids: ids.join(',')
				})
			},
			in_array(array, value) {
				for (var i = 0; i < array.length; i++) {
					if (array[i] == value) {
						return true
					}
				}
				return false
			},
			finish(row) {
				this.$refs.pay.ajax(row)
			},
			submitBeforeCallBack(ruleform) {
				this.$set(ruleform, 'type', this.data.query.type)
			},
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
