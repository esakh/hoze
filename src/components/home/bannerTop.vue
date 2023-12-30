<template>
  <div class="container ">
    <div class="row d-grid  ">
      <div class="grid-lg-6 grid p-0 banner-right overflow-hidden">
        <router-link to="" class="card overflow-hidden">
          <img src="@/assets/icon/crownFlower/crownFlower.png" class="crown-top" alt="">
          <img src="@/assets/icon/banner/banner-one.png" alt="" class="img-banner">
          <div class="card-body ">
            <div class="badge badge-pill"><span>{{items[0].category}}</span></div>
            <div class="text-title"><h1>{{items[0].title}}</h1></div>
            <div class="text-body"><p>{{items[0].body}}</p></div>
          </div>
        </router-link>
      </div>
      <div class="grid-lg-6 grid p-0 banner-left">
        <router-link to="" class="card overflow-hidden">
          <img src="@/assets/icon/banner/banner-two.png" class="img-banner" alt="">
          <div class="card-body ">
            <div class="badge badge-pill "><span>{{items[1].category}}</span></div>
            <div class="text-title"><h1>{{items[1].title}}</h1></div>
            <div class="text-body"><p>{{items[1].body}}</p></div>
          </div>
        </router-link>
        <router-link to="" class="card overflow-hidden">
          <img src="@/assets/icon/banner/banner-three.png" class="img-banner" alt="">
          <div class="card-body ">
            <div class="badge badge-pill"><span>{{items[2].category}}</span></div>
            <div class="text-title"><h1>{{items[2].title}}</h1></div>
            <div class="text-body"><p>{{items[2].body}}</p></div>
          </div>
        </router-link>
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
  gap: 30px;
}
*{
  color: #FFFFFF;
}
.crown-top{
  width: 120px!important;
  height: 120px!important;
  position: absolute;
  top: -47px;
  right: -43px;
  transform: rotate(90deg);
}
.card{
  position: relative;
  background: transparent;
  border: 0;
  border-radius: 16px;
  overflow: hidden;
}

/* start animation card*/



/* end animation card*/

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
  border-radius: inherit;
}
.banner-left{
  display: grid;
  gap: 30px ;
}
.text-title h1{
  font-size: 20px;
  letter-spacing: -4.5%;
  font-weight: 700;
  margin-bottom: 0.6rem;
}
.badge{
  font-size: 12px;
  font-weight: 400;
  background-color: fuchsia;
  padding: 0.2rem 0.5rem;
  margin-bottom: 0.85rem;

}
.text-body p{
  font-size: 14px;
  text-align: justify;
  letter-spacing: -4.5%;
  line-height: 1.8rem;
  font-weight: 400;
  color: #d3d3d3 !important;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
}

.card::after{
  content: "";
  position: absolute;
  inset: 0;
  background:linear-gradient(rgba(255, 255, 255, 0.1) 30%,rgba(0,0,0,0.7));
  border-radius: inherit;
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
@media (max-width: 767.9px) {
  .card{
    overflow: hidden;
  }
  .crown-top,.crown-bottom{
    display: none;
  }
  img{
    border-radius: 5px;
  }
  .text-title h1{
    font-size: 15px;
    margin-bottom: 0.2rem;
    font-weight: 600;
  }
  .text-body p {
    line-height: 1.2rem;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 0.3rem;
  }
  .badge{
    margin-bottom: 0.4rem;
    font-size: 10px;
  }
}
.img-banner{
  transition:transform 0.5s;
}
.card:hover .img-banner{
  transform: scale(1.15);
}
</style>