<template>
  <div>
    <dx-table :data="data" :global-data="globalData" :operate-width="100" @submitBeforeCallBack="submitBeforeCallBack">

      <div slot="append_table_cover" slot-scope="scope">
        <a :href="siteName + '/upload/images/sign/'+scope.row.cover" target="_blank"><img v-if="scope.row.cover" :src="siteName + '/upload/images/sign/300_'+scope.row.cover" alt="" width="100"></a>
      </div>

    </dx-table>
  </div>
</template>
<script type="text/javascript">
    import globalData from './layouts/sign.js'
    export default {
        components: {
            'dx-table': resolve => require(['xiaozhu/elementAdmin/components/dx_table.vue'], resolve)
            // "dx-create-edit": resolve => require(["xiaozhu/elementAdmin/components/create_edit.vue"], resolve),
        },
        data() {
            return {
                formAction: '/admin/sign/lists',
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
