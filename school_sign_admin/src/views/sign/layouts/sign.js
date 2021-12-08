export default {
	data: {
		'listsAction': '',
		'pageSize': 15,
		'canCreate': 0,
		'canEdit': 0,
		'tableName': 'signins',
		'createAction': '/admin/phone/create',
		'editAction': '/admin/phone/edit',
		'checkAll': true,
		'searchFields': [{
			'name': '',
			'prop': 'user_name',
			'type': 'text',
			'label': '名称'
		},
		{
			'name': '',
			'prop': 'type',
			'type': 'select',
			 data: [
				 { label: '上班', value: 0 },
				 { label: '下班', value: 1 }
			 ],
			'label': '签到类别'
		},
		{
			'name': '',
			'prop': 'user_phone',
			'type': 'text',
			'label': '电话'
		},
		{ 'prop': 'cteated_at', 'type': 'betweenDate', 'label': '时间区间' }],
		'tableFields': [
		  { 'prop': 'user_name', 'minWidth': '', 'width': '100', 'append_table_': 0, 'label': '员工名称' },
		  { 'prop': 'user_phone', 'minWidth': '', 'width': '120', 'append_table_': 0, 'label': '员工电话' },
		  { 'prop': 'address', 'minWidth': '100', 'width': '', 'append_table_': 0, 'label': '签到地址' },
		  { 'prop': 'cover', 'minWidth': '100', 'width': '', 'append_table_cover': 1, 'label': '图片' },
		  { 'prop': 'remark', 'minWidth': '100', 'width': '', 'append_table_': 0, 'label': '备注' },
		  { 'prop': 'getType', 'minWidth': '', 'width': '120', 'append_table_': 0, 'label': '签到类型' },
		  { 'prop': 'created_at', 'minWidth': '', 'width': '160', 'append_table_': 0, 'label': '时间' }
	   ],
		'formFields': [
		  { prop: 'name', datatype: 'require', type: 'text', label: '名称' },
		  { prop: 'phone', datatype: 'require', type: 'text', label: '电话号码' },
		  { prop: 'sort', datatype: 'require|integer', type: 'text', label: '排序' }
		]
	}
}
