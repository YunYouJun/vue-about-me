import Vue from 'vue'
import 'element-theme-ink/lib/reset.css'

import App from './App'

// import AboutMe from 'vue-about-me'
import VueAboutMe from '../src'
import VTooltip from 'v-tooltip'
Vue.use(VTooltip)
Vue.use(VueAboutMe)

new Vue({
  el: '#app',
  render: h => h(App)
})