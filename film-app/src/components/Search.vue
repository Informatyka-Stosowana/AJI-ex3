<template>
    <form>
              <div class="form-group">
                  <label for=inputTitle>Tytuł</label>
                  <input type="text" id=inputTitle class="form-control" placeholder="Podaj tytuł lub fragment tytułu filmu" v-model="inputTitle"/>
              </div>
              <div class="form-group row">
                <label class="col-sm-4 col-form-label" for="inputProductionFrom">Rok produkcji od:</label>
                <div class="col-sm-8">
                    <input type="text" id=inputProductionFrom class="form-control"  placeholder="Liczba naturalna z przedziału 1900-2019" v-model="inputYearFrom"/>
                </div>
              </div>
              <div class="form-group row">
                  <label class="col-sm-4 col-form-label" for="inputProductionTo">Rok produkcji do:</label>
                  <div class="col-sm-8">
                      <input type="text" id=inputProductionTo class="form-control" placeholder="Liczba naturalna z przedziału 1900-2019" v-model="inputYearTo"/>
                  </div>
              </div>
              <div class="form-group">
                <label for="inputCast">Obsada</label>
                <input type="text" id="inputCast" class="form-control" placeholder="Imię i nazwisko" v-model="inputCast"/>
              </div>
              <div class="form-group">
                  <input type="button" class="btn btn-info col-sm-12" value="Szukaj" @click="searchMovie" />
              </div>
              <br>
            </form>
            <AllMoviesComponent :filteredMovies="filteredMovies"/>
</template>
<script>
    import AllMoviesComponent from './AllMovies.vue'
    import { filter } from 'underscore'

    export default {
        name: 'SearchComponent',
        props: {
            movies: {
                type: Array
            }
        },
        data() {
            return {
                inputTitle: '',
                inputYearFrom: '',
                inputYearTo: '',
                inputCast: '',
                filteredMovies: this.movies
            }
        },
        components: {
            AllMoviesComponent
        },
        methods: {
            searchMovie() {
                this.filteredMovies = this.movies
                if (this.inputTitle != '') {
                    this.filteredMovies = filter(this.filteredMovies, (movie) => movie.title.toLowerCase().includes(this.inputTitle.toLowerCase().trim()))
                }
                if (this.inputYearFrom != '') {
                    this.filteredMovies = filter(this.filteredMovies, (movie) => movie.year >= this.inputYearFrom.trim())
                }
                if (this.inputYearTo != '') {
                    this.filteredMovies = filter(this.filteredMovies, (movie) => movie.year <= this.inputYearTo.trim())
                }
                if (this.inputCast != '') {
                    this.filteredMovies = filter(this.filteredMovies, (movie) => filter(movie.cast, (el) => el.toLowerCase().includes(this.inputCast.toLowerCase().trim())).length != 0) 
                }
            }
        }
    }
    
</script>