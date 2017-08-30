<template>
    <div id="about">
        <h1>Basic About Page</h1>
        <p>{{message}}</p>
    </div>
</template>

<script>
export default {
  name: 'about',
  data () {
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
    margin-top: 60px;
    text-align: center;
}
</style>