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
			{ 'prop': 'name', 'minWidth': '100', 'width': '', 'append_table_': 0, 'label': '姓名' },
			{ 'prop': 'sex', 'minWidth': '80', 'width': '', 'append_table_': 0, 'label': '性别' },
			{ 'prop': 'politica', 'minWidth': '', 'width': '110', 'append_table_': 0, 'label': '政治面貌' },

			{ 'prop': 'card_type', 'minWidth': '80', 'width': '', 'append_table_': 0, 'label': '证件类型' },
			{ 'prop': 'cardno', 'minWidth': '', 'width': '100', 'append_table_': 0, 'label': '证件号码' },
			{ 'prop': 'born_year', 'minWidth': '', 'width': '100', 'append_table_': 0, 'label': '出生日期' },
			{ 'prop': 'nation', 'minWidth': '', 'width': '120', 'append_table_': 0, 'label': '民族' },
			{ 'prop': 'work_conditions', 'minWidth': '', 'width': '120', 'append_table_': 0, 'label': '在职情况' },
			{ 'prop': 'domicile', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '户口性质' },
			{ 'prop': 'native_place', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '籍贯' },
			{ 'prop': 'marriage', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '婚姻状况' },

			{ 'prop': 'area', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '户口所在地' },
			{ 'prop': 'phone', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '手机号码' },
			{ 'prop': 'mobile', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '固定电话' },
			{ 'prop': 'email', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': 'E-mail' },
			{ 'prop': 'location_address', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '通讯地址' },
			{ 'prop': 'post_no', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '邮政编码' },
			{ 'prop': 'work_unit', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '工作单位' },
			{ 'prop': 'position', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '职务' },
			{ 'prop': 'work_address', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '工作地址' },
			{ 'prop': 'exam_lever', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '报考层次' },
			{ 'prop': 'test_major', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '一志愿' },
			{ 'prop': 'test_major2', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '二志愿' },
			{ 'prop': 'time_span', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '学习形式' },
			{ 'prop': 'eduTv', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '是否电大毕业' },
			{ 'prop': 'edu_before', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '层次' },
			{ 'prop': 'edu_school', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '毕业学校' },
			{ 'prop': 'edu_month', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '毕业时间' },
			{ 'prop': 'edu_type', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '学习类型' },
			{ 'prop': 'edu_major', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '所学专业' },
			{ 'prop': 'edu_cardno', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '毕业证书编号' }
	   ],
		'formFields': [
		  { prop: 'name', datatype: 'require', type: 'text', label: '名称' },
		  { prop: 'phone', datatype: 'require', type: 'text', label: '电话号码' },
		  { prop: 'sort', datatype: 'require|integer', type: 'text', label: '排序' }
		]
	}
}
