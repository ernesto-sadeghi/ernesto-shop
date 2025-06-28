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
import { useShopStore } from './store/useShopStore';



const shopStore = useShopStore()
onMounted(()=>{
  shopStore.initializeLogin()
   shopStore.islogged? setPageLayout('logged-in'):setPageLayout('default')

})

const layout = computed(() => shopStore.islogged ? 'logged-in' : 'default');

</script>
<style>
body{
overflow-y:scroll !important ;
  padding-right: 0 !important;
}
</style>