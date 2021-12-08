<template>
  <div>
    <dx-table :data="data" :global-data="globalData" :operate-width="300" @submitBeforeCallBack="submitBeforeCallBack">
      <div slot="operate" slot-scope="scope">
        <el-button @click="route(scope.row)">分配路线</el-button>
      </div>
    </dx-table>
    <el-dialog title="分配路线" :visible.sync="dialogFormVisible" width="800px" top="50px" :before-close="handleClose">
      <div>
        <div><el-checkbox v-for="v in data.shopClass" v-model="v.checked">{{ v.name }}</el-checkbox></div>
        <div class="flex-right mt20">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script type="text/javascript">
    import globalData from './layouts/staff.js'
    export default {
        components: {
            'dx-table': resolve => require(['xiaozhu/elementAdmin/components/dx_table.vue'], resolve)
            // "dx-create-edit": resolve => require(["xiaozhu/elementAdmin/components/create_edit.vue"], resolve),
        },
        data() {
            return {
                formAction: '/admin/staff/lists',
                data: this.formatData(this),
                siteName: this.getSiteName(),
                globalData: globalData,
				staff: {},
				dialogFormVisible: false
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
			submit() {
				const checkLists = []
				this.data.shopClass.forEach(v => {
					if (v.checked) {
						checkLists.push(v)
					}
				})
				if (checkLists.length == 0) {
					return this.getError('请勾选所需项')
				}
				this.postAjax('/admin/staff/route', { checkLists: checkLists, user_id: this.staff.id }).then(msg => {
					if (msg.data.status == 2) {
						this.dialogFormVisible = false
						this.ajax()
					}
				})
				console.log(this.data.shopClass)
			},
			route(row) {
				this.staff = row
				this.dialogFormVisible = true
				this.data.shopClass.forEach(v => {
					if (row.route_ids) {
						 if (this.in_array(v.id, row.route_ids.split(','))) {
							 this.$set(v, 'checked', true)
						 }
					} else {
						this.$set(v, 'checked', false)
					}
				})
			},
			handleClose() {
				this.dialogFormVisible = false
			},
            cancel(row) {
                delete row.api_token
              this.getConfirm('是否取消绑定', () => {
                  this.postAjax('/admin/staff/cancelWechat', row).then(msg => {
                       if (msg.data.status == 2) {
                          this.ajax()
                       }
                  })
              })
            },
            submitBeforeCallBack(ruleform) {
               delete ruleform.api_token
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
