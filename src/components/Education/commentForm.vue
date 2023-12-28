<template>
  <div class="container">
    <div class="row comment-container ">
        <div class="card">
          <div class="card-header contact-img">
            <img src="" alt="">
          </div>
            <div class="card-body">
              <div class="text-content">
                <p class="card-text"></p>
              </div>
              <div class="feed-back">
                <div class="answer">
                  <span class="answer-text">{{ data.question.answer }}</span>
                  <span class="answer-icon"></span>
                </div>
                <div class="likes">
                  <div class="like"><span></span><span></span></div>
                  <div class="dislike"><span></span><span></span></div>
                </div>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue'
  const data = ref({
      question:{
        body:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هد' ,
        title:'عیسی خانزادی',
        likeNumber:100,
        dislikeNumber:10,
        answer:'پاسخ' ,
        answerIcon:'/comment/answer.svg',
        likeIcon:'/comment/like.svg',
        disLikeIcon:'/comment/like.svg',
      },
    answer:{
      body:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هد' ,
      title:'عیسی خانزادی',
      likeNumber:100,
      dislikeNumber:10,
      answer:'پاسخ' ,
      answerIcon:'/comment/answer.svg',
      likeIcon:'/comment/like.svg',
      disLikeIcon:'/comment/like.svg',
    }

  })
</script>
<style scoped>

</style>