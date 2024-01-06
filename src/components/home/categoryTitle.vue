
<template>
<div class="container">
  <div class="category">
    <figure :class="{educationPage:props.educationPage==true}">
      <img src="@/assets/icon/category/category.png" class="" alt="">
      <figcaption :class="{ changeTop: props.schoolNews === 'schoolNews'|| props.most === 'most' || props.category === 'category' }" >
        <span  :class="{ last: props.lastNews === 'lastNews' , school: props.schoolNews === 'schoolNews'  ,most: props.most === 'most' , categoryNews: props.category==='category'}" >{{ props.data }}</span>
      </figcaption>
    </figure>
  </div>
</div>
</template>
<script setup>
import {defineProps} from 'vue'
const props = defineProps(['data' ,'most' , 'lastNews','schoolNews' , 'category' ,'educationPage'])
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
  text-align: justify;
}
.school{
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color:#fff;
  font-family: inter;
}
.most {
  font-size: 14px ;
  font-weight: 500;
  line-height: 28px;
  text-align: justify;
  color: #FFFFFF !important;
}
figcaption.changeTop{
  top: 4px ;
}


.categoryNews{
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color:#fff;
}
/* start style props */
@media(max-width: 992px){
  .educationPage img{
    width: 100px;
  }
  .educationPage figcaption{
    top:-1px;
  }
  .educationPage figcaption span{
    font-size:10px;
  }
}

</style>