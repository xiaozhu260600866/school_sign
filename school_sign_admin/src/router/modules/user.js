/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const userRouter = {
    path: '/user',
    component: Layout,
    redirect: 'noRedirect',
    name: 'user',
    meta: { title: '会员管理', icon: 'dx-hr-contract', roles: ['user'] },
    children: [
		{
        path: 'lists',
        component: () => import('@/views/user/lists'),
        name: 'userLists',
        meta: { title: '会员列表', icon: '', roles: ['user.lists'] },
        children: [
			{
			  path: 'lists-create',
			  hidden: true,
			  meta: { title: '新建会员', icon: '', roles: ['user.lists.create'] }
			},
			  {
			    path: 'lists-edit',
			    hidden: true,
			    meta: { title: '修改会员', icon: '', roles: ['user.lists.edit'] }
			  },
          {
            path: 'lists-show',
            hidden: true,
            meta: { title: '查看会员', icon: '', roles: ['user.lists.show'] }
          },
          {
              path: 'lists-del',
              hidden: true,
              meta: { title: '删除会员', icon: '', roles: ['user.lists.del'] }
           }
        ]

		},
		{
		path: 'in-lists',
		component: () => import('@/views/user/come_in'),
		name: 'userLists',
		meta: { title: '会员充值明细', icon: '', roles: ['user.in_lists'] },
		children: [
		  {
		    path: 'in_lists-show',
		    hidden: true,
		    meta: { title: '会员充值明细', icon: '', roles: ['user.in_lists.show'] }
		  },
		    {
		      path: 'in_lists-del',
		      hidden: true,
		      meta: { title: '删除会员充值明细', icon: '', roles: ['user.in_lists.del'] }
		    }
		]

		},

		{
		path: 'system-lists',
		component: () => import('@/views/user/system'),
		name: 'userLists',
		meta: { title: '资金转帐明细', icon: '', roles: ['user.system-lists'] },
		children: [
		  {
		    path: 'system-lists-show',
		    hidden: true,
		    meta: { title: '会员充值明细', icon: '', roles: ['user.system-lists.show'] }
		  },
		    {
		      path: 'system-lists-del',
		      hidden: true,
		      meta: { title: '删除会员充值明细', icon: '', roles: ['user.system-lists.del'] }
		    }
		]

		}
    // , {
    //     path: 'create',
    //     component: () => import('@/views/policy/create'),
    //     hidden: true,
    //     name: 'PolicyCreate',
    //     meta: { title: '发布政策', roles: ['policy.create'] }
    // }, {
    //     path: 'edit',
    //     component: () => import('@/views/policy/create'),
    //     hidden: true,
    //     name: 'PolicyEdit',
    //     meta: { title: '编辑政策', roles: ['policy.edit'] }
    // },
    ]
}

export default userRouter
