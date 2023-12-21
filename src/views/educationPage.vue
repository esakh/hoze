<template>
  <div class="container">
    <header>
      <education-banner :data="data"/>
    </header>
    <main class="row mt-5">
      <article class="col-lg-8">
        <div class="main-body bg-white  p-4" >
          <div class="main-body-text" v-html="data.main.body"></div>
          <div class="main-body-info">
            <div class="row">
              <ul class="information list-group list-group-horizontal w-100 mt-5 mb-3 ">
                <li class="list-group-item mx-1 rounded rounded-pill  p-0 d-flex align-items-center"><span class="icon"></span><span class="mx-2">{{data.main.data_source}}</span></li>
                <li class="list-group-item mx-1 rounded rounded-pill p-0 d-flex align-items-center"><span class="icon"></span><span class="mx-2">{{data.main.author}}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </article>
      <aside class="col-lg-4">
        <div class="aside-most-visited">
          <most-visited/>
        </div>
      </aside>
    </main>
    <footer class="row">
      <div class="form col-lg-8 my-5">
        <form-point-of-view :data="data"/>
      </div>
    </footer>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const data = ref({
  banner: {
    title: 'با هم برای آرمان امام ، نشست هم اندیشی پیرامون وحدت حوزه و دانشگاه ',
    body: 'ایشان شرط دوم رقابت سالم در انتخابات را حضور همراه با بصیرت و با فکر مردم و انتخاب افراد صالح دانستند و افزودند : باید افرادی را برگزید که بعد اشور را به دشمن نمیفروشند مصالح ملی را به دلیل رودربایستی زیر پا نمیگذارند.'
  },
  main: {
    body: '<div><p>عده ای کمین کرده اند که با حضور نیافتن مردم در انتخابات، با تحریم و یا سست کردن انتخابات، از نظام جمهوری اسلامی مچ گیری کنند، اما ملت در مقابل این کمین کرده هایِ نابکار، کارآمدی خود را نشان داده و در این انتخابات هم نشان خواهد داد.</p></div><br>' +
        '<div><p>ایشان شرط دوم رقابت سالم در انتخابات را، حضور همراه با بصیرت و با فکرِ مردم و انتخاب افراد صالح دانستند و افزودند: باید افرادی را برگزید که بعد از نشستن بر مسند مسئولیت، خود را سپر بلای مشکلات کشور قرار دهند و فانی در خدمات و مصالح و منافع عمومی مردم باشند و ضمن آنکه کشور را به دشمن نمی فروشند، مصالح ملی را به دلیل رودربایستی زیر پا نمی گذارند.</p></div><br>' +
        '<div><p>رهبر انقلاب اسلامی بار دیگر با اشاره به این سخنان خود که گفته بودند «حتی کسانی هم که با نظام مسئله دارند در انتخابات شرکت کنند» خاطرنشان کردند: این سخن به معنای آن نیست که بخواهند کسانی که نظام را قبول ندارند به مجلس بفرستند.در هیچ جای دنیا، افرادی را که اصل نظام آن کشور را قبول ندارند، به مراکز تصمیم گیری راه نمی دهند</p></div><br>' +
        '<div><p>حضرت آیت الله خامنه ای تأکید کردند: در هیچ جای دنیا، افرادی که اصل نظام آن کشور را قبول ندارند، به مراکز تصمیم گیری راه نمی دهند و حتی در کشوری همچون امریکا که خود را نماد آزادی معرفی می کند و عده ای ساده لوح هم آن را قبول و ترویج می کنند، در دوران رقابت بلوک شرق و غرب، افراد را با اندک اتهامِ گرایش سوسیالیستی، کنار می گذاشتند.</p></div><br>' +
        '<div><p>ایشان افزودند: اینکه مقید باشیم کسانی به مجلس بروند که نظام و مصالح آن و ارزشهای کشور را قبول داشته باشند، یک حق عمومی است که در سلامت انتخابات مؤثر است.</p></div><br>' +
        '<div><p>رهبر انقلاب اسلامی در ادامه به بیان دیگر الزامات سلامت انتخابات پرداختند و گفتند: «تمکین همه دستگاههای دست اندرکار انتخابات به قانون و رعایت مُرّ قانون»، «اهانت نکردن به نهادهای قانونی»، «مشوش نکردن اذهان عمومی»، «اهانت نکردن نامزدهای انتخاباتی به یکدیگر و حتی پرهیز از غیبت»، «ندادنِ و عده های غیرعملی و غیرقانونی»، و «برخورد صادقانه با مردم» از جمله معیارها و آداب لازم برای یک رقابت سالم انتخاباتی استنباید جوانان انقلابی و حزب اللهی را متهم به تندروی کرد</p></div><br>' +
        '<div><p>حضرت آیت الله خامنه ای درخصوص تشویش اذهان عمومی به برخی رفتارها و سخنان نسنجیده اشاره کردند و افزودند: برخی دائماً کلمه «تندروها» را تکرار می کنند که منظور آنها جریان مومن و حزب اللهی است، در حالیکه نباید جوانان انقلابی و حزب اللهی را متهم به تندروی کرد زیرا این جوانان با اخلاصِی تمام و با همه وجود در میدان حاضرند و هرگاه که دفاع از مرزها و دفاع از هویت ملی لازم باشد، وسط میدان هستند.</p></div><br>' +
        '<div><p>حضرت آیت الله خامنه ای در جمع بندی سخنان خود در خصوص انتخابات خاطرنشان کردند: انتخابات یک نعمت و فرصت بزرگ است که شکرگزاری این نعمت، برگزاری خوب و سالم انتخابات است بنابراین نباید با </p></div><br>' ,
    data_source:"منبع : خبرگزاری سینا",
    author:'نویسنده عیسی خانزادی'
  },
  form_information:{
    name:'نام' ,
    point_of_view:'دیدگاه' ,
    email:"ایمیل" ,
    checked_rules: 'ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی مینویسم',
    btn_form:'ارسال دیدگاه'
  }

})
import EducationBanner from "@/components/Education/banner/EducationBanner.vue";
import MostVisited from "@/components/home/aside/mostVisited.vue";
import FormPointOfView from "@/components/form/formPointOfView.vue";
</script>

<style scoped>
.main-body div p {
  font-weight: 400;
  font-size: 13px;
  line-height: 29px;
  color: #000000;
  text-align: justify;
  letter-spacing: -2.5%;
}
.aside-most-visited {
  position: sticky;
  top:2.5rem;
}
.main-body{
  border-radius: 11px;
}
ul.information li{
font-size: 11px;
  font-weight: 400;
  line-height: 29px;
  text-align: right;
  letter-spacing: -2.5%;
  color: #4d4d4d;
  background-color: rgba(9, 81, 149, 0.34);
  height: 34px;
  width: 25%;
}

ul.information li span.icon{

  width: 30px;
  height: 30px;
  background-color: #FFFFFF;
  border-radius: 50%;
  margin-right: 0.05rem;
}

</style>