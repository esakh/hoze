<script setup>
import {defineProps} from 'vue'
import authorVisitDate from '@/components/cardInfo/authorVisitDate.vue'
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/css'
import {Controller , Autoplay} from "swiper/modules";

const props = defineProps(['data', 'theme'])

</script>

<template>
  <div class="container">
    <swiper
        :slides-per-view="'auto'"
        :effect="'fade'"
        :loop=true
        :space-between="15"
        :autoplay="{
        delay:2500
}"
        :pagination="{
      clickable: true,
    }"
        :modules="[Controller , Autoplay]"
        :controller="{ control: controlledSwiper }"
        class="d-md-none"
    >
      <swiperSlide v-for="item in props.data" :key="item" class=".swiper-slide">
        <div class="card-swiper bg-transparent border-0 mt-4">
          <figure class="">
            <img src="@/assets/icon/lastNews/last-news-one.png" class="card-img-top w-100 h-100" alt="">
          </figure>
          <div class="card-body px-0">
            <h2 class="card-title">{{ item.card_title }}</h2>
            <p class="card-text">{{ item.card_body }}</p>
            <div class="row d-flex mb-3 justify-content-between align-items-center ali">
              <div class="time-create col-8 d-flex">
                <authorVisitDate windowLastNews="removeAuthor" :data="props.data" theme="changeFontSize"/>
              </div>
              <div class="more-information col-4 d-flex justify-content-end">
                <router-link class=" p-1 text-decoration-none " to="">{{ item.card_more }}</router-link>
              </div>
            </div>
          </div>
        </div>
      </swiperSlide>
    </swiper>
  </div>
</template>

<style scoped>

.card img{
    object-fit: cover;
}
img{
  border-radius: 16px;
}
.card-title{
  font-weight: 700;
  font-size: 12.97px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  letter-spacing: -2.5%;
  padding-bottom: 0.5rem;
}
  .card-text{
    font-size: 10px;
    font-weight: 400;
    display: -webkit-box;
    text-overflow: ellipsis;
    text-align: justify;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.5rem;
  }
  .more-information a{
    font-size: 7px;
    font-weight: 400;
    border-radius: 30px;
    border: 1px solid #095195;
    color: #095195 !important;
  }
.more-information a::after{
  content: "\2190";
    font-size: 8px;
    color: #095195 !important;
  }
.swiper-slide{
  width: 90%;
}
</style>