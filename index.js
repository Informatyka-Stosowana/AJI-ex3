const app = Vue.createApp({
    data() {
        return {
            movies: []
        }
    },
    mounted() {
        fetch('./movies.json')
            .then(res => res.json())
            .then(data => this.movies = data)
            .catch(err => console.log(err.message))
    }
})

app.mount('#app')