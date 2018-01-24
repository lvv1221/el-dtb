<template>
    <div class="state-box">
        <div class="class-box clearfix">
            <div class="class-icon">
                <img src="@/assets/images/class-icon.png" width="100%">
            </div>
            <p>{{pageName}}</p>
        </div>
        <label class="state-txt">Ready</label>
    </div>
</template>

<script>
  export default {
    name: 'ready',
    data () {
      return {
        pageName: 'The whole class'
      }
    },
    mounted () {
      this.pageName = 'Answer Race'
      setTimeout(() => {
        // this.$electron.remote.getCurrentWindow().close()
      }, 3000)
    }
  }
</script>

<style scoped>

</style>