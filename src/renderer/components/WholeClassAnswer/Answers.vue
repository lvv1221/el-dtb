<template>
    <div class="pop" style="width: 920px;height: 610px;">
        <div class="pop-header">
            <div class="header-box clearfix">
                <h3 class="fl">Answers</h3>
            </div>
        </div>
        <div class="pop-content">
            <div>
                <div class="flex flex-center">
                    <div class="participate par-num"><i class="icon-hand"></i><span>Participation Number</span><em>{{participationNum}}</em></div>
                    <div class="participate par-percent"><i class="icon-bing"></i><span>Participation Rate</span><em>{{participationRate}}%</em></div>
                </div>
                <div class="zd-content">
                    <div class="option-status">
                        <div class="flex flex-mid op-status-item clearfix" @click="" v-for="item in answersList" :key="item.option">
                            <span>{{item.option}}</span>
                            <div class="eui-progress">
                                <div class="eui-progress-outer">
                                    <div class="eui-progress-inner">
                                        <div class="eui-progress-bg" :style="{width: item.rate + '%'}"></div>
                                    </div>
                                </div>
                                <span class="eui-progress-text">{{item.studentsNum}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn-box pop-btn tc">
                <button class="dtb-btn time-up-btn">Set answers</button>
                <button class="dtb-btn close-btn ml5">Close</button>
            </div>
            <div class="fix-btn fix-btn-left">
                <a href="javascript:;" class="min-btn"></a>
                <a href="javascript:;" class="closef-btn"></a>
            </div>
            <div class="fix-btn fix-btn-right">
                <a href="javascript:;" class="min-btn"></a>
                <a href="javascript:;" class="closef-btn"></a>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'answers',
    data () {
      return {
        answersList: [{
          option: 'A',
          studentsNum: 13
        }, {
          option: 'B',
          studentsNum: 16
        }, {
          option: 'C',
          studentsNum: 5
        }, {
          option: 'D',
          studentsNum: 5
        }, {
          option: 'E',
          studentsNum: 0
        }, {
          option: 'F',
          studentsNum: 0
        }, {
          option: '×',
          studentsNum: 0
        }, {
          option: '√',
          studentsNum: 0
        }],
        participationNum: 39,
        studentsNum: 40,
        participationRate: 0
      }
    },
    created () {
      this.participationRate = this.getRate(this.participationNum, this.studentsNum)
      this.setRates(this.answersList, this.participationNum)
    },
    methods: {
      getRate (numerator, denominator) {
        let rate = Math.round((numerator / denominator) * 100)
        return rate
      },
      setRates (list, num) {
        for (let option of list) {
          let rate = this.getRate(option.studentsNum, num)
          this.$set(option, 'rate', rate)
        }
        // console.log(JSON.stringify(this.answersList))
      }
    }
  }
</script>

<style scoped>

</style>