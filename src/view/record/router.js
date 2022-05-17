import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './mainIndex'

Vue.use(VueRouter)
// meta.index 为过场动画索引值, 第一级为1，第二级为2。
const routers = [
  {
    path: '/',
    component: index,
    meta: {
      title: '交易记录',
      index: 1
    }
  }
]

// add route path
routers.forEach(route => {
  route.path = route.path || '/' + (route.name || '')
})

const router = new VueRouter({
  routes: routers,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title
  // console.log(title);
  if (title) {
    document.title = title
  }
  next()
})
router.afterEach((to, from, next) => {
  console.log(to, from, next)
})

export { router }
