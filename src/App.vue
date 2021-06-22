<template>
  <div class="header">Header</div>
  <div class="main">Main</div>
  <div class="footer">
    <vue-about-me :copyright="copyright"></vue-about-me>
  </div>
</template>

<script lang="ts" setup>
import VueAboutMe from "vue-about-me";
import "vue-about-me/style";

// import VueAboutMe from "./VueAboutMe.vue";

// test real js
// import VueAboutMe from "../dist/vue-about-me.es.js";
// import "../dist/style.css";

const copyright = {
  name: "Vue About Me",
  repo: "Vue-About-Me",
  author: "YunYouJun",
  // logo: 'https://cn.vuejs.org/images/logo.png',
  link: "https://sponsors.yunyoujun.cn",
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

.footer {
  background-color: rgb(209, 232, 255);
}

.header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 600px;
}
</style>
