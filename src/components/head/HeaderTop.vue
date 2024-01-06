<template>
  <div class="container-fluid p-0 d-flex align-items-center">
    <nav class="navbar w-100 navbar-expand-lg d-flex align-items-center p-0">
      <div class="container-lg d-flex align-items-center">
        <router-link
          class="navbar-brand d-flex align-items-center me-lg-0"
          to="/"
        >
          <img src="@/assets/navbar/brand-light.png" alt="brand-light-icon">
          <h1 class="">حوزه علمیه خواهران گرگان</h1>
        </router-link>
        <button
          class="btn btn-sm navbar-toggler bg-transparent border border-2"
          type="button"
          @click="navbarMobile = true"
        >
          <span class="navbar-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item mx-2" v-for="item in items" :key="item">
              <router-link
                class="nav-link p-0"
                aria-current="page"
                :to="item.url"
                >{{ item.name }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <Transition mode="out-in" name="slide-fade"
        ><NavbarMobile
          v-if="navbarMobile"
          :url="items"
          @closeNavbarMobile="closeNavbarMobile"
      /></Transition>
    </nav>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import NavbarMobile from "./NavbarMobile.vue";
const navbarMobile = ref(false);
function closeNavbarMobile() {
  navbarMobile.value = false;
}
const items = ref([
  { name: "صفحه اصلی", url: "/" },
  { name: "حوزه مدیریت ", url: "" },
  { name: " معاونت پژوهش", url: "" },
  { name: "معاونت آموزش", url: "/education-List/education-page" },
  { name: "چند رسانه ای ", url: "" },
  { name: "تماس با ما ", url: "/contact-us" },
  { name: "اخبار ", url: "/news/newsPage" },
  { name: "درباره ما", url: "" },
]);
watch(navbarMobile, () => {
  if (navbarMobile.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-leave-active {
  transition: all 1s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
}

.container-fluid {
  height: 140px;
}
.navbar {
  background-color: #095195;
  height: 70px;
}
.navbar-brand img {
  width: 61px;
  height: 61px;
}
.navbar-brand h1 {
  font-family: "IranianSans";
  font-weight: 700 !important;
  font-size: 15px;
  text-align: justify !important;
  position: relative;
  top: 5px;
}
.navbar-brand:hover {
  color: #fff;
}
.navbar-nav .nav-item a,
.navbar-brand {
  color: #fff;
  font-family: "IranianSans";
}
.navbar-nav .nav-item a {
  font-size: 0.95rem;
  text-wrap: nowrap;
}
button.navbar-toggler {
  width: 35px;
  height: 30px;
}
button.navbar-toggler:active {
  box-shadow: none;
}
button.navbar-toggler:focus {
  box-shadow: none;
}
.navbar-icon {
  position: relative;
  right: -6px;
  width: 20px;
  height: 3px;
  background-color: #ffffff;
  display: block;
  border-radius: 5px;
}
.navbar-icon::after {
  content: "";
  position: absolute;
  width: 20px;
  top: 8px;
  left: 0;
  right: 0;
  height: 3px;
  background-color: #ffffff;
  border-radius: 5px;
}
.navbar-icon::before {
  content: "";
  position: absolute;
  width: 20px;
  bottom: 8px;
  left: 0;
  right: 0;
  height: 3px;
  background-color: #ffffff;
  border-radius: 5px;
}
.nav-item {
  font-weight: 500 !important;
  font-size: 14.84 !important;
  letter-spacing: -4.5% !important;

 
}
ul {
  grid-row-gap: 10.73px;
}
@media (max-width: 280px) {
  .navbar-brand h1 {
    font-size: 10px !important;
    font-weight: 500;
  }
  button.navbar-toggler {
    width: 30px !important;
    height: 30px !important;
  }
  span.navbar-icon,
  ::after,
  ::before {
    width: 15px !important;
  }
  .navbar-brand img {
    width: 45px;
    height: 45px;
  }
}
@media (max-width: 400px) {
  h1 {
    font-size: 12px !important;
    font-weight: 500;
  }
}
@media (max-width: 600px) {
  .navbar-brand {
    margin-right: 0 !important;
  }
}
@media (max-width: 1200px) {
  .navbar-nav .nav-item a {
    font-size: 0.8rem;
    text-wrap: nowrap;
  }
}
</style>
