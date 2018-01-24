<template>
    <div class="top-bar  animated" :class="slide" @animationend="_close">
        <div class="top-bar-box clearfix">
            <div class="fl date-box">{{time}}</div>
            <div class="fl answer-box clearfix btn-cls" @click="">
                <p class="fl answer"><span>Finished</span><span class="ml20">{{finishNum}}</span></p>
                <p class="fl unanswer"><span>Unfinished</span><span class="ml20">{{unfinishNum}}</span></p>
            </div>
            <div class="fr btn-box">
                <button class="dtb-btn time-up-btn">Time up</button>
                <button class="dtb-btn close-btn ml5">Close</button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'quick-top-bar',
    data () {
      return {
        slide: 'slideInDown',
        finishNum: '10',
        unfinishNum: '30',
        time: '未开始',
        tool: '',
        m: 0,
        s: 0
      }
    },
    mounted () {
      this.startTime()
    },
    methods: {
      close () {
        this.stopTime()
        this.slide = 'slideOutUp'
      },
      _close () {
        if (this.slide === 'slideOutUp') {
          this.$electron.remote.getCurrentWindow().close()
        }
      },
      startTime () {
        let m = 0
        let s = 0
        this.tool = setInterval(() => {
          s++
          if (s === 60) {
            m++
            s = 0
          }
          this.m = m < 10 ? '0' + m : m
          this.s = s < 10 ? '0' + s : s
          this.time = this.m + ':' + this.s
        }, 1000)
      },
      stopTime () {
        clearInterval(this.tool)
        console.log(this.time)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .btn-cls
    cursor pointer

</style>