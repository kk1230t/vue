<template>
  <div class="l-content">
    <div class="l-section">
      <base-titles title="승인번호 확인" fsize="18" :button-top="true">
        <template #subContent>
          <p class="c-title_sub">
            ATM에 생년월일을 입력 후<br />
            아래의 승인번호를 입력해주세요.
          </p>
        </template>
      </base-titles>
      <ApprovalNumber />
      <p class="info">
        승인번호 발급 후 30분 이내에 미 출금시 신청 내역은 바로 자동 취소
        처리되니 안심하세요
      </p>
      <base-buttons type="text-gray" size="small">
        ATM별 이용방법
      </base-buttons>
    </div>
  </div>
</template>

<script>
import ApprovalNumber from '@/components/ApprovalNumber'

export default {
  components: { ApprovalNumber },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .c-title {
    &_content {
      padding-bottom: 32px;
    }
    &_text {
      .c-title_sub {
        white-space: normal;
      }
    }
  }
}
</style>
