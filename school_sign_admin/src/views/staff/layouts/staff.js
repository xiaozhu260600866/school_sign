export default {
	data: {
		'listsAction': '',
		'pageSize': 15,
		'canCreate': 1,
		'canEdit': 1,
		'tableName': 'users',
		'createAction': '/admin/staff/create',
		'editAction': '/admin/staff/edit',
		listsClass: {
			'classAction': '/admin/staff/',
			addLev: 2,
			prop: 'fclass',
			classData: [{
					label: '名称',
					prop: 'name',
					type: 'text',
					width: 100,
					datatype: 'require'
				},
				{
					label: '排序',
					prop: 'sort',
					type: 'text',
					width: 100,
					datatype: 'require',
					tableHidden: true
				}
			],
			classType: 0
		},
		'checkAll': true,
		'searchFields': [{
				'name': '',
				'prop': 'name',
				'type': 'text',
				'label': '名称'
			},
			{
				'name': '',
				'prop': 'phone',
				'type': 'text',
				'label': '电话'
			}
		],
		'tableFields': [{
				'prop': 'name',
				'minWidth': '100',
				'width': '',
				'append_table_': 0,
				'label': '名称'
			},
			{
				'prop': 'phone',
				'minWidth': '',
				'width': '120',
				'append_table_': 0,
				'label': '电话'
			},
			{
				'prop': 'rolename',
				'minWidth': '',
				'width': '120',
				'append_table_': 0,
				'label': '角色'
			},
			{
				'prop': 'departmentName',
				'minWidth': '80',
				'width': '',
				'append_table_': 0,
				'label': '部门'
			},

			{
				'prop': 'created_at',
				'minWidth': '',
				'width': '160',
				'append_table_': 0,
				'label': '创建时间'
			}
		],
		'formFields': [{
				prop: 'name',
				datatype: 'require',
				type: 'text',
				label: '用户名',
				column: 2
			},
			{
				prop: 'phone',
				datatype: 'require',
				type: 'text',
				label: '电话号码'
			},
			{
				prop: 'password',
				datatype: 'require',
				type: 'password',
				label: '登录密码',
				column: 2
			},
			{
				prop: 'role_id',
				datatype: 'require',
				type: 'select',
				datakey: 'roleArr',
				label: '角色'
			},
			{
				prop: 'department_id',
				datatype: 'require',
				type: 'manyselect',
				datakey: 'fclass2',
				label: '部门',
				column: 2
			},
			{
				prop: 'status',
				datatype: 'require',
				type: 'select',
				label: '启用',
				defaultValue: 1,
				data: [{
						label: '是',
						value: 1
					},
					{
						label: '否',
						value: 0
					}
				]
			}
		]
	}
}
