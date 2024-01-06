

<template>
<div class="container-lg">
  <div class="row">
    <div class="card p-3">
      <div class="row  d-flex flex-row-reverse">
        <div class="col-md-5 card-header bg-transparent border-0 ">
          <img src="@/assets/icon/rahbari/rahbar.png" alt="rahbar">
        </div>
        <div class="col-md-7 d-flex flex-column align-items-start ">
          <div class="card-body pb-0">

            <div class="education-main ">
              <div class="education-main-title">
                <h1 class="card-title">{{props.data.banner.title}}</h1>
              </div>
              <div class="education-main-text p-3 rounded-3 mt-4">
                <p class="card-text">{{props.data.banner.body}}</p>
              </div>
            </div>
          </div>

          <div class="card-footer d-flex bg-transparent border-0 ">
            <author-visit-date/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import {defineProps} from 'vue'
import AuthorVisitDate from "@/components/cardInfo/authorVisitDate.vue";
const props = defineProps(['data'])
</script>
<style scoped>
.card-title{
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -2.5%;
  text-align: right;
  line-height: 37.57px;
  color: #095195;
}
.education-main-text{
  background-color: #f0f0f0;
}
.card-text{
  font-size: 13px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: -2.5%;
  text-align: justify;
  color: #000000;
}
.card-header img{
  width: 100%;
  height: 299px;
}

@media screen and (max-width: 991.9px){
.card-title{
  font-size: 20px;
}
}
@media screen and (max-width: 768px){

  .card-title{
    font-size: 14px;
  }}
</style>