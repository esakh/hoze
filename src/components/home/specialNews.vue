<template>
  <div class="container bg-white p-3">
    <div class="row special-news px-1">
      <div class="special-news-title mb-3">
        <h3 class="last-news">  اخبار ویژه </h3>
      </div>
      <swiper
          :slidesPerView="1"
          :loop="true"
          :space-between="15"
          :pagination="{
            clickable:true,
            }"
          :navigation="true"
          :modules="[Navigation]"
          class="mySwiper d-flex justify-content-between"
          :breakpoints='{
              "768":{
                slidesPerView:1
                },
                "960":{
                slidesPerView:2
                },
                "1150":{
                slidesPerView:3
                },
            }'
      >
        <swiper-slide v-for="item in items" :key="item">
          <div class="card  p-0 m-0 flex-row">
            <div class="card-header p-0 ">
              <img src="@/assets/icon/specialNews/Frame%20145.png" alt="">
            </div>
            <div class="d-flex flex-column justify-content-between">
              <div class="card-body py-0">
                <p class="card-text">{{ item.text }}</p>
              </div>
              <div class="card-footer">
                <span class="time">{{ item.time }}</span>
                <span class="more-information">{{ item.more }}</span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
// import { useSwiperSlide } from 'swiper/vue'
// import { useSwiper } from 'swiper/vue';
// const swiper = useSwiper()
// const swiperSlide = useSwiperSlide()

import {ref} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Navigation} from "swiper/modules";
import 'swiper/css'
import 'swiper/css/pagination'
import "@/assets/style/swiperSpecialNews.css";

const items = ref([
  {
    time: ' 24 شهریور 1402 ',
    more: 'اطلاعات بیشتر',
    text: 'گزارش تصویری بازدید معاون‌ آموزش حوزه‌های علمیه از نمایشگاهگزارش تصویری بازدید معاون‌ آموزش حوزه‌های علمیه از نمایشگاه دستاوردهای مجتمع آموزشی پژوهشی تبلیغگزارش  \n'
  }, {
    time: ' 24 شهریور 1402 ',
    more: 'اطلاعات بیشتر',
    text: 'گزارش تصویری بازدید معاون‌ آموزش حوزه‌های علمیه از نمایشگاهگزارش تصویری بازدید معاون‌ آموزش حوزه‌های علمیه از نمایشگاه دستاوردهای مجتمع آموزشی پژوهشی تبلیغگزارش  \n'
  }, {
    time: ' 24 شهریور 1402 ',
    more: 'اطلاعات بیشتر',
    text: 'گزارش تصویری بازدید معاون‌ آموزش حوزه‌های علمیه از نمایشگاهگزارش تصویری بازدید معاون‌ آموزش حوزه‌های علمیه از نمایشگاه دستاوردهای مجتمع آموزشی پژوهشی تبلیغگزارش  \n'
  }, {
    time: ' 24 شهریور 1402 ',
    more: 'اطلاعات بیشتر',
    text: 'گزارش تصویری بازدید معاون‌ آموزش حوزه‌های علمیه از نمایشگاهگزارش تصویری بازدید معاون‌ آموزش حوزه‌های علمیه از نمایشگاه دستاوردهای مجتمع آموزشی پژوهشی تبلیغگزارش  \n'
  }, {
    time: ' 24 شهریور 1402 ',
    more: 'اطلاعات بیشتر',
    text: 'گزارش تصویری بازدید معاون‌ آموزش حوزه‌های علمیه از نمایشگاهگزارش تصویری بازدید معاون‌ آموزش حوزه‌های علمیه از نمایشگاه دستاوردهای مجتمع آموزشی پژوهشی تبلیغگزارش  \n'
  }, {
    time: ' 24 شهریور 1402 ',
    more: 'اطلاعات بیشتر',
    text: 'گزارش تصویری بازدید معاون‌ آموزش حوزه‌های علمیه از نمایشگاهگزارش تصویری بازدید معاون‌ آموزش حوزه‌های علمیه از نمایشگاه دستاوردهای مجتمع آموزشی پژوهشی تبلیغگزارش  \n'
  }
])
</script>

<style scoped>
@import "@/assets/style/swiperSpecialNews.css";

.container {
  border-radius: 16px;
}

h3 {
  font-size: 18px;
  font-weight: 700;
  color: rgba(9, 81, 149, 1);
}

.card {
  border: 0;
}

.card-header, .card-footer {
  background: #FFFFFF;
  border: 0;
}

.special-news
{
  position: relative;
}

.card-header img {
  width: 90px;
  height: 80px;

}

p {
  font-size: 10px;
  font-weight: 400;
  letter-spacing: -4.5%;
  line-height: 20px;
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
}

.card-footer {
  display: flex;
  justify-content: space-between;
}

.time, .more-information {
  font-size: 10px;
  font-weight: 400;
}

.more-information {
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 1rem;
  font-size: 8.56px;
  font-weight: 500;
//padding-left: 3px;
}

.more-information::after {
  position: absolute;
  content: "\2190";
  top: -3px;
  left: -14px;
  font-weight: bold;
  font-size: 13px;

}




</style>