<template>
  <div class="container p-0">
    <div class=" comment-container rounded rounded-3 bg-white p-4 ">
      <div class=" row card d-flex flex-row border-0 question ">
        <div class="card-header bg-transparent border-0 col-3 col-sm-2   ">
          <div class="contact-img rounded rounded-circle text-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M7.19974 10.6841C4.10579 10.6841 1.46338 11.1517 1.46338 13.0255C1.46338 14.8992 4.0897 15.3838 7.19974 15.3838C10.2945 15.3838 12.9361 14.9153 12.9361 13.0424C12.9361 11.1694 10.3106 10.6841 7.19974 10.6841Z"
                fill="white" stroke="white" stroke-width="1.20732" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M7.19973 8.01206C9.23044 8.01206 10.8764 6.36608 10.8764 4.33537C10.8764 2.30467 9.23044 0.658691 7.19973 0.658691C5.16983 0.658691 3.52383 2.30467 3.52383 4.33537C3.51661 6.35884 5.15051 8.00481 7.17478 8.01206H7.19973Z"
                fill="white" stroke="white" stroke-width="1.20732" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="card-body col-9 col-sm-10 ">
          <span class=" edge"></span>
          <div class="  text-content">
            <h3 class="card-title">{{ data.question.title }}</h3>
            <p class="card-text ">{{ data.question.body }}</p>
          </div>
          <div class="feed-back mt-3 mb-2 d-flex  flex-row-reverse justify-content-between align-items-center">
            <div class="answer ms-2">
              <span class="answer-icon ms-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none"><path
                    d="M0.925234 9.72754L0.556516 9.79589L0.787733 11.0431L1.27149 9.87153L1.27152 9.87144L1.27154 9.8714L1.27165 9.87114L1.27174 9.87092L1.2723 9.86962L1.27746 9.85785C1.28249 9.84658 1.29066 9.82868 1.30207 9.80509C1.32491 9.75785 1.3605 9.68817 1.40937 9.60355C1.50754 9.43356 1.65691 9.2074 1.86081 8.98253C2.26881 8.53257 2.87348 8.10874 3.71769 8.10874H7.78017V9.72754V10.4996L8.38699 10.0223L12.9818 6.40853L13.3566 6.11377L12.9818 5.81901L8.38699 2.20524L7.78017 1.72798V2.5V4.1188H2.5806C1.76708 4.1188 1.22127 4.53906 0.888072 5.12658C0.568345 5.69035 0.438267 6.41155 0.394111 7.08618C0.349433 7.76879 0.390478 8.44557 0.441584 8.94774C0.467239 9.19981 0.495669 9.41016 0.517796 9.55812C0.528866 9.63214 0.538376 9.69067 0.545201 9.73113L0.553289 9.77799L0.555562 9.79068L0.556211 9.79424L0.556407 9.79531L0.556473 9.79566C0.556496 9.79579 0.556516 9.79589 0.925234 9.72754Z"
                    fill="black" stroke="black" stroke-width="0.75"/></svg>
              </span>
              <span class="answer-text">{{ data.question.answer }}</span>
            </div>
            <div class="likes d-flex align-items-center me-2">
              <div class="like ms-2">
                <span class=" like-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none"><path
                      d="M6.54248 13.8671V6.24705C6.54248 5.94705 6.63248 5.65455 6.79748 5.40705L8.84498 2.36205C9.16748 1.87455 9.96998 1.52955 10.6525 1.78455C11.3875 2.03205 11.875 2.85705 11.7175 3.59205L11.3275 6.04455C11.2975 6.26955 11.3575 6.47205 11.485 6.62955C11.6125 6.77205 11.8 6.86205 12.0025 6.86205H15.085C15.6775 6.86205 16.1875 7.10205 16.4875 7.52205C16.7725 7.92705 16.825 8.45205 16.6375 8.98455L14.7925 14.6021C14.56 15.5321 13.5475 16.2896 12.5425 16.2896H9.61748C9.11498 16.2896 8.40998 16.1171 8.08748 15.7946L7.12748 15.0521C6.75998 14.7746 6.54248 14.3321 6.54248 13.8671Z"
                      fill="#37C660"/><path
                      d="M4.1575 4.78516H3.385C2.2225 4.78516 1.75 5.23516 1.75 6.34516V13.8902C1.75 15.0002 2.2225 15.4502 3.385 15.4502H4.1575C5.32 15.4502 5.7925 15.0002 5.7925 13.8902V6.34516C5.7925 5.23516 5.32 4.78516 4.1575 4.78516Z"
                      fill="#37C660"/></svg>
                </span>
                <span class="number-icon like-number">{{ data.question.likeNumber }}</span>
              </div>
              <div class="dislike">
                <span class=" dislike-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none"><path
                      d="M6.79248 4.13295V11.7529C6.79248 12.0529 6.88248 12.3454 7.04748 12.5929L9.09498 15.6379C9.41748 16.1254 10.22 16.4704 10.9025 16.2154C11.6375 15.9679 12.125 15.1429 11.9675 14.4079L11.5775 11.9554C11.5475 11.7304 11.6075 11.5279 11.735 11.3704C11.8625 11.2279 12.05 11.1379 12.2525 11.1379H15.335C15.9275 11.1379 16.4375 10.8979 16.7375 10.4779C17.0225 10.0729 17.075 9.54795 16.8875 9.01545L15.0425 3.39795C14.81 2.46795 13.7975 1.71045 12.7925 1.71045H9.86748C9.36498 1.71045 8.65998 1.88295 8.33748 2.20545L7.37748 2.94795C7.00998 3.22545 6.79248 3.66795 6.79248 4.13295Z"
                      fill="#FF0000"/><path
                      d="M4.4075 13.2148H3.635C2.4725 13.2148 2 12.7648 2 11.6548V4.10984C2 2.99984 2.4725 2.54984 3.635 2.54984H4.4075C5.57 2.54984 6.0425 2.99984 6.0425 4.10984V11.6548C6.0425 12.7648 5.57 13.2148 4.4075 13.2148Z"
                      fill="#FF0000"/></svg>
                </span>
                <span class="number-icon dislike-number"> {{ data.question.dislikeNumber }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class=" row card d-flex flex-row-reverse border-0 answer mt-4 ">

        <div class="card-header bg-transparent border-0 col-3 col-sm-2  ">
          <div class="contact-img rounded rounded-circle text-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M7.19974 10.6841C4.10579 10.6841 1.46338 11.1517 1.46338 13.0255C1.46338 14.8992 4.0897 15.3838 7.19974 15.3838C10.2945 15.3838 12.9361 14.9153 12.9361 13.0424C12.9361 11.1694 10.3106 10.6841 7.19974 10.6841Z"
                    fill="white" stroke="white" stroke-width="1.20732" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M7.19973 8.01206C9.23044 8.01206 10.8764 6.36608 10.8764 4.33537C10.8764 2.30467 9.23044 0.658691 7.19973 0.658691C5.16983 0.658691 3.52383 2.30467 3.52383 4.33537C3.51661 6.35884 5.15051 8.00481 7.17478 8.01206H7.19973Z"
                    fill="white" stroke="white" stroke-width="1.20732" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="card-body col-9 col-sm-10">
          <span class=" edge"></span>
          <div class="row bg-transparent">
            <div class="card border-0 p-3 feedback-question bg-transparent ">
              <div class="card-body p-2 ">
                <h5 class="question-name">{{data.question.title}}</h5>
                <p class="question-text">{{data.question.body}}</p>
              </div>
            </div>
          </div>
          <div class="row  text-content">
            <h3 class="card-title">{{ data.answer.title }}</h3>
            <p class="card-text ">{{ data.answer.body }}</p>
          </div>
          <div class="feed-back mt-3 mb-2 d-flex  flex-row justify-content-between align-items-center">
            <div class="answer mx-2">
              <span class="answer-text">{{ data.answer.answer }}</span>
              <span class="answer-icon me-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="white"><path
                    d="M0.925234 9.72754L0.556516 9.79589L0.787733 11.0431L1.27149 9.87153L1.27152 9.87144L1.27154 9.8714L1.27165 9.87114L1.27174 9.87092L1.2723 9.86962L1.27746 9.85785C1.28249 9.84658 1.29066 9.82868 1.30207 9.80509C1.32491 9.75785 1.3605 9.68817 1.40937 9.60355C1.50754 9.43356 1.65691 9.2074 1.86081 8.98253C2.26881 8.53257 2.87348 8.10874 3.71769 8.10874H7.78017V9.72754V10.4996L8.38699 10.0223L12.9818 6.40853L13.3566 6.11377L12.9818 5.81901L8.38699 2.20524L7.78017 1.72798V2.5V4.1188H2.5806C1.76708 4.1188 1.22127 4.53906 0.888072 5.12658C0.568345 5.69035 0.438267 6.41155 0.394111 7.08618C0.349433 7.76879 0.390478 8.44557 0.441584 8.94774C0.467239 9.19981 0.495669 9.41016 0.517796 9.55812C0.528866 9.63214 0.538376 9.69067 0.545201 9.73113L0.553289 9.77799L0.555562 9.79068L0.556211 9.79424L0.556407 9.79531L0.556473 9.79566C0.556496 9.79579 0.556516 9.79589 0.925234 9.72754Z"
                    fill="#fff" stroke="white" stroke-width="0.75"/></svg>
              </span>
            </div>
            <div class="likes mx-2 d-flex  align-items-center me-2">
              <div class="like ms-2">
                <span class=" like-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none"><path
                      d="M6.54248 13.8671V6.24705C6.54248 5.94705 6.63248 5.65455 6.79748 5.40705L8.84498 2.36205C9.16748 1.87455 9.96998 1.52955 10.6525 1.78455C11.3875 2.03205 11.875 2.85705 11.7175 3.59205L11.3275 6.04455C11.2975 6.26955 11.3575 6.47205 11.485 6.62955C11.6125 6.77205 11.8 6.86205 12.0025 6.86205H15.085C15.6775 6.86205 16.1875 7.10205 16.4875 7.52205C16.7725 7.92705 16.825 8.45205 16.6375 8.98455L14.7925 14.6021C14.56 15.5321 13.5475 16.2896 12.5425 16.2896H9.61748C9.11498 16.2896 8.40998 16.1171 8.08748 15.7946L7.12748 15.0521C6.75998 14.7746 6.54248 14.3321 6.54248 13.8671Z"
                      fill="#37C660"/><path
                      d="M4.1575 4.78516H3.385C2.2225 4.78516 1.75 5.23516 1.75 6.34516V13.8902C1.75 15.0002 2.2225 15.4502 3.385 15.4502H4.1575C5.32 15.4502 5.7925 15.0002 5.7925 13.8902V6.34516C5.7925 5.23516 5.32 4.78516 4.1575 4.78516Z"
                      fill="#37C660"/></svg>
                </span>
                <span class="number-icon like-number">{{ data.answer.likeNumber }}</span>
              </div>
              <div class="dislike">
                <span class=" dislike-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none"><path
                      d="M6.79248 4.13295V11.7529C6.79248 12.0529 6.88248 12.3454 7.04748 12.5929L9.09498 15.6379C9.41748 16.1254 10.22 16.4704 10.9025 16.2154C11.6375 15.9679 12.125 15.1429 11.9675 14.4079L11.5775 11.9554C11.5475 11.7304 11.6075 11.5279 11.735 11.3704C11.8625 11.2279 12.05 11.1379 12.2525 11.1379H15.335C15.9275 11.1379 16.4375 10.8979 16.7375 10.4779C17.0225 10.0729 17.075 9.54795 16.8875 9.01545L15.0425 3.39795C14.81 2.46795 13.7975 1.71045 12.7925 1.71045H9.86748C9.36498 1.71045 8.65998 1.88295 8.33748 2.20545L7.37748 2.94795C7.00998 3.22545 6.79248 3.66795 6.79248 4.13295Z"
                      fill="#FF0000"/><path
                      d="M4.4075 13.2148H3.635C2.4725 13.2148 2 12.7648 2 11.6548V4.10984C2 2.99984 2.4725 2.54984 3.635 2.54984H4.4075C5.57 2.54984 6.0425 2.99984 6.0425 4.10984V11.6548C6.0425 12.7648 5.57 13.2148 4.4075 13.2148Z"
                      fill="#FF0000"/></svg>
                </span>
                <span class="number-icon dislike-number"> {{ data.answer.dislikeNumber }}</span>
              </div>
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
  question: {
    body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هد',
    title: 'عیسی خانزادی',
    likeNumber: 100,
    dislikeNumber: 10,
    answer: 'پاسخ',
    answerIcon: '/comment/answer.svg',
    likeIcon: '/comment/like.svg',
    disLikeIcon: '/comment/like.svg',
  },
  answer: {
    body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هد',
    title: 'ادمین جون',
    likeNumber: 100,
    dislikeNumber: 10,
    answer: 'پاسخ',
    answerIcon: '/comment/answer.svg',
    likeIcon: '/comment/like.svg',
    disLikeIcon: '/comment/like.svg',
  }

})
</script>
<style scoped>

.question .contact-img {
  position: relative;
  background-color: #d9d9d9;
  width: 30px;
  height: 30px;
  margin-top: 1.2rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.question .contact-img svg {
  height: 20px;
  width: 20px;
}
.question {
  background-color: transparent;
}
.question .card-body {
  background-color: #D9D9D9;
  border-radius: 16px;
  position: relative;
}

.question span.edge {
  position: absolute;
  background-color: #d9d9d9;
  width: 30px;
  height: 32px;
  top: 28px;
  right: -18px;
  border: 0;
}

.question span.edge::after {
  content: "";
  position: absolute;
  width: 29px;
  height: 27px;
  background-color: #FFFFFF;
  border: 0;
  border-radius: 50%;
  top: -11px;
  right: -11px;
}

.question span.edge::before {
  content: "";
  position: absolute;
  width: 29px;
  height: 27px;
  background-color: #FFFFFF;
  border: 0;
  border-radius: 50%;
  bottom: -11px;
  right: -11px;
}

.question .card-body h3 {
  color: #000;
  font-size: 13px;
  font-weight: 900;
  line-height: 19.22px;
  text-align: right;
}

.question .card-body p {
  text-align: justify;
  font-size: 10.28px;
  font-weight: 400;
  line-height: 22px;
}

.question .answer-text {
  color: #000000 !important;
  font-size: 9.21px;
  font-weight: 700;
}

.question .answer-icon {
  //width: 18px;
  //height: 10px;
}

.question .dislike-icon, .like-icon {
  width: 18px;
  height: 18px;
}

.question .dislike-number, .like-number {
  font-weight: 700;
  font-size: 10.21px;
}

.question .like-number {
  color: #37C660;
}

.question .dislike-number {
  color: #ff0000;
}

/* start answer style*/
.answer , .card{
    background-color: transparent;
}
.answer .question-name{
  color: #fff;
  font-size: 13px;
  font-weight: 900;
  line-height: 19.22px;
  text-align: right;
}
.answer .feedback-question .card-body{
  background-color: #1E70BE;
  border-left: 3px solid #58C9D2;
  border-radius: 4px;
}
.answer .question-text{
  text-align: justify;
  font-size: 10.28px;
  font-weight: 400;
  line-height: 22px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.answer .contact-img {
  position: relative;
  background-color: #095195;
  width: 30px;
  height: 30px;
  margin-top: 1.2rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.answer .contact-img svg {
  height: 20px;
  width: 20px;
}

.answer .card-body {
  background-color: #095195;
  border-radius: 16px;
  position: relative;
}

.answer span.edge {
  position: absolute;
  background-color: #095195;
  width: 30px;
  height: 32px;
  top: 28px;
  left: -18.5px;
  border: 0;
  transform: rotate(180deg);
}

.answer span.edge::after {
  content: "";
  position: absolute;
  width: 29px;
  height: 27px;
  background-color: #FFFFFF;
  border: 0;
  border-radius: 50%;
  top: -10px;
  right: -10px;
}

.answer span.edge::before {
  content: "";
  position: absolute;
  width: 29px;
  height: 27px;
  background-color: #FFFFFF;
  border: 0;
  border-radius: 50%;
  bottom: -10px;
  right: -10px;
}

.answer .card-body h3 {
  color: #fff;
  font-size: 13px;
  font-weight: 900;
  line-height: 19.22px;
  text-align: right;
}
.answer .answer-icon svg{
color:#fff;
  fill: #FFFFFF;
}
.answer .card-body p {
  color: #fff;
  text-align: justify;
  font-size: 10.28px;
  font-weight: 400;
  line-height: 22px;
}

.answer .answer-text {
  color: #fff;
  font-size: 9.21px;
  font-weight: 700;
}

.answer .answer-icon {
  //width: 18px;
  //height: 9.23px;
}

.answer .dislike-icon, .like-icon {
  width: 18px;
  height: 18px;
}

.answer .dislike-number, .like-number {
  font-weight: 700;
  font-size: 10.21px;
}

.answer .like-number {
  color: #37C660;
}

.answer .dislike-number {
  color: #ff0000;
}

@media screen and (min-width: 768.1px) {
  .question .contact-img{
    width: 40px;
    height: 40px;
    margin-top: 1.1rem;
  }
  .answer .contact-img{
    width: 40px;
    height: 40px;
    margin-top: 1.1rem;
  }
  .question .contact-img svg{
    width: 20px;
    height: 20px;
  }
  .answer .contact-img svg{
    width: 20px;
    height: 20px;
  }
}
@media screen and (min-width: 992.1px) {
  .question .contact-img{
    width: 45px;
    height: 45px;
    margin-top: 1rem;
  }
  .question .contact-img svg{
    width: 20px;
    height: 20px;
  }
  .answer .contact-img svg{
    width: 20px;
    height: 20px;
  }
  .answer .contact-img{
    width: 40px;
    height: 40px;
    margin-top: 1rem;
  }
}
@media screen and (min-width: 1200.1px) {
  .question .contact-img{
    width: 40px;
    height: 40px;
    margin-top: 1rem;
  }
  .answer .contact-img{
    width: 40px;
    height: 40px;
    margin-top: 1rem;
  }
}
</style>
