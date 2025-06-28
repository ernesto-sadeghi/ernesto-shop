<template>
      <div v-if="pending || pending2" class="container p-5 m-5 d-flex justify-content-center">
        <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
  <div v-else class="container-fluid px-5 my-5">
    <div class="row g-5">

      <Product v-for="product in products" :key="product.id" :product="product"></Product>
    </div>
  </div>
  <Categories :categories="categories" />
</template>

<script setup>
const url = computed(() => `https://fakestoreapi.com/products`)

const { data: products, pending, error, refresh } = await useAsyncData("products", () => $fetch(url.value),
  {
    initialCache: false,
    watch: [url]
  }
)
const url2 = computed(() => 'https://fakestoreapi.com/products/categories')

const { data: categories, pending2, error2, refresh2 } = await useAsyncData("categories", () => $fetch(url2.value),
  {
    watch: [url]
  }
)


</script>

<style></style>