import bridge from './common/bridge' //引用WebViewJavascriptBridge
Vue.prototype.$bridge = bridge;
import Vue from 'vue'
import App from './App.vue'
import axios from './axios_util.js'
import 'normalize.css/normalize.css'
import '@/common/vant_reset.less'
import '@/common/common.css'
import VueRouter from 'vue-router'
import { VERSIONPATH, VSERSION } from '@/common/VERSIONPATH.js';
Vue.use(VueRouter)
Vue.use(axios)
Vue.prototype.VERSIONPATH = VERSIONPATH
Vue.prototype.VSERSION = VSERSION
import { Icon, Lazyload, Image as VanImage } from 'vant';
import 'vant/lib/index.css';
Vue.use(Icon);
Vue.use(Lazyload);
Vue.use(VanImage);

export { App, Vue }
