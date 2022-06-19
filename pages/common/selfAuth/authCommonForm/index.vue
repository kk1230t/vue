<template>
  <div class="l-content">
    <div class="l-section gap-both">
      <div class="base-input-form">
        <p class="tit">
          이름
        </p>
        <base-input v-model="txt1" class="input" placeholder="이름을 입력해주세요." />
      </div>
      <div class="base-input-form">
        <p class="tit">
          생년월일
        </p>
        <base-input v-model="txt2" class="input" placeholder="생년월일 8자리를 입력해주세요." />
      </div>
      <div class="base-input-form">
        <p class="tit">
          휴대폰번호
        </p>
        <base-input v-model="txt3" class="input" placeholder="010-1234-1234" />
      </div>
      <all-agree :items="items" />
    </div>
    <bottom-buttons :buttons="buttons" />
  </div>
</template>

<script>
import AllAgree from '~/components/AllAgree'
import BottomButtons from '~/components/BottomButtons'
export default {
  components: { AllAgree, BottomButtons },
  data() {
    return {
      txt1: '',
      txt2: '',
      txt3: '',
      items: [
        { title: '개인정보동의', to: '' },
        { title: '고유식별정보처리동의', to: '' },
        { title: '서비스이용약관동의', to: '' },
        { title: '제3자정보제공동의', to: '' }
      ],
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

  }
}
</script>

<style lang="scss" scoped>

</style>
