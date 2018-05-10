<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <PomodoroTimer/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import PomodoroTimer from './components/PomodoroTimer'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PomodoroTimer
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  /* color: #2c3e50; */
}
body {
  margin: 0;
  padding: 0;
}
</style>
