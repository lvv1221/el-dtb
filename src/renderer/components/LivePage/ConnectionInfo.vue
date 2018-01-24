<template>
    <div class="pop" style="width: 920px;height: 610px;">
        <div class="pop-header">
            <div class="header-box clearfix">
                <h3 class="fl">Live page</h3>
            </div>
        </div>
        <div class="pop-content">
            <div class="live-box">
                <h3>For Subjective Questions</h3>
                <strong v-if="!connectFlag">Connection Error!</strong>
                <div class="file-box tc">
                    <div class="pad-box">
                        <img src="/static/images/pad-ico.png">
                    </div>
                    <p class="live-tips live-connected" v-if="connectFlag">Normal connection<br/><em>{{connectNum}}/{{noteNum}}</em></p>
                    <p class="live-tips" v-else>You can import the question template</p>
                </div>
                <div class="zb-model clearfix">
                    <div class="fl model-list clearfix">
                        <div class="fl muban-start">
                            <span>Blank Template</span>
                        </div>
                    </div>
                    <div class="fr pop-btn">
                        <button class="dtb-btn time-up-btn">Open the local file</button>
                    </div>
                </div>
                <div class="pop-btn connect-btn tc" style="padding: 15px 0" v-if="connectFlag">
                    <button class="dtb-btn time-up-btn">正在开始</button>
                </div>
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
    name: 'connection-info',
    data () {
      return {
        connectFlag: false,
        connectNum: 1,
        noteNum: 3
      }
    }
  }
</script>

<style scoped>

</style>