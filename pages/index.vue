<template>
 <HomeHerosection></HomeHerosection>
    <!--  Slider -->
<HomeSlider :sliderPics="sliderPics"></HomeSlider>
 
    <!--  Category Display -->
  <HomeCategories></HomeCategories>
    <!--  Offer Banner -->
 <HomeOfferBanner></HomeOfferBanner>
    <!-- Featured Products -->
    <section class="container mb-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h2>Featured Eco Products</h2>
            <NuxtLink href="/products" class="btn btn-outline-primary">View All</NuxtLink>
        </div>
        <div class="row g-4">
            <HomeProduct v-for="product,index in featuredproducts" :key="index" :product="product"/>



        </div>
    </section>

    <!-- Testimonials -->
    <section class="container mb-5">
        <h2 class="text-center mb-5">What Our Eco-Conscious Customers Say</h2>
        <div class="row g-4">
           
           
           <HomeTestimonyCard v-for="comment,index in comments" :key="index" :comment="comment.comment" :name="comment.name" :rate="comment.rate"/>
           
           
      
        </div>
    </section>

    <!-- Newsletter -->
    <section class="bg-light py-5 mb-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <div class="p-4 rounded-3" style="background-color: #00ff67;">
                        <h2 class="mb-3">Join Our Green Community</h2>
                        <p class="mb-4">Subscribe for eco-living tips, exclusive offers, and 10% off your first order
                        </p>
                        <form class="row g-2 justify-content-center">
                            <div class="col-md-8">
                                <input type="email" class="form-control form-control-lg"
                                    placeholder="Your email address">
                            </div>
                            <div class="col-md-4">
                                <button type="submit" class="btn btn-primary btn-lg w-100">Subscribe</button>
                            </div>
                            <div class="col-12">
                                <small class="text-muted">We respect your privacy. Unsubscribe at any time.</small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>

const sliderPics = ref(['/img/2.jpg','/img/1.jpg','/img/g9.jpg'])
const featuredproducts = ref([
    {title:"Bamboo Toothbrush Set",tag:"Eco",tagMode:'dark',price:18.99,off: 12.99,category:"Bamboo Series",rate:4.9},
    {title:"Stainless Steel Bottle",tag:"New",tagMode:'primary',price:24.99,off:false,category:"Drinkware",rate:5},
    {title:"Organic Soap Collection",tag:"Best Seller",tagMode:'success',price:18.99,off:false,category:"Personal Care",rate:4.8},
    {title:"Hemp Tote Bag",tag:"Limited" ,tagMode:'warning',price:29.99,off:false,category:"Accessories",rate:4.7}
])
const comments = [
    {name:"vidal",comment:`"The organic cotton towels are the softest I've ever used. Worth every penny for both quality and eco-impact!""`,rate:4}
    ,{name:"kazemi",comment:`"I love shopping at Ernesto Shop! Their commitment to sustainability is genuine, and the product quality is exceptional."`,rate:4}
    ,{name:"sharifi",comment:`"The organic cotton towels are the softest I've ever used. Worth every penny for both quality and eco-impact!"`,rate:5}
    ]
</script>

<style >

.bg-primary {
    background-color: #00f676 !important;
}

.text-primary {
    color:  #00f676 !important;
}

.btn-primary {
    background-color: #00f676;
    border-color: #8b5cf6;
    color: #000;
}

.btn-primary:hover,
.btn-primary:focus {
    background-color: #00c961;
    border-color: #a0ffc8;
}

.btn-outline-primary {
    color: #8b5cf6;
    border-color: #00f676;
}

.btn-outline-primary:hover {
    background-color: #00c961;
    color: #000;
}

/* Hero Section */
.hero-section {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/stalin.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    padding: 120px 0;
}

/* slider */
.hero-carousel {
    height: 70vh;
    min-height: 500px;
    overflow: hidden;
    position: relative;
    border-radius: 15px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.carousel-item {
    height: 100%;
    background-size: cover;
    background-position: center;
}

.carousel-caption {
    bottom: auto;
    top: 50%;
    transform: translateY(-50%);
    left: 10%;
    right: auto;
    text-align: left;
    max-width: 500px;
    background: transparent;
    padding: 0;
}

.carousel-caption h2 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.carousel-caption p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.shop-btn {
    padding: 12px 30px;
    border-radius: 50px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: all 0.3s;
    border: 2px solid white;
}

.shop-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.carousel-indicators {
    bottom: 30px;
}

.carousel-indicators button {
    width: 12px !important;
    height: 12px !important; 
    border-radius: 50%;
    margin: 0 8px;
    border: 2px solid white;
    background: transparent;
}



.carousel-control-prev,
.carousel-control-next {
    width: 60px;
    height: 60px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    opacity: 0;
    transition: opacity 0.3s;
}

.hero-carousel:hover .carousel-control-prev,
.hero-carousel:hover .carousel-control-next {
    opacity: 1;
}

@media (max-width: 768px) {
    .hero-carousel {
        height: 60vh;
        min-height: 400px;
    }

    .carousel-caption {
        left: 5%;
        right: 5%;
        max-width: 90%;
    }

    .carousel-caption h2 {
        font-size: 2.5rem;
    }
}

/* Attractive Categories */
.category-section {
    margin: 4rem 0;
}

.category-card {
    border: none;
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.3s ease;
    height: 100%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    position: relative;
}

.category-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.category-img {
    height: 220px;
    object-fit: cover;
    transition: transform 0.5s ease;

}

.category-card:hover .category-img {
    transform: scale(1.1);
}

.category-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    padding: 1.5rem;
    color: white;
}

.category-count {
    font-size: 0.9rem;
    opacity: 0.8;
}

.category-icon {
    z-index: 3;
    position: absolute;
    top: 20px;
    left: 20px;
    background: rgba(255, 255, 255, 0.333);
    color: #000;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

/* Product Cards */
.product-card {
    transition: all 0.3s ease;
    border: none;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.05);
}

.product-card:hover {
    transform: translateY(5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.product-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 2;
}

.wishlist-btn {
    transition: all 0.3s ease;
}

.wishlist-btn:hover {
    color: #00f676 !important;
    transform: scale(1.1);
}

/*  Offer Banner */
.offer-banner {
    /* background: linear-gradient( 10deg , #00f676, #8b5cf6); */
    color: #000;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    background: linear-gradient(45deg, #00f676, #8b5cf6, #00f676);
    background-size: 250% 250%;
    animation: offer-banner 3s ease infinite;
 

}

@keyframes offer-banner {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.offer-badge {
    position: absolute;
    top: 0px;
    right: 0px;
    background: #000;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 30px;
    font-weight: bold;
    transform: rotate(15deg);
}

/* Testimonials */
.testimonial-card {
    border: none;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
}

.testimonial-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
</style>