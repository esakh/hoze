<script setup>
import { defineProps, onMounted, } from 'vue'
const props = defineProps(['data' ,'showMostVisitedNews' ])
import AuthorVisitDateAside from "@/components/home/aside/authorVisitDateAside.vue";
onMounted(()=>{
  const boxes = document.querySelectorAll('.box')
  document.body.onload = showBox()

      window.addEventListener("scroll",showBox)


  function showBox(){
    const triggerBottom = window.innerHeight/1.08
    // console.log(triggerBottom);
    boxes.forEach(box=>{
      const boxTop = box.getBoundingClientRect().top;
      if(boxTop<triggerBottom){
        box.classList.add('show')
      }
      // else{
      //   box.classList.remove('show')
      // }

    })
  }
})


</script>

<template>
<div class="container">
  <div class="row">
    <div class="card border-0 p-2 mb-1 mt-lg-1 mt-xl-2  mt-xxl-1 box " v-for="item in props.data" :key="item">
      <div class="card-header border-0 p-0 bg-white">
        <div class="category"><span class="badge w-100" :style="{background:item.color}">{{item.category}}</span></div>
      </div>
      <div class="card-body me-2 p-0 px-1">
        <router-link to="" class="text"><p class="card-text w-100 " >{{ item.body }}</p></router-link>
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
.text{
  color: #525252;
  text-decoration: none;
}
p.card-text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.category span{
  font-weight: 400;
  font-size: 8.5;

}
 .badge{
   border-radius: 7px 7px 0 7px;

 }

.text .card-text {
  font-size: 10px ;
  font-weight: 600;
  text-align: right;
  line-height: 15.65px;
  letter-spacing: -7%;
}
.card{
  position: relative;
  margin: 7px auto !important;
}
.card::after{
  content: "";
  width: 40%;
  height: 5px;
  position: absolute;
  bottom:-10px;
  border-top: rgba(0, 0, 0, 0.15) dashed 1px;
  transform:scale(2.5)translateX(20%);
  z-index: 1;
  left: 50%;
  right: 50%;
}
.card:last-child::after{
  border: 0;
}
@media (max-width: 1399px) {
  .card{
    margin: 3px auto !important;
  }
}
@media (max-width:1199.9px) {
  .card{
    margin: 1px auto !important;
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

/* js box animation*/
.box{
  transform: translate(-100%);
  transition: transform 0.5s ease;
}
.box:nth-child(even){
  transform: translate(100%);
}

.box.show{
  transform: translate(0);
}
</style>