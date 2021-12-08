export default {
    data: {
        listsAction: '',
        pageSize: '15',
        canCreate: false,
        tableName: 'amount_incomes',
        createAction: '',
        editAction: '',
        tableOperateButton: true,
        // 是否需要审核
        // auditAction:'/admin/user/change-status',
        checkAll: true,
        // tarbars:{
        //     prop:'status',
        //     data:[
        //         {label:'审核中',value:'0','count':1,'datakey':'status0'},
        //         {label:'已审核',value:'1','count':1,'datakey':'status1'},
        //         {label:'审核拒绝',value:'2','count':1,'datakey':'status2'},
        //     ]
        // },
        tableFields: [
            { prop: 'getUser.id', label: '会员卡号', width: '80' },
            { prop: 'getUser.userInfo.name', label: '姓名', minwidth: '100' },
            { prop: 'getUser.userInfo.phone', label: '电话', minwidth: '100' },
            { prop: 'getPayMethod', label: '支付方式', minwidth: '100' },
            { prop: 'amount', label: '金额', width: '120' },
            { prop: 'source', label: '备注', width: '120' },
            { prop: 'created_at', label: '充值日期', width: '160' }
        ],
        searchFields: [
			 { prop: 'user_id', label: '会员卡号' },
            { prop: 'name', label: '姓名' },
            { prop: 'phone', label: '电话' },
            { prop: 'created_at', label: '充值日期', minWidth: '200', type: 'betweenDate' }
        ]
        /* formFields:[
            {prop:'name',label:'姓名',type:'text',datatype:'require'},
            {prop:'phone',label:'电话',type:'text',datatype:'require|phone'},
            {prop:'sex',label:'性别',type:'select',datatype:'require',datakey:'sexArr'},
            {prop:'address',label:'服务地址',type:'location',datatype:'require'},
            {prop:'remark',label:'备注',type:'textarea'},

        ] */
    }
}
