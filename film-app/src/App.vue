<template>
 <div class="container">
    <h1>Baza filmów</h1>
    <!-- Template poszczególnych komponentów -->
    <SearchComponent :movies="movies"/>
    <GenreMoviesComponent :movies="movies"/>
    <CastMoviesComponent :movies="movies"/>
  </div>
</template>

<script>
// Import komponentów
import SearchComponent from './components/Search.vue'
import GenreMoviesComponent from './components/GenreMovies.vue'
import CastMoviesComponent from './components/CastMovies.vue'

import json from './assets/movies.json'

export default {
  name: 'App',
  data() {
    return {
      movies: json
    }
  },
  components: { SearchComponent,
                GenreMoviesComponent,
                CastMoviesComponent },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

li {
  list-style: none;
}

.buttonMargin {
  margin-top: 10px;
}

.hideItem {
  display: None;
}
</style>
