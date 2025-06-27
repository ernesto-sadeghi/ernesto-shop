<template>
      <section class="category-section container-fluid">
        <h2 class="text-center mb-5">Our Categories</h2>
        <div class="row g-4">
            <div v-for="cat,index in categories" :key="index" :class="index ==3 ?'col-md-12':'col-md-4'">
                <NuxtLink :href="'/products/categories-'+cat" class="text-decoration-none">
                    <div class="category-card">
                        <div class="category-icon">
                            <i class="bi bi-fire"></i>
                        </div>
                        <img :src="pics[index]" class="category-img w-100" alt="Recycled Products">
                        <div class="category-overlay">
                            <h3 class="mb-1">{{ cat }}</h3>
                            <p class="category-count mb-0">86 Products</p>
                        </div>
                    </div>
                </NuxtLink>
            </div>
          
        </div>
    </section>

</template>
<script setup>
const {categories} = defineProps(["categories"])
const pics =ref( ['/img/m11.jpg',"/img/g6.jpg","/img/3.jpg","/img/g9.jpg"])
</script>