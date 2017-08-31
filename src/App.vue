<template>
  <div id="app">
    <md-toolbar>
      <router-link class="md-button md-raised md-accent" v-bind:to="'/'">Home</router-link>
      <router-link class="md-button md-raised" v-bind:to="'/about'">About</router-link>
    </md-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<!-- Styling for the component -->
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>