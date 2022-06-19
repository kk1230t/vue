<template>
  <div>
    <base-modal
      title="펀드 적합성 진단 결과"
      :visible.sync="dialog.full"
      type="full"
      top="0"
      width="100%"
    >
      <template #content>
        <div class="contnet-inner">
          <base-titles
            fsize="24"
            title="고객님의
              펀드 적합성 진단 결과"
          />

          <template>
            <div class="cont">
              <div class="cont-box">
                <strong>30점</strong>
                <span>성향분석점수</span>
              </div>
              <div class="cont-box">
                <strong>적합</strong>
                <span>성향분석점수</span>
              </div>
            </div>
          </template>

          <base-list-table
            class-type="box type01"
            :list="mobList"
            empty-txt="대출내역이 없습니다."
          />
          <p class="sub-tit">
            선택한 특별계정(펀드)
          </p>
          <div class="box">
            <div class="box-wrap">
              채권형, 아시아50주식형, 혼합성장형, 밸류고배당주식형, 유럽주식형
            </div>
          </div>
          <p class="sub-tit">
            적합한 특별계정(펀드)
          </p>
          <div class="box">
            <div class="box-wrap">
              브이캠그로스형, 에그리비즈니스주식형, 아시아50주식형, 유럽주식형,
              기후변화, 주식형, 미국주식형, 차이나주식형
            </div>
          </div>
          <base-list-table
            class-type="box type02"
            :list="mobList2"
            empty-txt="보험상품이 없습니다."
          />
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
      mobList: [
        {
          title: '투자성향 (현재)',
          data: '적극투자형'
        },
        {
          title: '투자성향 (재평가결과)',
          data: ''
        },
        {
          title: '적합한 펀드 위험등급',
          data: '고위험이하'
        },
        {
          title: '선택 펀드 위험등급',
          data: '고위험이하'
        }
      ],
      mobList2: [
        {
          title: '보험상품성향',
          data: '저축형'
        },
        {
          title: '보험상품성향222',
          data: '항목값'
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
    margin:12px 20px 32px;
    .cont {
      display: flex;
      position: relative;
      justify-content: space-evenly;
      margin-top: 32px;
      margin-bottom: 32px;
      padding: $--font-size-default;
      border: 1px solid $--color-palegray;
      &:before {
        display: inline-block;
        width: 1px;
        height: 48px;
        position: absolute;
        left: calc(50% - 1px);
        top: calc(50% - 24px);
        background-color: $--color-palegray;
        content: '';
      }
      &-box {
        strong {
          display: block;
          text-align: center;
          color: $--color-primary;
          font-size: $--font-size-extra-large;
          font-weight: $--font-weight-bold;
        }
        span {
          display: block;
          text-align: center;
          color: $--color-darkgray;
          font-size: $--font-size-medium;
          font-weight: $--font-weight-bold;
        }
      }
    }
    .c-title {
      &_title {
        color: $--color-tertiary;
        font-weight: $--font-weight-bold;
      }
    }
    .info-list-wrap-box.type01 {
      padding-left: 0;
      padding-right: 0;
      border-left: 0 none;
      border-right: 0 none;
      border-top: 1px solid $--color-tertiary;
    }
    .info-list-wrap-box.info-list-wrap-box.type02 {
      margin-top: 32px;
    }
    .sub-tit {
      margin: 24px 0 15px;
      color: $--color-darkgray;
      font-size: $--font-size-medium;
      font-weight: $--font-weight-default;
    }
    .box {
      border: 1px solid #d9d9d9;
      &-wrap {
        padding: $--font-size-medium;
        font-size: $--font-size-x-medium;
        color: $--color-tertiary;
      }
    }
  }
}
</style>
