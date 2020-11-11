import { ref } from 'vue'

const useFetchMovies = () => {
  const fetching = ref(false)
  const movies = ref([])
  const query = ref({
    error: null
  })
  
  const fetchMovies = async (search) => {
    fetching.value = true
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.VUE_APP_API_KEY}&s="${search}"&type=movie`)
      const data = await response.json()
      if (data.Error) {
        query.value.error = data.Error
      } else {
        query.value.error = null
        movies.value = data.Search
      }
    } catch (err) {
      console.error(err)
    } finally {
      fetching.value = false
    }    
  }

  return { query, movies, fetching, fetchMovies }
}


export default useFetchMovies