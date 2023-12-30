<script setup>
import {ref , defineProps} from 'vue'
import CategoryTitle from "@/components/home/categoryTitle.vue";
import MostVisitedCard from "@/components/home/aside/mostVisitedCard.vue";
const name = ref('پربازدیدترین ها')
const props = defineProps(['removeMargin', 'showNews'])
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
    category:'هنری',
    body:'با هم برای آرمانِ امام ، نشست هم اندیشی پیرامون وحدت حوزه و دانشگاه',
    color:'#F47F27'
  },
  {
    category:'آموزشی',
    body:'با هم برای آرمانِ امام ، نشست هم اندیشی پیرامون وحدت حوزه و دانشگاه',
    color:'#B8A635'
  },
  {
    category:'آموزشی',
    body:'با هم برای آرمانِ امام ، نشست هم اندیشی پیرامون وحدت حوزه و دانشگاه',
    color:'#F47F27'
  },
])
</script>

<template>
<div class="container position-relative pt-4 pt-md-5 py-2 mb-3 mb-lg-0 my-lg-3 bg-white " :class="{removeMargin:props.removeMargin===true}">
  <div class="row d-none d-md-block "><categoryTitle most="most" :data="name"  /></div>
  <div class="row most-visited-container mb-3 mb-md-0 ">
    <div class="header-mostVisitedCard d-flex justify-content-end"><router-link to="" class="all-school-news text-decoration-none">همه اطلاعیه ها ...</router-link></div>
    <div class="header-mostVisitedCard-title d-md-none "><h3>پربازدید ترین ها</h3></div>
  </div>
  <div class="row overflow-hidden">
    <most-visited-card :data="data" changeAuthorIcon="true" :showMostVisitedNews="props.showNews" />
  </div>
</div>
</template>

<style scoped>
/* start remove margin for news Page*/
.removeMargin{
  margin-top: 0 !important;
}
/* end remove margin for news Page*/

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
@media(max-width: 767.9px){
  .header-mostVisitedCard{
    position: static;
  }
  .most-visited-container{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-areas: 't t t t t t t m m m m m ';
    align-items: baseline;
  }
  .header-mostVisitedCard{
    grid-area: m;
  }
  .header-mostVisitedCard-title{
    grid-area: t;
  }
  .header-mostVisitedCard a{
    grid-area: m;
  }
  .header-mostVisitedCard-title h3{
    font-weight: 700;
    font-size: 14.91px;
    letter-spacing: -4.5%;
    color: #095195;
  }
}
@media (max-width: 767.9px) {
  .all-school-news{
    font-weight: 500;
    font-size: 13.42px;
    text-wrap: nowrap;
    color: #095195;
  }
  .header-mostVisitedCard-title h3{
    font-weight: 500;
    font-size: 14.91px;
    letter-spacing: -4.5%;
    color: #095195;
    text-wrap: nowrap;
  }
}
</style>