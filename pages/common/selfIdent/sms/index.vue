<template>
  <div class="l-content">
    <div class="l-section gap_top">
      <sms-auth :alert-msg="alertMsg" @onAlert="onAlert('A')" />
    </div>
    <bottom-buttons :buttons="buttons" />
  </div>
</template>

<script>
import BottomButtons from '~/components/BottomButtons'
import SmsAuth from '~/components/selfIdent/SmsAuth.vue'
export default {
  components: { BottomButtons, SmsAuth },
  data() {
    return {
      alertMsg: '',
      buttons: {
        negative: {
          show: false,
          title: ''
        },
        positive: {
          show: true,
          title: '확인'
        },
        disable: {
          show: false
        }
      }
    }
  },
  methods: {
    onAlert(type) {
      if (type === 'A') {
        this.alertMsg =
          '인증번호 발송을 요청하였습니다. 문자메세지를 확인해주시기 바랍니다.'
      } else if (type === 'B') {
        this.alertMsg =
          '인증이 완료되었습니다.'
      } else if (type === 'C') {
        this.alertMsg =
        '인증이 실패하였습니다.'
      }
      console.log(type)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
