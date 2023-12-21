<script setup>
import {ref} from 'vue'
import SchoolNewsCard from "@/components/home/aside/schoolNewsCard.vue";
import CategoryTitle from "@/components/home/categoryTitle.vue";
const name = ref('اطلاعیه های مدرسه')
const data = ref([
  {
    card_body: 'ساخت دومین سقاخانه امامزاده سید محمد عراق به سوریه ',
    card_date: ' 12 شهریور 1402',
    card_lastVisited: ' بازدید 5812',
    card_author: ' عیسی خانزادی',
    card_date_day:'02',
    card_date_mounth:'آبان'
  } ,
  {
    card_body: 'ساخت دومین سقاخانه امامزاده سید محمد عراق به سوریه ',
    card_date: ' 12 شهریور 1402',
    card_lastVisited: ' بازدید 5812',
    card_author: ' عیسی خانزادی',
    card_date_day:'02',
    card_date_mounth:'آبان'
  },
  {
    card_body: 'ساخت دومین سقاخانه امامزاده سید محمد عراق به سوریه ',
    card_date: ' 12 شهریور 1402',
    card_lastVisited: ' بازدید 5812',
    card_author: ' عیسی خانزادی',
    card_date_day:'02',
    card_date_mounth:'آبان'
  },
  {
    card_body: 'ساخت دومین سقاخانه امامزاده سید محمد عراق به سوریه ',
    card_date: ' 12 شهریور 1402',
    card_lastVisited: ' بازدید 5812',
    card_author: ' عیسی خانزادی',
    card_date_day:'02',
    card_date_mounth:'آبان'
  }
])
</script>

<template>
<div class="container  pt-5 pb-3 mt-4 mt-lg-0 bg-white position-relative">
  <div class="row"><categoryTitle :name="name"/></div>
  <div class="row ">
    <div class="header-schoolNewsCard d-flex justify-content-end"><router-link to="" class="all-school-news text-decoration-none">همه اطلاعیه ها ...</router-link></div>
  </div>
<div class="row">
  <div class="news-scholl-it overflow-hidden">
    <SchoolNewsCard :data="data" />
  </div>
  <div class="news-scholl-it"></div>
</div>
</div>
</template>

<style scoped>
.container{
  border-radius:11px ;
}
.header-schoolNewsCard{
  position: absolute;
top: 24px;
left: 24px;
}
.header-schoolNewsCard a{

  font-weight: 400 ;
  font-size: 13.56px;
//line-height: 25.43;
  letter-spacing: -3.5%;
  text-align: justify;
  color: #095195;
}
</style>