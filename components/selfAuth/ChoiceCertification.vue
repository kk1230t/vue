<template>
  <div class="l-content">
    <div class="l-section gap-both">
      <base-radio-buttons v-model="val" :list="list" class="reset-radio choice-certi">
        <template #default="scope">
          <div class="certifi">
            <div class="certifi-top">
              <base-image
                lazy
                class="certifi-img"
                :src="require('@/assets/images/common/icon-security.svg')"
                alt="보안이미지"
              />
              <div class="txt">
                {{ scope.scope.name }}
              </div>
            </div>
            <div class="certifi-middle">
              <div class="txt">
                <div class="title">
                  발급자
                </div>
                <div class="desc">
                  {{ scope.scope.issued }}
                </div>
              </div>
              <div class="txt">
                <div class="title">
                  구분
                </div>
                <div class="desc">
                  {{ scope.scope.div }}
                </div>
              </div>
            </div>
            <div class="desc-bar" />
            <div class="certifi-bottom">
              <div class="txt">
                만료일
              </div>
              <div class="txt">
                {{ scope.scope.expire }}
              </div>
            </div>
          </div>
        </template>
      </base-radio-buttons>

      <div class="base-input-form">
        <p class="tit">
          인증서 암호
        </p>
        <base-input v-model="txt" class="input" placeholder="인증서 암호를 입력해주세요." />
        <p class="desc">
          인증서 암호는 대소문자를 구분합니다.
        </p>
      </div>
      <bottom-buttons :buttons="buttons" />
    </div>
  </div>
</template>

<script>
import BottomButtons from '~/components/BottomButtons'
export default {
  components: {
    BottomButtons
  },
  props: {
    list: { type: Array, default: () => [] }
  },
  data() {
    return {
      txt: '',
      val: 1,
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
.choice-certi{margin-bottom: 32px;}
.el-radio-group.reset-radio {
  ::v-deep.el-radio-button.is-active {
    .el-radio-button__inner {
      .certifi {
        border: 1px solid #150f96 !important;
      }
    }
  }
}
.certifi {
  padding: 23px 20px;
  margin-bottom: 12px;
  border: 1px solid #f4f4f4;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  line-height: 160%;
  &-top {
    display: flex;
    margin-bottom: 20px;
    font-size: 0;
    .certifi-img {
      display: flex;
      width: 24px;
      margin-right: 8px;
    }
    .txt {
      font-size: 1.8rem;
      font-weight: 700;
    }
  }
  &-middle {
    display: flex;

    .txt {
      flex: 1;
      margin-bottom: 12px;
      text-align: left;

      .title {
        margin-bottom: 4px;
        font-size: 1.2rem;
        color: #4b4e53;
      }
      .desc {
        font-size: 1.4rem;
      }
    }
  }
  .desc-bar {
    height: 1px;
    margin-top: 12px;
    margin-bottom: 12px;
    background: $--color-skygray;
  }
  &-bottom {
    font-size: 0;
    display: flex;
    .txt {
      font-size: 1.2rem;
      margin-right: 4px;
    }
  }
}
</style>
