<script setup>
import {onMounted, ref , provide ,defineProps} from 'vue'
import schoolNewsCard from "@/components/home/aside/schoolNewsCard.vue";
import CategoryTitle from "@/components/home/categoryTitle.vue";
const schoolContainer = ref(null)
const removeDate = ref(false)
const props = defineProps(['theme'])
onMounted(()=>{
window.addEventListener('resize' , ()=>{
  if(window.innerWidth < 767.9){
    removeDate.value=true
  }else {
    removeDate.value=false
  }
})
  if (window.innerWidth < 767.9){
    provide('removeDate' , removeDate)
  }
})

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
<div ref="schoolContainer" class="container-lg  pt-4  pt-md-5 pb-0 mt-4 mt-lg-0 bg-white position-relative">
  <div class="row d-none d-md-block">
    <categoryTitle schoolNews="schoolNews" :data="name" />
  </div>
  <div class="row category-mobile-container mb-3 mb-md-0 ">
    <div class="header-schoolNewsCard d-flex justify-content-end"><router-link to="" class="all-school-news text-decoration-none">همه اطلاعیه ها ...</router-link></div>
    <div class="category-mobile d-md-none">{{name}}</div>
  </div>
<div class="row">
  <div class="news-scholl-it overflow-hidden">
    <schoolNewsCard :data="data" :theme="props.theme" />
  </div>
  <div class="news-scholl-it"></div>
</div>
</div>
</template>

<style scoped>
.container-lg{
  border-radius:11px ;
}
.header-schoolNewsCard{
  position: absolute;
top: 15px;
left: 15px;
}
.header-schoolNewsCard a{

  font-weight: 400 ;
  font-size: 13.56px;
  line-height: 1rem;
  text-align: justify;
  color: #095195 ;
}

@media (max-width: 767.9px) {
  .header-schoolNewsCard{
    position: static;
  }
.category-mobile-container{
  display: grid;
  grid-template-columns: repeat(2 , 1fr);
  grid-template-areas: 't t t t t t t t m m m m ';
}
.header-schoolNewsCard {
  grid-area: m;
}
.category-mobile-container {
  grid-area: t;
  color: #095195;
  font-weight: 700;
  font-size: 14.91px;
}
}
@media(max-width: 767.9px){
  .category-mobile{
    font-size: 14.92px;
    font-weight: 500;
    text-wrap: nowrap;
  }
  .all-school-news{
    font-weight: 500;
    font-size: 13.42px;
  }
}
</style>