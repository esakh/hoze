<script setup>
import {onMounted, ref} from "vue";
import CategoryTitle from "@/components/home/categoryTitle.vue";
onMounted(()=>{
  const ul = document.querySelector('ul')
  ul.style.transform='rotate(360deg)'
})
const categoryName = ref('دسته بندی اخبار')
const categoryItems = ref([
  {
    name: 'هنری',
    number: 13,
    color: '#f47f27'
  },
  {
    name: 'فیلم خبری',
    number: 5,
    color: '#127d6a'
  },
  {
    name: 'آموزشی',
    number: 7,
    color: '#b8a635'
  },
  {
    name: 'سیاسی',
    number: 18,
    color: '#20A6DF'
  },
  {
    name: 'اقتصادی',
    number: 4,
    color: '#2DB442'
  },
  {
    name: 'اجتماعی',
    number: 10,
    color: '#FF5018'
  },
])
</script>

<template>
  <div class="container-lg bg-white position-relative mb-4 mb-lg-4">
    <div class="row category-title d-none d-lg-block">
      <category-title :data="categoryName" category="category" />
    </div>

    <div class="row ">
      <ul class="nav category p-1 p-0  mb-4" v-if="categoryItems">
        <li class="nav-item " v-for="(item , index) in categoryItems" :key="index">
          <button class="btn border-0 rounded-0 d-flex justify-content-between align-items-center  ">
            <span class="category-text p-1 w-75  text-center " :style="{background:`${item.color}`}">{{ item.name }}</span>
            <span class="category-number">({{ item.number }})</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container-lg {
  border-radius: 11px;

}

.category-text {
  border-radius: 6.31px 6.31px 0 6.31px;
  font-weight: 400;
  color: #FFFFFF;
  font-size: 0.8rem;
  text-align: right;
  line-height: 1rem;
}

.category {
  margin-top: 2.3rem;
  display: grid !important;
  grid-template-columns: repeat(2, 1fr);
}

.btn {
  width: 90%;
}

@media screen and (max-width:991.9px ) {
 .category{ margin: 1rem 0 !important;}
  .category-text{
    font-size: 0.5rem;
  }
  .category-number{
    font-size: 0.7rem;
    margin-right: 0.2rem;
  }
}
</style>