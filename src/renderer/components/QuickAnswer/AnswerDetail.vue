<template>
    <div class="pop" style="width: 920px;height: 610px;">
        <div class="pop-header">
            <div class="header-box clearfix">
                <h3 class="fl">Details</h3>
            </div>
        </div>
        <div class="pop-content">
            <div class="pop-table">
                <ul class="table-ul clearfix">
                    <li>Number</li>
                    <li>Name</li>
                    <li>Progress</li>
                </ul>
                <div class="table-body perfect_scroll ps-container">
                    <table border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                        <tr v-for="student in tableData" :key="student.no">
                            <td>{{student.no}}</td>
                            <td>{{student.name}}</td>
                            <td><span class="color-blue font-bold">{{student.answerNum}}</span>/<span>{{questionCount}}</span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="btn-box pop-btn tc">
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
    name: 'answer-detail',
    data () {
      return {
        tableData: [{
          no: '1',
          name: 'jim green',
          answerNum: '2'
        }, {
          no: '2',
          name: 'jim green',
          answerNum: '2'
        }, {
          no: '3',
          name: 'jim green',
          answerNum: '2'
        }, {
          no: '4',
          name: 'jim green',
          answerNum: '2'
        }, {
          no: '5',
          name: 'jim green',
          answerNum: '2'
        }, {
          no: '6',
          name: 'jim green',
          answerNum: '2'
        }, {
          no: '7',
          name: 'jim green',
          answerNum: '2'
        }, {
          no: '8',
          name: 'jim green',
          answerNum: '2'
        }, {
          no: '9',
          name: 'jim green',
          answerNum: '2'
        }],
        questionCount: '10'
      }
    }
  }
</script>

<style scoped>

</style>