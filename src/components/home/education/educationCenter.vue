<script setup>
import {defineProps} from 'vue'
import EducationItems from "@/components/home/education/educationItems.vue";

const props = defineProps(['educations'])

</script>

<template>
  <div class="container-lg mb-lg-5">
    <div class="row">
      <div class="education mb-5">
        <div class="education-content position-relative d-flex flex-column align-items-center mx-auto">
          <h3 class="education-title">آموزش</h3>
          <span class="description">مرکز آموزش حوزه الزهرای گرگان</span>
          <div class="education-image">
            <img src="@/assets/icon/crownFlower/crownLeft.png" alt="crown education" class="left">
            <img src="@/assets/icon/crownFlower/crownRight.png" alt="crown education" class="rignt">
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <education-items :educations="props.educations"/>
    </div>
  </div>
</template>

<style scoped>
.education-content {
  display: flex !important;
  justify-content: center;
  align-items: center;
}

.education-title {
  font-size: 22px;
  font-weight: 700;
  line-height: 23px;
  text-align: right;
  color: #000000;
}

.description {
  color: rgba(55, 55, 55, 0.98);
  text-align: right;
  font-weight: 400;
  font-size: 13px;
  line-height: 23px;
}

.education-content {
  max-width: 500px;

}

.education-image {
  display: flex;
  justify-content: center;
}

.education-image img.left {
  max-width: 135.21px;
  height: 47px;
  position: absolute;
  top: 14%;
  left: 25px;
}

.education-image img.rignt {
  max-width: 135.21px;
  height: 47px;
  position: absolute;
  top: 14%;
  right: 25px;
}

@media (max-width: 576px) {
  .row.mt-5 {
    margin: auto 0;
  }

  .description {
    font-size: 9.56px;
  }

  .education-image img.left {
    width: 102.21px;
    height: 35px;
    position: absolute;
    top: 35%;
    left: 13%;
  }

  .education-image img.rignt {
    width: 102.21px;
    height: 35px;
    position: absolute;
    top: 35%;
    right: 13%;
  }
}

@media (max-width: 500px) {
  .description {
    font-size: 9.56px;
  }

  .education-image img.left {
    width: 102.21px;
    height: 35px;
    position: absolute;
    top: 35%;
    left: 8%;
  }

  .education-image img.rignt {
    width: 102.21px;
    height: 35px;
    position: absolute;
    top: 35%;
    right: 8%;
  }
}

@media (max-width: 450px) {
  .description {
    font-size: 9.56px;
  }

  .education-image img.left {

    top: 35%;
    left: 2%;
  }

  .education-image img.rignt {

    top: 35%;
    right: 2%;
  }
}

@media (max-width: 400px) {
  .description {
    font-size: 8.56px;
  }

  .education-image img.left {
    width: 80px;
    top: 35%;
    left: -2%;
  }

  .education-image img.rignt {
    width: 80px;
    top: 35%;
    right: -5px;
  }
}

@media (max-width: 320px) {
  .description {
    font-size: 8.56px;
  }

  .education-image img.left {
    width: 70px;
    height: 28px;
    top: 35%;
    left: -10px;
  }

  .education-image img.rignt {
    width: 70px;
    height: 28px;
    top: 35%;
    right: -10px;
  }
}
</style>