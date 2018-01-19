<template>
    <div class="pop" style="width: 920px;height: 610px;">
        <div class="pop-header">
            <div class="header-box clearfix">
                <h3 class="fl">Details</h3>
            </div>
        </div>
        <div class="pop-content">
            <div class="part-stu">
                <h4 class="normal-tit">Answer:</h4>
                <ul class="student-list">
                    <li v-for="student in answerStudentList" :id="student.id">{{student.name}}</li>
                </ul>
                <h4 class="normal-tit">Unanswer：</h4>
                <ul class="student-list">
                    <li v-for="student in answerStudentList" :id="student.id">{{student.name}}</li>
                </ul>
            </div>
            <div class="btn-box pop-btn tc">
                <button class="dtb-btn close-btn ml5" @click="close">Close</button>
            </div>
            <div class="fix-btn fix-btn-left">
                <a href="javascript:;" class="min-btn" @click="minSize"></a>
                <a href="javascript:;" class="closef-btn" @click="close"></a>
            </div>
            <div class="fix-btn fix-btn-right">
                <a href="javascript:;" class="min-btn" @click="minSize"></a>
                <a href="javascript:;" class="closef-btn" @click="close"></a>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'answer-details',
    data () {
      return {
        answerStudentList: [{id: '0', name: 'Annie Hathaway'}, {id: '1', name: 'Taylor Swift'}, {id: '2', name: 'Keanu Reeves'}, {id: '3', name: 'Gerard Butler'},
          {id: '4', name: 'Jake Gyllenhaal'}, {id: '5', name: 'Annie Hathaway'}, {id: '6', name: 'Taylor Swift'}, {id: '7', name: 'Keanu Reeves'},
          {id: '8', name: 'Jake Gyllenhaal'}, {id: '9', name: 'Annie Hathaway'}, {id: '10', name: 'Taylor Swift'}, {id: '11', name: 'Keanu Reeves'}],
        unAnswerStudentList: [{id: '0', name: 'Annie Hathaway'}, {id: '1', name: 'Taylor Swift'}, {id: '2', name: 'Keanu Reeves'}, {id: '4', name: 'Gerard Butler'},
          {id: '5', name: 'Jake Gyllenhaal'}, {id: '6', name: 'Annie Hathaway'}, {id: '7', name: 'Taylor Swift'}, {id: '8', name: 'Keanu Reeves'},
          {id: '9', name: 'Jake Gyllenhaal'}, {id: '10', name: 'Annie Hathaway'}, {id: '11', name: 'Taylor Swift'}, {id: '12', name: 'Keanu Reeves'}]
      }
    },
    methods: {
      minSize () {
        console.log('minSize')
      },
      close () {
        console.log('close')
      }
    }
  }
</script>

<style scoped>

</style>