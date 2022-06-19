<template>
  <div class="l-content">
    <div class="l-section gap-both">
      <page-status :items="items">
        <template #contents>
          <div class="l-box-link">
            <div class="box-link">
              <nuxt-link to="/">
                <base-titles title=" ATM 현금 즉시 대출 신청" fsize="16" />
                ATM으로 바로 받는 소액대출 <br />
                서류 없이 최대 30만원 바로 출금
                <i class="icon-arror2L" />
              </nuxt-link>
            </div>
          </div>
        </template>
      </page-status>

      <bottom-buttons :buttons="buttons" />
    </div>
  </div>
</template>

<script>
import PageStatus from '~/components/PageStatus'
import BottomButtons from '~/components/BottomButtons'
export default {
  components: {
    PageStatus,
    BottomButtons
  },
  data() {
    return {
      items: {
        type: 'done',
        title: '대출신청 완료',
        subtitle: `1회 신청금액 100만 원 이하는 실시간 지급,
100만 원 초과 건은 심사 후
다음날 18시 이내에
지급받으실 수 있어요. (평일 기준)`
      },
      buttons: {
        negative: {
          show: true,
          title: '추가신청'
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
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .negative-button {
    flex: 1;
  }
}
</style>
