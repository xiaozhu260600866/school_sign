/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const repairRouter = {
    path: '/repair',
    component: Layout,
    redirect: 'noRedirect',
    name: 'repair',
    meta: { title: '维修管理', icon: 'dx-hr-contract', roles: ['repair'] },
    children: [{
        path: 'lists',
        component: () => import('@/views/repair/lists'),
        name: 'repairLists',
        meta: { title: '报修订单', icon: '', roles: ['repair.lists'], params: { repair_status: 1, status: 0 }},
        children: [
          {
            path: 'lists-show',
            hidden: true,
            meta: { title: '查看维修', icon: '', roles: ['repair.lists.show'] }
          },
            {
              path: 'lists-del',
              hidden: true,
              meta: { title: '删除维修', icon: '', roles: ['repair.lists.del'] }
            }
        ] }
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

export default repairRouter
