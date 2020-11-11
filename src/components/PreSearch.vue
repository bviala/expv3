<template>
  <div class="result">
    <div v-for="movie in movies" :key="movie.imdbID">
      {{ movie.Title }}
    </div>
  </div>
</template>

<script>
import useFetchMovies from '@/api/movies'

export default {
  props: {
    query: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const { fetchMovies, movies } = useFetchMovies()
    console.log(props.query)
    fetchMovies(props.query)
    return {
      movies
    }
  }
}
</script>

<style scoped>
  .result {
    padding: 2rem;
    text-align: center;
  }
</style>