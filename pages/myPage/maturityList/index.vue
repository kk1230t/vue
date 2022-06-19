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
    </div>
  </div>
</template>

<script>
const Step1 = () => import('@/components/mypage/maturityCont/Step1.vue')
const Step2 = () => import('@/components/mypage/maturityCont/Step2.vue')
const Step3 = () => import('@/components/mypage/maturityCont/Step3.vue')
export default {
  components: { Step1, Step2, Step3 },
  data() {
    return {
      stepActive: 0,
      stepList: [
        {
          title: '신청정보 입력',
          subtitle: '즉시신청과 예약신청이 가능합니다.'
        },
        {
          title: '계좌정보 입력',
          subtitle: '본인명의의 계좌를 입력해주세요.'
        },
        {
          title: '신청정보 확인',
          subtitle: '라인하 고객님의 지급 신청 정보입니다.'
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
