<template>
  <header class="sticky-top">
    <nav class="navbar glassy navbar-expand-lg navbar-dark py-3">
      <div class="container">
        <!-- Animated Logo -->
        <a class="navbar-brand fw-bold fs-3" href="https://github.com/ernesto-sadeghi"
          style="text-shadow: 0 0 1px #00c661;">
          <span class="d-inline-block   text-green animate-float">
            <i class="bi bi-github  me-2"></i>Ernesto | Nuxt
          </span>
        </a>

        <!-- Animated Toggle -->
        <button class="btn btn-success  d-md-none" type="button" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <i class="bi bi-justify text-black"></i>
        </button>

        <div class="offcanvas offcanvas-start " id="offcanvasExample"   aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">  <span class="d-inline-block   text-green animate-float">
            <i class="bi bi-github  me-2"></i>Ernesto | Nuxt
          </span></h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <!-- Glass Navigation -->
          <div class="  glass-nav" id="navbarNav">
            <div class="offcanvas-body h-100 d-flex flex-column flex-md-row">
              <ul class="navbar-nav ms-md-auto">
                <li class="nav-item mx-2">
                  
                  <NuxtLink class="nav-link px-3 py-2 position-relative" href="/">
                    <i class="bi bi-house-door me-1"></i> Home
                    <span class="nav-underline"></span>
                  </NuxtLink>
                </li>
                <li class="nav-item mx-2">
                  <NuxtLink  class="nav-link px-3 py-2 position-relative" href="/products">
                    <i class="bi bi-box-seam"></i> Products
                    <span class="nav-underline"></span>
                  </NuxtLink>
                </li>
                <li class="nav-item mx-2">
                  <NuxtLink class="nav-link px-3 py-2 position-relative" href="/cart">
                    <i class="bi bi-cart"></i> cart
                    <span class="nav-underline"></span>
                  </NuxtLink>
                </li>

              </ul>


              <div class="ms-lg-4 mt-5 mt-lg-0 ">
                <NuxtLink href="/login" class="btn btn-success px-4 py-2 rounded-pill shadow-lg hover-scale">
                  <i class="bi bi-rocket me-1"></i> Log in
                </NuxtLink>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </nav>
  </header>

  <slot></slot>

  <footer class="position-relative overflow-hidden text-white">
    <!-- Background Gradient -->
    <div class="footer-gradient"></div>

    <!-- Floating Orbs -->
    <div class="footer-orb orb-1"></div>
    <div class="footer-orb orb-2"></div>

    <div class="container position-relative py-5">
      <div class="row g-5">
        <!-- Brand Column -->
        <div class="col-lg-4">
          <div class="footer-brand mb-4">


            <a class=" fw-bold fs-3" href="https://github.com/ernesto-sadeghi" style="text-shadow: 0 0 1px #00c661;">
              <span class="d-inline-block  text-green animate-float">
                <i class="bi bi-github  me-2"></i>Ernesto | Nuxt
              </span>
            </a>
          </div>
          <p class="text-white-70 mb-4">
            I hope I’m wrong, but if and when everybody’s basic needs are fulfilled, the concept of what’s basic will
            change, and thus, there will never be a time when everybody’s needs are fulfilled.
          </p>
          <div class="social-links">
            <a href="#" class="btn btn-sm btn-outline-light btn-icon rounded-circle me-2">
              <i class="bi bi-twitter-x"></i>
            </a>
            <a href="https://web.telegram.org/k/#@ErnestoSadeghi" class="btn btn-sm btn-outline-light btn-icon rounded-circle me-2">
              <i class="bi bi-telegram"></i>
            </a>
            <a href="#" class="btn btn-sm btn-outline-light btn-icon rounded-circle me-2">
              <i class="bi bi-instagram"></i>
            </a>

            <a href="#" class="btn btn-sm btn-outline-light btn-icon rounded-circle me-2">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/ernesto-sadeghi" class="btn btn-sm btn-outline-light btn-icon rounded-circle me-2">
              <i class="bi bi-github"></i>
            </a>

          </div>
        </div>

        <!-- Contact Column -->
        <div class="col-lg-4">
          <h5 class="text-white mb-4 fw-bold">Get In Touch</h5>
          <ul class="list-unstyled">
            <li class="d-flex mb-3">
              <i class="bi bi-envelope-at-fill text-green mt-1 me-3"></i>
              <span class="text-white-70">ernestosadeghi@gmail.com</span>
            </li>
            <!-- More contact info... -->
          </ul>
        </div>

        <!-- Newsletter Column -->
        <div class="col-lg-4">
          <h5 class="text-white mb-4 fw-bold">Join Our Newsletter</h5>
          <div class="input-group mb-3 glass-input">
            <input type="email" class="form-control bg-transparent text-white" placeholder="Your Email">
            <button class="btn btn-success hover-round" type="button">
              <i class="bi bi-send"></i>
            </button>
          </div>
          <p class="text-white-50 small">We'll never share your email with anyone else.</p>
        </div>
      </div>

      <!-- Copyright with Animated Border -->
      <div class="border-top border-white-10 pt-4 mt-5">
        <div class="row align-items-center">
          <div class="col-12 text-center text-md-start">
            <p class="text-white-50 text-center mb-0">made by <a class="text-green"
                href="https://github.com/ernesto-sadeghi">Ernesto</a></p>
          </div>

        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>

.text-green {
  color: #00e676;
}

.glass-nav {
  backdrop-filter: blur(10px);
  background: rgba(15, 23, 42, 0.8) !important;
  border-radius: 16px;
  padding: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glassy {
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.292) !important;


  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.222); */

}
.offcanvas.offcanvas-start{
  width: 230px;
}
/* Floating Animation */
.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

/* Gradient Background */
.footer-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  z-index: -2;
}

/* Floating Orbs */
.footer-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.2;
  z-index: -1;
}

.orb-1 {
  width: 300px;
  height: 300px;
  background: #3b82f6;
  top: -150px;
  right: -150px;
}

.orb-2 {
  width: 200px;
  height: 200px;
  background: #8b5cf6;
  bottom: -100px;
  left: -100px;
}

/* Hover Effects */
.hover-scale {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-scale:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(119, 57, 212, 0.3) !important;
}

.hover-round {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-round:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 20px rgba(119, 57, 212, 0.3) !important;
}

/* Animated Underline */
.nav-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #00e676, #8b5cf6);
  transition: width 0.3s ease;
}

.nav-link:hover .nav-underline {
  width: 100%;
}
.router-link-exact-active .nav-underline{
  width: 100%;

}

@media only screen and (max-width: 700px) {
  .glassy {
    backdrop-filter: blur(5px);
    background: linear-gradient(rgba(182, 182, 182, 0.792), rgba(255, 255, 255, 0.079)) !important;



  }
.offcanvas{
height: 100vh !important;
}
.glass-nav {
  color: #000;
  background: transparent !important;
  border-radius: 16px;
  padding: 0px;
 
}
.glass-nav a {
  color: #000;
}

}
</style>
