/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const financeRouter = {
    path: '/finance',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Index',
    title: '财务管理',
    meta: { title: '财务管理', icon: 'dx-finance', roles: ['finance', 'admin'] },
    children: [
        {
          path: 'lists',
          component: () => import('@/views/finance/index'),
          name: 'index',
          title: '财务',
          meta: { title: '财务管理', icon: 'dx-finance', roles: ['finance.index', 'admin'] }
        }
    ]
}

export default financeRouter
