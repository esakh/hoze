<script setup>
import {defineProps} from 'vue'
const props = defineProps(['data'])
import AuthorVisitDateAside from "@/components/home/aside/authorVisitDateAside.vue";
</script>

<template>
<div class="container">
  <div class="row">
    <div class="card border-0 p-2 mb-2 mt-lg-1 mt-xl-2  mt-xxl-1  " v-for="item in props.data" :key="item">
      <div class="card-header border-0 p-0 bg-white">
        <div class="category"><span class="badge w-100" :style="{background:item.color}">{{item.category}}</span></div>
      </div>
      <div class="card-body me-2 p-0 px-1">
        <div class="text"><p class="card-text w-100 " >{{ item.body }}</p></div>
      </div>
      <div class="info px-1">
        <author-visit-date-aside mvc="removeAuthor"/>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.card{
  display: grid;
  grid-template-columns: repeat(12 , 1fr);
  grid-template-rows: repeat(2,50%);
  grid-template-areas:
  "h h h b b b b b b b b b  "
  "h h h i i i i i i i i i  "
  "h h h i i i i i i i i i  "
;
  align-items: baseline;
}
.card-header {
  grid-area: h;
}
.card-body {
  grid-area: b;
}
.info{
  grid-area: i;
}
p.card-text{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
}
.category span{
  font-weight: 400;
  font-size: 8.5;

}


.text .card-text {
  font-size: 10px ;
  font-weight: 500;
  text-align: right;
  line-height: 15.65px;
  letter-spacing: -7%;
}
.card{
  position: relative;
}
.card::after{
  content: "";
  width: 100%;
  height: 5px;
  position: absolute;
  bottom:-10px;
  border-top: rgba(0, 0, 0, 0.15) dashed 1px;
  transform:scale(2.5);
  z-index: 1;
}
.card:last-child::after{
  border: 0;
}
@media (max-width:1199.9px) {
  .card{
    display: grid;
    grid-template-columns: repeat(12 , 1fr);
    grid-template-rows: repeat(2,50%);
    grid-template-areas:
  "h h h b b b b b b b b b  "
  "i i i i i i i i i i i i  "
  "i i i i i i i i i i i i  "
  ;
    align-items: baseline;
  }
  .card-header {
    grid-area: h;
  }
  .card-body {
    grid-area: b;
  }
  .info{
    grid-area: i;
  }
}
@media (max-width:1199px) {
  .card{
    padding:  2.3px 8px!important;
  }
}

  @media (max-width:991.9px) {
    .card {
      padding: 8px !important;
    }
  }
@media (max-width:768px) {
  .info{
    //width: 100% !important;
  }
}
</style>