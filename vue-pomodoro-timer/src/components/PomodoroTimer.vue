<template>
  <div class="container center">
  <div class="padding-4 width">
    <h2 class="title" v-html="pomodoroStageSelection"></h2>
    <div class="steps">
      <div v-for="(stage,index) in pomodoroStage" :key="stage.id" :class="{ active: activeStage(index) }"></div>
    </div>
    <div id="timer" v-html="time"></div>
    <div class="buttons">
      <button @click="timerPlay" v-if="!timerRunning" v-html="pauseSwitch">Start <span class="fa fa-play"></span></button>
      <button @click="timerPause" v-if="timerRunning">Pause <span class="fa fa-pause"></span></button>
      <button @click="timerReset">Restart <span class="fa fa-redo"></span></button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "PomodoroTimer",
  data () {
      return {
        totalTime: (25 * 60),
        timerRunning: false,
        timerPaused: false,
        interval: null,
        pomodoroStage:
        ['Pomodoro Rd 1','Break','Pomodoro Rd 2','Break','Pomodoro Rd 3','Break','Final Pomodoro','Final Break'],
        stage: 0
      }
  },
  computed: {
    time: function() {
      return this.minutes + " : " + this.seconds;
    },
    minutes: function() {
      var min = Math.floor(this.totalTime / 60);
      return min >= 10 ? min : '0' + min;
    },
    seconds: function() {
      var sec = this.totalTime - (this.minutes * 60);
      return sec >= 10 ? sec : '0' + sec;
    },
    pauseSwitch: function() {
      var paused = this.timerPaused;
      if (paused == false) {
        return 'Start <span class="fa fa-play"></span>'
      } else {
        return 'Resume <span class="fa fa-play"></span>'
      }
    },
    pomodoroStageSelection: function() {
      var selectedStage = this.stage;
      return this.pomodoroStage[selectedStage];
    }
  },
  methods: {
    timerPlay() {
      this.timerRunning = true;
      this.timerPaused = false;
      this.interval = setInterval(this.countdownTimer, 1000);
    },
    timerPause() {
      this.timerRunning = false;
      this.timerPaused = true;
      clearInterval(this.interval);
    },
    timerReset() {
      this.timerRunning = false;
      this.timerPaused = false;
      clearInterval(this.interval);
      // this.totalTime = (25 * 60);
      this.totalTime = (25 * 60);
      this.stage = 0;
    },
    countdownTimer() {
      if (this.totalTime == 0) {
        var snd = new Audio("https://b3a60a090f344ad19251b31cdaa416c3.production.codepen.plumbing/ride.wav");
        snd.play();
        this.timerRunning = false;
        this.timerPaused = false;
        clearInterval(this.interval);
        this.stageStep();
      } else if (this.timerRunning == true) {
        this.totalTime--;
      }
    },
    stageStep: function() {
      this.stage++;
      console.log('Triggered');
      if (this.stage == 8){
        this.timerReset();
      } else if ((this.stage == 2) || (this.stage == 4) || (this.stage == 6)) {
        this.totalTime = (25 * 60);
      } else {
        this.totalTime = (5 * 60);
      }
    },
    activeStage: function (index) {
      return this.stage === index;
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  background-image: linear-gradient(141deg, #ff6347 0, salmon 71%, #ff6347 100%);
  min-height: 100vh;
  color: #ffffff;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.width {
  max-width: 620px;
}

#timer {
  font-size: 200px;
  line-height: 1;
  margin-bottom: 40px;
  color: #ffd9d3;
  text-align: center;
}

.title {
  text-align: center;
  font-size: 3em;
  letter-spacing: 5px;
  text-transform: uppercase;
}

.buttons {
  text-align: center;
}
.buttons button {
  background-color: red;
  color: #f5f5f5;
  border: none;
  padding: 12px 30px;
  margin: 0 12px;
  border-radius: 6px;
  transition: all .3s ease-out;
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.2);
}
.buttons button:hover {
  opacity: .75;
  -webkit-transform: translatey(-3px);
          transform: translatey(-3px);
}

.steps {
  display: grid;
  grid-template: auto/repeat(8, 1fr);
  padding-bottom: 50px;
}
.steps > div {
  width: 20px;
  height: 20px;
  background-color: #ddd;
  border-radius: 50%;
  margin: auto;
  opacity: .4;
}
.steps .Pomodoro {
  background: red;
}
.steps .Break {
  background: green;
}
.steps .active,
.steps .done {
  opacity: 1;
}

</style>
