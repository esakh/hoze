<template>
  <div class="container-fluid p-0 d-flex align-items-center">
    <nav class="navbar w-100 navbar-expand-xl   ">
        <img src="@/assets/icon/header/navbar.png" alt="" class="navbar-image">
      <div class="container d-flex align-items-center p-0">
        <router-link class="navbar-brand d-flex align-items-center m-0" to="/">
          <img src="@/assets/icon/header/img-brand.png" alt="">
          <h1 class="">حوزه علمیه خواهران گرگان </h1>
        </router-link>
        <!--          <button class="navbar-toggler " type="button" @click="navbarMobile=true" >-->
        <!--            <span class="navbar-toggler-icon"></span>-->
        <!--          </button>-->

        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li class="nav-item mx-2 " v-for="item in items" :key="item">
<!--              <router-link class="nav-link p-0" aria-current="page" to="">{{ item }}</router-link>-->
            </li>
          </ul>
        </div>
      </div>
      <NavbarMobile v-if="navbarMobile" @closeNavbarMobile="closeNavbarMobile" />
    </nav>
  </div>
</template>
<script setup>
import {ref} from 'vue'
import NavbarMobile from './NavbarMobile.vue'
const navbarMobile = ref(false)
function closeNavbarMobile(){
  navbarMobile.value = false
}
const items = ref([
  "صفحه اصلی",
  "حوزه مدیریت ",
  " معاونت پژوهش",
  "معاونت آموزش",
  "چند رسانه ای ",
  "تماس با ما ",
  "اخبار ",
  "درباره ما",
])
</script>


<style scoped>
.container-fluid{
}
.navbar{
  position: relative;
}
.navbar-image{
  position: absolute;
  width: 100%;
  height: 110px;

}
ul {
  z-index: 1 ;
}
a.navbar-brand{
  z-index: 1;
  position: absolute;
  right: 0;
}
</style>