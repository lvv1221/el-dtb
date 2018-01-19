<template>
    <div class="top-bar  animated" :class="slide" @animationend="_close">
        <div class="top-bar-box clearfix" >
            <template v-if="!commentShow">
            <div class="fl bar-user-box">
                <div class="fl user-icon">
                    <img src="/static/images/user-icon2.png" width="100%">
                </div>
                <div class="fl user-name ml20 clearfix">
                    <p class="fl">N0.{{student.no}}</p>
                    <p class="fl ml20">{{student.name}}</p>
                </div>
            </div>
            <div class="fl answer-ing clearfix">
                <p>{{answerStatu}}</p>
            </div>
            <div class="fr btn-box">
                <button class="dtb-btn time-up-btn" @click="commentShow = ! commentShow">Comment</button>
                <button class="dtb-btn close-btn ml5" @click="close">Close</button>
            </div>
            </template>
            <div class="evaluate-btn-box clearfix" v-else>
                <div class="fl btn-box">
                    <button class="dtb-btn time-up-btn awesome-btn"><i></i>Awesome</button>
                    <button class="dtb-btn time-up-btn good-btn"><i></i>Good</button>
                    <button class="dtb-btn time-up-btn notbad-btn"><i></i>Not Bad</button>
                    <button class="dtb-btn time-up-btn try-btn"><i></i>Keep Trying</button>
                </div>
                <i class="fl btn-line"></i>
                <div class="fr btn-box">
                    <button class="dtb-btn close-btn" @click="commentShow = ! commentShow">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'top-bar',
    data () {
      return {
        commentShow: false,
        slide: 'slideInDown',
        answerStatu: 'Answering……',
        studentAnswer: 'A',
        student: {
          no: '1',
          name: 'Annie Hathaway',
          avatar: '//www.baidu.com/img/bd_logo1.png'
        }
      }
    },
    mounted () {
      setTimeout(() => {
        this.answerStatu = `Select [${this.studentAnswer}]`
      }, 1500)
    },
    methods: {
      close () {
        this.slide = 'slideOutUp'
      },
      _close () {
        if (this.slide === 'slideOutUp') {
          this.$electron.remote.getCurrentWindow().close()
        }
      }
    }
  }
</script>

<style scoped>

</style>