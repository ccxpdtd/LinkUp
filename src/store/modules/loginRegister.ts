import { defineStore } from 'pinia'
// import { myRoutes } from '../../router/routes'
import axios from 'axios'


let useLoginRegister = defineStore('LoginRegister', {
  state: () => {
    return {
      token: '',
      name: '',
      nickname: ''
    }
  },
  actions: {
    //登录
    async login(data: any) {
      const res = await axios.post('/api/login', data)
      console.log('login_res', res);
      if (res.data.code === 200) {
        this.token = res.data.token
        this.name = res.data.user.name
        this.nickname = res.data.user.nickname
        localStorage.setItem('token', res.data.token)
        return 'ok'
      }
      else {
        return Promise.reject(new Error(res.data.msg))
      }
    },
    async register(data: any) {
      let res = await axios.post('/api/register', data)
      console.log('register_res', res);
      if (res.data.code === 200) {
        return 'ok'
      }
      else {
        return Promise.reject(new Error(res.data.msg))
      }
    },
  }

})

export default useLoginRegister
