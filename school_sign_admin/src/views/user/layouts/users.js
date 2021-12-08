export default {
    data: {
        listsAction: '',
        pageSize: '15',
        canCreate: true,
        canEdit: true,
		checkAll: false,
        tableName: 'users',
        createAction: '/admin/user/create',
        editAction: '/admin/user/edit',
		createLabel: '新建会员',
        tableOperateButton: true,
		uploadData: {
			url: '/admin/user/upload',
			downloadUrl: 'https://dolphin.doxinsoft.com/dolphin_user.xlsx'
		},
        // 是否需要审核
         // auditAction:'/admin/user/change-status',
        // tarbars:{
        //     prop:'status',
        //     data:[
        //         {label:'审核中',value:'0','count':1,'datakey':'status0'},
        //         {label:'已审核',value:'1','count':1,'datakey':'status1'},
        //         {label:'审核拒绝',value:'2','count':1,'datakey':'status2'},
        //     ]
        // },
        tableFields: [
            { prop: 'id', label: '会员卡号', width: '80' },
            { prop: 'name', label: '姓名', minWidth: '80' },
			  { prop: 'phone', label: '电话号码', width: '120' },
            { prop: 'headerPic', label: '头像', append_table_headerPic: 'true', width: '60', align: 'center' },
            { prop: 'nickname', label: '昵称', width: '60', align: 'center' },

            { prop: 'amount', label: '余额', width: '180', append_table_amount: true },
            { prop: 'shopname', label: '注册来源门店', width: '110' },
            { prop: 'orderCount', label: '消费数量', width: '90' },
            { prop: 'orderSum', label: '消费总额', width: '90' },
            { prop: 'updated_at', label: '最后一次登录', width: '160' },
            { prop: 'created_at', label: '注册时间', width: '160' }
        ],
        searchFields: [
			{ prop: 'id', label: '会员卡号' },
            { prop: 'name', label: '姓名' },
            { prop: 'phone', label: '电话' },
            { prop: 'created_at', label: '注册时间', type: 'betweenDate' }
        ],
        formFields: [
            { prop: 'name', label: '姓名', type: 'text', datatype: 'require' },
            { prop: 'phone', label: '电话', type: 'text', datatype: 'require' },
            { prop: 'password', label: '密码', type: 'password', datatype: 'require' },
            // { prop: 'shop_id', datatype: 'require', type: 'select', datakey: 'shops', label: '所属门店' },
            // { 'prop': 'face_pic', 'datatype': 'array', 'type': 'upload', 'append_form_': 0, 'label': '图片', uploadMessage: '最佳尺寸：800*357', 'allowUpLoadNum': '1', 'upurl': 'poster' },
            { prop: 'address', label: '地区', type: 'location', datatype: 'require' },
            { prop: 'remark', label: '备注', type: 'textarea' }

        ]
    }
}
