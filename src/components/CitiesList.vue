<script>
export default {
  created() {
    this.anime();
  },
  data() {
    return {
      animes: null,
      animeqaracter: "",
    };
  },
  methods: {
    anime() {
      fetch("https://animechan.vercel.app/api/quotes")
        .then((response) => response.json())
        .then((animes) => {
          this.animes = animes;
          console.log(animes);
        });
    },
  },
};
</script>

<template>
  <div class="velja" v-for="anime in animes" :key="anime.id">
    <input
      name="val"
      type="radio"
      v-model="animeqaracter"
      :value="anime.quote"
    />

    <!-- {{ anime.character }} Quote: {{ anime.quote }} -->
    {{ anime.character }}
  </div>

  <div class="q">
    <!-- input funkar också men fulare
      v-if="animeqaracter !== ''"
      type="text"
      :value="animeqaracter"
      readonly
    /> -->
    <p v-if="animeqaracter !== ''">{{ animeqaracter }}</p>
  </div>

  <!-- <div>quote: {{ animeqaracter }}</div> funkar också-->

  <div class="button-container">
    <button @click="anime">Select character</button>
  </div>
</template>

<style lang="scss">
$header: 200px;
$text-color: brown;
$quote-color: darkblue;
$text-style: italic;
$text-size: 17px;
$border-box: 4px solid black;

button {
  color: $text-color;
  border: none;
  background-color: beige;
  font-size: $text-size;
  border: $border-box;
  font-style: $text-style;
}

p {
  color: $quote-color;
}
header {
  padding-left: $header;
}
</style>
