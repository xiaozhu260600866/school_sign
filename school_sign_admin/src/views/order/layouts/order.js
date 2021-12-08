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
			{ 'prop': 'nation', 'minWidth': '', 'width': '80', 'append_table_': 0, 'label': '民族' },
			{ 'prop': 'politica', 'minWidth': '', 'width': '110', 'append_table_': 0, 'label': '政治面貌' },
			{ 'prop': 'area', 'minWidth': '80', 'width': '', 'append_table_': 0, 'label': '户口所在地' },
			{ 'prop': 'test_llanguage', 'minWidth': '', 'width': '100', 'append_table_': 0, 'label': '考试语种' },
			{ 'prop': 'test_type', 'minWidth': '', 'width': '100', 'append_table_': 0, 'label': '考试类型' },
			{ 'prop': 'score_type', 'minWidth': '', 'width': '120', 'append_table_': 0, 'label': '照顾加分' },
			{ 'prop': 'student_type', 'minWidth': '', 'width': '120', 'append_table_': 0, 'label': '考生类别' },
			{ 'prop': 'course_group', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '考试科目组' },
			{ 'prop': 'course_type', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '报考科类' },

			{ 'prop': 'profess', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '职业' },
			{ 'prop': 'test_address', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '考试县区' },
			{ 'prop': 'test_area', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '报名点' },
			{ 'prop': 'card_type', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '证件类型' },
			{ 'prop': 'cardno', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '证件号' },
			{ 'prop': 'born_year', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '出生日期' },
			{ 'prop': 'edu_before', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '考前学历' },
			{ 'prop': 'cert_status', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '证书检查状态' },
			{ 'prop': 'edu_school', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '毕业学校' },
			{ 'prop': 'edu_month', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '毕业月份' },
			{ 'prop': 'edu_cardno', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '毕业证书号' },
			{ 'prop': 'edu_major', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '毕业专业' },
			{ 'prop': 'post_no', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '邮政编码' },
			{ 'prop': 'mobile', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '固定电话' },
			{ 'prop': 'phone', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '移动电话' },
			{ 'prop': 'location_address', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '通讯地址' },
			{ 'prop': 'pay_situation', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '缴费情况' },
			{ 'prop': 'cover', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '相片采集' },
			{ 'prop': 'cover_status', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '相片审核状态' },
			{ 'prop': 'cover_audit_status', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '照片审核意见' },
			{ 'prop': 'edu_lever', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '层次' },
			{ 'prop': 'test_school', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '报考院校1' },
			{ 'prop': 'test_major', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '报考专业' },
			{ 'prop': 'test_school2', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '报考院校2' },
			{ 'prop': 'test_major2', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '报考专业' }
	   ],
		'formFields': [
		  { prop: 'name', datatype: 'require', type: 'text', label: '名称' },
		  { prop: 'phone', datatype: 'require', type: 'text', label: '电话号码' },
		  { prop: 'sort', datatype: 'require|integer', type: 'text', label: '排序' }
		]
	}
}
