<script>
import animekomponent from "../animekomponent.vue";
import CitiesList from "../components/CitiesList.vue";

export default {
  components: {
    animekomponent,
    CitiesList,
  },
};
</script>
<template>
  <h3>Home page</h3>
  <div class="AA">
    <animekomponent title="Anime Quotes" />
    <CitiesList />
  </div>
</template>

<style lang="scss">
.AA {
  color: purple;
  h3 {
    color: rgb(65, 3, 65);
    font-size: medium;
    font-style: italic;
  }
}
</style>
