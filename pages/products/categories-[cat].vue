<template>
  <div class="container">
    <h1 class="text-center text-primary ">
      {{ $route.params.cat }}

    </h1>
    <div class="row g-5 my-5">

      <Product v-for="product in products" :key="product.id" :product="product"></Product>
    </div>
  </div>
</template>

<script setup>

const route = useRoute()

// const url = computed(() => `https://fakestoreapi.com/products/category/${route.params.cat}`)
// console.log(url);

const products = ref([])

watchEffect(async () => {
  const url = `https://fakestoreapi.com/products/category/${route.params.cat}`
  products.value = await $fetch(url)
})





</script>

<style>

</style>