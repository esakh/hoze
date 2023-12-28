<template>
  <div class="container-fluid p-0 d-flex align-items-center">
    <nav class="navbar w-100 navbar-expand-lg d-flex align-items-center p-0">
        <div class="background-img">
          <svg width="1262" height="74" viewBox="0 0 1262 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1567.62 27.8787C1564.57 8.58238 1535.08 11.3407 1535.08 11.3407C1535.08 8.03423 1534.53 4.94179 1533.58 2.05745L131.377 2.05889L60.6063 2.05889C59.6526 4.94616 59.1076 8.03861 59.1076 11.3421C59.1076 11.3421 29.6198 8.58384 26.5672 27.8831C23.5146 47.1794 1.58301 36.619 1.58301 36.619C1.58301 36.619 23.8939 27.2325 26.9465 46.5288C29.9991 65.8251 59.4869 63.0669 59.4869 63.0669C59.4869 66.3733 60.0319 69.4658 60.9856 72.353L131.756 72.353L1533.96 72.3516C1534.91 69.4643 1535.46 66.3718 1535.46 63.0654C1535.46 63.0654 1564.95 65.8237 1568 46.5274C1571.05 27.231 1592.73 36.6175 1592.73 36.6175C1592.73 36.6175 1570.67 47.1751 1567.62 27.8787Z" fill="#095195" stroke="#095195" stroke-width="2.33443" stroke-miterlimit="10" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="background-img-brand">
          <svg width="294" height="92" viewBox="0 0 294 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M565.191 34.4218C561.359 10.1989 524.342 13.6614 524.342 13.6614C524.342 9.51076 523.658 5.62876 522.461 2.008L165.196 2.00853L76.3565 2.00853C75.1593 5.63297 74.4751 9.51496 74.4751 13.6619C74.4751 13.6619 37.4587 10.1994 33.6267 34.426C29.7947 58.649 2.26367 45.3923 2.26367 45.3923C2.26367 45.3923 30.2709 33.6093 34.1028 57.8323C37.9348 82.0552 74.9513 78.5927 74.9513 78.5927C74.9513 82.7433 75.6354 86.6253 76.8326 90.2498L165.672 90.2498L522.937 90.2492C524.134 86.6248 524.818 82.7428 524.818 78.5922C524.818 78.5922 561.835 82.0547 565.667 57.8317C569.495 33.6087 596.714 45.3918 596.714 45.3918C596.714 45.3918 569.023 58.6448 565.191 34.4218Z" fill="white" stroke="#1B73C7" stroke-width="2.93045" stroke-miterlimit="10" stroke-linejoin="round"/>
          </svg>
        </div>
      <div class="container-lg  d-flex align-items-center ">
        <router-link class="navbar-brand d-flex align-items-center  me-lg-0" to="/">
          <img src="@/assets/icon/header/headerLOgo.png" alt="">
          <h1 class="">حوزه علمیه خواهران گرگان </h1>
        </router-link>
        <button class="btn btn-sm  navbar-toggler bg-transparent border border-2  " type="button" @click="navbarMobile=true" >
          <span class="navbar-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li class="nav-item mx-2 " v-for="item in items" :key="item">
              <router-link class="nav-link p-0" aria-current="page" to="">{{ item }}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <Transition mode="out-in" name="slide-fade"><NavbarMobile v-if="navbarMobile"   @closeNavbarMobile="closeNavbarMobile" /></Transition>
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
.slide-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-leave-active {
  transition: all 1s ease ;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
}

.container-fluid{
  height: 140px;

}
.navbar {
  //background-color: #095195;
  position: relative;
  //height: 70px;
  z-index: 1;
  max-width: 1500px;
  margin: auto;
}
.navbar > .background-img{
  left: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  //left: 0;
}
.navbar > .background-img svg{
width: 100%;
}
.navbar > .background-img-brand{
  position: absolute;
  z-index: -1;
  right: 0;
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
  position: relative;
  top: 5px;
}
.navbar-brand:hover{
  color: #fff;
}
.navbar-nav .nav-item a  , .navbar-brand{
  color: #fff;
  font-family: 'IranianSans';
}
.navbar-nav .nav-item a{
  font-size: 0.95rem;
  text-wrap: nowrap;
}
button.navbar-toggler{
  width: 35px;
  height: 30px;
//display: flex;
//flex-direction: column;
//justify-content: center;
//align-items: center;
}
button.navbar-toggler:active{
  box-shadow: none;
}
button.navbar-toggler:focus{
  box-shadow: none;
}
.navbar-icon {
  position: relative;
  right: -6px;
  width: 20px ;
  height: 3px;
  background-color: #FFFFFF;
  display: block;
  border-radius: 5px;
}
.navbar-icon::after{
  content: "";
  position: absolute;
  width: 20px ;
  top: 8px;
  left: 0;
  right: 0;
  height: 3px;
  background-color: #FFFFFF;
  border-radius: 5px;
}
.navbar-icon::before{
  content: "";
  position: absolute;
  width: 20px ;
  bottom: 8px;
  left: 0;
  right: 0;
  height: 3px;
  background-color: #FFFFFF;
  border-radius: 5px;
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
/*
@media (max-width: 280px){
  .navbar-brand h1{
    font-size: 10px !important;
    font-weight: 500;
  }
  button.navbar-toggler{
    width: 30px !important;
    height: 30px !important;
  }
  span.navbar-icon, ::after,::before{
    width: 15px !important;
  }
  .navbar-brand img{
    width: 45px;
    height: 45px;
  }
}
@media (max-width: 400px){
  h1{
    font-size: 12px !important;
    font-weight: 500;
  }
}
@media (max-width: 600px){
  .navbar-brand {
    margin-right: 0 !important;
  }
}
@media (max-width: 1200px){
  .navbar-nav .nav-item a{
    font-size: 0.8rem;
    text-wrap: nowrap;
  }
}*/
</style>