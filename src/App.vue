<template>
  <div id="app" class="h-screen w-full bg-img">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bg-img {
  background-image: url("./assets/images/background-1.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
