<template>
    <h1>Filmy wg obsady</h1>
            <em class="task">
              Należy wyświetlić filmografię wg obsady w formie jak w poprzednim punkcie. Jeśli jest kilku aktorów w jednym filmie, należy wyświetlić ich oddzielnie.
            </em>
</template>
<script>
    import json from '../assets/movies.json'

    export default {
        name: 'CastMoviesComponent',
        data() {
            return {
                movies: json
            }
        }
    }
</script>