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
        <div class="contnet-inner">
          <base-titles title="취약금융소비자 해당 여부" fsize="20">
            <template #subContent>
              <p class="c-title_sub">
                (단, 투자경험이 있는 고령투자자는 적합자로 판단)
              </p>
            </template>
          </base-titles>

          <base-radio-buttons v-model="value" :list="list" title type="list" />

          <base-titles fsize="20" title="보험계약자의 연령" />

          <div class="box">
            <div class="box-wrap">
              만 32세
            </div>
          </div>
          <!--//box -->
          <bottom-buttons :buttons="buttons" />
        </div>
        <!--//contnet-inner -->
      </template>
    </base-modal>
  </div>
</template>

<script>
import BottomButtons from '@/components/BottomButtons'
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
          title: '이전'
        },
        positive: {
          show: true,
          title: '다음'
        },
        disable: {
          show: false
        }
      },
      value: '1',
      list: [
        {
          label:
            '만65세 이상 고령자, 미성년자, 정신적 장애로 일상이나 사회생활에 제약을 받는 자',
          title: '예, 취약금융소비자입니다',
          value: '1'
        },
        {
          label:
            '만64세 이하 성인, 만65세 이상 고령자 중 변액보험체결 경험이 있거나 금융투자상품에 가입/투자한 경험이 있는자, 미성년자 또는 정신적 장애가 있으나 친권자 등 법정대리인을 통해 적하성진단을 실시하는 자',
          title: '아니오',
          value: '2'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep {
  .contnet-inner {
    padding:12px 20px 32px;
    margin-top: $--font-size-big-large;
    .c-title {
      &_title {
        color: $--color-tertiary;
      }
      &_sub {
        white-space: initial;
        font-size: $--font-size-medium !important;
        color: $--color-darkgray !important;
      }
      &_content {
        margin-bottom: 12px;
      }
    }
    .el-radio-group {
      margin-bottom:32px;
      padding-left:0;
      .el-radio-button {
        &__inner {
          em {
            display: block;
            margin-bottom: 6px;
            font-weight: $--font-weight-medium;
            font-size: $--font-size-medium;
            color: $--color-tertiary;
          }
          span {
            font-size: $--font-size-x-medium;
            line-height: $--font-size-big-large;
            color: $--color-darkgray;
            font-weight: $--font-weight-default;
            word-break: keep-all;
          }
        }
        &:hover,
        &:focus {
          em {
            color: $--color-primary;
          }
        }
      }
      .el-radio-button.is-active {
        em {
          color: $--color-primary;
        }
      }
    }
    .box {
      border: 1px solid $--color-palegray;
      &-wrap {
        padding: $--font-size-medium;
        color: $--color-tertiary;
        font-size: $--font-size-large;
      }
    }
  }
}
</style>
