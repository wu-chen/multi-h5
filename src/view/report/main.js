import { App, Vue } from '../../main'
import { router } from './router'
import store from '@/store'

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
