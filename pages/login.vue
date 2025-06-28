<template>
  <div class="container-fluid py-5 px-3">
    <div class="login-card ">
      <div class="login-header">
        <i class="bi bi-shield-lock login-icon"></i>
        <h2 class="mb-2 fw-bold">Welcome Honey </h2>
        <p class="text-muted">Please enter your details</p>
      </div>

      <form>
        <div class="form-floating mb-3">
          <input v-model="data.firstname" type="firstname" class="form-control" id="firstname" placeholder="name@example.com">
          <label for="firstname"><i class="bi bi-fingerprint me-2"></i>first name</label>
        </div>
        <div class="form-floating mb-3">
          <input v-model="data.lastname"  type="lastname" class="form-control" id="lastname" placeholder="name@example.com">
          <label for="lastname"><i class="bi bi-cup-hot-fill me-2"></i>last name</label>
        </div>

        
        <div class="d-flex justify-content-between align-items-center mx-1 mb-4">
          <div class="form-check">
            <input  v-model="data.adminstration.isAdmin" class="form-check-input" type="checkbox" id="rememberMe">
            <label class="form-check-label" for="rememberMe">I am admin</label>
          </div>
          <!-- <a href="#" class="link-muted">Forgot password?</a> -->
        </div>
        <div v-show="data.adminstration.isAdmin" class="form-floating mb-3">
          <input  v-model="data.adminstration.adminPassword" type="password" class="form-control" id="password" placeholder="Password">
          <label for="password"><i class="bi bi-lock me-2"></i> Admin Password</label>
        </div>
        
        <button @click.prevent="submit"  class="btn btn-primary w-100 mb-3">
          <i class="bi bi-box-arrow-in-right me-2"></i>Sign In
        </button>

        <div class="divider">
          <small>or continue with (not available)</small>
        </div>

        <div class="d-flex justify-content-center gap-3 mb-4">
          <a href="#" class="social-btn" style="background: #dd4b39;">
            <i class="bi bi-google"></i>
          </a>
          <a href="#" class="social-btn" style="background: #3b5998;">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="#" class="social-btn" style="background: #1DA1F2;">
            <i class="bi bi-twitter"></i>
          </a>
        </div>

        
      </form>
    </div>
  </div>
</template>

<script setup>
import { useLogin } from '~/store/useLogin';


const data = reactive({firstname:'',lastname:"",adminstration:{isAdmin:false,adminPassword:''}})
const loginStore = useLogin()

function submit() {
  console.log(data);
  
  loginStore.logIn(data)
 loginStore.islogin? setPageLayout('logged-in'):setPageLayout('default')
}
</script>

<style scoped>
.container-fluid{
   background: linear-gradient(135deg, #00f676, #8b5cf6, #00f676);
  background-size: 200% 200%;

  animation: backer 5s ease-in-out infinite;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
}
@keyframes backer {
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
}
.login-card {
  max-width: 420px;
  margin: 0 auto;
  padding: 2.5rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.login-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.login-icon {
  font-size: 3.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.form-control {
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  transition: all 0.3s;
}

.form-control:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 0.25rem rgba(102, 126, 234, 0.15);
}

.form-floating>label {
  padding: 1rem;
  color: #6c757d;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #5a6fd1 0%, #6a4299 100%);
  transform: translateY(-1px);
}

.divider {
  display: flex;
  align-items: center;
  margin: 1.75rem 0;
  color: #adb5bd;
}

.divider::before,
.divider::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #e9ecef;
}

.divider::before {
  margin-right: 1rem;
}

.divider::after {
  margin-left: 1rem;
}

.social-btn {
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  transition: all 0.3s;
}

.social-btn:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

.link-muted {
  color: #6c757d;
  text-decoration: none;
  transition: color 0.2s;
}

.link-muted:hover {
  color: #495057;
}
</style>