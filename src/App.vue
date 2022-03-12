<template>
  <div class="container">
    <div class="header">
      <base-header></base-header>
    </div>
    <div class="main">Main</div>
    <div class="footer">
      <vue-about-me :copyright="copyright" :is-dark="isDark"></vue-about-me>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { isDark } from "~/logic";
import BaseHeader from "~/components/BaseHeader.vue";

// method example:
// import VueAboutMe from "vue-about-me";
// import "vue-about-me/style.css";

// dev:
import VueAboutMe from "./VueAboutMe.vue";

// test real js:
// @ts-ignore
// import VueAboutMe from "../dist/vue-about-me.mjs";
// import "../dist/style.css";

const copyright = {
  name: "Vue About Me",
  repo: "Vue-About-Me",
  author: "YunYouJun",
  // logo: 'https://cn.vuejs.org/images/logo.png',
  link: "https://sponsors.yunyoujun.cn",
};
</script>
