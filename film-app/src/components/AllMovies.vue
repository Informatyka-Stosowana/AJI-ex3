<template>
        <p>Liczba znalezionych wyników: {{ this.filteredMovies.length }}</p>
        <p>Liczba wyświetlanych wyników: {{ this.length }}</p>
    <table class="table table-hover">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Production Year</th>
                  <th>Cast</th>
                  <th>Genres</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="movie in displayMovies" :key="movie.title">
                  <td>{{ movie.title }}</td>
                  <td>{{ movie.year }}</td>
                  <td>
                    <ul>
                      <li v-for="singleCast in movie.cast" :key="singleCast">{{ singleCast }}</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li v-for="genre in movie.genres" :key="genre">{{ genre }}</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <button @click="showMore" class="btn btn-info col-sm-12 buttonMargin">Pokaż więcej</button>
            <button @click="hide" class="btn btn-info col-sm-12 buttonMargin" :class="{ hideItem: length == 0 }">Ukryj</button>
</template>

<script>
export default {
    name: 'AllMoviesComponent',
    props: {
      filteredMovies: {
        type:Array  
      }
    },
    data() {
      return {
        length: 10,
      }
    },
    computed: {
      displayMovies() {
        return this.filteredMovies.slice(0, this.length)
      }
    },  
    methods: {
      showMore() {
          this.length += 10
      },
      hide() {
          this.length = 0
      }
    }
}
</script>