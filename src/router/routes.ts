import Login from "../views/login/index.vue"
import Layout from "../layout/index.vue"
import Main from "../layout/main/index.vue"

// 列表区域组件
import MessageList from "../views/list/message/index.vue"
import ContactPersonList from "../views/list/contactPerson/index.vue"
import SettingsList from "../views/list/settings/index.vue"

// Main区域组件
import PersonalInfo from "../views/main/settingArea/personalInfo/index.vue"
import AccountSecurity from '../views/main/settingArea/accountSecurity/index.vue'

import { ChatDotRound, User, Setting } from '@element-plus/icons-vue'
import { markRaw } from "vue"

export const myRoutes = [
  {
    path: "/",
    component: Layout,
    name: 'myLayout',
    children: [
      // 消息页面
      {
        path: "messagelist",
        components: {
          listPanel: MessageList // 对应list-panel区域的<router-view name="listPanel" />
        },
        name: 'myMessageList',
        meta: {
          title: '消息',
          icon: markRaw(ChatDotRound),
        },
      },
      // 联系人页面
      {
        path: "contactperson",
        components: {
          listPanel: ContactPersonList // 对应list-panel区域
        },
        name: 'myContactPersonList',
        meta: {
          title: '联系人',
          icon: markRaw(User),
        },
      },
      // 设置页面
      {
        path: "settings",
        components: {
          listPanel: SettingsList, // 左侧设置导航（list-panel区域）
          main: Main       // 默认显示的main区域内容
        },
        name: 'mySettingsList',
        meta: {
          title: '设置',
          icon: markRaw(Setting),
        },
        children: [
          // 个人资料
          {
            path: "personalinfo",
            components: {
              main: PersonalInfo // 只更新main区域
            },
            name: 'myPersonalInfo',
            meta: { title: '个人资料' }
          },
          // 账号安全
          {
            path: "accountsecurity",
            components: {
              main: AccountSecurity // 只更新main区域
            },
            name: 'myAccountSecurity',
            meta: { title: '账号安全' }
          }
        ]
      },
    ]
  },
  {
    path: "/login",
    component: Login,
    name: 'myLogin',
    meta: { title: '登录' }
  },
]
