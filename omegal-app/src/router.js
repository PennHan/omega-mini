import { createRouter, createWebHistory } from 'vue-router'

import Welcome from './views/Welcome.vue'
import Dashboard from './views/Dashboard.vue'
import GiftBox from './views/GiftBox.vue'
import Journey from './views/Journey.vue'
import Subscription from './views/Subscription.vue'
import MyTree from './views/MyTree.vue'

const routes = [
  { path: '/', component: Welcome },
  { path: '/dashboard', component: Dashboard },
  { path: '/gift-box', component: GiftBox },
  { path: '/journey', component: Journey },
  { path: '/subscription', component: Subscription },
  { path: '/my-tree', component: MyTree },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
