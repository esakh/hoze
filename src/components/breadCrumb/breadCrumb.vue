<template>
  <div class="container">
      <div class="row">
<!--        <ul class="nav">-->
<!--          <li class="nav-lick d-flex align-items-center"  v-for="(item,index) in items" :key="index">-->
<!--            <router-link class="nav-link"   :to="items">-->
<!--              {{ index === 0 ? item = "home" : item }}-->
<!--            </router-link>-->
<!--            <span >{{item[items.length] ? "/":"-"}}</span>&lt;!&ndash;{{index > items[index-1] ? "" :">" }}&ndash;&gt;-->
<!--          </li>-->
<!--        </ul>-->
        <div class="bg-blue-800 p-4">

        <span v-for="(matched, idx) in this.$route.matched"
              :key="idx">
        <a
            :href="matched.path">
        {{ matched.name }}
        </a>
        <span v-if="idx != Object.keys(this.$route.matched).length - 1"> / </span>
        </span>

        </div>
      </div>
  </div>
</template>

<script setup>
import {watch , ref} from "vue";
import {useRoute} from "vue-router";
const items = ref()
const route = useRoute()
watch( route , ()=>{
  items.value = route.matched[0].path.split('/')
  console.log(route.matched);
})
console.log(route.matched)
</script>

<style lang="scss" scoped>

</style>