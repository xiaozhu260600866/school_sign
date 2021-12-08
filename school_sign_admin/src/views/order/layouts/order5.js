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
			{ 'prop': 'sex', 'minWidth': '100', 'width': '', 'append_table_': 0, 'label': '性别' },
			{ 'prop': 'born_year', 'minWidth': '80', 'width': '', 'append_table_': 0, 'label': '出生日期' },
			{ 'prop': 'eduStandard', 'minWidth': '80', 'width': '', 'append_table_': 0, 'label': '文化程度' },
			{ 'prop': 'card_type', 'minWidth': '', 'width': '100', 'append_table_': 0, 'label': '证件类型' },
			{ 'prop': 'cardno', 'minWidth': '', 'width': '100', 'append_table_': 0, 'label': '证件号码' },
			{ 'prop': 'work_unit', 'minWidth': '', 'width': '120', 'append_table_': 0, 'label': '单位名称' },
			{ 'prop': 'location_address', 'minWidth': '', 'width': '120', 'append_table_': 0, 'label': '通讯地址' },
			{ 'prop': 'declare_condition', 'minWidth': '', 'width': '120', 'append_table_': 0, 'label': '申报条件' },
			{ 'prop': 'declare_profession', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '申报职业' },
			{ 'prop': 'declare_level', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '申报级别' },
			{ 'prop': 'exam_type', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '考试类型' },
			{ 'prop': 'old_train', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '是否参加本职业培训' },
			{ 'prop': 'organization_name', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '机构名称' },
			{ 'prop': 'start_train', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '培训开始时间' },
			{ 'prop': 'end_train', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '培训结束时间' },
			{ 'prop': 'train_count', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '学时' },
			{ 'prop': 'working_time', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '从事本职业工作年限' },
			{ 'prop': 'start_working', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '开始时间' },
			{ 'prop': 'end_working', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '结束时间' },
			{ 'prop': 'job_title', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '已获职业资格名称' },
			{ 'prop': 'job_level', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '职业资格等级' },
			{ 'prop': 'job_date', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '获证日期' },
			{ 'prop': 'job_certNo', 'minWidth': '', 'width': '60', 'append_table_': 0, 'label': '证书号码' }

	   ],
		'formFields': [
		  { prop: 'name', datatype: 'require', type: 'text', label: '名称' },
		  { prop: 'phone', datatype: 'require', type: 'text', label: '电话号码' },
		  { prop: 'sort', datatype: 'require|integer', type: 'text', label: '排序' }
		]
	}
}
