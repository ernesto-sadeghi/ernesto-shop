<template>
      <div class="col-lg-3 col-md-6">
                <div class="card product-card h-100">
                    <div class="position-relative">
                        <img src="/img/R.jpeg.jpg" class="card-img-top"
                            alt="Bamboo Product">
                        <span class="product-badge badge " :class="'bg-'+product.tagMode">{{ product.tag }}</span>
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between mb-2">
                            <span class="text-muted"><small>{{ product.category }}</small></span>
                            <div>
                                <i class="bi bi-star-fill text-warning small"></i>
                                <span class="small"> {{ product.rate }}</span>
                            </div>
                        </div>
                        <h5 class="card-title">{{ product.title }}</h5>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <span class="text-dark fw-bold">${{product.price  }}</span>
                                <span class="text-decoration-line-through text-muted small ms-2">{{product.off?`$ ${product.off}`:''  }}</span>
                            </div>
                            <button class="btn btn-sm btn-outline-dark rounded-circle wishlist-btn">
                                <i class="bi bi-heart"></i>
                            </button>
                        </div>
                    </div>
                    <div class="card-footer bg-white border-0 pt-0">
                        <button class="btn btn-primary w-100">Add to Cart</button>
                    </div>
                </div>
            </div>

</template>
<script setup>

const {product} = defineProps({product:Object})
console.log(product);

</script>