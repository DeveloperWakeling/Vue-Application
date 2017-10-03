<template>
    <div class="updates">
        <b-jumbotron>
            <template slot="header">
                {{msg}}
            </template>
        </b-jumbotron>
    </div>
</template>
<script>
export default {
    name: "Updates",
    data: () => ({
        msg: "Updates"
    })
}
</script>

<style scoped>
#updates {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>