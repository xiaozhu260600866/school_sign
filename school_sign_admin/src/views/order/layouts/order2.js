export default {
	data: {
		'listsAction': '',
		'pageSize': 15,
		'canCreate': 1,
		'canEdit': 1,
		'tableName': 'orders',
		'createAction': '/admin/order/create',
		'editAction': '/admin/order/edit',
		'exportUrl': '/admin/order/lists?excel=1',
		'checkAll': true,
		// uploadData: {
		// 	url: '/admin/order/upload',
		// 	downloadUrl: 'https://dolphin.doxinsoft.com/dolphin.xlsx'
		// },
		// tarbars: {
		// 	prop: 'status',
		// 	data: [
		// 		{ label: '全部', value: 12 },
		// 		{ label: '正常', value: '正常' },
		// 		{ label: '异常', value: '异常' },
		// 		{ label: '故障', value: '故障' }
		// 	]
		// },
		'searchFields': [
			{ 'prop': 'name', 'type': 'text', 'label': '姓名' },
			{ 'prop': 'phone', 'type': 'text', 'label': '电话' },
			{ 'prop': 'cteated_at', 'type': 'betweenDate', 'label': '时间区间' }
		],
		'tableFields': [
			{ 'prop': 'sign_up_date', 'minWidth': '100', 'width': '', 'append_table_': 0, 'label': '报名日期' },
			{ 'prop': 'name', 'minWidth': '80', 'width': '', 'append_table_': 0, 'label': '姓名' },
			{ 'prop': 'sex', 'minWidth': '', 'width': '80', 'append_table_': 0, 'label': '性别' },
			{ 'prop': 'born_year', 'minWidth': '', 'width': '110', 'append_table_': 0, 'label': '出生日期' },
			{ 'prop': 'edu_school', 'minWidth': '80', 'width': '', 'append_table_': 0, 'label': '毕业学校' },
			{ 'prop': 'edu_major', 'minWidth': '', 'width': '100', 'append_table_': 0, 'label': '毕业专业' },
			{ 'prop': 'sign_school', 'minWidth': '', 'width': '100', 'append_table_': 0, 'label': '拟报读学校' },
			{ 'prop': 'sign_major', 'minWidth': '', 'width': '120', 'append_table_': 0, 'label': '拟报读专业' },
			{ 'prop': 'location_address', 'minWidth': '', 'width': '120', 'append_table_': 0, 'label': '联系地址' },
			{ 'prop': 'phone', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '联系电话' },
			{ 'prop': 'email', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': 'E-mail' },

			{ 'prop': 'speciality', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '专业类别' },
			{ 'prop': 'elementary_course', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '基础课' },
			{ 'prop': 'speciality_course', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '专业基础课' },
			{ 'prop': 'comprehensive_course', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '专业综合课' }
	   ],
		'formFields': [
		  { prop: 'name', datatype: 'require', type: 'text', label: '名称' },
		  { prop: 'phone', datatype: 'require', type: 'text', label: '电话号码' },
		  { prop: 'sort', datatype: 'require|integer', type: 'text', label: '排序' }
		]
	}
}
