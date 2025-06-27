<template>
   <div class="container my-5">
        <div class="row">
            <!-- Product Image -->
            <div class="col-md-6 mb-4">
                <div class="card h-100 border-0">
                    <img :src="product.image" class="card-img-top product-img" alt="Product Image">
                </div>
            </div>
            
            <!-- Product Details -->
            <div class="col-md-6 mb-4">
                <div class="card h-100 border-0">
                    <div class="card-body">
                        <!-- Category -->
                        <span class="badge bg-secondary category-badge mb-3">{{ product.category }}</span>
                        
                        <!-- Title -->
                        <h1 class="card-title mb-3">{{ product.title }}</h1>
                        
                        <!-- Rating -->
                        <div class="mb-3">
                            <span class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </span>
                            <span v-if="product.rating" class="text-muted ms-2">({{ product.rating['rate'] }}, {{ product.rating['count'] }} reviews)</span>
                        </div>
                        
                        <!-- Price -->
                        <div class="mb-4">
                            <span class="price text-primary">${{ product.price }}</span>
                            <!-- <span class="text-decoration-line-through text-muted ms-2">$249.99</span> -->
                            <!-- <span class="badge bg-danger ms-2">20% OFF</span> -->
                        </div>
                        
                        <!-- Description -->
                        <div class="mb-4">
                            <h5 class="mb-2">Description</h5>
                            <p class="card-text">
                                {{ product.description }}
                            </p>
                        </div>
                        
                        <!-- Add to Cart -->
                        <div class="d-flex flex-wrap align-items-center mb-3">
                            <!-- <div class="input-group me-3" style="width: 120px;">
                                <button @click="cartStore.removeProduct(product)" class="btn btn-outline-secondary" type="button">-</button>
                                <input type="text" class="form-control text-center" :value="cartStore">
                                <button @click="cartStore.addProduct(product)" class="btn btn-outline-secondary" type="button">+</button>
                            </div> -->
                            <button @click="cartStore.addProduct(product)" class="btn btn-primary btn-lg flex-grow-1">
                                <i class="fas fa-shopping-cart me-2"></i>Add to Cart
                            </button>
                             <NuxtLink href="/products"  class="btn btn-outline-secondary w-100 mt-2">
                            <i class="bi bi-arrow-left"></i> Continue Shopping
                        </NuxtLink>
                        </div>
                        
                        <!-- Wishlist -->
                        <!-- <button class="btn btn-outline-secondary">
                            <i class="far fa-heart me-2"></i>Add to Wishlist
                        </button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useCart } from '~/store/useCart'

const cartStore = useCart()
const route = useRoute()
const product = ref({})
watchEffect(async () => {
  const url = `https://fakestoreapi.com/products/${route.params.id}`
  product.value = await $fetch(url)
})
console.log(product);


</script>

<style scoped>
   .product-img {
            max-height: 500px;
            object-fit: contain;
        }
        .rating {
            color: #ffc107;
        }
        .category-badge {
            font-size: 0.9rem;
        }
        .price {
            font-size: 1.5rem;
            font-weight: bold;
        }
</style>