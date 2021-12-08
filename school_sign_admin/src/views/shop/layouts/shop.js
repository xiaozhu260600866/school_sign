export default {
	data: {
		'listsAction': '',
		'pageSize': 15,
		'canCreate': 1,
		'canEdit': 1,
		'tableName': 'shops',
		'createAction': '/admin/shop/create',
		'editAction': '/admin/shop/edit',
		classAction: '/admin/shop/',
		'checkAll': true,
		'searchFields': [{
			'name': '',
			'prop': 'address',
			'type': 'text',
			'label': '地点名称'
		}],
		'tableFields': [
			{ 'prop': 'sort', 'minWidth': '', 'width': '70', 'append_table_': 0, 'label': '排序' },
			{ 'prop': 'company_name', 'minWidth': '100', 'width': '', 'append_table_': 0, 'label': '项目名称' },
			{ 'prop': 'address', 'minWidth': '100', 'width': '', 'append_table_': 0, 'label': '地点名称' },
			{ 'prop': 'fclassName', 'minWidth': '100', 'width': '', 'append_table_': 0, 'label': '类别名称' },
			// {'prop': 'amountNum','minWidth': '100','width':'','append_table_': 0,'label': '总余额数' },
			// {'prop': 'user_name','minWidth': '100','width': '','append_table_': 0,'label': '名称' },
			// {'prop': 'phone','minWidth': '100','width':'','append_table_': 0,'label': '电话' },
			{ 'prop': 'scan', 'minWidth': '', 'width': '90', 'align': 'center', 'type': 'editField', 'url': '/admin/shop/editField', 'append_table_': 0, 'label': '扫码' },
			{ 'prop': 'created_at', 'minWidth': '', 'width': '160', 'append_table_': 0, 'label': '创建时间' }
	   ],
		'formFields': [
		  { prop: 'company_name', datatype: 'require', type: 'text', label: '项目名称' },
		  { prop: 'address', datatype: 'require', type: 'location', label: '地点名称' },
		  { prop: 'fclass', datatype: 'require', type: 'manyselect', label: '类别', datakey: 'fclass' },
		  { prop: 'name', datatype: 'require', type: 'text', label: '联系人' },

		  { prop: 'phone', datatype: 'require', type: 'text', label: '联系人电话' },
		  { prop: 'sort', datatype: 'require|integer', type: 'text', label: '排序' }
		]
	}
}
