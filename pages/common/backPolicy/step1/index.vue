<template>
  <div class="l-content ">
    <base-step :active="stepActive" :list="stepList" :show-title="true" />
    <bottom-buttons :buttons="buttons" />
    <floating-box :show-top="true" :has-button="true" />
  </div>
</template>

<script>
import FloatingBox from '~/components/FloatingBox'
import BottomButtons from '@/components/BottomButtons'
export default {
  components: {
    FloatingBox,
    BottomButtons
  },
  data() {
    return {
      stepActive: 0,
      stepList: [
        {
          title: '신청정보 입력',
          subtitle: '계약 선택 후\n신청금액을 입력해주세요.'
        },
        {
          title: '보험료계산',
          subtitle:
            '대출금 지급 및 이자 납부를 위해\n본인명의의 계좌를 입력해주세요.'
        },
        {
          title: '피보험자 정보',
          subtitle:
            '대출금 지급 및 이자 납부를 위해\n본인명의의 계좌를 입력해주세요.'
        },
        {
          title: '가입서류 확인',
          subtitle:
            '대출금 지급 및 이자 납부를 위해\n본인명의의 계좌를 입력해주세요.'
        },
        {
          title: '전자서명',
          subtitle:
            '대출금 지급 및 이자 납부를 위해\n본인명의의 계좌를 입력해주세요.'
        }
      ],
      buttons: {
        negative: {
          show: true,
          title: '이전'
        },
        positive: {
          show: true,
          title: '다음'
        },
        disable: {
          show: false
        }
      }
    }
  }
}
</script>
