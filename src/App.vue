<!--
 * @Author: TanGuangZhi
 * @Date: 2022-03-08 19:27:15 Tue
 * @LastEditTime: 2022-03-10 15:08:07 Thu
 * @LastEditors: TanGuangZhi
 * @Description: 
 * @KeyWords: Vue, Web-Server, ElementUI
-->


<template>
  <div id="app">
    <Banner v-if="$route.meta.show" v-show="$route.meta.show" />
    <!--配置路由出口-->
    <router-view />
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";

export default {
  name: "app",
  components: {
    Banner,
  },
};
</script>

<style></style>
