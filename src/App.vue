<template>
  <div id="app">
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleSideNav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">DVLPR Wakeling</h2>
    </md-toolbar>
    <md-sidenav class="md-left" ref="sidenav">
      <md-toolbar>
        <div class="md-toolbar-container">
          <!-- <router-link class="md-button md-raised" v-bind:to="'/about'">About</router-link> -->
          <h2>Navigation</h2>
        </div>
      </md-toolbar>
      <md-list>
          <router-link v-on:click.native="toggleSideNav" tag="md-list-item" to='/'>Home</router-link></md-list-item>
          <router-link v-on:click.native="toggleSideNav" tag="md-list-item" to='/about'>About</router-link>
      </md-list>
    </md-sidenav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    toggleSideNav() {
      this.$refs.sidenav.toggle();
    },
    test() {
      debugger;
    }
  }
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