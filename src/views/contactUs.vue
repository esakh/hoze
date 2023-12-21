<script setup>
import {ref} from 'vue'
const data = ref({
  way_title:'راه های ارتباطی با حوزه عملیه خواهران گرگان',
  way_body:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، ",
  contactUs_title:"شماره تماس ها و آدرس :",
  office_manager:"دفتر مدیریت :",
  office_Manager_text:" 01784362345",
  address:"آدرس" ,
  contactUs_address:"گرگان - میدان پمپ بنزین - حوزه علمیه امام خمینی "
})
</script>

<template>
<div class="container">
<div class="row">
  <div class="ways-to-call">
    <h1 class="contact-us-title my-4">{{data.way_title}}</h1>
    <p class="contact-us">{{data.way_body}}</p>
  </div>
</div>
  <div class="row">
    <div class="contact-us-box mt-5 mb-4 position-relative">
      <h3 class="title">{{data.contactUs_title}}</h3>
      <div class="call-manager d-flex ">
        <p class="call-manager-text flex-grow-3 "><span class="office ">{{data.office_manager}}</span><span class="number">{{data.office_Manager_text}}</span></p>
        <span class="call-manager-text flex-shrink-5 "><span class="office ">{{data.office_manager}}</span><span class="number">{{data.office_Manager_text}}</span></span>
      </div>
      <div class="address-contact-us">
        <p><span class="address">{{data.address}}</span><span class="address">{{ data.contactUs_address }}</span></p>
      </div>
      <div class="crown">
        <span class="crown1 d-none d-lg-block"><img src="@/assets/icon/crownFlower/crownFlower.png" alt="crown"></span>
        <span class="crown2 d-none d-lg-block"><img src="@/assets/icon/crownFlower/crownFlower.png" alt="crown"></span>
        <span class="crown3 d-none d-lg-block"><img src="@/assets/icon/crownFlower/crownFlower.png" alt="crown"></span>
        <span class="crown4 d-none d-lg-block"><img src="@/assets/icon/crownFlower/crownFlower.png" alt="crown"></span>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.contact-us-title{
font-family: Inter;
  font-weight: 600;
  font-size: 24px;
  line-height: 50.64px;
  letter-spacing: -4.5%;
  text-align: justify;
  color: #095195;
}
.contact-us{
  font-weight: 400;
  font-size: 20px;
  line-height: 38px;
  text-align: justify;
}
.contact-us-box .title{
  font-weight: 600;
  font-size: 20px;
  line-height: 38px;
  text-align: right;
  color:#fff;
}
.office{
  font-family: Inter;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 20px;
  line-height: 38px;
  text-align: right;
  letter-spacing: -4.5%;
}
.number{
  font-family: Inter;
  color: #FFFFFF;
  font-weight: 400;
  font-size: 20px;
  line-height: 38px;
  text-align: right;
  letter-spacing: -4.5%;
}
.address:nth-child(1){
  color: #FFFFFF;
  font-weight: 600;
  font-size: 20px;
  line-height: 38px;
  text-align: right;
  letter-spacing: -4.5%;
}
.address:nth-child(2){
  color: #FFFFFF;
  font-weight: 400;
  font-size: 20px;
  line-height: 38px;
  text-align: right;
}
.contact-us-box{
  background-color: #095195;
  padding: 1rem;
}
.crown1 img{
  transform: rotate(97deg);
  top: -54px;
  right: -51px ;
  position: absolute;
}
.crown2 img{
  transform: rotate(187deg);
  bottom: -54px;
  right: -51px;
  position: absolute;
}
.crown3 img{
  transform: rotate(277deg);
  position: absolute;
  bottom: -54px;
  left: -51px;
}
.crown4 img{
position: absolute;
  transform: rotate(7deg);
  top: -54px;
  left: -51px;
}
</style>