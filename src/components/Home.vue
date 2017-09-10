
<template>
  <div class="Home">
    <h1>{{ msg }}</h1>
    <img src="../assets/logo.png" width="20%" height="20%">
      <ul>
        <li v-for="user in users" :key="user.id">
          {{user.username}}
        </li>
      </ul>
  </div>
</template>

<script>
import {HTTP} from '../http-common';

export default {
  name: 'Home',
  data: () =>({
    msg: 'Welcome to My Portfolio Space',
    users: []
  }), 
  created() {
    HTTP.get()
      .then(response => {
        debugger;
        this.users = response.data;
      })
      .catch(e => {
        console.log(e);
      });
  }
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
