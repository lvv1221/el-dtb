<template>
    <div class="pop" style="width: 920px;height: 610px;">
        <div class="pop-header pop-header-new">
            <div class="header-box clearfix">
                <h3 class="fl">Set a list of answers</h3>
                <div class="control fr">
                    <a href="javascript:;" class="close" title=""></a>
                </div>
            </div>
        </div>
        <div class="pop-content pop-content-new">
            <div class="pop-set-answer">
                <div class="pop-table">
                    <ul class="table-ul table-ul-answer clearfix">
                        <li>Number</li>
                        <li>Setting Answer</li>
                    </ul>
                    <div class="pop-table-h pop-table-answer perfect_scroll ps-container">
                        <table border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                            <tr v-for="data in tableData">
                                <td><em class="strong">{{data.no}}</em></td>
                                <td class="td80">
                                    <ul class="student-list answer-list">
                                        <li v-for="op in data.options" :class="{selected: data.selected === op}" @click="selectAnswer(data.no,op)">{{op}}</li>
                                    </ul>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                </div>
            </div>
            <div class="btn-box pop-btn tc">
                <button class="dtb-btn time-up-btn">Confirm</button>
                <button class="dtb-btn close-btn ml5">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'set-answers-list',
    data () {
      return {
        tableData: [{
          no: '1',
          options: ['A', 'B', 'C', 'D', 'E', 'F', '√', '×']
        }, {
          no: '2',
          options: ['A', 'B', 'C', 'D', 'E', 'F', '√', '×']
        }, {
          no: '3',
          options: ['A', 'B', 'C', 'D', 'E', 'F', '√', '×']
        }, {
          no: '4',
          options: ['A', 'B', 'C', 'D', 'E', 'F', '√', '×']
        }, {
          no: '5',
          options: ['A', 'B', 'C', 'D', 'E', 'F', '√', '×']
        }, {
          no: '6',
          options: ['A', 'B', 'C', 'D', 'E', 'F', '√', '×']
        }, {
          no: '7',
          options: ['A', 'B', 'C', 'D', 'E', 'F', '√', '×']
        }, {
          no: '8',
          options: ['A', 'B', 'C', 'D', 'E', 'F', '√', '×']
        }]
      }
    },
    created () {
      for (let data of this.tableData) {
        for (let i = 0; i < (4 - data.no.length); i++) {
          data.no = '0' + data.no
        }
        this.$set(data, 'selected', '')
      }
    },
    methods: {
      selectAnswer (index, answer) {
        for (let data of this.tableData) {
          if (data.no === index) {
            this.$nextTick(() => {
              data.selected = answer
            })
          }
        }
        console.log(this.tableData)
      }
    }
  }
</script>

<style scoped>

</style>