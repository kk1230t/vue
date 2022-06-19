<template>
  <div class="l-content">
    <base-step
      :active="stepActive"
      :list="stepList"
      :show-title="true"
    />
    <div class="l-step">
      <template v-if="stepActive === 0">
        <step1 @onStep="stepActive = 1" />
      </template>
      <template v-if="stepActive === 1">
        <step2 @onStep="stepActive = 2" />
      </template>
      <template v-if="stepActive === 2">
        <step3 @onStep="stepActive = 3" />
      </template>
      <template v-if="stepActive === 3">
        <step4 @onStep="stepActive = 4" />
      </template>
      <template v-if="stepActive === 4">
        <step5 @onStep="stepActive = 5" />
      </template>
    </div>
  </div>
</template>

<script>
const Step1 = () => import('@/components/mypage/dormantCont/Step1.vue')
const Step2 = () => import('@/components/mypage/dormantCont/Step2.vue')
const Step3 = () => import('@/components/mypage/dormantCont/Step3.vue')
const Step4 = () => import('@/components/mypage/dormantCont/Step4.vue')
const Step5 = () => import('@/components/mypage/dormantCont/Step5.vue')
export default {
  components: { Step1, Step2, Step3, Step4, Step5 },
  data() {
    return {
      stepActive: 0,
      stepList: [
        {
          title: '신청정보 입력',
          subtitle: '지급 신청할 계약을 선택해주세요.'
        },
        {
          title: '납입계약 선택',
          subtitle: '보험료를 납입할 계약을 선택해주세요.'
        },
        {
          title: '납입정보 확인',
          subtitle: '라인하 고객님의 보험료 납입정보 입니다. /n 차액이 있는 경우 계좌로 수령 가능합니다.'
        },
        {
          title: '계좌정보 입력',
          subtitle: '본인명의의 계좌를 입력해주세요.'
        },
        {
          title: '신청정보 확인',
          subtitle: '라인하 고객님의 지급 신청 정보입니다. /n 차액이 있는 경우 계좌로 수령 가능합니다.'
        }
      ]

    }
  }
}
</script>

<style lang="scss" scoped>
.l-step{
  padding-top: 40px;
}

::v-deep{
  .l-box{
    margin-bottom: 32px;
  }
  .card-type-list-wrap{
    padding-top: 12px;
  }
}
</style>
