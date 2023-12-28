<script setup>
// import {watch} from 'vue'
import {useRoute} from "vue-router";

const route = useRoute()
console.log(route)
// watch(route ,()=>{
//
// })
</script>

<template>
<div class="container">
  <div class="row h-100 d-flex justify-content-center align-items-center">
    <p class="display">page not found</p>
  </div>
</div>
</template>

<style scoped>

</style>