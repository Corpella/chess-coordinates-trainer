<template>
  <div class="flex flex-col justify-aropun items-center">
    <div class="items-center">
      <br />
      <br />
      <p class="text-lg text-white font-bold cursor-pointer" @click="startGame">Start</p>
      <p class="text-lg text-white font-bold cursor-pointer" @click="quit">Quit</p>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    startGame() {
      this.$router.push("/game");
    },
    quit() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>
