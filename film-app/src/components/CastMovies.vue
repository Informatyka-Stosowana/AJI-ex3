<template>
    <h1>Filmy wg obsady</h1>
            <em class="task">             
                  <ol v-for="c in getCast()" :key="c">
                    <p style="font-weight: bold;">{{ c }}</p>
                    <li v-for="movie in filterMoviesOnCast(c).slice(0, 10)" :key="movie">{{ movie.title }}</li>
                  </ol>
                </em>
</template>
<script>
    import { filter, uniq } from 'underscore'

    export default {
        name: 'CastMoviesComponent',
        props: {
            movies: {
                type: Array
            }
        },
        data() {
            return {
                castArr: []
            }
        },
        methods: {
        filterMoviesOnCast(name) {
            return filter(this.movies, (movie) => movie.cast.includes(name))
        },
        getCast() {
            this.movies.slice(0, 300).forEach((element) => element.cast.forEach((el) => this.castArr.push(el)))
            return uniq(this.castArr)
        }
        }
    }
</script>