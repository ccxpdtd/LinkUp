import Login from "../views/login/index.vue"

import Layout from "../layout/index.vue"


import MessageList from "../views/list/message/index.vue"
import ContactPersonList from "../views/list/contactPerson/index.vue"
import SettingsList from "../views/list/settings/index.vue"
import PersonalInfo from "../views/main/settingArea/personalInfo/index.vue"
import AccountSecurity from '../views/main/settingArea/accountSecurity/index.vue'
import { ChatDotRound, User, Setting } from '@element-plus/icons-vue'
import { markRaw } from "vue"
export const myRoutes = [

  {
    path: "/",
    component: Layout,
    name: 'myLayout',
    meta: {
      title: '',
      hidden: true,
      icon: 'Avatar',
    },
    children: [
      {
        path: "messagelist",
        component: MessageList,
        name: 'myMessageList',
        meta: {
          title: '',
          hidden: false,
          icon: markRaw(ChatDotRound),
        },
      },
      {
        path: "contactperson",
        component: ContactPersonList,
        name: 'myContactPersonList',
        meta: {
          title: '',
          hidden: false,
          icon: markRaw(User),
        },
      },
      {
        path: "settings",
        component: SettingsList,
        name: 'mySettingsList',
        meta: {
          title: '设置',
          hidden: false,
          icon: markRaw(Setting),
        },
        children: [
          {
            path: "personalinfo",
            component: PersonalInfo,
            name: 'myPersonalInfo',
            meta: {
              title: '个人资料',
              hidden: false,
            },
          },
          {
            path: "accountsecurity",
            component: AccountSecurity,
            name: 'myAccountSecurity',
            meta: {
              title: '账号安全',
              hidden: false,
            },
          },
        ]
      },


    ]
  },



  {
    path: "/login",
    component: Login,
    name: 'myLogin',
    meta: {
      title: '登录',
      hidden: true,
      icon: 'Promotion'
    }
  },
]