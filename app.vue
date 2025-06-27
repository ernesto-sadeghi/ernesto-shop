<template>
  <div>
    <NuxtRouteAnnouncer />
    
    <NuxtLayout >
      <NuxtLoadingIndicator />
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useLogin } from './store/useLogin';

const loginStore = useLogin()

watchEffect(()=>{
  loginStore.initializeLogin()
   loginStore.islogin? setPageLayout('logged-in'):setPageLayout('default')
})
</script>
<style>
body{
overflow-y:scroll !important ;
  padding-right: 0 !important;
}
</style>