<template>
  <div id="about">
    <b-jumbotron fluid>
      <template slot="header">
        About Me
      </template>
      <template slot="lead">
        <img src="../assets/avatar.png" height="20%" width="20%" alt="Avatar" />
      </template>
      <p>
        {{message}}
      </p>
    </b-jumbotron>
    <b-container>
      <b-row>
        <b-col>I am currently working as a Software Engineer in York, AP</b-col>
        <b-col>In my free time I enjoy learning new languages and taste testing different beers around the Lancaster Area</b-col>
        <b-col>This site is currently me learning how to use Vue2 and so far I am really enjoying it</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      message: 'My name is Michael Wakeling and I am a software engineer'
    }
  }
}
</script>
<style scoped>
#about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-align: center;
}
</style>