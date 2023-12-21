<script setup>
import {defineProps} from 'vue'
import schoolVisitDate from '@/components/cardInfo/authorVisitDate.vue'
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/css'
import {Controller} from "swiper/modules";

const props = defineProps(['data', 'theme'])

</script>

<template>
  <div class="container">
    <swiper
        :slides-per-view="1"
        :loop="true"
        :space-between="30"
        :pagination="{
      clickable: true,
    }"
        :modules="[Controller]"
        :controller="{ control: controlledSwiper }"
        class="d-md-none"
    >
      <swiperSlide v-for="item in props.data" :key="item">
        <div class="card-swiper border-0 mt-4">
          <figure class="">
            <img src="@/assets/icon/lastNews/last-news-one.png" class="card-img-top w-100 h-100" alt="">
          </figure>
          <div class="card-body px-0">
            <h2 class="card-title">{{ item.card_title }}</h2>
            <p class="card-text">{{ item.card_body }}</p>
            <div class="row d-flex justify-content-between ali">
              <div class="time-create col-8">
                <schoolVisitDate windowLastNews="removeAuthor" :data="props.data"/>
              </div>
              <div class="more-information col-4">
                <router-link class=" px-3 py-2 text-decoration-none" to="">{{ item.card_more }}</router-link>
              </div>
            </div>
          </div>
        </div>
      </swiperSlide>
    </swiper>
  </div>
</template>

<style scoped>
img{
  border-radius: 16px;
}
.card-title{
  font-weight: 700;
  font-size: 12px;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
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

</style>