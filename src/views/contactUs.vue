<script setup>
import {ref} from 'vue'
import BreadCrumb from "@/components/breadCrumb/breadCrumb.vue";
/* const options = {year: 'numeric', weekday: 'long',  month: 'long', day: 'numeric' };
const date = new Date();
const americanDate = new Intl.DateTimeFormat("en-US", options).format(date);
const persionDate = new Intl.DateTimeFormat("fa-IR", options).format(date);*/
const data = ref({
  way_title: 'راه های ارتباطی با حوزه عملیه خواهران گرگان',
  way_body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، ",
  contactUs_title: "شماره تماس ها و آدرس :",
  office_manager: "دفتر مدیریت :",
  office_Manager_text: " 01784362345",
  address: "آدرس : ",
  contactUs_address: "گرگان - میدان پمپ بنزین - حوزه علمیه امام خمینی "
})
const dataBreadCrumb = ref({
  pages: [
    {
      name: 'صفحه اصلی',
      url: '/'
    }
    ,
    {
      name: 'تماس با ما ',
      url:
          '/contact-us'
    }

  ]
})
</script>

<template>
  <div class="container">
    <div class="row">
      <bread-crumb :data="dataBreadCrumb"/>
    </div>
    <div class="row">
      <div class="ways-to-call">
        <h1 class="contact-us-title my-4">{{ data.way_title }}</h1>
        <p class="contact-us">{{ data.way_body }}</p>
      </div>
    </div>
    <div class="row">
      <div class="contact-us-box mt-5 mb-4 position-relative">
        <h3 class="title mb-3">{{ data.contactUs_title }}</h3>
        <div class="call-manager d-flex flex-column flex-md-row ">
          <p class="call-manager-text flex-grow-3 ">
            <span class="office ">{{ data.office_manager }}</span>
            <span class="number">{{ data.office_Manager_text }}</span>
          </p>
          <p class="call-manager-text flex-shrink-5 mx-md-auto">
            <span class="office ">{{ data.office_manager }}</span>
            <span class="number">{{ data.office_Manager_text }}</span>
          </p>
        </div>
        <div class="address-contact-us">
          <p>
            <span class="address">{{ data.address }}</span>
            <span class="address-text">{{ data.contactUs_address }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-us-title {
  font-family: IranianSans;
  font-weight: 700;
  font-size: 24px;
  line-height: 50.64px;
  text-align: justify;
  color: #095195;
  letter-spacing: -1px;
}

.contact-us {
  font-weight: 400;
  font-size: 20px;
  line-height: 38px;
  text-align: justify;
}

.contact-us-box .title {
  font-weight: 600;
  font-size: 20px;
  line-height: 38px;
  text-align: right;
  color: #fff;
}

.office {
  color: #FFFFFF;
  font-weight: 600;
  font-size: 18px;
  line-height: 38px;
  text-align: right;
}

.number {
  color: #FFFFFF;
  font-weight: 400;
  font-size: 18px;
  line-height: 38px;
  text-align: right;
}

.address:nth-child(1) {
  color: #FFFFFF;
  font-weight: 600;
  font-size: 18px;
  line-height: 38px;
  text-align: right;
}



.contact-us-box {
  background-color: #095195;
  padding: 1rem;
}
.address-text{
  color: #FFFFFF;
  font-weight: 400;
  font-size: 14px;
  line-height: 38px;
  text-align: right;
}
@media screen and (max-width: 767.9px){
  .address-text{
    color: #FFFFFF;
    font-weight: 400;
    font-size: 12px;
    line-height: 27.821px;
    text-align: right;
  }
  .contact-us-title {
    font-family: IranianSans;
    font-weight: 700;
    font-size: 16px !important;
    line-height: 20.821px;
    text-align: justify;
    color: #095195;
    letter-spacing: -1px;
  }

  .contact-us {
    font-weight: 400;
    font-size: 14px;
    line-height: 27.821px;
    text-align: justify;
  }

  .contact-us-box .title {
    font-weight: 600;
    font-size: 14px;
    line-height: 27.821px;
    text-align: right;
    color: #fff;
  }

  .office {
    color: #FFFFFF;
    font-weight: 600;
    font-size: 14px;
    line-height: 27.821px;
    text-align: right;
  }

  .number {
    color: #FFFFFF;
    font-weight: 400;
    font-size: 12px;
    line-height: 27.821px;
    text-align: right;
  }

  .address:nth-child(1) {
    color: #FFFFFF;
    font-weight: 600;
    font-size: 18px;
    line-height: 27.821px;
    text-align: right;
  }
}
</style>