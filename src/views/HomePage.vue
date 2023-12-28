<template>
  <div class="container overflow-hidden">
    <section class="header-banner my-5 mt-md-4 ">
      <bannerTop :data="socialCard"/>
    </section>
    <section>
      <specialNews :data="socialCard"/>
    </section>
    <main class="row mt-5">
      <article class="col-lg-8">
        <lastNews/>
      </article>
      <aside class="col-lg-4">
        <section>
          <SchoolNews/>
        </section>
        <section class="mt-4">
          <mostVisited/>
        </section>
      </aside>
      <section class="row">
        <div class="col-12 peyvand-container  ">
          <peyvandItems :data = "peyvand"/>
        </div>
      </section>
      <section class="row mt-5 mx-auto">
        <div class="education">
          <educationCenter :educations="education"/>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import bannerTop from '@/components/home/bannerTop.vue'
import specialNews from '@/components/home/specialNews.vue'
import lastNews from '@/components/home/lastNews.vue'
import SchoolNews from "@/components/home/aside/schoolNews.vue";
import MostVisited from "@/components/home/aside/mostVisited.vue";
import PeyvandItems from "@/components/home/peyvandItems.vue";
import EducationCenter from "@/components/home/education/educationCenter.vue";

const socialCard = ref([
  {
    body: 'گزارش تصویری بازدید معاون آموزش حوزه های علمیه از نمایشگاه دستاوردهای مجتمع آموزشی پژوهشی تبلیغگزارش ',
    more: 'اطلاعات بیشتر ',
    date: '12 شهریور 1401'
  },
  {
    body: 'گزارش تصویری بازدید معاون آموزش حوزه های علمیه از نمایشگاه دستاوردهای مجتمع آموزشی پژوهشی تبلیغگزارش ',
    more: 'اطلاعات بیشتر ',
    date: '12 شهریور 1401'
  },
  {
    body: 'گزارش تصویری بازدید معاون آموزش حوزه های علمیه از نمایشگاه دستاوردهای مجتمع آموزشی پژوهشی تبلیغگزارش ',
    more: 'اطلاعات بیشتر ',
    date: '12 شهریور 1401'
  }
])
const peyvand = ref([
  {
    icon:'',
    crownIcon:"@/assets/icon/crownFlower/crownFlower.png",
    title:"پیوند ها",
    text:"محتوای سازمان های مختلف"
  },
  {
    icon:'',
    crownIcon:"@/assets/icon/crownFlower/crownFlower.png",
    title:"پیوند ها",
    text:"محتوای سازمان های مختلف"
  },
  {
    icon:'',
    crownIcon:"@/assets/icon/crownFlower/crownFlower.png",
    title:"پیوند ها",
    text:"محتوای سازمان های مختلف"
  },
  {
    icon:'',
    crownIcon:"@/assets/icon/crownFlower/crownFlower.png",
    title:"پیوند ها",
    text:"محتوای سازمان های مختلف"
  },
  {
    icon:'',
    crownIcon:"@/assets/icon/crownFlower/crownFlower.png",
    title:"پیوند ها",
    text:"محتوای سازمان های مختلف"
  },
  {
    icon:'',
    crownIcon:"@/assets/icon/crownFlower/crownFlower.png",
    title:"پیوند ها",
    text:"محتوای سازمان های مختلف"
  },
])
const education = ref([
  {
    time:  '10 شهریور 1402' ,
    title: 'آموزش زبان عربی با لحجه عراقی' ,
    text:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صعنت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه دروزنامه و مجله در ستون وگرپها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.ت و برای شرایط فعلی تکنولوژی مورد نیاز ' ,
    number: 3897 ,
    see: 'بازدید' ,
    more:'ادامه مطالب'
  },
  {
    time:  '10 شهریور 1402' ,
    title: 'آموزش زبان عربی با لحجه عراقی' ,
    text:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صعنت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه دروزنامه و مجله در ستون وگرپها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.ت و برای شرایط فعلی تکنولوژی مورد نیاز ' ,
    number: 3897 ,
    see: 'بازدید' ,
    more:'ادامه مطالب'
  },
  {
    time:  '10 شهریور 1402' ,
    title: 'آموزش زبان عربی با لحجه عراقی' ,
    text:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صعنت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه دروزنامه و مجله در ستون وگرپها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.ت و برای شرایط فعلی تکنولوژی مورد نیاز ' ,
    number: 3897 ,
    see: 'بازدید' ,
    more:'ادامه مطالب'
  }
])
</script>
<style scoped>
@media (max-width: 991.9px){
  aside{
    display: flex;
    flex-direction: column-reverse;

  }
}
</style>
