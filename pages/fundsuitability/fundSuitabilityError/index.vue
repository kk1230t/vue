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
        <template>
          <div class="gap-both">
            <page-status :items="items" />
            <bottom-buttons :buttons="buttons" />
          </div>
        </template>
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
        type: 'error',
        title: `변액보험적합도
                부적합`,
        subtitle: `펀드적합성 진단 결과가 부적합인 경우
        서비스 이용이 불가합니다.

        고객센터(1588-0058)로 
        연락 주시기 바랍니다.`

      },
      buttons: {
        negative: {
          show: false
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
.status-page {
  padding:32px 32px 32px;
}
</style>
