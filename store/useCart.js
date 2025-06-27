// stores/cart.ts
import { defineStore } from 'pinia'

export const useCart = defineStore('useCart', {
  state: () => ({ products: [] }),

  getters: {
    totalPrice: (state) => {
      let total = 0;
      for (let prod of state.products) {

        total += prod.price * prod.quantity;
      }
      return total;
    }
  },

  actions: {
 
    initializeCart() {
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
