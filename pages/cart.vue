<template>
    <div v-if="!shopStore.islogged" class="container py-4 border border-2 rounded-3 my-5">
        <h2 class="my-5 text-center">Your Shopping Cart :</h2>
        <div class="alert alert-danger text-center" role="alert">
  - you have to login first ! -
</div>
    </div>
    <div v-else class="container py-4 border border-2 rounded-3 my-5">
        <h2 class="mb-5 mx-2 text-center">Your Shopping Cart :</h2>
        <h4 v-if="shopStore.products.length == 0 " class="text-center text-secondary m-5"> <i class="bi bi-cart-x"></i> - Your cart is empy .</h4>
    
        <div v-else v-for="prod in shopStore.products" :key="prod.id" class="card mb-3 shadow-sm">
            <div class="row g-0">
                <div class="col-md-2 p-2">
                    <img :src="prod.image" class="img-fluid rounded" alt="Product">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5 class="card-title ">{{ prod.title }}</h5>
                            <button @click="shopStore.remover(prod)" class="btn btn-sm btn-outline-danger rounded-circle ">
                                <i class="bi bi-x-lg"></i>
                            </button>
                        </div>
                        <p class="card-text text-muted small mb-1">Category :{{ prod.category }} </p>
                        <p class="card-text small text-success mb-2"><i class="bi bi-check-circle"></i> In Stock</p>
                        
                        <div class="d-flex align-items-center">
                            <div class="input-group" style="width: 130px;">
                                <button @click="shopStore.removeProduct(prod)" class="btn btn-outline-secondary">-</button>
                                <input  type="text" class="form-control text-center" :value="prod.quantity">
                                <button @click="shopStore.addProduct(prod)" class="btn btn-outline-secondary">+</button>
                            </div>
                            <div class="ms-4">
                                <span class="fw-bold text-primary">${{ prod.price }}</span>
                                <!-- <small class="text-decoration-line-through text-muted ms-2">$129.99</small>
                                <span class="badge bg-danger ms-2">30% OFF</span> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 bg-light d-flex align-items-center justify-content-center">
                    <div class="text-center">
                        <h5 class="text-primary">${{ (prod.price * prod.quantity).toFixed(2) }}</h5>
                    </div>
                </div>
            </div>
        </div>
        
       
        <!-- Order Summary -->
        <div class="row mt-4 d-flex justify-content-center">
           
            <div class="col-md-4">
                <div class="card shadow-sm">
                    <div class="card-header bg-light">
                        <h5 class="mb-0">Order Summary</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between mb-2">
                            <span>Subtotal ({{ shopStore.products.length }} items) :</span>
                            <span>${{ toto.toFixed(2) }}</span>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                            <span>Shipping :</span>
                            <span class="text-success">Free</span>
                        </div>
                        <div class="d-flex justify-content-between mb-3">
                            <span>Tax :</span>
                            <span>${{ (toto/10).toFixed(2) }}</span>
                        </div>
                        <hr>
                        <div class="d-flex justify-content-between fw-bold">
                            <span>Total :</span>
                            <span>${{ (toto+toto/10).toFixed(2)  }}</span>
                        </div>
                        <button class="btn btn-primary w-100 mt-3">
                            <i class="bi bi-lock"></i> Checkout Securely
                        </button>
                        <NuxtLink href="/products"  class="btn btn-outline-secondary w-100 mt-2">
                            <i class="bi bi-arrow-left"></i> Continue Shopping
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
  titleTemplate:`%s - Cart🛒`
})
import { useShopStore } from '~/store/useShopStore';


const shopStore = useShopStore()
onMounted(() => {
  shopStore.initializeCart()
})
let toto= computed(()=> shopStore.totalPrice)



</script>

<style>

</style>