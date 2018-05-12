<template>
  <div id="app">
    <PomodoroTimer/>
  </div>
</template>

<script>
import PomodoroTimer from './components/PomodoroTimer'

export default {
  name: 'App',
  components: {
    PomodoroTimer
  }
}
</script>

<style>
#app {
  text-align: center;
}
body {
  margin: 0;
  padding: 0;
}
</style>
