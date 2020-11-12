<template>
  <div>
    <input v-model="searchQuery">
    <button @click="fetchMovies(searchQuery)" :disabled="searchQuery === ''">
      Search movies
    </button>
    <div v-if="fetching">
      FETCHING
    </div>
    <div v-else-if="query.error">
      {{ query.error }}
    </div>
    <div v-else class="hello">
      <h1>movies</h1>
      <div class="movie" v-for="movie in sortedByYearMovies" :key="movie.imdbID">
        <div>
          <span class="property-name">Title: </span>
          <span>{{ movie.Title }}</span>
        </div>
        <div>
          <span class="property-name">Year: </span>
          <span>{{ movie.Year }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import useFetchMovies from '@/api/movies'
import { useSortMoviesByYear } from '@/use/sortMovies'

export default {
  props: {
    msg: String
  },
  setup () {
    const searchQuery = ref('')
    const { movies, fetching, fetchMovies, query } = useFetchMovies()
    const { sortedByYearMovies } = useSortMoviesByYear(movies)

    return {
      searchQuery,
      sortedByYearMovies,
      fetching,
      fetchMovies,
      query
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.movie {
  border-bottom: 1px solid grey;
  padding: 5px;
}
.property-name {
  color: #329023;
  font-weight: bold;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
