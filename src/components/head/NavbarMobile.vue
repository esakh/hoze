<template>
  <div class="backdrop active d-flex justify-content-center " @click.self="closeNavbar">
    <div class="close-navbar d-flex align-items-center border border-light-subtle rounded-circle border-2 justify-content-center"  @click.self="closeNavbar">
      <span class="btn-close btn-close-white" @click="closeNavbar " ></span></div>
    <ul ref="ul" class="nav flex-column justify-content-center mx-auto " :class="{active : props.close === false }">
      <li class="nav-item " v-for="item in props.url" :key="item">
        <routerLink class="nav-link text-decoration-none" :to="item.url">
          {{ item.name }}
        </routerLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref, defineEmits, defineProps, watch} from 'vue'
import {useRoute} from "vue-router";

const ul = ref(null)
const route = useRoute()
const props = defineProps(['close','url'])
const emit = defineEmits(['closeNavbarMobile'])
watch(route , ()=>{
  closeNavbar()
})
function closeNavbar(){
  emit('closeNavbarMobile')
}

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


.nav-item:hover a{
  color: #fff !important;
}
.nav-link {
  font-family: 'IranianSans';
  font-size: 15.98px;
  line-height: 27.1px;
  font-weight: 500;
  position: relative;
  color: #FFFFFF;

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
  transform: translateY(-200%)translateX(15%) ;


}

.backdrop.active ul {
  transform: translate(0)translateX(15%);
  animation: translate 3s ease-out 1  ;
}
.backdrop ul.active{
  transform: translate(0)translateX(15%);
  animation: close 3s ease-out 1  ;
}
a{
position: relative;
}
a:after{
  content: "\203A";
  position: absolute;
}

@keyframes translate {
  from {
    transform: translatey(-200%)translateX(15%);
  }
  to {
    transform: translatey(0)translateX(15%);
  }
}
@keyframes close {
  from {
    transform: translatey(0%)translateX(15%);
  }
  to {
    transform: translatey(-200%)translateX(15%);
  }
}
</style>