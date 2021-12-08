export default {
	data: {
		'listsAction': '',
		'pageSize': 15,
		'canCreate': 1,
		'canEdit': 1,
		'tableName': 'order_repairs',
		'createAction': '/admin/poster/create',
		'editAction': '/admin/poster/edit',
		'auditAction': '/admin/repair/changeStatus',
		'checkAll': true,
		'searchFields': [
			{
			'name': '',
			'prop': 'name',
			'type': 'text',
			'label': '项目名称'
		},
		{
			'name': '',
			'prop': 'user_name',
			'type': 'text',
			'label': '申请人'
		}

		],
		'tarbars': {
			'prop': 'status',
			'data': [
				{ 'name': '', 'value': '0', 'count': 0, 'label': '待审核' },
				{ 'name': '', 'value': '1', 'count': 0, 'label': '已审核' }
			]
		},
		'tableFields': [
			{ 'name': '', 'prop': 'id', 'minWidth': '', 'width': '60', 'align': 'center', 'append_table_': 0, 'label': '编号' },
			{ 'name': '', 'prop': 'shop.company_name', 'minWidth': '150', 'width': '', 'append_table_': 0, 'label': '项目名称' },
			{ 'name': '', 'prop': 'date', 'minWidth': '', 'width': '100', 'append_table_': 0, 'label': '申请日期' },
			{ 'name': '', 'prop': 'order.getUser.userInfo.name', 'minWidth': '', 'width': '100', 'append_table_': 0, 'label': '员工名称' },
			{ 'name': '', 'prop': 'fault', 'minWidth': '100', 'width': '', 'append_table_': 0, 'label': '维修情况说明' },
			{ 'name': '', 'prop': 'updated_at', 'minWidth': '', 'width': '170', 'append_table_': 0, 'label': '审核日期' }
		],
		'formFields': [
			{ 'name': '', 'prop': 'name', 'datatype': 'require', 'type': 'text', 'append_form_': 0, 'label': '名称' },
			{ 'name': '', 'prop': 'url', 'minWidth': '180', 'datatype': 'require', 'type': 'text', 'append_form_': 0, 'label': 'url地址' },
			{ 'name': '', 'prop': 'sort', 'datatype': 'require|integer', 'type': 'text', 'append_form_': 0, 'label': '排序' },
			{ 'name': '', 'prop': 'pic', 'datatype': 'array', 'type': 'upload', 'append_form_': 0, 'label': '图片', uploadMessage: '最佳尺寸：800*357', 'allowUpLoadNum': '1', 'upurl': 'poster' }
		]
	}
}
