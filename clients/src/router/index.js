import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "Contact" */ '../views/ContactView.vue')
  },
  {
    path: '/Faqs',
    name: 'Faqs',
    component: () => import(/* webpackChunkName: "Faqs" */ '../views/FaqsView.vue')
  },
  {
    path: '/PrivacyPolicy',
    name: 'PrivacyPolicy',
    component: () => import(/* webpackChunkName: "PrivacyPolicy" */ '../views/PrivacyPolicyView.vue')
  },
  {
    path: '/TermsCondition',
    name: 'TermsCondition',
    component: () => import(/* webpackChunkName: "TermsCondition" */ '../views/TermsConditionView.vue')
  },
  {
    path: '/categories-details',
    name: 'categories-details',
    component: () => import(/* webpackChunkName: "Categories" */ '../views/CategorieView.vue')

  },
  {
    path: '/CheckOut',
    name: 'CheckOut',
    component: () => import(/* webpackChunkName: "Check View" */ '../views/CheckOut.vue')
  },
  // {
  //   path: '/product-view',
  //   name: 'product-view',
  //   component: () => import( '../views/ProductView.vue')
  // },

  {
    path: '/category/:category',
    name: 'category',
    // component: CategorieView,
    component: () => import(/* webpackChunkName: "Check View" */ '../views/CategorieView.vue')
  },

  // {
  //   path: '/product/:id',
  //   name: 'product',
  //   component: () => import('../views/ProductView.vue')
  // },

    {
    path: '/ProductView/:id',
    name: 'product',
    component: () => import(/* webpackChunkName: "Check View" */ '../views/ProductView.vue'),
    props: true
  },
  {
    path: '/order_place',
    name: 'order_place',
    component: () => import(/* webpackChunkName: "Check View" */ '../views/PlaceOrder.vue'),
  },

  {
    path: '/order_confirm',
    name: 'order_confirm',
    component: () => import(/* webpackChunkName: "Check View" */ '../views/OrderConfirmation.vue'),
  },

  //--------------------------------------------------------------
  //////////////////Admin Pages Routers\\\\\\\\\\\\\\\\\\\\\\\\\\
  {
    path: '/Admin-Login',
    name: 'Admin-Login',
    component: () => import(/* webpackChunkName: "Check View" */ '../admin/AdminLogin.vue'),
  },
  {
    path: '/Admin-Home',
    name: 'Admin-Home',
    component: () => import(/* webpackChunkName: "Check View" */ '../admin/AdminHome.vue'),
  },
  {
    path: '/Customer-Orders',
    name: 'Customer-Orders',
    component: () => import(/* webpackChunkName: "Check View" */ '../admin/pages/CustomerOrders.vue'),
  },
  {
    path: '/Product-List',
    name: 'Product-List',
    component: () => import(/* webpackChunkName: "Check View" */ '../admin/pages/ProductsList.vue'),
  },
  {
    path: '/Register-User',
    name: 'Register-User',
    component: () => import(/* webpackChunkName: "Check View" */ '../admin/pages/Users.vue'),
  },
  {
    path: '/Product-Category',
    name: 'Product-Category',
    component: () => import(/* webpackChunkName: "Check View" */ '../admin/pages/ProductCategory.vue'),
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Check View" */ '../views/LogIn.vue')
  },

  {
    path: '/Registration',
    name: 'Registration',
    component: () => import(/* webpackChunkName: "Check View" */ '../views/Registration.vue')
  },

  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
