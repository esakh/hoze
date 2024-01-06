<template>
  <div class="container-lg bg-white  pt-4 pt-md-4 pt-lg-4  px-3 position-relative">
    <div class="category-title d-none d-md-block">
      <categoryTitle :data="category" lastNews="lastNews"/>
    </div>
    <div class="last-news-title d-md-none"><h3>آخرین اخبار</h3></div>
    <div class="all-news-title">
      <router-link class="all-news-title-link text-decoration-none d-none d-md-block " to="">همه اخبار ...</router-link>
    </div>
    <div class="row d-none d-md-block">
      <last-news-card :data="data"/>
    </div>
    <div class="row d-md-none">
      <swiper-last-news-card :data ='data'/>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import lastNewsCard from '@/components/home/lastNewsCard.vue'
import categoryTitle from '@/components/home/categoryTitle.vue'
import SwiperLastNewsCard from "@/components/home/swiperLastNews/swiperLastNewsCard.vue";
const data = ref([
  {
    top_card_header: 'این متن فاقد اهمیت است و جهت پر کردن فضای بالای عنوان است ',
    card_title: 'با هم برای آرمان امام، نشست هم اندیشی پیرامون وحدت حوزه و دانشگاه ',
    card_body: 'شاخه دانشجویی بسیج مدرسه علمیه معصومیه (س) برگزار میکند حلقه سوم با هم برای آرمان نشیت هم اندیشی پیرامون "وحدت و دانشگاه" با حضور مسولین تشکل های دانشجویی استان قم و طلاب مدرسه علمیه معصومیه (س)... ',
    card_date: ' 12 شهریور 1402',
    card_lastVisited: ' بازدید 5812',
    card_author: ' عیسی خانزادی',
    card_more: ' اطلاعات بیشتر ',
  },
  {
    top_card_header: 'این متن فاقد اهمیت است و جهت پر کردن فضای بالای عنوان است ',
    card_title: 'با هم برای آرمان امام، نشست هم اندیشی پیرامون وحدت حوزه و دانشگاه ',
    card_body: 'شاخه دانشجویی بسیج مدرسه علمیه معصومیه (س) برگزار میکند حلقه سوم با هم برای آرمان نشیت هم اندیشی پیرامون "وحدت و دانشگاه" با حضور مسولین تشکل های دانشجویی استان قم و طلاب مدرسه علمیه معصومیه (س)... ',
    card_date: ' 12 شهریور 1402',
    card_lastVisited: ' بازدید 5812',
    card_author: ' عیسی خانزادی',
    card_more: ' اطلاعات بیشتر ',
  },
  {
    top_card_header: 'این متن فاقد اهمیت است و جهت پر کردن فضای بالای عنوان است ',
    card_title: 'با هم برای آرمان امام، نشست هم اندیشی پیرامون وحدت حوزه و دانشگاه ',
    card_body: 'شاخه دانشجویی بسیج مدرسه علمیه معصومیه (س) برگزار میکند حلقه سوم با هم برای آرمان نشیت هم اندیشی پیرامون "وحدت و دانشگاه" با حضور مسولین تشکل های دانشجویی استان قم و طلاب مدرسه علمیه معصومیه (س)... ',
    card_date: ' 12 شهریور 1402',
    card_lastVisited: ' بازدید 5812',
    card_author: ' عیسی خانزادی',
    card_more: ' اطلاعات بیشتر ',
  },
  {
    top_card_header: 'این متن فاقد اهمیت است و جهت پر کردن فضای بالای عنوان است ',
    card_title: 'با هم برای آرمان امام، نشست هم اندیشی پیرامون وحدت حوزه و دانشگاه ',
    card_body: 'شاخه دانشجویی بسیج مدرسه علمیه معصومیه (س) برگزار میکند حلقه سوم با هم برای آرمان نشیت هم اندیشی پیرامون "وحدت و دانشگاه" با حضور مسولین تشکل های دانشجویی استان قم و طلاب مدرسه علمیه معصومیه (س)... ',
    card_date: ' 12 شهریور 1402',
    card_lastVisited: ' بازدید 5812',
    card_author: ' عیسی خانزادی',
    card_more: ' اطلاعات بیشتر ',
  },
])
const category = ref('آخرین اخبار ')
</script>

<style scoped>
.container-lg{
  border-radius: 8px;
}
a{
  font-weight: 400;
  font-size: 13.56px;
  line-height: 0.3rem;
  text-align: justify;
}
.all-news-title{
  display: flex;
  justify-content: left;
  margin-left: 0.5rem;
}
.all-news-title-link{
  cursor: pointer !important;
  color: #095195;
}
@media (max-width: 767.99px) {
  .container{
    background-color: transparent !important;
  }
  .last-news-title h3{
    font-size: 14.91px;
    font-weight: 700;
    color: #095195 ;
  }
}
</style>