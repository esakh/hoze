<script setup>
import {ref, watch} from 'vue'


const theme = ref(true)
const show = ref(false)
const activeShowInMobileMode = ref(false)
// const width = ref(screen.width)
const showMostVisitedNews = ref(false)

// console.log(width.value)
const mostVisited = ref(null)

const width = ref(window.innerWidth)
document.onload=showMobileMode()
window.addEventListener('resize' , ()=>{
  width.value = window.innerWidth
})
watch(width ,()=>{
  if (width.value > 991.9){
    show.value = true
  }
  else {
    show.value = false
  }
})
function showMobileMode(){
  activeShowInMobileMode.value = !activeShowInMobileMode.value
  if (activeShowInMobileMode.value){
    show.value = true
  }
  else {
    show.value = false
  }
}
const dataBreadCrumb = ref({
  pages: [
    {
      name: 'صفحه اصلی',
      url:
          '/'
    }
    ,
    {
      name: 'اخبار ',
      url:
          '/news'
    }
    ,
    {
      name: ' صفحه اخبار ',
      url:
          '/newsPage'
    }

  ]
})
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
import Mostvisited from "@/components/home/aside/mostVisited.vue";
import SearchBox from "@/components/search/searchBox.vue";
import LastNewsCard from "@/components/home/lastNewsCard.vue";
import PagePagination from "@/components/pagination/pagePagination.vue";
import BreadCrumb from "@/components/breadCrumb/breadCrumb.vue";
</script>

<template>
  <div class="container">
    <div class="row">
      <bread-crumb :data="dataBreadCrumb"/>
    </div>
    <div class="row">
      <main>
        <div class="row d-flex flex-column-reverse flex-lg-row ">
          <article class="col-lg-8">
            <div class="special-news p-4 rounded-4 ">
              <last-news-card :theme="theme" :data='data'/>
            </div>
          </article>
          <aside class="col-lg-4">
            <div class="search-box mb-4">
              <search-box/>
            </div>
            <div class="most-visited my-3 my-lg-0">
              <button @click="showMobileMode" class="btn btn-outline-primary w-100 d-lg-none mb-3">پربازدید ترین ها
              </button>
              <mostvisited :showNews="showMostVisitedNews" ref="mostVisited" v-if="show"/> <!--class=" d-none d-lg-block" -->

            </div>
          </aside>
        </div>
        <footer class="">
          <div class="pagination  my-5"><!---->
            <page-pagination/>
          </div>
        </footer>
      </main>
    </div>
  </div>
</template>

<style scoped>
.special-news {
  background-color: #FFFFFF;
}

.pagination {
//width: 370px; margin: auto;
}
</style>