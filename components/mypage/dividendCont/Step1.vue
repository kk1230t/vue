<template>
  <div>
    <section class="l-section">
      <base-titles title="신청 가능한 계약 건수" count fsize="18">
        <template #rightContent>
          <span class="count">총 {{ cardList.length }}건</span>
          <base-checkbox v-model="allCheck" label="전체선택" border @change="checkChange" />
        </template>
      </base-titles>
      <base-card-list :card-list="cardList" empty-txt="가입한 보험이 없습니다.">
        <template #topConent="{ scope }">
          <base-tag v-for="(tagItem, tagIdx) in scope.item.tag" :key="tagIdx" :tag-title="tagItem.title" :type="tagItem.type" />
        </template>
        <template #customArea="{ scope }">
          <base-checkbox v-model="scope.item.check" :disabled="scope.item.disabled" />
        </template>
        <template #contents="{ scope }">
          <dl class="list-info">
            <dt class="title">
              계약일
            </dt>
            <dd class="data">
              {{ scope.item.contractDate }}
            </dd>
          </dl>
          <dl class="list-info">
            <dt class="title">
              배당금 발생일
            </dt>
            <dd class="data">
              {{ scope.item.startDate }}
            </dd>
          </dl>
          <dl class="list-info">
            <dt class="title">
              배당금 잔액
            </dt>
            <dd class="data txt-blue">
              {{ scope.item.balancePrice }}원
            </dd>
          </dl>
          <base-buttons v-if="scope.item.disabled === true" type="gray-light" full disabled>
            자세히 보기
          </base-buttons>
          <base-buttons v-else type="gray-light" full @click="dialog.detailPop = true">
            자세히 보기
          </base-buttons>
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

    <base-modal
      title="배당금 잔액 상세 정보"
      :visible.sync="dialog.detailPop"
      type="full"
      top="0"
      width="100%"
    >
      <template #content>
        <section class="l-section">
          <base-titles fsize="20" title="배당금 잔액" />
          <div v-for="(item, idx) in dataList.items" :key="idx" class="data-list">
            <dl>
              <dt>계약번호</dt>
              <dd>{{ item.text1 }}</dd>
              <dt v-if="dataList.show">
                배당원금 합계
              </dt>
              <dd v-if="dataList.show">
                {{ item.text2 }}원
              </dd>
              <dt v-if="dataList.show">
                이자 합계
              </dt>
              <dd v-if="dataList.show">
                {{ item.text3 }}원
              </dd>
              <dt v-if="dataList.show">
                총 배당금
              </dt>
              <dd v-if="dataList.show">
                {{ item.text4 }}원
              </dd>
              <dt v-if="dataList.show">
                최소상환금
              </dt>
              <dd v-if="dataList.show">
                {{ item.text5 }}원
              </dd>
              <dt class="last">
                실 지급금
              </dt>
              <dd>{{ item.text6 }}원</dd>
            </dl>
            <base-buttons type="gray-light" size="medium" full :class="[{'active':dataList.active}]" @click="togClick()">
              {{ dataList.btnText }} <i class="icon-Dropdown_line" />
            </base-buttons>
          </div>
        </section>

        <section class="l-section">
          <base-titles fsize="20" title="배당금 세부내역" />
          <base-accordion
            v-model="accodoan.activeNames"
            :list="accodoan.accodoanList"
          >
            <template #title1>
              <div class="text">
                배당금 발생일
              </div>
              <div class="title">
                2021-07-01
              </div>
            </template>
            <template #title2>
              <div class="text">
                배당금 발생일
              </div>
              <div class="title">
                2021-06-01
              </div>
            </template>
            <template #title3>
              <div class="text">
                배당금 발생일
              </div>
              <div class="title">
                2021-05-01
              </div>
            </template>
            <template #contents="{ contents }">
              <ul class="list">
                <li><span>유형</span><span>{{ contents.text }}</span></li>
                <li><span>배당원금</span><span>{{ contents.price1 }}원</span></li>
                <li><span>이자</span><span>{{ contents.price2 }}원</span></li>
                <li><span>배당금</span><span>{{ contents.price3 }}원</span></li>
              </ul>
            </template>
          </base-accordion>
        </section>

        <section class="l-section">
          <base-messagebox
            :box="box.accordion2"
            :accdian="true"
            :accdian-icon="box.icon"
            :list-content="box.content"
          />
        </section>
      </template>
      <template #footer>
        <base-buttons
          type="navy"
          size="large"
          @click="dialog.detailPop = false"
        >
          확인
        </base-buttons>
      </template>
    </base-modal>
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
      radio: {
        value: 1,
        list: [
          {
            label: '즉시신청',
            value: 1
          },
          {
            label: '예약신청/취소',
            value: 2
          }
        ]
      },
      cardList: [
        {
          check: false,
          subTitle: '30228488100001',
          title: '(무)암걱정없는100세암보험(해지환급금 미지급형)',
          contractDate: '2018-07-01',
          startDate: '2021-07-01',
          balancePrice: 990000
        },
        {
          check: false,
          subTitle: '30228488100001',
          title: '(무)THE간편한건강보험(갱신형)',
          contractDate: '2018-07-01',
          startDate: '2021-07-01',
          balancePrice: 220000
        },
        {
          disabled: true,
          check: false,
          subTitle: '30228488100001',
          title: '(무)THE건강한치아보험V(갱신형)',
          contractDate: '2018-07-01',
          startDate: '2021-07-01',
          balancePrice: 950000
        }
      ],

      box: {
        icon: 'icon-Open_line',
        content: true,
        accordion: {
          title: '알려드립니다',
          listList: [
            {
              content: '배당금은 접수 금액 및 시간에 따라 익영업일 18시 이내에 지급 받으실 수 있습니다.'
            },
            {
              content: '대출금이 있을 경우, 일부 금액이 대출 상환 후 지급될 수 있습니다.'
            }
          ]
        },
        accordion2: {
          title: '알려드립니다',
          btnName: '상담신청',
          listList: [
            {
              content: '배당원금과 이자를 합한 총 배당금에서 최소 상환금을 제외한 금액이 실 지급금액입니다.'
            },
            {
              content: '최소상환금에 대한 자세한 설명을 원하시면 상담신청을 남기시거나, 라이나생명 고객센터(1588-0058)로 문의하여 주십시오.'
            }
          ]
        }
      },

      dialog: {
        detailPop: false
      },

      dataList: {
        active: false,
        show: false,
        btnText: '더보기',
        items: [
          {
            text1: '32288848810',
            text2: 900000,
            text3: 100000,
            text4: 1000000,
            text5: -50000,
            text6: 950000
          }
        ]
      },

      accodoan: {
        activeNames: '',
        accodoanList: [
          {
            customTitle: true,
            titleName: 'title1',
            contents: {
              text: '사차',
              price1: 450000,
              price2: 50000,
              price3: 500000
            }
          },
          {
            customTitle: true,
            titleName: 'title2',
            contents: {
              text: '사차',
              price1: 450000,
              price2: 50000,
              price3: 500000
            }
          },
          {
            customTitle: true,
            titleName: 'title3',
            contents: {
              text: '사차',
              price1: 450000,
              price2: 50000,
              price3: 500000
            }
          }
        ]
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

          ary[this.i] = this.cardList[this.i].balancePrice
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
            ary[this.i] = this.cardList[this.i].balancePrice
          }
        }
      }

      const result = ary.reduce(function add(sum, currValue) {
        return sum + currValue
      }, 0)

      this.allPrice = result
    },

    togClick() {
      this.dataList.show = !this.dataList.show
      this.dataList.active = !this.dataList.active

      if (this.dataList.active === true) {
        this.dataList.btnText = '접기'
      } else {
        this.dataList.btnText = '더보기'
      }
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
