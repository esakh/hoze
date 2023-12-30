<script setup>
import {watch} from 'vue'
import {useRoute} from "vue-router";

const route = useRoute()
console.log(route)
watch(route ,()=>{

})
</script>

<template>
<div class="container">
  <div class="row h-100 d-flex  justify-content-center align-items-center">
    <p class="display-2  text-center ">
      page not found
    </p>
    <router-link to="/" class="btn btn-outline-dark lead w-25 my-4">back to home</router-link>
  </div>
</div>
</template>

<style scoped>

</style>