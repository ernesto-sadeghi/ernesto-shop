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

</script>
<style>
body{
overflow-y:scroll !important ;
  padding-right: 0 !important;
}
</style>