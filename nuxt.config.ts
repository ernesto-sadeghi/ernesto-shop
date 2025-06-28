// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  css: [
      'bootstrap/dist/css/bootstrap.min.css','bootstrap-icons/font/bootstrap-icons.css'
    ],app:{
      head:{
          link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' }
    ],
        title:"🦖ERNESTO =>"
       ,meta:[
        {name:"author",content:"https://github.com/ernesto-sadeghi"},
        {name:"description",content:"shop project with nuxt"},
        
       ] 
      }
    }
    ,

  plugins: [
      { src: '~/plugins/bootstrap.client.js', mode: 'client' }
    ],

  modules: ['@pinia/nuxt']
})