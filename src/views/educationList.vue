<script setup>
import {onMounted, ref, watch} from 'vue'

const theme = ref(true)
const show = ref(false)
const activeShowInMobileMode = ref(false)
// const width = ref(screen.width)
const showMostVisitedNews = ref(false)

// console.log(width.value)
const mostVisited = ref(null)

const width = ref(window.innerWidth)
if (window.innerWidth > 767.9) {
  document.onload = showMobileMode()
}
window.addEventListener('resize', () => {
  width.value = window.innerWidth
})
watch(width, () => {
  if (width.value > 767.9) {
    show.value = true
  } else {
    show.value = false
  }
})

function showMobileMode() {
  activeShowInMobileMode.value = !activeShowInMobileMode.value
  if (activeShowInMobileMode.value) {
    show.value = true
  } else {
    show.value = false
  }
}




onMounted(()=>{
  const showMore = document.querySelector('.category-news')
  const btn = document.querySelector('.category-news-btn')
  btn.addEventListener('click' , ()=>{
    showMore.classList.toggle('active')
  })
})

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
import categoryNews from '@/components/categoryNews/categoryNews.vue'
</script>

<template>
  <div class="container-lg ">
    <div class="row">
      <bread-crumb :data="dataBreadCrumb"/>
    </div>
    <div class="row">
      <main>
        <div class="row d-flex flex-column-reverse flex-md-row ">
          <article class="col-md-8">
            <div class="special-news p-4 rounded-4 ">
              <last-news-card :theme="theme" :data='data'/>
            </div>
          </article>
          <aside class="col-md-4">
            <div class="search-box mb-4">
              <search-box/>
            </div>
            <div class="category-news-container">
              <button  class="btn category-news-btn w-100 d-md-none mb-3"> دسته بندی اخبار</button>
              <transition> <categoryNews   class=" category-news " /></transition>
            </div>

            <div class="most-visited my-2 my-lg-0">
              <button  @click="showMobileMode" class="btn  w-100 d-md-none mb-3">پربازدید ترین ها</button>
              <mostvisited :showNews="showMostVisitedNews " :educationPage="true" ref="mostVisited" v-if="show"/>

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


.btn {
  font-weight: 700;
  font-size: 9px;
  color: #FFFFFF;
  background-color: #095195;
}
.btn:active{
  transform: scale(0.99) !important;
  background-color: #095195 !important;
  color: #FFFFFF !important;
}
.category-news {
  display:none
}

@media (min-width:768px){
  .category-news {display:block}
}
@media (max-width:768px){
  .category-news.active{
    display: block !important; ;
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>