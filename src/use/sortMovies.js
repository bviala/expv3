import { computed } from 'vue'

const useSortMoviesByYear = movies => {
  const sortedByYearMovies = computed(() => {
    return movies.value.sort((movieA, movieB) => {
      return movieA.Year - movieB.Year
    })
  })

  return { sortedByYearMovies }
}

export { useSortMoviesByYear }