<template>
  <div class="wrapper">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <PreSearch query="lapin" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PreSearch from './components/PreSearch.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PreSearch
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style scoped>
.wrapper {
  display: flex;
}
</style>
