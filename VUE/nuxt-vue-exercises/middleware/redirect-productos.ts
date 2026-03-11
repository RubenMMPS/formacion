export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/productos") {
    return navigateTo("/home");
  }
});
