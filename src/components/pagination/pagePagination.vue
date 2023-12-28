<script setup>
import {ref} from "vue";
import '@/assets/style/pagination.css'

const onClickHandler = (page) => {
  console.log(page);
};
const currentPage = ref(1);

</script>

<template>
  <div class="container-md d-flex justify-content-center  ">
<!--    <div class="row d-flex justify-content-center">-->
        <vue-awesome-paginate
            :total-items="50"
            :items-per-page="5"
            :max-pages-shown="5"
            v-model="currentPage"
            :on-click="onClickHandler"
            next-button-content="<"
            prev-button-content=">"
        />
<!--    </div>-->
  </div>
</template>
<style scoped>

</style>

