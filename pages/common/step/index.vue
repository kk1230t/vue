<template>
  <div>
    <base-step :active="stepActive" :list="stepList" :show-title="true" />
    <base-step :active="stepActive" :list="stepList" :show-title="true" :is-scroll="true" />
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      stepSmall: true,
      stepActive: 0,
      stepList: [
        {
          title: '계좌정보입력',
          subtitle:
            `대출금 지급 및 이자 납부를 위해
본인명의의 계좌를 입력해주세요.`
        },
        {
          title: '계좌정보입력',
          subtitle:
            `대출금 지급 및 이자 납부를 위해
본인명의의 계좌를 입력해주세요.`
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
        }
      }
    }
  }

}
</script>
