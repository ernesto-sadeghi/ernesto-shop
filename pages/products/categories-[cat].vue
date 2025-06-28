<template>
      <div v-if="!isload" class="container p-5 m-5 d-flex justify-content-center">
        <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
  <div v-else class="container">
    <h1 class="text-center text-primary ">
      {{ $route.params.cat }}

    </h1>
    <div class="row g-5 my-5">

      <Product v-for="product in products" :key="product.id" :product="product"></Product>
    </div>
  </div>
</template>

<script setup>
useHead({
  titleTemplate:`%s - Product categories`
})
const route = useRoute()

// const url = computed(() => `https://fakestoreapi.com/products/category/${route.params.cat}`)
// console.log(url);
const isload = ref(false)
const products = ref([])

watchEffect(async () => {
  const url = `https://fakestoreapi.com/products/category/${route.params.cat}`
  isload.value = true
  products.value = await $fetch(url)
})





</script>

<style>

</style>