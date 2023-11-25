<template>
    <h1>Filmy wg gatunku</h1>
            <em class="task">             
              <ol v-for="g in getGenres()" :key="g">
                <p style="font-weight: bold;">{{ g }}</p>
                <li v-for="movie in filterMoviesOnGenre(g).slice(0,10)" :key="movie">{{ movie.title }}</li>
              </ol>
            </em>
</template>
<script>
  import { filter, uniq } from "underscore";

  export default {
    name: 'GenreMoviesComponent',
    props: {
      movies: {
        type: Array
      }
    },
    data() {
      return {
        genresArr: []
      }
    },  
    methods: {
      filterMoviesOnGenre(name) {
        return filter(this.movies, (movie) => movie.genres.includes(name))
      },
      getGenres() {    
        this.movies.slice(0,100).forEach((element) => element.genres.forEach((el) => this.genresArr.push(el)))
        return uniq(this.genresArr)
      }
    }
}

</script>