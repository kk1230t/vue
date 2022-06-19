<template>
  <div>
    <base-modal
      title="펀드 적합성 진단"
      :visible.sync="dialog.full"
      type="full"
      top="0"
      width="100%"
    >
      <template #content>
        <div class="gap-both">
          <page-status :items="items" />
          <bottom-buttons :buttons="buttons" />
        </div>
      </template>
    </base-modal>
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
      dialog: {
        full: true
      },
      items: {
        type: 'done',
        title: '성향분석 시작하기',
        subtitle: `펀드적합성 진단을 위한
        성향 분석이 시작됩니다.

        7가지 유형으로 구성되어 있습니다.`
      },
      buttons: {
        negative: {
          show: false
        },
        positive: {
          show: true,
          title: '시작'
        },
        disable: {
          show: false,
          title: '확인'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .status-page {
  padding:32px 32px 32px;
  .c-title_title {
    span {
    font-size:2.4rem !important;
    color:$--color-tertiary;
    }
  }
}
}
</style>
