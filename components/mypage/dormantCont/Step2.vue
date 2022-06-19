<template>
  <div>
    <section class="l-section">
      <base-box type="gray" :list="boxList" />

      <base-titles title="납입 가능한 계약 건수" count fsize="18">
        <template #rightContent>
          <span class="count">총 {{ cardList.length }}건</span>
          <base-checkbox v-model="allCheck" label="전체선택" border @change="checkChange" />
        </template>
      </base-titles>
      <base-card-list :card-list="cardList" empty-txt="납입 가능한 계약이 없습니다.">
        <template #topConent="{ scope }">
          <base-tag v-for="(tagItem, tagIdx) in scope.item.tag" :key="tagIdx" :tag-title="tagItem.title" :type="tagItem.type" />
        </template>
        <template #customArea="{ scope }">
          <base-checkbox v-model="scope.item.check" :disabled="scope.item.disabled" />
        </template>
        <template #contents="{ scope }">
          <dl class="list-info">
            <dt class="title">
              최종 납입 월(횟수)
            </dt>
            <dd class="data">
              {{ scope.item.dormantMonth }}
            </dd>
          </dl>
          <dl class="list-info">
            <dt class="title">
              1회 보험료
            </dt>
            <dd class="data">
              {{ scope.item.dormantOne }}원
            </dd>
          </dl>
          <dl class="list-info list-info--select">
            <dt class="title">
              납입 횟수
            </dt>
            <dd class="data">
              <base-select
                v-model="scope.item.value"
                :list="scope.item.list"
                placeholder="선택해주세요"
              />
            </dd>
          </dl>
          <dl class="list-info">
            <dt class="title">
              납입 보험료
            </dt>
            <dd class="data txt-blue">
              {{ scope.item.dormantPrice }}원
            </dd>
          </dl>
        </template>
      </base-card-list>
    </section>
    <section class="l-section gap-bottom">
      <base-messagebox
        :box="box.accordion"
        :accdian="true"
        :accdian-icon="box.icon"
        :list-content="box.content"
      />
    </section>
    <template v-if="cardList.length > 0">
      <floating-box
        v-model="allPrice"
        :has-button="true"
        :sum-box="[checkLen + '건선택', '총 ' + allPrice + '원']"
      />
      <div class="l-bottom">
        <base-buttons
          type="navy"
          size="medium"
          full
          :disabled="btnDisabled"
          @click="onStep"
        >
          확인
        </base-buttons>
      </div>
    </template>
    <template v-else>
      <floating-box
        :show-top="true"
      />
    </template>
  </div>
</template>

<script>
const FloatingBox = () => import('@/components/FloatingBox')
export default {
  components: { FloatingBox },
  data() {
    return {
      amount: '',
      checkLen: '0',
      allPrice: '0',
      allCheck: false,
      btnDisabled: true,
      boxList: [
        {
          title: '선택한 휴면보험금',
          amount: '1,000,000원'
        }
      ],
      cardList: [
        {
          check: false,
          subTitle: '30228488100001',
          title: '(무)가족사랑플랜정기보험(갱신형)',
          dormantMonth: '2022-02(311)',
          dormantOne: 10000,
          dormantPrice: 100000,
          value: '1',
          list: [
            {
              value: 1,
              label: '1회'
            },
            {
              value: 2,
              label: '2회'
            }
          ]
        },
        {
          check: false,
          subTitle: '30228488100001',
          title: '(무)가족사랑플랜정기보험(갱신형)',
          dormantMonth: '2022-02(311)',
          dormantOne: 10000,
          dormantPrice: 200000,
          value: '1',
          list: [
            {
              value: 1,
              label: '1회'
            },
            {
              value: 2,
              label: '2회'
            }
          ]
        },
        {
          disabled: true,
          check: false,
          subTitle: '30228488100001',
          title: '(무)가족사랑플랜정기보험(갱신형)',
          dormantMonth: '2022-02(311)',
          dormantOne: 10000,
          dormantPrice: 100000,
          value: '1',
          list: [
            {
              value: 1,
              label: '1회'
            },
            {
              value: 2,
              label: '2회'
            }
          ]
        }
      ],

      box: {
        icon: 'icon-Open_line',
        content: true,
        accordion: {
          title: '알려드립니다',
          listList: [
            {
              content: '실효일자로부터 3년(또는 2년)이 경과하여 법적으로 청구권이 소멸된 계약이지만 고객님의 요청 시 지급해 드리고 있습니다.'
            },
            {
              content: '타 보험사의 휴면보험금 조회는 생명보험협회에서 조회하실 수 있습니다.'
            },
            {
              content: '휴면보험금은 접수 금액 및 시간에 따라 익영업일 18시 이내에 지급 받으실 수 있습니다.'
            }
          ]
        }
      }
    }
  },

  watch: {
    cardList: {
      handler(newVal) {
        const checkCnt = newVal.filter(e => e.check).length
        const checkLen = newVal.length
        const disLen = newVal.filter(e => e.disabled).length
        const allLen = checkLen - disLen

        this.checkDefault()

        if (checkCnt > 0) {
          this.btnDisabled = false
        } else {
          this.btnDisabled = true
        }

        this.checkLen = checkCnt

        if (checkCnt >= allLen) {
          this.allCheck = true
        } else {
          this.allCheck = false
        }
      },
      deep: true
    }
  },

  mounted() {
    this.checkDefault()
  },

  methods: {
    checkChange() {
      const len = this.cardList.length
      const ary = []

      for (this.i = 0; this.i < len; this.i++) {
        if (this.cardList[this.i].disabled !== true) {
          if (this.allCheck === true) {
            this.cardList[this.i].check = true
          } else {
            this.cardList[this.i].check = false
          }

          ary[this.i] = this.cardList[this.i].dormantPrice
        }
      }

      const result = ary.reduce(function add(sum, currValue) {
        return sum + currValue
      }, 0)

      if (this.allCheck === true) {
        this.allPrice = result
      } else {
        this.allPrice = 0
      }
    },

    checkDefault() {
      const len = this.cardList.length
      const ary = []

      for (this.i = 0; this.i < len; this.i++) {
        if (this.cardList[this.i].disabled !== true) {
          if (this.cardList[this.i].check === true) {
            ary[this.i] = this.cardList[this.i].dormantPrice
          }
        }
      }

      const result = ary.reduce(function add(sum, currValue) {
        return sum + currValue
      }, 0)

      this.allPrice = result
    },

    onStep() {
      this.$emit('onStep')
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-dialog__body {
    .gray-box {
      margin-top: 2.4rem;
      padding: 1.6rem;
      background-color: $--color-palegray;
      color: $--color-darkgray;
      font-size: $--font-size-x-medium;

      p + p {
        margin-top: 1.2rem;
      }
    }

    .data-list {
      margin-top: 1.2rem;
      border: 1px solid $--color-darkgray;
      dl {
        overflow: hidden;
        padding: 0.8rem 2rem;
        font-size: $--font-size-medium;

        dt,
        dd {
          padding: 1.2rem 0;
        }

        dt {
          clear: both;
          float: left;
          width: 45%;
          color: $--color-darkgray;
        }
        dd {
          float: right;
          width: 55%;
          color: $--color-tertiary;
          text-align: right;
        }

        dt.last,
        dd:last-child {
          border-top: 1px solid $--color-skygray;
        }
        dd:last-child {
          color: $--color-primary;
          font-weight: $--font-weight-medium;
        }
      }

      .el-button {
        border-top: 1px solid $--color-skygray;

        .icon-Dropdown_line {
          display: inline-block;
        }

        &.active .icon-Dropdown_line {
          transform: rotateX(180deg);
        }
      }
    }

    .el-collapse {
      margin-top: 1.2rem;

      &-item {
        ::v-deep &__header {
          display: block;
          position: relative;

          .text {
            color: $--color-darkgray;
            font-size: $--font-size-x-medium;
            font-weight: $--font-weight-default;
          }

          .el-icon-arrow-right {
            position: absolute;
            top: 50%;
            right: 0;
            margin-block: -1rem;
          }
        }
      }

      .list {
        margin-bottom: -0.6rem;

        li {
          overflow: hidden;
          span {
            float: right;
            padding: 0.6rem 0;
            color: $--color-tertiary;
            font-size: $--font-size-medium;

            &:first-child {
              float: left;
              color: $--color-darkgray;
            }
          }
        }
      }
    }
  }
</style>
