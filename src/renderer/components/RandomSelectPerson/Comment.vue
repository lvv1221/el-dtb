<template>
    <div class="state-box">
        <div class="user-box clearfix">
            <div class="fl user-icon">
                <img :src="student.avatar" width="100%">
            </div>
            <div class="fl ml25 mt15">
                <p>N0.{{student.no}}</p>
                <p>{{student.name}}</p>
            </div>
        </div>
        <label class="state-txt awesome-ico-l" v-if="commentCode === '0'">Awesome</label>
        <label class="state-txt good-ico-l" v-else-if="commentCode === '1' ">Good</label>
        <label class="state-txt notbad-ico-l" v-else-if="commentCode === '2'">Not Bad</label>
        <label class="state-txt try-ico-l" v-else-if="commentCode === '3'">Keep Trying</label>
    </div>
</template>

<script>
  export default {
    name: 'comment',
    data () {
      return {
        student: {
          no: '1',
          name: 'Annie Hathaway',
          avatar: '/static/images/user-icon.png'
        },
        commentCode: '0'
      }
    },
    mounted () {
      setTimeout(() => {
        // this.$electron.remote.getCurrentWindow().close()
      }, 3000)
    }
  }
</script>

<style scoped>

</style>