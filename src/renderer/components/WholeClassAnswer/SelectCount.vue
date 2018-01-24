<template>
    <div class="pop" style="width: 920px;height: 610px;">
        <div class="pop-header">
            <div class="header-box clearfix">
                <h3 class="fl">Select {{answer}}</h3>
            </div>
        </div>
        <div class="pop-content">
            <div class="select-box">
                <div class="part-stu part-answer">
                    <h4 class="normal-tit">Answer:</h4>
                    <ul class="student-list">
                        <li :class="{'selected': answer === option}" v-for="option in options" @click="answer = option">{{option}}</li>
                    </ul>
                </div>
                <div class="part-stu part-name">
                    <h4 class="normal-tit">Name list:</h4>
                    <ul class="student-list">
                        <li v-for="student in answerStudentList" :key="student.id">{{student.name}}</li>
                    </ul>
                </div>
            </div>
            <div class="btn-box pop-btn tc">
                <button class="dtb-btn time-up-btn">Back</button>
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
    name: 'select-count',
    data () {
      return {
        options: ['A', 'B', 'C', 'D', 'E', 'F', '√', '×', 'Absent'],
        answer: 'A',
        answerStudentList: [{id: '0', name: 'Annie Hathaway'}, {id: '1', name: 'Taylor Swift'}, {id: '2', name: 'Keanu Reeves'}, {id: '3', name: 'Gerard Butler'},
          {id: '4', name: 'Jake Gyllenhaal'}, {id: '5', name: 'Annie Hathaway'}, {id: '6', name: 'Taylor Swift'}, {id: '7', name: 'Keanu Reeves'},
          {id: '8', name: 'Jake Gyllenhaal'}, {id: '9', name: 'Annie Hathaway'}, {id: '10', name: 'Taylor Swift'}, {id: '11', name: 'Keanu Reeves'}]
      }
    }
  }
</script>

<style scoped>

</style>