<template>
  <div class="God-container" dir="rtl">
    <header>
      <header-top/>
    </header>
    <main>
      <router-view/>
    </main>
    <footer ref="footer">
      <default-footer v-if="show"/>
    </footer>
  </div>
</template>


<script setup>
import {ref, watch} from 'vue'

const show = ref(true)
const footer = ref(null)
import {useRoute} from "vue-router";

const route = useRoute()
watch(route, () => {
  if (route.name == "educationList") {
    show.value = false
    if (!show.value) {
      footer.value.style.display = 'none !important'
    }
  }
})
console.log(route)
import HeaderTop from "@/components/head/HeaderTop.vue";
import DefaultFooter from "@/components/foot/defaultFooter.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #eee;
  margin: 0;
  padding: 0;
}

header {
  min-width: 230px;
}

nav a.router-link-exact-active {
  color: #f4f4f4;
}

.breadCrumb {
  z-index: 199;
}

.remove {
  display: none !important;
}
</style>
