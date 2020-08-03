<template>
  <div class="h-full">
    <div class="mb-base">
      <p class="text-lg text-white">Coordinates Trainer</p>
      <div class="flex justify-center mt-3">
        <div class="flex justify-center w-1/3 h-10">
          <button
            class="inset-0 bg-whiteSquare w-1/3 rounded"
            :class="buttonDisabled ? 'cursor-default' : ''"
            @click="startGame"
            :disabled="buttonDisabled"
          >
            <p
              class="text-lg"
              :class="buttonDisabled ? 'text-black' : 'text-blackSquare'"
            >Start Game</p>
          </button>
        </div>
      </div>
    </div>

    <div id="board" class="board mb-base">
      <div>
        <div v-for="(row,r) in rows" :key="r" class="flex self-center">
          <div v-for="(col,c) in columns" :key="c">
            <div @click="getCoordinates(col,row)" :class="returnColor(r,c)">
              <div class="relative h-full">
                <div class="absolute top-0 right-0 mr-1">
                  <p v-if="c == 7" class="text-base" :class="returnTextColor(r)">{{row}}</p>
                </div>
                <div class="absolute bottom-0 left-0 ml-1">
                  <p v-if="r == 7" class="text-base" :class="returnTextColor(c)">{{col}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="board">
      <button class="inset-0" @click="backToMenu">
        <p class="text-lg text-white">Back</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      buttonDisabled: false,
      settings: { position: "white", time: 5 },
      result: "",
      rowsList: ["8", "7", "6", "5", "4", "3", "2", "1"],
      columnsList: ["a", "b", "c", "d", "e", "f", "g", "h"],
      gameCoordinates: "",
      serverCoordinates: ""
    };
  },
  computed: {
    rows() {
      if (this.settings.position == "white") {
        return this.rowsList;
      } else {
        let rowsReverted = this.rowsList;
        return rowsReverted.reverse();
      }
    },
    columns() {
      if (this.settings.position == "white") {
        return this.columnsList;
      } else {
        let rowsReverted = this.columnsList;
        return rowsReverted.reverse();
      }
    }
  },
  methods: {
    returnColor(row, column) {
      if (
        (row % 2 == 0 && column % 2 == 0) ||
        (row % 2 != 0 && column % 2 != 0)
      ) {
        return "white";
      } else return "black";
    },
    returnTextColor(value) {
      if (value % 2 == 0) {
        return "text-whiteSquare";
      } else return "text-blackSquare";
    },
    startGame() {
      this.$http.get("http://127.0.0.1:5000/start_game").then(res => {
        this.buttonDisabled = true;
        let time = this.settings.time;
        this.startCountdown(time);
        console.log(res);
        this.serverCoordinates = res.data.coordinates;
      });
    },
    startCountdown(time) {
      var ms = time * 1000;
      setTimeout(() => {
        this.endGame();
      }, ms);
    },
    endGame() {
      this.$http.get("http://127.0.0.1:5000/end_game").then(res => {
        this.buttonDisabled = false;
        this.result = res.data;
        console.log(res);
      });
    },
    getCoordinates(col, row) {
      let cooordinates = `${col}${row}`;
      this.$http
        .post("http://127.0.0.1:5000/coordinates", { coordinates: coordinates })
        .then(res => {
          if (res.isCorrect) {
            this.serverCoordinates = res.data.coordinates;
            //TODO
          }
        });
    },
    backToMenu() {
      this.$router.push("/");
    }
  },
  mounted() {}
};
</script>

<style>
.board {
  display: grid;
  place-items: center;
}
.black {
  float: left;
  width: 10vh;
  height: 10vh;
  background-color: #b58863;
  display: table-cell;
}
.white {
  float: left;
  width: 10vh;
  height: 10vh;
  background-color: #f0d9b5;
  display: table-cell;
}
</style>