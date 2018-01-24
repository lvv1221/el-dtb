<template>
    <div class="pop" style="width: 920px;height: 610px;">
        <div class="pop-header">
            <div class="header-box clearfix">
                <h3 class="fl">Objcetive Answer</h3>
            </div>
        </div>
        <div class="pop-content">
            <div class="ques-box">
                <h3>Choose the quantity questions</h3>
                <strong>{{count}}</strong>
                <div class="num-table">
                    <table>
                        <tbody><tr v-for="tr in num">
                            <td v-for="td in tr" @click="setCount(td)">{{td}}</td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td @click="setCount(0)">0</td>
                            <td class="delete" @click="deleteCount">Delete</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="btn-box pop-btn tc">
                <button class="dtb-btn time-up-btn">Start</button>
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
    name: 'set-question-count',
    data () {
      return {
        num: [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']],
        count: ''
      }
    },
    methods: {
      setCount (num) {
        this.count += num
        let temp = parseInt(this.count)
        if (temp > 40) {
          this.count = '40'
        }
      },
      deleteCount () {
        this.count = this.count.substr(0, (this.count.length - 1))
      }
    }
  }
</script>

<style scoped>

</style>