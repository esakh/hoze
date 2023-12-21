<template>
  <div class="" dir="rtl">

    <header>
      <header-top/>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <default-footer/>
    </footer>
  </div>
</template>
<script setup>

import HeaderTop from "@/components/head/HeaderTop.vue";
import DefaultFooter from "@/components/foot/defaultFooter.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #eee;
  margin: 0;
  padding: 0;
}


nav a.router-link-exact-active {
  color: #f4f4f4;
}
.breadCrumb{
  z-index: 199;
}
</style>
