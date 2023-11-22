<template>
 <div class="container">
    <h1>Baza filmów</h1>
    <!-- Template poszczególnych komponentów -->
    <SearchComponent />
    <AllMoviesComponent />
    <GenreMoviesComponent />
    <CastMoviesComponent />
  </div>
</template>

<script>
// Import komponentów
import SearchComponent from './components/Search.vue'
import AllMoviesComponent from './components/AllMovies.vue'
import GenreMoviesComponent from './components/GenreMovies.vue'
import CastMoviesComponent from './components/CastMovies.vue'

export default {
  name: 'App',
  components: { SearchComponent,
                AllMoviesComponent,
                GenreMoviesComponent,
                CastMoviesComponent },
  data() {
    return {
      
    }
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
