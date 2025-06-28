import { defineStore } from 'pinia'
export const useShopStore = defineStore('useShopStore', {
    state: () => ({ login: {}, islogin: false, products: [] }),

    getters: {
        fulnamer: (state) => {
            return state.login.firstname + " " + state.login.lastname
        }
        ,
        islogged: (state) => {
            return state.islogin
        }
        , isadmin: (state) => {
            if (state.login.adminstration.isAdmin) {
                let result = state.login.adminstration.adminPassword == '123' ? true : false
                return result
            } else {
                return false

            }

        }, totalPrice: (state) => {
            let total = 0;
            for (let prod of state.products) {

                total += prod.price * prod.quantity;
            }
            return total;
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
        logIn(data) {


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
        }, logout() {
            this.login = null
            this.islogin = false
            this.saveLoginToCookie()
            this.clearCart()

        }


    ,initializeCart() {
      const cookie = useCookie('cart')
      
      if (cookie.value) {
        this.products = cookie.value
      }
    },


    saveCartToCookie() {
      const cookie = useCookie('cart', {
        maxAge: 60 * 60 * 24 * 7, // 1 week
        sameSite: 'lax'
      })
      cookie.value = JSON.stringify(this.products)
    },

    addProduct(pro) {
      const existing = this.products.find(item => item.id == pro.id)
      if (existing) {
        existing.quantity += 1
      } else {
        this.products.push({ ...pro, quantity: 1 })
      }
      this.saveCartToCookie()
    },

    removeProduct(pro) {
      const existing = this.products.find(item => item.id == pro.id)
      if (!existing) return

      if (existing.quantity > 1) {
        existing.quantity -= 1
      } else {
        const index = this.products.indexOf(existing)
        this.products.splice(index, 1)
      }
      this.saveCartToCookie()
    },

    remover(pro) {
      const existing = this.products.find(item => item.id == pro.id)
      if (!existing) return

      const index = this.products.indexOf(existing)
      this.products.splice(index, 1)
      this.saveCartToCookie()
    },

    clearCart() {
      this.products = []
      this.saveCartToCookie()
    }
    }
})
