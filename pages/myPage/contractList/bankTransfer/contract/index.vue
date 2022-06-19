<template>
  <div class="l-content">
    <base-step :active="stepActive" :list="stepList" show-title>
      <template #content>
        <span
          >대출금 지급 및 이자 납부를 위해 본인명의의 계좌를 입력해주세요</span
        >
        <base-tooltip
          title="본인명의계좌"
          mode="skygray"
          util-button
          size="36%"
        >
          <template #content>
            <p>
              보험료 납입 계좌의 예금주가 계약자와 다른 경우는 이자 납입에 대한
              납부자의 동의가 필요하므로, 우편, 방문, 전화접수를 이용하여 주시기
              바랍니다.
            </p>
          </template>
        </base-tooltip>
      </template>
    </base-step>
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
        <step4 @onStep="onSuccess" />
      </template>
    </div>
  </div>
</template>

<script>
import Step1 from '@/components/mypage/accountDeposit/Step1'
import Step2 from '@/components/mypage/accountDeposit/Step2'
import Step3 from '@/components/mypage/accountDeposit/Step3'
import Step4 from '@/components/mypage/accountDeposit/Step4'
export default {
  components: { Step1, Step2, Step3, Step4 },
  data() {
    return {
      stepActive: 0,
      stepList: [
        {
          title: '신청정보 입력',
          subtitle: '계약 선택 후 \n 신청금액을 입력해주세요.'
        },
        {
          title: '동의 및 확인사항',
          subtitle: '약정서 동의 및 대출 관련 \n 안내사항에 대해 확인해주세요.'
        },
        {
          title: '계좌정보 입력',
          customArea: true
        },
        {
          title: '신청정보 확인',
          subtitle: '라인하 고객님의 \n  보험계약대출 신청 정보입니다.'
        }
      ]
    }
  },
  methods: {
    onSuccess() {
      location.href = '/myPage/contract-list/done'
    }
  }
}
</script>

<style lang="scss" scoped>
.l-step {
  padding-top: 40px;
}

::v-deep {
  .l-box {
    margin-bottom: 32px;
  }
  .card-type-list-wrap {
    padding-top: 12px;
  }
  .tooltip {
    display: inline;
  }
}
</style>
