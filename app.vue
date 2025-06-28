<template>
  <div>
    <NuxtRouteAnnouncer />
    
    <NuxtLayout :name="layout">
      <NuxtLoadingIndicator />
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useLogin } from './store/useLogin';

const loginStore = useLogin()
onMounted(()=>{
  loginStore.initializeLogin()
   loginStore.islogged? setPageLayout('logged-in'):setPageLayout('default')

})

const layout = computed(() => loginStore.islogged ? 'logged-in' : 'default');

</script>
<style>
body{
overflow-y:scroll !important ;
  padding-right: 0 !important;
}
</style>