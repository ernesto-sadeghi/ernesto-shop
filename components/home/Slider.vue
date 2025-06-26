<template>
       <div class="container-fluid px-0">
        <div id="premiumCarousel" class="carousel slide hero-carousel" data-bs-ride="carousel">
            <!-- Indicators -->
            <div class="carousel-indicators">
                <button v-for="pic,index in sliderPics" :key="index" type="button" data-bs-target="#premiumCarousel" :data-bs-slide-to=" index " :class="index ==0 ?'active':''"></button>
                <!-- <button type="button" data-bs-target="#premiumCarousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#premiumCarousel" data-bs-slide-to="2"></button> -->
            </div>

            <!-- Slides -->
            <div class="carousel-inner h-100">

                <div v-for="pic,index in sliderPics" :key="index" class="carousel-item  h-100" :class="index ==0 ?'active':''" :style="{ backgroundImage: `url(${pic})` }">
                    <div class="carousel-caption animate__animated animate__fadeInLeft">
                        <h2>Summer Collection</h2>
                        <p class="animate__animated animate__fadeInLeft animate__delay-1s">Discover our exclusive summer
                            lineup with 30% off for new customers</p>
                        <NuxtLink href="/products"
                            class="btn btn-light shop-btn animate__animated animate__fadeInUp animate__delay-2s">SHOP
                            NOW</NuxtLink>
                    </div>
                </div>





                <!-- <div class="carousel-item h-100" style="background-image: url('/img/g9.jpg');">
                    <div class="carousel-caption animate__animated animate__fadeInRight">
                        <h2>New Arrivals</h2>
                        <p class="animate__animated animate__fadeInRight animate__delay-1s">Fresh styles for the season.
                            Limited stock available.</p>
                        <a href="#"
                            class="btn btn-outline-light shop-btn animate__animated animate__fadeInUp animate__delay-2s">VIEW
                            COLLECTION</a>
                    </div>
                </div> -->
                <!-- <div class="carousel-item h-100" style="background-image: url('/img/2.jpg');">
                    <div class="carousel-caption animate__animated animate__fadeInUp">
                        <h2>Weekend Special</h2>
                        <p class="animate__animated animate__fadeInUp animate__delay-1s">Free shipping on all orders
                            this weekend only. Use code: WEEKEND23</p>
                        <a href="#"
                            class="btn btn-danger shop-btn animate__animated animate__fadeInUp animate__delay-2s">GET
                            DEAL</a>
                    </div>
                </div> -->
            </div>

            <!-- Controls -->
            <button class="carousel-control-prev  mx-3" type="button" data-bs-target="#premiumCarousel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next mx-3" type="button" data-bs-target="#premiumCarousel"
                data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>


</template>
<script setup>
const {sliderPics} = defineProps({sliderPics:Array})



</script>