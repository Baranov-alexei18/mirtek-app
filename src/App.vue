
<template>
  <div>
  <AppHeader></AppHeader>
  <router-view/>
</div>
</template>

<script>
import AppHeader from './components/layout/header/AppHeader'

export default {
  components: { AppHeader }
}
</script>

<style lang="scss">
@import 'assets/styles/main.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
  background-color: $grey-50;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
