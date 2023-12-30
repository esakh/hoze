<script setup>
import {ref} from 'vue'
import instagram from '@/assets/icon/social-app/instagram.svg'
import telegram from '@/assets/icon/social-app/telegram.svg'
import whatsapp from '@/assets/icon/social-app/whatsup.svg'
import linkedin from '@/assets/icon/social-app/linkedin.svg'
import facebook from '@/assets/icon/social-app/facebook.svg'
import twitter from '@/assets/icon/social-app/twitter.svg'


import location from '@/assets/icon/address/location.svg'
import phone from '@/assets/icon/address/phone.svg'
import email from '@/assets/icon/address/email.svg'


const data = ref({
  social_app: [
    {
      name: 'telegram',
      img: telegram
    },
    {
      name: 'twitter',
      img: twitter
    },
    {
      name: 'instagram',
      img: instagram
    },
    {
      name: 'facebook',
      img: facebook
    },
    {
      name: 'linkedin',
      img: linkedin
    },
    {
      name: 'whatsapp',
      img: whatsapp
    },
  ],
  address: [
    {
      partOne: 'شماره های ',
      partTwo: 'ارتباطی',
      info: '09118738301 - 09118738301',
      img:phone
    },
    {
      partOne: 'ایمیل ',
      partTwo: 'ارتباطی',
      info: 'esakhanzadi@gmail.com',
      img:email
    },
    {
      partOne: 'آدرس ',
      partTwo: 'حوزه:',
      info: 'ایران ، گرگان ، شهرک ویلاشهر ، وبلاشهر 14 ، شرکت برنامه نویسی شتاب آموز',
      img:location
    },
  ],
  links:
      {
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
        serviceslinks:
            [
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
      }
  ,
  center: {
    title: ' حوزه علمیه خواهران گرگان',
    text:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفـای کاربردی  طراحان خلاقی و فرهنگ پیـشرو در زبان فـارسـی ایجاد کرد. در این در ارائه راهـکارها و شرایط سخت تایپ ازلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفـای کاربردی  طراحان خلاقی و فرهنگ پیـشرو در زبان فـارسـی ایجاد کرد. در این در ارائه راهـکارها و شرایط سخت تایپ از ... ...\n'
  }
  ,
})
</script>

<template>
  <div class="container-fluid bg-white position-relative  mt-5">
    <img src="@/assets/icon/footer/background.png" class="image-background-radius" alt="">
    <div class="container">
      <div class="row footer pt-5  py-lg-5">
        <section class=" col-md-3 left">
          <div class="row nav">
            <div class=" col-md-6 good-link-grid p-md-0 d-flex flex-row flex-md-column">
              <div class="good-link-title">
                <h3><span>لینک های مفید</span></h3>
                <span class=""></span>
              </div>
              <ul class="good-link nav flex-row flex-md-column  p-0">
                <li class="nav-item" v-for="link in data.links.goodLinks" :key="link">
                  <routerLink class="nav-link good-link px-0 mx-1 mx-sm-3 mx-md-0" to="">{{ link.title }}</routerLink>
                </li>
              </ul>
            </div>

            <div class="services-link-groups col-md-6 d-flex flex-row flex-md-column align-items-lg-center p-md-0">
              <div class="services-link-title">
                <h3><span>خدمات ما</span></h3>
                <span class=""></span>
              </div>
              <ul class="services-link nav flex-row flex-md-column   p-0">
                <li class="nav-item p-0 mx-2 mx-sm-4 mx-md-0" v-for="link in data.links.serviceslinks" :key="link">
                  <routerLink class=" nav-link services-link px-0" to="">{{ link.title }}</routerLink>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class=" col-md-6 center px-lg-5">
          <div class="row">
            <div class="footer-content d-flex justify-content-center flex-column align-items-center">
              <div class="image-logo "><img src="@/assets/icon/footer/logoMain.png" alt=""></div>
              <div class="footer-title text-center"><h1>{{ data.center.title }}</h1></div>
              <div class="footer-text"><p>{{ data.center.text }}</p></div>
            </div>
          </div>
        </section>
        <section class="col-md-3  right">
          <ul class="contact-us list-unstyled d-flex flex-column align-items-start p-0">
            <li class="my-2" v-for="item in data.address" :key="item">
              <span class="icon mx-1">
                  <img :src="item.img" alt="">
              </span>
              <p class="mb-1 d-inline me-1">
                <span style="color: #095195">{{ item.partOne }}</span>
                <span>{{ item.partTwo }}</span>
              </p>
              <span class="phone-number d-block me-3 mt-2 ">{{ item.info }}</span>
            </li>
            <li>
              <section class=" d-md-none activeInMobileMode">
                <div class="row social-logo">
                  <ul class="social me-3 nav justify-content-center align-items-center">
                    <li class="nav-item" v-for="item in data.social_app" :key="item">
                      <router-link to="" class="nav-link text-center"><img :src='item.img' :alt="item.name"></router-link>
                    </li>
                  </ul>
                </div>
              </section>
            </li>
          </ul>

        </section>
        <section class="d-none d-md-block">
          <div class="row social-logo">
            <ul class="social nav p-0 justify-content-center align-items-center">
              <li class="nav-item" v-for="item in data.social_app" :key="item">
                <router-link to="" class="nav-link"><img :src='item.img' :alt="item.name"></router-link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  display: flex !important;
  justify-content: center;
  min-width: 300px;
}

.image-background-radius {
  position: absolute;
  max-width: 358.31px;
  height: 38.58px;
  top: -36.42px;
//left: 50%; //right: 50%; //transform: translate(50%, 0%);
}

.footer-content {
//display: flex; //align-items: center; //flex-direction: column;
}

.footer-content .image-logo {
  position: absolute;
  top: -35px;
}

.row.nav {
  display: flex;
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

.contact-us .phone-number {
  font-weight: 400;
  font-size: 11.74px;
  line-height: 18.37px;
  letter-spacing: -0.5%;
  color: #848484;
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
  overflow: hidden;
  -webkit-box-orient: vertical;
}

.good-link, .services-link {
  font-weight: 400;
  font-size: 11.36px;
  line-height: 17.78px;
  letter-spacing: -4.5%;
  color: #7a7a7a;
}

.good-link-title h3, .services-link-title h3 {
  font-size: 13.43px;
  font-weight: 700;
  font-family: 'IranianSans';
  line-height: 32.7px;
  text-align: justify;
  color: #7a7a7a;
}

.good-link-groups, .good-link-grid {
//width: 89px;
}

.nav-item a > svg {
  color: #7a7a7a !important;
}


/* start add border in after */
.good-link-title {
  position: relative;
}

.good-link-title::after {

}

.good-link-title::before {

}

.services-link-title {
  position: relative;
}

.services-link-title::after {

}


.good-link-grid {
  position: relative;
}

.good-link-grid::before {

}

@media (max-width: 767.9px) {
  .container-fluid > img {
    max-width: 250px;
  }

  .footer {
    display: grid !important;
    grid-template-areas:
    ' c c c c c c c c c c c c '
    ' r r r r r r r r r r r r '
    ' l l l l l l l l l l l l ' !important;
  }

  .center {
    grid-area: c !important;
  }

  .left {
    grid-area: r;
  }

  .right {
    grid-area: l;
  }

  .contact-us {
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    grid-template-areas:
    ' e  n '
    ' . a  ' !important;
  }

  .contact-us:nth-child(1) {
    grid-area: e;
  }

  .contact-us:nth-child(2) {
    grid-area: a;
  }

  .contact-us:nth-child(3) {
    grid-area: n;
  }

  .contact-us > li:nth-child(2) {
    margin: auto !important;
  }

  .social {
    display: grid !important;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }

  .activeInMobileMode .social {
    display: grid;
    grid-template-columns: repeat(3, 0.5fr);
  }
}

@media (max-width: 575.9px) {
  .nav-item > a {
    font-size: 8px;
  }

  .good-link-title h3 {
    font-size: 9.5px;
    text-align: right;
  }

  .services-link-title h3 {
    font-size: 9.5px;
    text-align: right;
  }

  .contact-us li {
    margin: 0.15rem 0 !important;
  }

  .contact-us li p {
    font-size: 10px;
    line-height: 0.8rem;
  }

  .contact-us li span.phone-number {
    font-size: 8px;
  }
}


</style>