
<template>
<div class="container">
  <div class="category">
    <figure>
      <img src="@/assets/icon/category/category.png" alt="">
      <figcaption>
        <span class="last">{{ props.data }}</span><span class="school">{{props.name}}</span><span class="most">{{props.most}}</span>
      </figcaption>
    </figure>
  </div>
</div>
</template>
<script setup>
import {defineProps} from 'vue'
const props = defineProps(['data' , 'name'])
</script>

<style scoped>

.category{
  position: absolute;
  top:0;
  transform: translatey(-25%);
  right: 0;
  height: 53px;
}
figure{
  position: relative;
}
figcaption {
  position: absolute;
  top:0;
  bottom: 0;
  right: 17%;
}
.last {
  font-weight:500 ;
  font-size: 18px;
  color: #FFFFFF;
  line-height: 36px;
  letter-spacing: -0.5%;
  text-align: justify;
}
.school{
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: -3.5%;
  color:#fff;
  font-family: inter;
}
.most {
  font-size: 14px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -4.5%;
  text-align: justify;
}
</style>