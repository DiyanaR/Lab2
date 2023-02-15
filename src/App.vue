<script>
import CitiesList from "./components/CitiesList.vue";
import animekomponent from "./animekomponent.vue";

export default {
  components: {
    CitiesList,
    animekomponent,
  },
};
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Anime</RouterLink>
      </li>
      <li>
        <RouterLink to="/home">Home</RouterLink>
      </li>
    </ul>
    <main>
      <RouterView />
    </main>
  </nav>

  <!-- <HelloWorld /> -->
  <!-- <CitiesList /> -->
  <!-- <animekomponent title="Anime Quotes" /> -->
  <!-- <CitiesList /> -->
  <!-- <animeview /> -->

  <!-- <div class="button-container">
    <button @click="anime">klicka</button>
  </div> -->
</template>
