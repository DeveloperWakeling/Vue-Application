
<template>
  <div class="Home">
    <b-jumbotron>
      <template slot="header">
        {{msg}}
      </template>
    </b-jumbotron>
    <b-container fluid id="Home-Content">
      <b-row>
        <b-col>
          <p>
            <span class="fa fa-bird"></span>
            As the title suggests, I am just another software engineer trying to build himself and break into the freelance business. My skillset ranges from front-end frameworks, such as Vue, to back-end frameworks such as .NET Core and .Net.
            I may not be the best coder. But, I am always willing to learn and apply new skills and practices.
          </p>
        </b-col>
      </b-row>
      <br /> 
      <b-row>
        <b-col>
          <p>
            As of right now I am currently looking for ideas for my first official app that I hope to release in around 4 months.
            Still fleshing out some concepts here and there. Will hopefully come up with a decent idea to get me started in the near future.
          </p>
        </b-col>
        <b-col>
            <p>
              This project was started on my own personal accord to try out Vue 2 and see whether I saw it as a viable front end framework.
              I am still trying to figure out the best way to communicate with a backend, I'm thinking either promises or using RxJS. I have used
              both during my current job and have really enjoyed using observables. But axios, I have heard, is a great library to integrate into Vue
              and it currently uses promises.
              </p>
        </b-col>
        <b-col>
          As for the backend framework I plan on using. I am most likely going to go with .NET Core 2.0 in order to keep up with the times and learn as much
          about it as possible. Hopefully, I will be well versed enough in it to spin up and manage a database with user authentication and JWT tokens within the next month.
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    msg: 'Just Another Software Engineer'
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

#Home-Content {
  text-align: left;
}
</style>
