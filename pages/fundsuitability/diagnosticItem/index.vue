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
          <div class="title-top">
            <base-step-progress
              :percentage="percentage"
              class="step-progress-wrap"
            />

            <base-titles fsize="28" title="가입목적" />
            <p class="text">
              <span>1-1.</span>
              귀하가 가입하고자 하는 <br>
              금융상품은 어떤 것 입니까?
            </p>
          </div>
          <base-radio-buttons v-model="value" :list="list" title type="list" />
          <bottom-buttons :buttons="buttons" />
        </div>
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
      percentage: 10,
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
          label: '예금, 적금 등',
          value: '1'
        },
        {
          label: '주식, 채권 등 금융투자상품',
          value: '2'
        },
        {
          label: '일반보험',
          value: '3'
        },
        {
          label: '변액보험',
          value: '4'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep {
  .contnet-inner {
    position: relative;
    height: calc(100vh - 16.2rem);
    padding: 32px 32px 32px;
    .title-top {
      padding: 0.9rem 1.2rem 0;
      .c-title {
        margin-top: 47px;
        margin-bottom: 32px;
        &_title {
          color: $--color-tertiary;
          font-weight: $--font-weight-bold;
        }
      }
    }
    .text {
      font-size: $--font-size-medium;
      line-height: 2.6rem;
      color: $--color-tertiary;
      span {
        display: block;
      }
    }
    .el-radio-group.list {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}
</style>
