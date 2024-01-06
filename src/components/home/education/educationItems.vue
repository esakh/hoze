<script setup>
import {defineProps} from "vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css"
import {Autoplay} from "swiper/modules";
import 'swiper/css/pagination'

const props = defineProps(['educations'])

</script>

<template>
  <div class=" container-lg ">
    <div class="row">
      <swiper
          :slides-per-view="1"
          :space-between="30"

          :autoplay="{
        delay:4000
      }"
          :pagination="{
        clickable:true
      }"
          :modules="[Autoplay ]"
          :breakpoints="{
        '1200':{
          spaceBetween:30,
          slidesPerView:3
        },
        '850':{
          spaceBetween:30,
          slidesPerView:3
        },
        '567.9':{
          spaceBetween:30,
          slidesPerView:2
        }
}"
      >
        <swiperSlide v-for="edu in props.educations" :key="edu">
          <!--          <div class="col-md-4" >-->
          <div class="card border-0 overflow-hidden">
            <div class="card-header bg-white border-0 p-0">
              <router-link to="">
                <figure>
                  <img src="@/assets/icon/education/camera.png" class="card-img-top" alt="">
                </figure>
              </router-link>
            </div>
            <div class="card-body pt-0">
              <div class="full-date mb-2"><span>{{ edu.time }}</span></div>
              <router-link to="" class="content text-decoration-none">
                <h2 class="content-title card-title">{{ edu.title }}</h2>
                <p class="content-text">{{ edu.text }}</p>
              </router-link>
            </div>
            <div class="card-footer bg-white border-0 d-flex flex-row-reverse justify-content-between">
              <div class="more">
                <router-link to="">{{ edu.more }}</router-link>
              </div>
              <ul class="see list-unstyled d-flex align-items-baseline p-0">
                <li class="icon mx-1  "><img src="@/assets/icon/education/eye.png" alt="" class="pt-1"></li>
                <li class="numbers mx-1">{{ edu.number }}</li>
                <li class="text mx-1">{{ edu.see }}</li>
              </ul>
            </div>
          </div>
          <!--          </div>-->
        </swiperSlide>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
.card-header img {
  height: 100%;
  width: 100%;

}

figure {
  height: 151px;
  max-width: 496px;
  overflow: hidden;
}

.card figure > img {
  transition: 0.5s;

}

.card:hover figure > img {
  transform: scale(1.1);
}

.card:hover .card-title {

  font-size: 15px
}

.full-date {
  font-weight: 300;
  font-size: 10.82px;
  line-height: 21.64px;
  text-align: justify;
  color: #252525;
}

.card-title {
  font-weight: 700;
  font-size: 13.71px;
  line-height: 22.52px;
  text-align: right;
  color: #095195;
  transition: font-size 0.5s;
}

.content-text {
  font-weight: 400;
  font-size: 10.85px;
  line-height: 24.65px;
  text-align: justify;
  color: #353535;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
}

.icon {
  width: 12.33px;
  height: 9.74px;
}

.numbers, .text {
  font-weight: 400;
  font-size: 10px;
  text-align: right;
  color: #6f6e6e;
}

.more a {
  color: #095195;
  font-weight: 400;
  font-size: 10px;
  line-height: 23px;
  text-align: right;
  position: relative;
  text-decoration: none;
}

.more a::after {
  content: '\27A1';
  right: -15px;
  transform: rotate(180deg);
  bottom: -1px;
  position: absolute;
  font-size: 0.8rem;
}

@media (max-width: 767.99) {
}
</style>