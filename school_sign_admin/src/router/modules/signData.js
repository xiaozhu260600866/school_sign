
import Layout from '@/layout'
const signRouter = {
    path: '/sign',
    component: Layout,
    redirect: 'noRedirect',
    name: 'sign',
    meta: { title: '在线签到', icon: 'edit', roles: ['sign', 'admin'] },
    children: [
    {
        path: 'sign',
        component: () => import('@/views/sign/index'),
         name: 'sign',
         meta: { title: '在线签到', icon: '', params: { status: 0 }, roles: ['sign.lists', 'admin'] },
         children: [
             {
               path: 'lists-show',
               hidden: true,
               meta: { title: '查看签到', icon: '', roles: ['sign.lists.show'] }
             },
             {
               path: 'lists-del',
               hidden: true,
               meta: { title: '删除签到', icon: '', roles: ['sign.lists.del'] }
             }
         ]
     }
   ]
}
export default signRouter

