/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const orderRouter = {
    path: '/order',
    component: Layout,
    redirect: 'noRedirect',
    name: 'order',
    meta: { title: '报名订单', icon: 'dx-hr-contract', roles: ['order'] },
    children: [
		{
        path: 'lists',
        component: () => import('@/views/order/lists'),
        name: 'orderLists',
        meta: { title: '成人高考报名表', icon: '', roles: ['order.lists'], params: { type: 0 }},
        children: [
          {
            path: 'lists-show',
            hidden: true,
            meta: { title: '查看订单', icon: '', roles: ['order.lists.show'] }
          },
            {
              path: 'lists-del',
              hidden: true,
              meta: { title: '删除订单', icon: '', roles: ['order.lists.del'] }
            }
        ]

		},
		{
		path: '2lists',
		component: () => import('@/views/order/lists2'),
		name: 'orderLists',
		meta: { title: '普通专升本考前辅导报名表', icon: '', roles: ['order.lists'], params: { type: 1 }},
		children: [
		  {
		    path: 'lists-show',
		    hidden: true,
		    meta: { title: '查看订单', icon: '', roles: ['order.lists.show'] }
		  },
		    {
		      path: 'lists-del',
		      hidden: true,
		      meta: { title: '删除订单', icon: '', roles: ['order.lists.del'] }
		    }
		]

		},
		{
		path: '3lists',
		component: () => import('@/views/order/lists3'),
		name: 'orderLists',
		meta: { title: '网络教育报名表', icon: '', roles: ['order.lists'], params: { type: 3 }},
		children: [
		  {
		    path: 'lists-show',
		    hidden: true,
		    meta: { title: '查看订单', icon: '', roles: ['order.lists.show'] }
		  },
		    {
		      path: 'lists-del',
		      hidden: true,
		      meta: { title: '删除订单', icon: '', roles: ['order.lists.del'] }
		    }
		]

		},
		{
		path: '4lists',
		component: () => import('@/views/order/lists4'),
		name: 'orderLists',
		meta: { title: '研究生报名表', icon: '', roles: ['order.lists'], params: { type: 2 }},
		children: [
		  {
		    path: 'lists-show',
		    hidden: true,
		    meta: { title: '查看订单', icon: '', roles: ['order.lists.show'] }
		  },
		    {
		      path: 'lists-del',
		      hidden: true,
		      meta: { title: '删除订单', icon: '', roles: ['order.lists.del'] }
		    }
		]

		},
		{
		path: '5lists',
		component: () => import('@/views/order/lists5'),
		name: 'orderLists',
		meta: { title: '鉴定个人申报表', icon: '', roles: ['order.lists'], params: { type: 4 }},
		children: [
		  {
		    path: 'lists-show',
		    hidden: true,
		    meta: { title: '查看订单', icon: '', roles: ['order.lists.show'] }
		  },
		    {
		      path: 'lists-del',
		      hidden: true,
		      meta: { title: '删除订单', icon: '', roles: ['order.lists.del'] }
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

export default orderRouter
