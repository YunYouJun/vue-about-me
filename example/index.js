import Vue from 'vue'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import 'element-theme-ink'
import App from './App.vue'

import AboutMe from '../src'

// fontawesome
import fontawesome from '@fortawesome/fontawesome'
import fas from '@fortawesome/fontawesome-free-solid'
import far from '@fortawesome/fontawesome-free-regular'
import fab from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(fas)
fontawesome.library.add(far)
fontawesome.library.add(fab)

Vue.use(ElementUI)
Vue.use(AboutMe)

new Vue({
  el: '#app',
  render: h => h(App)
})