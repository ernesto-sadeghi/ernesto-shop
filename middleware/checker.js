export default defineNuxtRouteMiddleware((to,from)=>{
    console.log(from);
    console.log(to);
    if (to.params.slug =='123'){
    console.log(3333);
    
    
    
    
}else{
    return abortNavigation('error')

}


})