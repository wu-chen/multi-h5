import { App, Vue } from '../../main'
import { router } from './router'

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
