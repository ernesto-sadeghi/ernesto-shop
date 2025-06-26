<template>
    <div class="col-md-4">
        <div class="card testimonial-card h-100">
            <div class="card-body text-center p-4">
                <div class="mb-3">
                    <template v-for="n in 5" :key="n">
                        <i class="bi" :class="{'bi-star-fill text-warning': n <= Math.floor(rate), 'bi-star-half text-warning': n > Math.floor(rate) && n - 1 < rate,'bi-star text-warning': n > rate}"></i>
                    </template>
                </div>
                <p class="card-text">{{ comment }}</p>
                <div class="mt-4">
                    <img :src="`/img/${name}.avif`" class="rounded-circle mb-2" width="100" height="100"
                        alt="Customer">
                    <h6 class="card-subtitle mb-2 text-muted">- {{ name }}</h6>
                    <small class="text-primary">Verified Buyer</small>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const { comment, rate, name } = defineProps(['comment', 'rate', 'name'])
</script>