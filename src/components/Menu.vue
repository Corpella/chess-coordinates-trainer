<template>
  <div class="flex flex-col justify-around items-center">
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
    return {
      test: "This is a test"
    };
  },
  methods: {
    startGame() {
      this.$router.push("/game");
    },
    quit() {
      this.$http.get("http://127.0.0.1:5000/get_test").then(res => {
        console.log(res.data);
      });
    }
  }
};
</script>

<style>
</style>
