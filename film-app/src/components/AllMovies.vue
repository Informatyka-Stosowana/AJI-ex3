<template>
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
                <tr v-for="movie in movies.slice(0, length)" :key="movie.title">
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
            <button @click="showMore" class="btn btn-info col-sm-12 buttonMargin">Show More</button>
            <button @click="hide" class="btn btn-info col-sm-12 buttonMargin" :class="{ hideItem: length == 0 }">Hide</button>
</template>

<script>
import json from '../assets/movies.json'

export default {
    name: 'AllMoviesComponent',
    data() {
      return {
        movies: json,
        length: 10
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