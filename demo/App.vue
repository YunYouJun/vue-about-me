<script lang="ts" setup>
import BaseHeader from '~/components/BaseHeader.vue'
import { isDark } from '~/logic'

// method example:
// import VueAboutMe from "vue-about-me";
// import "vue-about-me/style.css";

// dev:
import VueAboutMe from '../src/VueAboutMe.vue'

// test real js:
// import VueAboutMe from "../dist/vue-about-me.mjs";
// import "../dist/style.css";

const copyright = {
  name: 'Vue About Me',
  repo: 'Vue-About-Me',
  author: 'YunYouJun',
  // logo: 'https://cn.vuejs.org/images/logo.png',
  iconUrl: 'https://sponsors.yunyoujun.cn',
  authorUrl: 'https://www.yunyoujun.cn',
}
</script>

<template>
  <div class="container">
    <div class="header">
      <BaseHeader />
    </div>
    <div class="main">
      Main
    </div>
    <div class="footer">
      <VueAboutMe :copyright="copyright" :is-dark="isDark" />
    </div>
  </div>
</template>
