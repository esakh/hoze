<script setup>

import HeaderTop from "@/App.vue";
import DefaultFooter from "@/App.vue";
</script>

<template>
<div class="container">
  <header>
    <header-top/>
  </header>
  <main>
  <slot>
  </slot>
  </main>
  <footer>
    <default-footer/>
  </footer>
</div>
</template>

<style scoped>

</style>