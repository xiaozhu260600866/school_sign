<template>
  <div>
    <dx-table :data="data" :global-data="globalData" :operate-width="100" @submitBeforeCallBack="submitBeforeCallBack">
      <div slot="tableTop">
        <div class="pl15 mb10 fs-18">会员总数：<span class="Arial fs-20">{{ data.memberNum }}人</span></div>
      </div>
      <div slot="operate" slot-scope="scope">
        <div>
          <el-dropdown-item size="mini" @click.native="rechargeRecharge(scope.row)">充值记录</el-dropdown-item>
        </div>
        <div>
          <el-dropdown-item size="mini" @click.native="transfer(scope.row)">从其他门店转配余额</el-dropdown-item>
        </div>
        <div>
          <el-dropdown-item size="mini" @click.native="$refs.amount.ajax(scope.row)">充值</el-dropdown-item>
        </div>
      </div>
      <div slot="append_table_headerPic" slot-scope="scope">
        <div>
          <img :src="scope.row.headerPic" alt="" width="40px" height="40px" style="display: flex;border-radius: 6px;">
        </div>
      </div>
      <div slot="append_table_amount" slot-scope="scope">
        <div v-for="shopAmountRecord in scope.row.amountRecord">
          <div>{{ shopAmountRecord.name }} 余额：{{ shopAmountRecord.amount }}</div>
        </div>
        <div>总余额：{{ scope.row.amount }}</div>
      </div>
    </dx-table>
    <qrcode ref="qrcode" />
    <my-rechargeAmount ref="amount" top="10%" />
    <my-transfer ref="transfer" />
    <searchAll ref="searchAll" @callBack="searchCallBack" />
  </div>
</template>
<script type="text/javascript">
	import searchAll from 'xiaozhu/elementAdmin/components/searchAll'
	import globalData from './layouts/users.js'
	export default {
		components: {
			'dx-table': resolve => require(['xiaozhu/elementAdmin/components/dx_table.vue'], resolve),
			'my-rechargeAmount': resolve => require(['./layouts/rechargeAmount.vue'], resolve),
			'my-transfer': resolve => require(['./layouts/transfer.vue'], resolve),
			searchAll

			// "dx-create-edit": resolve => require(["xiaozhu/elementAdmin/components/create_edit.vue"], resolve),
		},
		data() {
			return {
				formAction: '/admin/user/lists?role=2',
				data: this.formatData(this),
				siteName: this.getSiteName(),
				globalData: globalData
			}
		},
		watch: {
			'$route': 'ajax'
		},
		mounted() {
			this.ajax()
		},
		methods: {
			transfer(item) {
				this.$refs.transfer.ajax(item, this.data.shops, this.data.user.shop_id)
			},
			rechargeRecharge(item) {
				const row = {
					url: '/admin/user/amount-record?user_id=' + item.id,
					searchClass: false,
					showInfo: true,
					searchFields: [],
					'tableFields': [
						{
								'name': '',
								'prop': 'getUser.id',
								'minWidth': '100',
								'append_table_': 0,
								'label': '会员卡号'
							},
						{
							'name': '',
							'prop': 'getUser.userInfo.name',
							'minWidth': '100',
							'append_table_': 0,
							'label': '会员名称'
						},
						{
							'name': '',
							'prop': 'getUser.userInfo.phone',
							'minWidth': '',
							'width': '150',
							'append_table_': 0,
							'label': '会员电话'
						},
						{
							'name': '',
							'prop': 'amount',
							'minWidth': '',
							'width': '100',
							'append_table_': 0,
							'label': '金额'
						},
						{
							'name': '',
							'prop': 'source',
							'minWidth': '',
							'width': '100',
							'append_table_': 0,
							'label': '备注'
						},

						{
							'name': '',
							'prop': 'created_at',
							'minWidth': '',
							'width': '100',
							'append_table_': 0,
							'label': '充值时间'
						}
					]
				}
				 this.$refs.searchAll.ajax(row)
			},
			submitBeforeCallBack(ruleform) {
				delete ruleform.api_token
				console.log(ruleform)
				this.$set(ruleform, 'role', 7)
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
