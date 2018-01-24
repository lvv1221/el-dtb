<template>
    <div class="pop" style="width: 460px;height: 355px;">
        <div class="pop-header pop-header-new">
            <div class="header-box clearfix">
                <h3 class="fl">Set the answers</h3>
                <div class="control fr">
                    <a href="javascript:;" class="close" title=""></a>
                </div>
            </div>
        </div>
        <div class="pop-content">
            <div class="set-answer-box">
                <ul>
                    <li :class="{'selected': answer === option}" v-for="option in options">{{option}}</li>
                </ul>
            </div>
            <div class="btn-box pop-btn tc">
                <button class="dtb-btn time-up-btn">Confirm</button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'set-answer',
    data () {
      return {
        options: ['A', 'B', 'C', 'D', 'E', 'F', '√', '×'],
        answer: 'A'
      }
    }
  }
</script>

<style scoped>

</style>