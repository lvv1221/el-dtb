<template>
    <div class="top-bar animated" :class="slide" @animationend="_close">
        <div class="top-bar-box clearfix">
            <div class="fl date-box" v-if="flag">{{time}}</div>
            <div class="fl bar-user-box" v-else>
                <div class="fl user-icon">
                    <img src="/static/images/user-icon2.png" width="100%">
                </div>
                <div class="fl user-name ml20 clearfix">
                    <p class="fl">N0.{{student.no}}</p>
                    <p class="fl ml20">{{student.name}}</p>
                </div>
            </div>
            <div class="fl answer-ing clearfix">
                <p>{{status}}</p>
            </div>
            <div class="fr btn-box">
                <button class="dtb-btn time-up-btn" v-if="!flag">Confirm</button>
                <button class="dtb-btn close-btn ml5" @click="close">Close</button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'answer-race-top-bar',
    data () {
      return {
        slide: 'slideInDown',
        status: 'Racing……',
        flag: true,
        otherStuNum: 3,
        student: {
          id: '1',
          no: '2',
          name: 'Annie'
        },
        time: '未开始',
        tool: '',
        m: 0,
        s: 0
      }
    },
    mounted () {
      this.startTime()
      this.test()
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
      },
      test () {
        setTimeout(() => {
          this.status = `Other ${this.otherStuNum} students  competed`
          this.flag = false
        }, 3000)
      }
    }
  }
</script>

<style scoped>

</style>