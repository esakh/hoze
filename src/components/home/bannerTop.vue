<template>
  <div class="container ">
    <div class="row d-grid  ">
      <div class="grid-lg-6 grid p-0 banner-right">
        <div class="card">
          <img src="@/assets/icon/banner/banner-one.png" alt="">
          <div class="card-body ">
            <div class="badge badge-pill"><span>{{items[0].category}}</span></div>
            <div class="text-title"><h1>{{items[0].title}}</h1></div>
            <div class="text-body"><p>{{items[0].body}}</p></div>
          </div>
        </div>
      </div>
      <div class="grid-lg-6 grid p-0 banner-left">
        <div class="card">
          <img src="@/assets/icon/banner/banner-two.png" alt="">
          <div class="card-body ">
            <div class="badge badge-pill "><span>{{items[1].category}}</span></div>
            <div class="text-title"><h1>{{items[1].title}}</h1></div>
            <div class="text-body"><p>{{items[1].body}}</p></div>
          </div>
        </div>
        <div class="card">
          <img src="@/assets/icon/banner/banner-three.png" alt="">
          <div class="card-body ">
            <div class="badge badge-pill"><span>{{items[2].category}}</span></div>
            <div class="text-title"><h1>{{items[2].title}}</h1></div>
            <div class="text-body"><p>{{items[2].body}}</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>


const items = [
  {
    category: "مذهبی",
    title: "عید مبعث",
    body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه ",
      url:'~/assets/icon/banner/banner-one.png',
    img: '          <figure>\n' +
        '            <img class="" src="@/assets/banner/1.jpeg" :alt="item.title">\n' +
        '          </figure>'
  },
  {
    category: "اجتماعی",
    title: "دهه فاطمیه",
    body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه ",
      url:'~/assets/icon/banner/banner-one.png',
    img: '          <figure>\n' +
        '            <img class="" src=\'@/assets/banner/1.jpeg\' :alt="item.title">\n' +
        '          </figure>'
  },
  {
    category: "سیاسی",
    title: "دیدار با آیت الله نور مفیدی",
    body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه ",
      url:'banner-one.png',
    img: '          <figure>\n' +
        '            <img class="" src=\'@/assets/banner/1.jpeg\' :alt="item.title">\n' +
        '          </figure>'
  },
]


</script>
<style scoped>
.d-grid {
  grid-template-columns:repeat(2, 1fr);
  gap: 33px;
}
*{
  color: #FFFFFF;
}
.card{
  position: relative;
  background: transparent;
  border: 0;
  border-radius: 16px;
  overflow: hidden;
}
.card img{
  border-radius: 16px;
  height: 100%;
  width: 100%;
}
.card-body{
  position: absolute;
  bottom: 0;
  padding: 1rem 1rem  0;
  z-index: 1;
}
.banner-left{
  display: grid;
  gap: 33px ;
}
.text-title h1{
  font-size: 20px;
  letter-spacing: -4.5%;
  font-weight: 700;
  margin-bottom: 1rem;
}
.badge{
  font-size: 12px;
  font-weight: 400;
  background-color: fuchsia;
  padding: 0.2rem 0.5rem;
  margin-bottom: 1rem;

}
.text-body p{
  font-size: 14px;
  letter-spacing: -4.5%;
  font-weight: 400;
  text-align: justify;
}

.card::after{
  content: "";
  position: absolute;
  inset: 0;
  background:linear-gradient(rgba(255, 255, 255, 0.1) 30%,rgba(0,0,0,0.7));
}
@media (max-width: 992px) {
    .d-grid{
      //grid-template-rows:repeat(1, 1fr) !important;
      grid-template-columns:repeat(1, 1fr);
      gap: 1rem;
    }
  .banner-left{
    gap: 1rem;
  }
}
</style>