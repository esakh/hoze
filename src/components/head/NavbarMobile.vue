<template>
  <div class="backdrop active d-flex justify-content-center " @click.self="closeNavbar">
    <div class="close-navbar d-flex align-items-center border border-light-subtle rounded-circle border-2 justify-content-center"  @click.self="closeNavbar">
      <span class="btn-close btn-close-white" @click="closeNavbar"></span></div>
    <ul class="nav flex-column justify-content-center mx-auto ">
      <li class="nav-item " v-for="item in items" :key="item">
        <routerLink class="nav-link text-decoration-none" to="">
          {{ item }}
        </routerLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref  , defineEmits} from 'vue'
//
const emit = defineEmits(['closeNavbarMobile'])
function closeNavbar(){
  emit('closeNavbarMobile')
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
.backdrop {
  position: fixed;
  background-color: #095195;
  height: 100%;
  width: 100%;
  inset: 0;
  transition: all 5s ease;
  z-index: 99;
}

.nav {
  transform: translateX(25%) ;
}
.nav-item:hover a{
  color: #fff !important;
}
.nav-link {
  font-family: 'IranianSans';
  font-size: 15.98px;
  line-height: 27.1px;
  font-weight: 500;
  position: relative;

}

.nav-link::after {
  content: "\2039";
  position: absolute;
  font-weight: bold;
  transform: rotate(90deg);
  bottom: 5px;
  margin-right: 5px;
}

.close-navbar {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

ul {
  transform: translateY(-200%);
}

.backdrop.active ul {
  transform: translate(0);
  animation: translate 2s ease-out 1;
}

@keyframes translate {
  from {
    transform: translatey(-200%);
  }
  to {
    transform: translatey(0);
  }
}
</style>