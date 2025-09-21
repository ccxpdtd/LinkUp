import Login from "../views/login/index.vue"
import Layout from "../layout/index.vue"

export const myRoutes = [
  {
    path: "/login",
    component: Login,
    name: 'login',
    meta: {
      title: '登录',
      hidden: true,
      icon: 'Promotion'
    }
  },
  {
    path: "/",
    component: Layout,
    name: 'layout',
    meta: {
      title: '',
      hidden: false,
      icon: 'Avatar',
    },
  },
]