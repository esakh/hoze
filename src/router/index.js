import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/HomePage.vue'
import errorPage from '../views/errorPage.vue'
const routes = [

            {
                path: '/',
                name: 'home',
                component: homePage
            },
      {
        path: '/education-List/education-page',
        name: 'educationPage',
        component: () => import(/* webpackChunkName: "educationPage" */ '../views/educationPage.vue')
      },
      {
        path: '/news/newsPage',
        name: 'newsPage',
        component: ()=>import(/* webpaChunkName:"education-list"*/'../views/educationList.vue')
      },

  {
    path: '/contact-us',
    name: 'contactsUs',
    component: ()=>import(/* webpaChunkName:"contactUs"*/'../views/contactUs.vue')
  },
  {
    path: '/:catchAll(.*)',
    name:'error',
    component: errorPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
