<template>
  <div class="container-fluid p-0 d-flex align-items-center">
    <nav class="navbar w-100 navbar-expand-xl d-flex align-items-center p-0">
      <div class="container-lg  d-flex align-items-center ">
          <router-link class="navbar-brand d-flex align-items-center  me-lg-0" to="/">
            <img src="@/assets/icon/header/headerLOgo.png" alt="">
            <h1 class="">حوزه علمیه خواهران گرگان </h1>
          </router-link>
          <button class="btn btn-sm p-0 navbar-toggler bg-white border-0" type="button" @click="navbarMobile=true" >
            <span class="navbar-toggler-icon"></span>
          </button>

        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li class="nav-item mx-2 " v-for="item in items" :key="item">
              <router-link class="nav-link p-0" aria-current="page" to="">{{ item }}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <NavbarMobile v-if="navbarMobile"  @closeNavbarMobile="closeNavbarMobile" />
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
.navbar {
  background-color: #095195;
}
.navbar-brand img{
  width: 61px;
  height: 61px;
}
.navbar-brand h1 {
  font-family: 'IranianSans';
  font-weight: 700 !important;
  font-size: 15px ;
  //line-height: 30px !important;
  letter-spacing: -1.5% !important;
  text-align: justify !important;
}
.navbar-brand:hover{
  color: #fff;
}
.navbar-nav .nav-item a  , .navbar-brand{
  color: #fff;
  font-family: 'IranianSans';
}

.nav-item{
  font-weight: 500 !important;
  font-size: 14.84 !important;
  //line-height: 23.23 !important;
  letter-spacing: -4.5% !important;

  //margin-left:10.73px ;
}
ul{
  grid-row-gap: 10.73px;
}
@media (max-width: 400px){
  h1{
    font-size: 12px !important;
    font-weight: 500;
  }
  .navbar-toggler{
    padding: 0;
  }
}
@media (max-width: 600px){
.navbar-brand {
  margin-right: 0 !important;
}
}
</style>