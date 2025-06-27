// stores/cart.ts
import { defineStore } from 'pinia'

export const useLogin = defineStore('useLogin', {
  state: () => ({ login: {}, islogin: false }),

  getters: {
fulnamer:(state)=>{
  return state.login.firstname +" "+ state.login.lastname
}
  },

  actions: {

    initializeLogin() {
      const cookie = useCookie('login')
      const cookie2 = useCookie('islogin')

      if (cookie.value) {
        this.login = cookie.value
      }
      if (cookie2.value) {
        this.islogin = cookie2.value
      }
    },
    login(data) {
 

      this.login = data
      this.islogin = true
      this.saveLoginToCookie()
    },

    saveLoginToCookie() {
      const cookie = useCookie('login', {
        maxAge: 60 * 60 * 24 * 7, // 1 week
        sameSite: 'lax'
      })
      const cookie2 = useCookie('islogin', {
        maxAge: 60 * 60 * 24 * 7, // 1 week
        sameSite: 'lax'
      })
      cookie.value = JSON.stringify(this.login)
      cookie2.value = JSON.stringify(this.islogin)
    },

  }
})
