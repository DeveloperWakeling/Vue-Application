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
          <h3>Navigation</h3>
        </div>
      </md-toolbar>
      <md-list>
        <router-link v-on:click.native="toggleSideNav" tag="md-list-item" to='/'>Home</router-link>
        <router-link v-on:click.native="toggleSideNav" tag="md-list-item" to='/about'>About</router-link>
        <router-link v-on:click.native="toggleSideNav" tag="md-list-item" to='/updates'>Keep Up to Date</router-link>
      </md-list>
    </md-sidenav>
    <router-view></router-view>
    <footer class="footer">
      <a href="https://www.facebook.com">
        <i id="social-fb" class="fa fa-facebook-square fa-2x social"></i>
      </a>
      <a href="https://twitter.com/dvlprwakeling">
        <i id="social-tw" class="fa fa-twitter-square fa-2x social"></i>
      </a>
      <a href="mailto:michael@developerwakeling.com">
        <i id="social-em" class="fa fa-envelope-square fa-2x social"></i>
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    toggleSideNav() {
      this.$refs.sidenav.toggle();
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

.footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 40px;
  line-height: 40px;
  /* Vertically center the text there */
  background-color: #f5f5f5;
}
i{
  color: #2c3e50;
}
</style>