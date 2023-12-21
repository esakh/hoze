<script setup>
import {defineProps} from "vue";

const props = defineProps(['educations'])

</script>

<template>
  <div class=" container ">
    <div class="row">
      <div class="col-md-4" v-for="edu in props.educations" :key="edu">
        <div class="card border-0">
          <div class="card-header bg-white border-0 p-0">
            <router-link to="">
                <img src="@/assets/icon/education/camera.png" class="card-img-top" alt="">
            </router-link>
          </div>
          <div class="card-body">
            <div class="full-date mb-2"><span>{{ edu.time }}</span></div>
            <router-link to="" class="content text-decoration-none">
              <h2 class="content-title card-title">{{ edu.title }}</h2>
              <p class="content-text">{{ edu.text }}</p>
            </router-link>
          </div>
          <div class="card-footer bg-white border-0 d-flex flex-row-reverse justify-content-between">
            <div class="more"><router-link to="">{{ edu.more }}</router-link></div>
            <ul class="see list-unstyled d-flex align-items-baseline p-0">
              <li class="icon mx-1"><img src="@/assets/icon/education/eye.png" alt=""></li>
              <li class="numbers mx-1">{{ edu.number }}</li>
              <li class="text mx-1">{{ edu.see }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-header img{
  height: 151px;
}
.full-date {
  font-weight: 300;
  font-size: 10.82px;
  line-height: 21.64px;
  text-align: justify;
  color: #252525;
}

.card-title {
  font-weight: 700;
  font-size: 13.71px;
  line-height: 22.52px;
  letter-spacing: -2.5%;
  text-align: right;
  color: #095195;
}

.content-text {
  font-weight: 400;
  font-size: 10.85px;
  line-height: 24.65px;
  letter-spacing: -5%;
  text-align: justify;
  color: #353535;
}

.icon {
  width: 12.33px;
  height: 9.74px;
}

.numbers, .text {
  font-weight: 400;
  font-size: 10px;
  letter-spacing: -5%;
  text-align: right;
  color: #6f6e6e;
}
.more a{
  color:#095195;
  font-weight: 400;
  font-size: 10px;
  line-height: 23px;
  text-align: right;
  position: relative;
  text-decoration: none;
}
.more a::after{
  content: '\27A1';
  right: -15px;
  transform: rotate(180deg);
  bottom:-5px;
  position: absolute;
  font-size: 0.8rem;
}
@media (max-width: 768px) {
  .col-md-4:nth-child(1){
    display: none;
  }
  .col-md-4:nth-child(2){
    display: none;
  }
}
</style>