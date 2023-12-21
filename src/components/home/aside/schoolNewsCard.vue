<script setup>
import {defineProps} from 'vue'
import authorVisitDateAside from '@/components/home/aside/authorVisitDateAside.vue'

const props = defineProps(['data'])
</script>

<template>
  <div class="conatainer  ">

    <router-link to="" class="card border-0 row text-decoration-none flex-row p-2" v-for="item in props.data"
                 :key="item">
      <div class=" card-image p-0 col-md-3 col-4 ">
        <div class="full-date position-relative d-flex flex-column align-items-center">
          <div class=" date-mounth d-flex justify-content-center "><span class="text">{{ item.card_date_day }}</span>
          </div>
          <div class="date-day d-flex justify-content-center align-items-start  "> {{ item.card_date_mounth }}</div>
        </div>
      </div>
      <div class=" card-body col-md-9 col-8  p-2">
        <div class="text-school"><p class="card-title w-100">{{ item.card_body }}</p></div>
        <div class="info-school ">
          <authorVisitDateAside/>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>

.card-image {
  width: 54px;
  height: 54px;
  overflow: hidden;
  border-radius: 11.14px;
}

.date-mounth {
  background-color: #d9d9d9;
  width: 54px;
  height: 54px;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  letter-spacing: -4.5%;
  line-height: 36px;

}

.date-day {
  font-weight: 500;
  font-size: 11.14px;
  line-height: 22.29px;
  letter-spacing: -4.5%;
  text-align: justify;
  color: #FFFFFF;
  background-color: #095195;
  position: absolute;
  text-align: justify;
  width: 54px;
  height: 20.57px;
  top: 33.43px;
}

.card-title {
  font-size: 10px;
  font-weight: 500;
  text-align: justify;
  letter-spacing: -4.5%;
  line-height: 20px;
  color: #525252;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
}

.card {
  position: relative;
}

.card::after {
  content: "";
  width: 100%;
  height: 7px;
  position: absolute;
  bottom: 0;
  border-top: rgba(0, 0, 0, 0.15) dashed 1px;
  transform: scale(2.5);
  z-index: 1;
}

.card:last-child::after {
  border: 0;
}

@media (max-width: 991.9px) {
  .info-school {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .info-school {
    width: 100% !important;
  }
}
</style>