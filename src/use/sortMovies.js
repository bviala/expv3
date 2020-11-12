import { computed } from 'vue'

const useSortMoviesByYear = movies => {
  const sortedByYearMovies = computed(() => {
    return movies.value.sort((movieA, movieB) => {
      return movieA.Year - movieB.Year
    })
  })

  return { sortedByYearMovies }
}

const useSortMoviesByTitle = movies => {
  const sortedByTitleMovies = computed(() => {
    return movies.value.sort((movieA, movieB) => movieA.Title.localeCompare(movieB.Title))
  })
  return { sortedByTitleMovies }
}

export { useSortMoviesByYear, useSortMoviesByTitle }