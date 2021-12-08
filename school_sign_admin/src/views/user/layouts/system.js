export default {
    data: {
        listsAction: '',
        pageSize: '15',
        canCreate: false,
        canEdit: false,
		checkAll: false,
        tableName: 'system_logs',
		exportUrl: '/admin/systemLog/lists?excel=1',
		createLabel: '新建会员',
        tableOperateButton: false,
        tableFields: [
            { prop: 'order_no', label: '订单号', width: '160' },
            { prop: 'amount', label: '转帐金额', minWidth: '100' },
            { prop: 'name', label: '转帐人', minWidth: '100' },
            { prop: 'to_shop_name', label: '转帐门店', minWidth: '120' },
			  { prop: 'content', label: '内容', width: '200' },
            { prop: 'created_at', label: '时间', width: '160' }
        ],
        searchFields: [
			{ prop: 'order_no', label: '订单号' }
        ],
        formFields: [

        ]
    }
}
