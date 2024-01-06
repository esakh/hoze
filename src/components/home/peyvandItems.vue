<script setup>
import {defineProps} from 'vue'

const props = defineProps(['data'])
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Controller, Autoplay} from 'swiper/modules';
import 'swiper/css';


</script>

<template>

  <div class="container-lg mt-5 ">
    <div class="row ">
      <swiper
          :autoplay="{
        delay:4000
          }"
          :slidesPerView="'auto'"
          :loop="true"
          :spaceBetween="30"
          :pagination="{
      clickable: true,
   }"

          :modules="[Controller , Autoplay ]"
          :controller="{ control: controlledSwiper }"
          class="mySwiper"
      >
        <swiper-slide v-for="item in props.data" class="py-5 " :key="item">
          <div class="inner-peyvand bg-white ">
            <div class="d-flex flex-column justify-content-center align-items-center position-relative h-100">
              <div class="peyvand-image"><img src="@/assets/icon/peyvand/peyvand.png" :alt="item.title"></div>
              <div class="peyvand-title"><h2>{{ item.title }}</h2></div>
              <div class="peyvand-body"><p class="peyvand-text-body">{{ item.text }}</p></div>
              <div class="crown">
                <img class="crown-top" src="@/assets/icon/crownFlower/crownFlower.png" :alt="item.title">
                <img class="crown-bottom" src="@/assets/icon/crownFlower/crownFlower.png" :alt="item.title">
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/style/swiperPeyvand.css";

.peyvand-image {
  width: 33px;
  height: 33px;
}

.peyvand-title h2 {
  font-weight: 700;
  font-size: 15px;
  line-height: 25.43px;
  color: #095195;
}

.peyvand-body p {
  font-weight: 400;
  font-size: 9px;
  line-height: 15.26px;
}

.inner-peyvand {
  width: 157px;
  height: 139px;
  border-radius: 12px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
}

.crown-top {
  width: 66.99px;
  height: 66.44px;
  position: absolute;
  top: -18%;
  left: -18%;
}

.crown-bottom {
  position: absolute;
  bottom: -18%;
  right: -18%;
  width: 66.99px;
  height: 66.44px;
  transform: rotate(180deg);
}

swiper {
  width: 100%;
}

.swiper-slide {
  width: 157px !important;
}

.position-relative {
  transition: transform 0.5s;
}

.inner-peyvand .position-relative:hover {
  transform: scale(1.05);
}
</style>