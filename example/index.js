import Vue from 'vue'
import { Tooltip } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import 'element-theme-ink/lib/reset.css'
import 'element-theme-ink/lib/tooltip.css'

import App from './App'
import AboutMe from '../src'

// fontawesome
import fontawesome from '@fortawesome/fontawesome'
import faCloud from '@fortawesome/fontawesome-free-solid/faCloud'
import faEnevelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import faGlobe from '@fortawesome/fontawesome-free-solid/faGlobe'
import faGitHub from '@fortawesome/fontawesome-free-brands/faGithub'
import faWeibo from '@fortawesome/fontawesome-free-brands/faWeibo'
// import fas from '@fortawesome/fontawesome-free-solid'
// import far from '@fortawesome/fontawesome-free-regular'
// import fab from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(faCloud)
fontawesome.library.add(faEnevelope)
fontawesome.library.add(faGlobe)
fontawesome.library.add(faGitHub)
fontawesome.library.add(faWeibo)
// fontawesome.library.add(fas)
// fontawesome.library.add(far)
// fontawesome.library.add(fab)

Vue.use(Tooltip)
Vue.use(AboutMe)

new Vue({
  el: '#app',
  render: h => h(App)
})