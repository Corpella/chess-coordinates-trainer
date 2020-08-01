<template>
  <div class="flex flex-col justify-around items-center">
    <div class="items-center">
      <br />
      <br />
      <p class="text-lg text-white font-bold cursor-pointer" @click="startGame">Start</p>
      <p class="text-lg text-white font-bold cursor-pointer" @click="quit">Quit</p>
      <div class="w-full h-32 bg-whiteSquare">
        <p class="text-3xl">{{test}}</p>
      </div>
      <div class="flex flex-col">
        <input type="button" value="Click for get" class="mt-10" @click="testServer('GET')" />
        <input type="button" value="Click for post " class="mt-10" @click="testServer('POST')" />
      </div>
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
    testServer(method) {
      if (method == "GET") {
        this.$http.get("http://127.0.0.1:5000/get_test").then(res => {
          console.log(res);
          this.test = res.data;
        });
      } else {
        let str = "But you are a big";
        this.$http
          .post("http://127.0.0.1:5000/post_test", { str: str })
          .then(res => {
            console.log(res);
            this.test = res.data.str;
          });
      }
    },
    quit() {}
  }
};
</script>

<style>
</style>
