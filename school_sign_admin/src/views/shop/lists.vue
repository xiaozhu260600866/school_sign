<template>
  <div>

    <dx-table :data="data" :global-data="globalData" :operate-width="280" @submitBeforeCallBack="submitBeforeCallBack">
      <div slot="operate" slot-scope="scope">
        <el-button
          v-if="scope.row.scan"
          type="primary"
          size="mini"
          @click.native="dialogFormVisible=true;id=scope.row.id"
        >生成二维码</el-button>
      </div>

    </dx-table>
    <el-dialog title="查看商家二维码" :visible.sync="dialogFormVisible" width="800px" :top="0" :before-close="handleClose">
      <img :src="siteName + '/shop/dis/bing-wechat-qrcode?page=pages/patrol/created_edit/index&shop_id='+id">
    </el-dialog>
  </div>
</template>
<script type="text/javascript">
    import globalData from './layouts/shop.js'
    export default {
        components: {
            'dx-table': resolve => require(['xiaozhu/elementAdmin/components/dx_table.vue'], resolve)
            // "dx-create-edit": resolve => require(["xiaozhu/elementAdmin/components/create_edit.vue"], resolve),
        },
        data() {
            return {
              drawer: false,
               direction: 'ttb',
                formAction: '/admin/shop/lists',
                data: this.formatData(this),
				id: '',
                siteName: this.getSiteName(),
                globalData: globalData,
				dialogFormVisible: false
            }
        },

        mounted() {
            this.ajax()
        },
        methods: {
			handleClose() {
				this.dialogFormVisible = false
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
