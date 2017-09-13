
<template>
  <div class="Home">
    <b-jumbotron>
      <template slot="header">
        {{msg}}
      </template>
    </b-jumbotron>
    <b-container fluid>
      <p>
        Just another site that will hopefully be used in showcasing some of my work as a Software Developer
      </p>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    msg: 'Welcome to My Portfolio Space'
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-align: center;
}
</style>
