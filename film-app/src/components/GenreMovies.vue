<template>
    <h1>Filmy wg gatunku</h1>
            <em class="task">
              Należy wyświetlić filmografię wg gatunku w formie listy, np.
              <p>Animated</p>
              <ol>
                <li></li>
              </ol>
              <p>Comedy</p>
              <ol>
                <li>Special Delivery</li>
              </ol>
              Brakujące dane obsłużyć wg uznania.
            </em>
</template>
<script>
  import json from '../assets/movies.json'

  export default {
    name: 'GenreMoviesComponent',
    data() {
      return {
        movies: json,
      }
    }
}

</script>