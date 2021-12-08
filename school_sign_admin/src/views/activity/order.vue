<template>
  <div>
    <dx-table :data="data" :global-data="globalData" :operate-width="180" />
  </div>
</template>
<script type="text/javascript">
    import globalData from './layouts/activityOrder.js'
    export default {
        components: {
            'dx-table': resolve => require(['xiaozhu/elementAdmin/components/dx_table.vue'], resolve)
            // "dx-create-edit": resolve => require(["xiaozhu/elementAdmin/components/create_edit.vue"], resolve),
        },
        data() {
            return {
                formAction: '/admin/activity/order-lists',
                data: this.formatData(this),
                siteName: this.getSiteName(),
                globalData: globalData,
                arr: []
            }
        },
        watch: {
            '$route': 'ajax'
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
