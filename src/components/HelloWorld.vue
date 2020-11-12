<template>
  <div>
    <input v-model="searchQuery">
    <button @click="newSearch" :disabled="searchQuery === ''">
      Search movies
    </button>
    <div v-if="fetching">
      FETCHING
    </div>
    <div v-else-if="query.error">
      {{ query.error }}
    </div>
    <div v-else class="hello">
      <div v-if="sortedMovies.length">
        <button
          :class="{ 'active': sorting === 'year' }"
          @click="sorting = 'year'"
        >
          Sort by year
        </button>
        <button
          :class="{ 'active': sorting === 'title' }"
          @click="sorting = 'title'"
        >
          Sort by title
        </button>
      </div>
      <div class="movie" v-for="movie in sortedMovies" :key="movie.imdbID">
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
import { ref, computed } from 'vue'
import useFetchMovies from '@/api/movies'
import { useSortMoviesByYear, useSortMoviesByTitle } from '@/use/sortMovies'

export default {
  props: {
    msg: String
  },
  setup () {
    const searchQuery = ref('')
    const sorting = ref('')
    const { movies, fetching, fetchMovies, query } = useFetchMovies()
    const { sortedByYearMovies } = useSortMoviesByYear(movies)
    const { sortedByTitleMovies } = useSortMoviesByTitle(movies)

    const sortedMovies = computed(() => {
      if (sorting.value === 'year') {
        return sortedByYearMovies.value
      } else if (sorting.value === 'title') {
        return sortedByTitleMovies.value
      } else {
        return movies.value
      }
    })

    return {
      searchQuery,
      sorting,
      sortedMovies,
      fetching,
      fetchMovies,
      query
    }
  },
  methods: {
    newSearch () {
      this.fetchMovies(this.searchQuery)
      this.sorting = ''
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
button.active {
  border: 2px solid greenyellow;
}
</style>
