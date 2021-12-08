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
			{ 'prop': 'name_py', 'minWidth': '100', 'width': '', 'append_table_': 0, 'label': '姓名拼音' },
			{ 'prop': 'born_year', 'minWidth': '80', 'width': '', 'append_table_': 0, 'label': '出生日期' },
			{ 'prop': 'sex', 'minWidth': '', 'width': '110', 'append_table_': 0, 'label': '性别' },

			{ 'prop': 'native_place', 'minWidth': '80', 'width': '', 'append_table_': 0, 'label': '籍贯' },
			{ 'prop': 'politica', 'minWidth': '', 'width': '100', 'append_table_': 0, 'label': '政治面貌' },
			{ 'prop': 'nation', 'minWidth': '', 'width': '100', 'append_table_': 0, 'label': '民族' },
			{ 'prop': 'nationality', 'minWidth': '', 'width': '120', 'append_table_': 0, 'label': '国籍' },
			{ 'prop': 'card_type', 'minWidth': '', 'width': '120', 'append_table_': 0, 'label': '证件类型' },
			{ 'prop': 'cardno', 'minWidth': '', 'width': '120', 'append_table_': 0, 'label': '身份证号码' },
			{ 'prop': 'test_identity', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '考生身份' },
			{ 'prop': 'phone', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '移动电话' },

			{ 'prop': 'mobile', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '家庭电话' },
			{ 'prop': 'phone2', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '工作电话' },
			{ 'prop': 'friends_tel', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '亲友电话' },
			{ 'prop': 'post_no', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '邮政编码' },
			{ 'prop': 'location_address', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '通讯地址' },
			{ 'prop': 'highest_edu', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '最高学历' },
			{ 'prop': 'highest_edu_no', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '证书编号' },
			{ 'prop': 'highest_diploma', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '最高学位' },
			{ 'prop': 'highest_diploma_no', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '证书编号' },
			{ 'prop': 'work_area', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '单位所在地' },
			{ 'prop': 'work_name', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '单位名称' },
			{ 'prop': 'work_type', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '单位性质' },
			{ 'prop': 'work_time', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '参加工作时间' },
			{ 'prop': 'technology', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '技术职称' },
			{ 'prop': 'position', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '行政职务' },
			{ 'prop': 'work_post', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '工作岗位' },
			{ 'prop': 'enroll_unit', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '招生单位' },
			{ 'prop': 'diploma_type', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '学位类别' },
			{ 'prop': 'enter_departments', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '报考院系' },
			{ 'prop': 'enter_major', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '专业或领域' },
			{ 'prop': 'exam_language', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '应试语种' },
			{ 'prop': 'research_direction', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '研究方向' },
			{ 'prop': 'remark', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '备注' }
	   ],
		'formFields': [
		  { prop: 'name', datatype: 'require', type: 'text', label: '名称' },
		  { prop: 'phone', datatype: 'require', type: 'text', label: '电话号码' },
		  { prop: 'sort', datatype: 'require|integer', type: 'text', label: '排序' }
		]
	}
}
