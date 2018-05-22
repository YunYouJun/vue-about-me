import VueAboutMe from './main.vue';

VueAboutMe.install = function(Vue) {
  Vue.component(VueAboutMe.name, VueAboutMe)
}

export default VueAboutMe
