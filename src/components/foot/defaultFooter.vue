<script setup>
import {ref} from 'vue'

const data = ref({
  address: [
    {
      partOne: 'شماره های ',
      partTwo: 'ارتباطی',
      info: '09118738301 - 09118738301'
    },
    {
      partOne: 'ایمیل ',
      partTwo: 'ارتباطی',
      info: 'esakhanzadi@gmail.com',
    },
    {
      partOne: 'آدرس ',
      partTwo: 'حوزه:',
      info: 'ایران ، گرگان ، شهرک ویلاشهر ، وبلاشهر 14 ، شرکت برنامه نویسی شتاب آموز',
    },
  ],
  links: {
    goodLinks: [
      {
        title: "صفحه اصلی"
      },
      {
        title: "حوزه مدیریت"
      },
      {
        title: "معاونت پژوهش"
      },
      {
        title: "معاونت آموزش"
      }
    ],
    serviceslinks: [
      {
        title: 'تماس با ما'
      },
      {
        title: 'اخبار'
      },
      {
        title: 'درباره ما '
      }
    ]
  },
  center: {
    title: ' حوزه علمیه خواهران گرگان',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفـای کاربردی  طراحان خلاقی و فرهنگ پیـشرو در زبان فـارسـی ایجاد کرد. در این در ارائه راهـکارها و شرایط سخت تایپ ازلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفـای کاربردی  طراحان خلاقی و فرهنگ پیـشرو در زبان فـارسـی ایجاد کرد. در این در ارائه راهـکارها و شرایط سخت تایپ از ... ...\n'
  },
})
</script>

<template>
  <div class="container-fluid bg-white position-relative d-flex justify-content-center mt-5">
    <img src="@/assets/icon/footer/background.png" class="image-background-radius" alt="">
    <div class="container">

    <div class="row footer d-flex flex-row-reverse align-items-baseline py-5">
      <div class="col-lg-3 right">
        <ul class="contact-us list-unstyled d-flex flex-column align-items-start p-0">
          <li class="my-2" v-for="item in data.address" :key="item">
            <span class="icon"></span>
            <p class="mb-1">
              <span style="color: #095195">{{ item.partOne }}</span>
              <span>{{ item.partTwo }}</span>
            </p>
            <span class="phone-number">{{ item.info }}</span>
          </li>
        </ul>
      </div>
      <div class="col-lg-6 center">
        <div class="row">
          <div class="footer-content">
            <div class="image-logo"><img src="@/assets/icon/footer/logoMain.png" alt=""></div>
            <div class="footer-title"><h1>{{ data.center.title }}</h1></div>
            <div class="footer-text"><p>{{ data.center.text }}</p></div>
          </div>
          <ul class="social nav justify-content-center">
            <li class="nav-item">
              <router-link to="" class="nav-link"><img src='@/assets/icon/social-app/telegram.svg' alt="telegram"></router-link>
            </li>
            <li class="nav-item">
              <router-link to="" class="nav-link"><img src='@/assets/icon/social-app/instagram.svg' alt="instagram">
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="" class="nav-link"><img src='@/assets/icon/social-app/twitter.svg' alt="twitter"></router-link>
            </li>
            <li class="nav-item">
              <router-link to="" class="nav-link"><img src='@/assets/icon/social-app/facebook.svg' alt="facebook"></router-link>
            </li>
            <li class="nav-item">
              <router-link to="" class="nav-link"><img src='@/assets/icon/social-app/telegram.svg' alt="telegram"></router-link>
            </li>
            <li class="nav-item">
              <router-link to="" class="nav-link"><img src='@/assets/icon/social-app/whatsup.svg' alt="whatsup"></router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-3 left">
        <div class="row d-flex flex-row justify-content-between">
          <div class="good-link-groups">
            <div class="col-md-6 good-link-grid">
              <div class="good-link-title">
                <h3><span>لینک های مفید</span></h3>
                <span class=""></span>
              </div>
              <ul class="good-link nav p-0">
                <li class="nav-item" v-for="link in data.links.goodLinks" :key="link">
                  <routerLink class="nav-link good-link px-0" to="">{{ link.title }}</routerLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 services-link-grid">
            <div class="services-link-groups">
                <div class="services-link-title">
                  <h3><span>خدمات ما</span></h3>
                  <span class=""></span>
                </div>
                <ul class="services-link nav flex-column p-0">
                  <li class="nav-item p-0" v-for="link in data.links.serviceslinks" :key="link">
                    <routerLink class="nav-link services-link px-0" to="">{{link.title}}</routerLink>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
</template>

<style scoped>
.container-fluid{
  display: flex !important;
  justify-content: center;
  min-width: 300px;
}
.footer{
display: flex;
}
.left{
  grid-column: 1/3 ;
}
.right{
  grid-column: 9/12;
}
.center{
  grid-column: 3/9;
}
.image-background-radius{
  position: absolute;
  width: 358.31px;
  height: 38.58px;
  top: -36.42px;
  //left: 50%;
  //right: 50%;
  //transform: translate(50%, 0%);
}
.footer-content {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.footer-content .image-logo{
  position: absolute;
  top: -35px;
}
.contact-us {
  z-index: 1;
}
.contact-us p {
  font-weight: 400;
  font-size: 13.34px;
  line-height: 20.88px;
  letter-spacing: -0.5px;
  //text-align: center;
}
.contact-us .phone-number{
  font-weight: 400;
  font-size: 11.74px;
  line-height: 18.37px;
  letter-spacing: -0.5%;
  color:#848484;
}
.footer-title h1 {
  font-weight: 700;
  font-size: 22px;
  line-height: 34.43px;
  letter-spacing: -2.5%;
  color: #000000;
}

.footer-text p {
  letter-spacing: -3%;
  line-height: 36.4px;
  text-align: justify;
  font-size: 13px;
  font-weight: 400;
  color: #878787;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  text-overflow: ellipsis;
  max-width: 415px;

}
.good-link , .services-link {
  font-weight: 400;
  font-size: 11.36px;
  line-height: 17.78px;
  letter-spacing: -4.5%;
  color: #7a7a7a;
}
.good-link-title h3 , .services-link-title h3 {
  font-size: 13.43px;
  font-weight: 700;
  font-family: 'IranianSans';
  line-height: 32.7px;
  text-align: justify;
  color: #7a7a7a;
}
.good-link-groups , .good-link-grid{
  width: 89px;
}
@media (max-width: 992px) {
.footer{
  display: grid !important;
  grid-template-areas:
    ' c c c c c c c c c c c c '
    ' r r r r r r r r r r r r '
    ' l l l l l l l l l l l l ' !important;
}
.center{
  grid-area: c !important;
}
.left{
  grid-area: l;
}
.right{
  grid-area: r;
}
}
@media (max-width: 360px) {
  .image-background-radius{
    width: 200px;
  }
}
</style>