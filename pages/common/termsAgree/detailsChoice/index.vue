<template>
  <div class="l-content">
    <section class="l-section gap_top">
      <base-buttons type="primary" @click="dialog.full = true">
        약관 동의 (선택)
      </base-buttons>
      <base-modal
        custom-class="modal"
        title="약관 동의 (선택)"
        :visible.sync="dialog.full"
        type="full"
        top="0"
        width="100%"
      >
        <template #content>
          <section class="l-section gap-top-pd">
            <base-titles
              title="보험계약대출의 체결·이행  등을 위한 상세 동의서"
              fsize="20"
            >
              <template #subContent>
                <p class="c-title_sub">
                  본 동의 후 동일한 보험계약과 관련된 보험계약 대출의
                  이용·유지·관리·범위 내에서는 귀하의 개인신용정보의 수집·이용
                  조회 제3자 제공을 위하여 귀하에게 별도의 추가 동의를 요구하지
                  않고자 합니다. 이에 동의하십니까?
                </p>
              </template>
            </base-titles>
          </section>
        </template>
        <template #footer>
          <bottom-buttons :buttons="buttons" />
        </template>
      </base-modal>
    </section>
  </div>
</template>

<script>
import BottomButtons from '~/components/BottomButtons'
export default {
  components: {
    BottomButtons
  },
  data() {
    return {
      dialog: {
        full: true
      },
      buttons: {
        negative: {
          show: true,
          title: '동의하지 않음'
        },
        positive: {
          show: true,
          title: '동의함'
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
  .el-dialog__wrapper.full {
    .el-dialog__body {
      padding: 0;
      .c-title_title {
        & + .c-title_text {
          .c-title_sub {
            margin: 12px 0 24px;
            font-size: $--font-size-medium;
            color: $--color-darkgray;
          }
        }
      }
    }
  }
  .gap-top-pd {
    padding-top: 32px;
  }
}
</style>
