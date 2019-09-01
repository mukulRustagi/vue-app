<template>
  <div id="app">
    <h1>My Routing App</h1>
    
    <app-header></app-header>
    <router-view></router-view>
    
   </div>
</template>

<script>
import Header from './components/header'
export default {
  components:{
    appHeader:Header
  },
  name: 'app',
  mode:'history'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
