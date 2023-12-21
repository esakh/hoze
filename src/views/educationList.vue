<script setup>
import {ref} from 'vue'

const theme = ref(true)
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
import MostVisited from "@/components/home/aside/mostVisited.vue";
import SearchBox from "@/components/search/searchBox.vue";
import LastNewsCard from "@/components/home/lastNewsCard.vue";
import PagePagination from "@/components/pagination/pagePagination.vue";
</script>

<template>
  <div class="container">
    <div class="row">
      <main>
        <div class="row">
          <article class="col-lg-8">
            <div class="special-news p-4 rounded-4 pt-5">
              <last-news-card :theme="theme" :data='data'/>
            </div>
          </article>
          <aside class="col-lg-4">
            <div class="search-box mb-4">
              <search-box/>
            </div>
            <div class="most-visited">
              <most-visited/>
            </div>
          </aside>
        </div>
        <footer>
          <div class="pagination d-flex justify-content-center my-5">
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
.pagination{
  width: 370px;
  margin: auto;
}
</style>