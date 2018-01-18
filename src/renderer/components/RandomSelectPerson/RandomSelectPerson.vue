<template>
    <div class="state-box">
        <div class="user-box clearfix">
            <div class="fl user-icon">
                <img :src="students[1].avatar" width="100%">
            </div>
            <div class="fl ml25 mt15">
                <p>N0.{{student.no}}</p>
                <p>{{student.name}}</p>
            </div>
        </div>
        <label class="state-txt">Ready</label>
    </div>
</template>

<script>
  export default {
    name: 'random-select-person',
    data () {
      return {
        students: [
          {
            no: '1',
            name: 'Annie Hathaway',
            avatar: '//www.baidu.com/img/bd_logo1.png'
          }, {
            no: '2',
            name: 'Tom Hiddleston',
            avatar: '/static/images/user-icon.png'
          }, {
            no: '3',
            name: 'Brad pitt',
            avatar: '/static/images/user-icon.png'
          }, {
            no: '4',
            name: 'Jhonny Deep',
            avatar: '/static/images/user-icon.png'
          }, {
            no: '5',
            name: 'Chars',
            avatar: '/static/images/user-icon.png'
          }, {
            no: '6',
            name: 'Jacson',
            avatar: '/static/images/user-icon.png'
          }
        ],
        student: {}
      }
    },
    mounted () {
      this.student = this.students[0]
      this.select(10)
    },
    methods: {
      randomSelect (arr, max) {
        let num = Math.floor(Math.random() * (max))
        return arr[num]
      },
      select (max) {
        let count = 0
        let ins = setInterval(() => {
          this.student = this.randomSelect(this.students, this.students.length)
          console.log(this.student.name)
          count++
          if (count >= max) {
            clearInterval(ins)
            console.log('name:' + this.student.name)
          }
        }, 300)
      }
    }
  }
</script>

<style scoped>

</style>