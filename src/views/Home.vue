<template>
  <div class="h-screen w-full bg-img">
    <Menu />
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";

export default {
  name: "Home",
  components: {
    Menu
  }
};
</script>
<style lang="scss">
.bg-img {
  background-image: url("../assets/images/background-1.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
