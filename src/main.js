import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import moment from "moment";
// import VueMomentJS from "vue-moment";

import 'bootstrap/dist/css/bootstrap.css'

import '@/assets/style/fonts.css'
import '@/assets/style/main.css'

//pagination
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";


createApp(App).use(VueAwesomePaginate).use(router).mount('#app')