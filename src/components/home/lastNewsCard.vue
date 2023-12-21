<template>
  <div class="container">
    <div class=" row card p-2 d-flex flex-column flex-md-row border-0 mt-3 mb-4 py-4 d-none d-md-flex "
         v-for="item in props.data" :key="item">
      <div class="col-lg-4 col-md-3 p-0 d-flex align-items-center">      <!-- قرار گرفتن عکس دروسط کادر-->
        <div class=" card-header bg-transparent  p-0 border-0 ">
          <figure class="">
            <img src="@/assets/icon/lastNews/last-news-one.png" alt="">
          </figure>
        </div>
      </div>
      <div class="content-news d-flex flex-column p-0 px-md-3   col-lg-8 col-md-9 ">
        <div class="card-body p-0">
          <div class="top-title-news d-none d-lg-block" :class="{remove: props.theme === true }">
            <span>{{ item.top_card_header }}</span>
          </div>
          <div class="card-title-news py-2"><h2 class="card-title m-0">{{ item.card_title }}</h2></div>
          <div class="card-text-news"><p class="card-text">{{ item.card_body }}</p></div>
        </div>
        <div
            class="card-footer p-0 border-0 align-items-baseline bg-transparent d-flex flex-row justify-content-between">
          <schoolVisitDate windowLastNews="removeAuthor" :data="props.data"/>
          <div class="more">
            <router-link class=" px-3 py-2 text-decoration-none" to="">{{ item.card_more }}</router-link>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>
<script setup>
import {defineProps} from 'vue'
import schoolVisitDate from '@/components/cardInfo/authorVisitDate.vue'
const props = defineProps(['data', 'theme'])
</script>
<style scoped>
.container {
  overflow: hidden;
  position: relative;
}

figure {
  border-radius: 8px;
  overflow: hidden;
  margin: 0;
}

figure img {
  width: 100%;
  height: 100%;
}



.top-title-news {
  font-weight: 400;
  font-size: 10px;
  line-height: 15.65px;
  letter-spacing: -2.5%;
  text-align: right;
  color: #8a8a8a;
  position: relative;
  right: 10px;
}

.top-title-news::before {
  content: '';
  background: #8DD4DA;
  border-radius: 20px;
  width: 7px;
  height: 7px;
  position: absolute;
  right: -12px;
  bottom: 4px;
}

.card-title-news h2 {
  font-weight: 700;
  font-size: 15.27px;
  line-height: 23.9px;
  letter-spacing: -2.5%;
  text-align: right;
  color: #095195;
}

.card-text-news p {
  font-weight: 400;
  font-size: 11.5px;
  line-height: 23.52px;
  letter-spacing: -6%;
  text-align: justify;
  color: #555555;
}

.card-text-news p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.top-title-news.remove {
  display: none !important;
}

div > a {
  color: #12122f !important;
  font-size: 9.56px;
  font-weight: 400;
//line-height: 17.93; letter-spacing: -3.5%; text-align: justify;
  border: 1px solid #095195;
  border-radius: 16px;
  height: 26px !important;
  max-width: 96px !important;
}

.card {
  position: relative;
}

.container > .row.card::after {
  content: "";
  width: 100%;
  height: 10px;
  position: absolute;
  bottom: 0;
  border-bottom: rgba(0, 0, 0, 0.15) dashed 1px;
  transform: translateY(50%) scale(2.5);
}

.container > .row.card:last-child::after  {
  border-bottom: 0 !important;
}

@media (max-width: 400px ) {
  .more a {
    font-size: 8px;
    padding: 8px 10px !important;
  }
}
</style>