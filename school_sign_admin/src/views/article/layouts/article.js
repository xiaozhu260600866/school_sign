export default {
	data: {
		'listsAction': '',
		'pageSize': 15,
		'canCreate': 0,
		'canEdit': 0,
		'classno': false,
		// exportUrl:'/admin/article/lists?excel=1',
		classFields: [
			{ label: '排序', prop: 'sort', width: 100, type: 'text', defaultValue: 100, datatype: 'require|integer' },
			{ label: '名称', prop: 'name', type: 'text', width: 200, datatype: 'require' },
			{ label: '隐藏/显示', prop: 'can_show', type: 'switch', width: 100, defaultValue: 1 }
			// { label: '上传图片', prop: 'cover', type: 'upload', width: 150, allowUpLoadNum: 1, upurl: 'product' },
			// { label: '编号', prop: 'id', width: 100, append_class_table_id: 1 }
		],
		'tableName': 'articles',
		'createAction': '/admin/article/create',
		'editAction': '/admin/article/edit',
		'classAction': '/admin/article/',
		'checkAll': true,
		'searchFields': [{
				'name': '',
				'prop': 'title',
				'type': 'text',
				'label': '文章名称',
				placeholder: '请输入搜索关键字'
			}
		],
		'tableFields': [{
				'name': '',
				'prop': 'title',
				'minWidth': '180',
				'width': '',
				'append_table_': 0,
				'label': '文章名称'
			},
			{
					'name': '',
					'prop': 'fclassName',
					'minWidth': '180',
					'width': '',
					'append_table_': 0,
					'label': '类别'
				},
			{
				'prop': 'show',
				'minWidth': '',
				'width': '90',
				'align': 'center',
				'type': 'editField',
				'url': '/admin/article/editField',
				'append_table_': 0,
				'label': '隐藏/显示'
			},
			{
				'name': '',
				'prop': 'published_at',
				'minWidth': '',
				'width': '120',
				'append_table_': 0,
				'label': '发布日期'
			}
		],
		'formFields': [{
				'name': '',
				'prop': 'title',
				'datatype': 'require',
				'type': 'text',
				'append_form_': 0,
				'label': '文章标题'

			},
			{
				'prop': 'upload_file',
				'allowUpLoadNum': 1,
				'upurl': 'article',
				'type': 'uploadFile',
				'append_form_': 0,
				'action': '/admin/article/upload-file',
				'allowSuffix': ['.doc', '.docx', '.xls', '.xlsx', '.et', '.pdf', '.jpg', '.png', '.zip', '.rar'],
				'accept': '',
				'label': '上传附件'
			},
			{
				prop: 'fclass',
				datatype: 'require',
				type: 'manyselect',
				datakey: 'fclass',
				label: '分类'
			},

			// {
			// 	'name': '',
			// 	'prop': 'cover',
			// 	'allowUpLoadNum': 1,
			// 	'upurl': 'article',
			// 	'uploadMessage': '最佳尺寸：750*583像素',
			// 	'type': 'upload',
			// 	'append_form_': 0,
			// 	'label': '图片'
			// },

			// {
			//     "name": "",
			//     "prop": "remark",
			//     "type": "textarea",
			//     "append_form_": 0,
			//     "label": "备注"
			// },
			{
				'name': '',
				'prop': 'published_at',
				'datatype': 'require',
				'type': 'date',
				'append_form_': 0,
				'label': '发布日期'
			},
			{
				'name': '',
				'prop': 'content',
				'datatype': 'require',
				'type': 'editor',
				'append_form_': 0,
				'label': ''
			}
			// {
			//     "prop": "pic",
			//     "datatype": "array",
			//     "type": "upload",
			//     "append_form_": 0,
			//     "label": "pic",
			//     "allowUpLoadNum": "1",
			//     "upurl": "coupon"
			// },
		]
	}
}
