<template>
    <div class="top-bar animated" :class="slide" @animationend="_close">
        <div class="top-bar-box clearfix">
            <div class="fl date-box">{{time}}</div>
            <div class="fl answer-box clearfix btn-cls" @click="openDetails">
                <p class="fl answer"><span>Answer</span><span class="ml20">25</span></p>
                <p class="fl unanswer"><span>Unanswer</span><span class="ml20">30</span></p>
            </div>
            <div class="fr btn-box">
                <button class="dtb-btn time-up-btn" @click="stopTime">Time up</button>
                <button class="dtb-btn close-btn ml5" @click="close">Close</button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'class-top-bar',
    data () {
      return {
        slide: 'slideInDown',
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
        this.slide = 'slideOutUp'
      },
      _close () {
        if (this.slide === 'slideOutUp') {
          this.$electron.remote.getCurrentWindow().close()
        }
      },
      openDetails () {
        console.log('details')
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