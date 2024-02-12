import { createRouter, createWebHistory } from 'vue-router'

import TwoPageLayout from '../layouts/TwoPageLayout.vue'
import HomePage from '../pages/HomePage.vue'
import DashboardPage from '../pages/DashboardPage.vue'
import ProcessPage from '../pages/ProcessPage.vue'
import InProgressPage from '../pages/InProgressPage.vue'
import TemplatesPage from '../pages/TemplatesPage.vue'
import ReviewsPage from '../pages/ReviewsPage.vue'
import ReviewDetailPage from '../pages/ReviewDetailPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage
    },
    {
      path: "/main",
      name: "main",
      component: TwoPageLayout,
      children: [
        {
          path: "",
          name: "dashboard",
          component: DashboardPage
        },
        {
          path: "in-progress",
          name: "in-progress",
          component: InProgressPage
        },
        {
          path: "process/:id",
          name: "process",
          component: ProcessPage
        },
        {
          path: "templates",
          name: "templates",
          component: TemplatesPage
        },
        {
          path: "reviews",
          name: "reviews",
          component: ReviewsPage
        },
        {
          path: "reviews/:id",
          name: "review-detail",
          component: ReviewDetailPage
        },
      ]
    }
  ]
})

export default router
