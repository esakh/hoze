<script setup>
import {ref} from 'vue'
import CategoryTitle from "@/components/home/categoryTitle.vue";
import MostVisitedCard from "@/components/home/aside/mostVisitedCard.vue";
const name = ref('پربازدیدترین ها')
const data = ref([
  {
    category:'هنری',
    body:'با هم برای آرمانِ امام ، نشست هم اندیشی پیرامون وحدت حوزه و دانشگاه',
    color:'#127D6A'
  },
  {
    category:'فیلم خبری',
    body:'با هم برای آرمانِ امام ، نشست هم اندیشی پیرامون وحدت حوزه و دانشگاه',
    color:'#B8A635'
  },
  {
    category:'آموزشی',
    body:'با هم برای آرمانِ امام ، نشست هم اندیشی پیرامون وحدت حوزه و دانشگاه',
    color:'#B8A635'
  },
  {
    category:'هنری',
    body:'با هم برای آرمانِ امام ، نشست هم اندیشی پیرامون وحدت حوزه و دانشگاه',
    color:'#F47F27'
  },
  {
    category:'آموزشی',
    body:'با هم برای آرمانِ امام ، نشست هم اندیشی پیرامون وحدت حوزه و دانشگاه',
    color:'#F47F27'
  },
])
</script>

<template>
<div class="container position-relative pt-5 py-2 my-lg-3 bg-white">
  <div class="row"><categoryTitle  :name="name"/></div>
  <div class="row">
    <div class="header-mostVisitedCard d-flex justify-content-end"><router-link to="" class="all-school-news text-decoration-none">همه اطلاعیه ها ...</router-link></div>
  </div>
  <div class="row overflow-hidden">
    <most-visited-card :data="data"/>
  </div>
</div>
</template>

<style scoped>
.container{
  border-radius: 11px;
  background-color: #FFFFFF;
}
.header-mostVisitedCard {
  position: absolute;
  top: 17px;
  left: 34px;
}
.header-mostVisitedCard a {
  font-weight: 400 ;
  font-size: 13.56px;
  line-height:25.43px ;
  text-align: justify;
  color: #095195;
}
</style>