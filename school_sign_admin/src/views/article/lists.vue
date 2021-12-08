<template>
  <div>
    <dx-table
      :data="data"
      :global-data="globalData"
      :operate-width="250"
      @submitBeforeCallBack="submitBeforeCallBack"
    >
      <div slot="append_class_table_id" slot-scope="scope">
        {{ scope.row.id }}
      </div>
      <div slot="operate" slot-scope="scope">
        <div class="flex">
          <el-button type="primary" size="mini" @click.native="dialogFormVisible=true;id=scope.row.id">生成二维码
          </el-button>
          <el-button
            v-if="checkPermission(['article.edit'])"
            type="primary"
            size="mini"
            @click="goto('/article/edit?id='+scope.row.id)"
          >编辑</el-button>
        </div>
      </div>
      <div slot="headerR">
        <el-button v-if="checkPermission(['article.create'])" type="primary" @click="goto('/article/create')">新建
        </el-button>
      </div>
    </dx-table>
    <qrcode ref="qrcode" />

    <el-dialog title="查看二维码" :visible.sync="dialogFormVisible" width="800px" :top="0" :before-close="handleClose">
      <img :src="siteName + '/shop/dis/bing-wechat-qrcode?page=pages/news/show/main&id='+id">
    </el-dialog>

    <!-- <dx-create-edit  ref="createEdit" :fields="globalData.data.formFields" :data="data" noDialog="true" createEditLabel="120px">
         	  <div slot="content" slot-scope="scope">
         		   <slot :name="scope.field" :row="scope.row"/>
         	  </div>
         </dx-create-edit> -->
  </div>
</template>
<script type="text/javascript">
	import globalData from './layouts/article.js'
	export default {
		components: {
			'dx-table': resolve => require(['xiaozhu/elementAdmin/components/dx_table.vue'], resolve)
			// "dx-create-edit": resolve => require(["xiaozhu/elementAdmin/components/create_edit.vue"], resolve),
		},
		data() {
			return {
				formAction: '/admin/article/lists',
				data: this.formatData(this),
				siteName: this.getSiteName(),
				globalData: globalData,
				id: '',
				dialogFormVisible: false
			}
		},
		watch: {
			'$route': 'ajax'
		},
		mounted() {
			setTimeout(() => {
				this.ajax()
			}, 200)
		},
		methods: {
			handleClose() {
				this.dialogFormVisible = false
			},
			submitBeforeCallBack(ruleform) {
				this.$set(ruleform, 'fclass', this.data.query.fclass)
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
