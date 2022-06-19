<template>
  <div>
    <section class="l-section">
      <template v-if="cardList.length > 0">
        <base-radio-buttons v-model="radio.value" :list="radio.list" type="flex" @change="radioChange" />
        <div v-if="radio.value === 1" class="l-amount">
          <p class="info">
            만기된 계약 중 지급 신청할 계약을 선택해주세요.
          </p>
        </div>
        <div v-if="radio.value === 2" class="l-amount">
          <p class="info">
            만기 45일전 계약은 미리 예약하실 수 있습니다.<br>예약할 계약을 선택해주세요.
          </p>
          <base-buttons to="/" type="text" size="small" @click="dialog.infoPop = true">
            예약 시 지급 시기 안내
          </base-buttons>
        </div>
      </template>
      <base-titles title="신청 가능한 계약 건수" count fsize="18">
        <template #rightContent>
          <span class="count">총 {{ cardList.length }}건</span>
          <base-checkbox v-model="allCheck" label="전체선택" border @change="checkChange" />
        </template>
      </base-titles>
      <base-card-list :card-list="cardList" empty-txt="상환할 대출이 없습니다.">
        <template #topConent="{ scope }">
          <base-tag v-for="(tagItem, tagIdx) in scope.item.tag" :key="tagIdx" :tag-title="tagItem.title" :type="tagItem.type" />
        </template>
        <template #customArea="{ scope }">
          <base-checkbox v-model="scope.item.check" :disabled="scope.item.disabled" />
        </template>
        <template #contents="{ scope }">
          <dl class="list-info">
            <dt class="title">
              계약자
            </dt>
            <dd class="data">
              {{ scope.item.contractor }}
            </dd>
          </dl>
          <dl class="list-info">
            <dt class="title">
              수익자
            </dt>
            <dd class="data">
              {{ scope.item.beneficiary }}
            </dd>
          </dl>
          <dl class="list-info">
            <dt class="title">
              만기일
            </dt>
            <dd class="data">
              {{ scope.item.maturityDate }}
            </dd>
          </dl>
          <dl class="list-info">
            <dt class="title">
              만기보험금
            </dt>
            <dd class="data">
              {{ scope.item.maturityPrice }}원
            </dd>
          </dl>
          <dl class="list-info">
            <dt class="title">
              대출상환금
            </dt>
            <dd class="data">
              {{ scope.item.loanPrice }}원
            </dd>
          </dl>
          <dl class="list-info">
            <dt class="title">
              세금
            </dt>
            <dd class="data">
              {{ scope.item.taxPrice }}원
            </dd>
          </dl>
          <dl class="list-info">
            <dt class="title">
              실 지급금
            </dt>
            <dd class="data txt-blue">
              {{ scope.item.realPrice }}원
            </dd>
          </dl>
          <dl v-if="radio.value === 2" class="list-info">
            <dt class="title">
              예약여부
            </dt>
            <dd class="data txt-blue">
              {{ scope.item.status }}
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
          v-if="radio.value == 1"
          type="navy"
          size="medium"
          full
          :disabled="btnDisabled"
          @click="onStep"
        >
          확인
        </base-buttons>

        <base-buttons
          v-if="radio.value == 2"
          type="navy"
          size="medium"
          full
          :disabled="btnDisabled"
          @click="dialog.confirmPop = true"
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
      title="예약 시 지급 시기 안내"
      :visible.sync="dialog.infoPop"
      type="full"
      top="0"
      width="100%"
    >
      <template #content>
        <div style="padding:3rem 2rem">
          만기보험금은 해당 계약의 만기일까지 보험료를 정상적으로 납부하셨을 경우 만기일(주말/휴일인 경우 익영업일)에 지급됩니다.
          <div class="gray-box">
            <p>보험료 납입 연체된 경우 지급처리 되지 않습니다.</p>
            <p>연체보험료를 납부하신 날로부터 1 영업일 이후 지급됩니다.</p>
          </div>
        </div>
      </template>
      <template #footer>
        <base-buttons
          type="navy"
          size="large"
          @click="dialog.infoPop = false"
        >
          확인
        </base-buttons>
      </template>
    </base-modal>

    <base-modal
      title="분할보험금 잔액 상세 정보"
      :visible.sync="dialog.detailPop"
      type="full"
      top="0"
      width="100%"
    >
      <template #content>
        <section class="l-section">
          <base-titles fsize="20" title="분할보험금 잔액" />
          <div v-for="(item, idx) in dataList.items" :key="idx" class="data-list">
            <dl>
              <dt>계약번호</dt>
              <dd>{{ item.text1 }}</dd>
              <dt v-if="dataList.show">
                원금 합계
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
                총 분할보험금
              </dt>
              <dd v-if="dataList.show">
                {{ item.text4 }}원
              </dd>
              <dt class="last">
                실 지급금
              </dt>
              <dd>{{ item.text5 }}원</dd>
            </dl>
            <base-buttons type="gray-light" size="medium" full :class="[{'active':dataList.active}]" @click="togClick()">
              {{ dataList.btnText }} <i class="icon-Dropdown_line" />
            </base-buttons>
          </div>
        </section>

        <section class="l-section">
          <base-titles fsize="20" title="분할보험금 세부내역" />
          <base-accordion
            v-model="accodoan.activeNames"
            :list="accodoan.accodoanList"
          >
            <template #title1>
              <div class="text">
                분할보험금 발생일
              </div>
              <div class="title">
                2021-07-01
              </div>
            </template>
            <template #title2>
              <div class="text">
                분할보험금 발생일
              </div>
              <div class="title">
                2021-06-01
              </div>
            </template>
            <template #title3>
              <div class="text">
                분할보험금 발생일
              </div>
              <div class="title">
                2021-05-01
              </div>
            </template>
            <template #contents="{ contents }">
              <ul class="list">
                <li><span>원금</span><span>{{ contents.price1 }}원</span></li>
                <li><span>이자</span><span>{{ contents.price2 }}원</span></li>
                <li><span>분할보험금</span><span>{{ contents.price3 }}원</span></li>
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

    <base-modal :show-close="false" :visible.sync="dialog.confirmPop" type="system" width="280px">
      <template #content>
        <p class="message">
          만기보험금 지급 예약중인 계약입니다. 예약을 취소하시겠습니까?
        </p>
      </template>
      <template #footer>
        <div class="btn-group">
          <base-buttons type="gray-light" @click="dialog.confirmPop = false">
            취소
          </base-buttons>
          <base-buttons type="gray" @click="dialog.confirmPop = false; dialog.alertPop = true">
            확인
          </base-buttons>
        </div>
      </template>
    </base-modal>

    <base-modal :show-close="false" :visible.sync="dialog.alertPop" type="system" width="280px">
      <template #content>
        <p class="message">
          예약이 취소되었습니다.
        </p>
      </template>
      <template #footer>
        <div class="btn-group">
          <base-buttons type="gray" @click="dialog.alertPop = false">
            확인
          </base-buttons>
        </div>
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
          title: '(무)THE간편한건강보험(갱신형)',
          contractor: '박*민',
          beneficiary: '박*민',
          maturityDate: '2018-07-01',
          maturityPrice: '1500000',
          loanPrice: 1550000,
          taxPrice: 540000,
          realPrice: 960000
        },
        {
          check: false,
          subTitle: '30228488100001',
          title: '(무)THE건강한치아보험V(갱신형)',
          contractor: '박*민',
          beneficiary: '박*민',
          maturityDate: '2018-07-01',
          maturityPrice: '1500000',
          loanPrice: 1550000,
          taxPrice: 540000,
          realPrice: 960000
        },
        {
          disabled: true,
          check: false,
          subTitle: '30228488100001',
          title: '(무)THE건강한치아보험V(갱신형)',
          contractor: '박*민',
          beneficiary: '박*민',
          maturityDate: '2018-07-01',
          maturityPrice: '1500000',
          loanPrice: 1550000,
          taxPrice: 540000,
          realPrice: 960000
        }
      ],

      box: {
        icon: 'icon-Open_line',
        content: true,
        accordion: {
          title: '알려드립니다',
          listList: [
            {
              content: '계약자와 만기수익자가 동일하지 않은 계약의 경우, 만기보험금 신청시 만기수익자의 동의가 필요하므로 사이버창구(홈페이지/모바일/앱)접수가 불가합니다. 자세한 사항은 라이나생명 고객센터(1588-0058, 평일 09:00~18:00)로  문의 바랍니다.'
            },
            {
              content: '만기보험금은 접수 금액 및 시간에 따라 익영업일 18시 이내에 지급 받으실 수 있습니다.'
            },
            {
              content: '기보험계약대출이 있으신 경우, 원금 및 이자금액 상환 후 지급처리 될 수 있습니다.'
            },
            {
              content: '당일 합산 신청 실지급금이 500만원이 초과한 경우 당사 홈페이지/모바일앱/고객센터를 통해 접수 가능합니다.'
            }
          ]
        },
        accordion2: {
          title: '알려드립니다',
          listList: [
            {
              content: '내용이 들어갈 부분'
            },
            {
              color: 'blue',
              content: '내용이 들어갈 부분.'
            }
          ]
        }
      },

      dialog: {
        infoPop: false,
        detailPop: false,
        confirmPop: false,
        alertPop: false
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
            text5: 950000
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
              price1: 450000,
              price2: 50000,
              price3: 500000
            }
          },
          {
            customTitle: true,
            titleName: 'title2',
            contents: {
              price1: 450000,
              price2: 50000,
              price3: 500000
            }
          },
          {
            customTitle: true,
            titleName: 'title3',
            contents: {
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
    radioChange() {
      const value = this.radio.value

      switch (value) {
        case 2:
          this.cardList = [
            {
              check: false,
              subTitle: '30228488100001',
              title: '(무)THE간편한건강보험(갱신형) 2',
              contractor: '박*민',
              beneficiary: '박*민',
              maturityDate: '2018-07-01',
              maturityPrice: '1500000',
              loanPrice: 1550000,
              taxPrice: 540000,
              realPrice: 960000,
              status: '예약가능'
            },
            {
              check: false,
              subTitle: '30228488100001',
              title: '(무)THE건강한치아보험V(갱신형) 2',
              contractor: '박*민',
              beneficiary: '박*민',
              maturityDate: '2018-07-01',
              maturityPrice: '1500000',
              loanPrice: 1550000,
              taxPrice: 540000,
              realPrice: 960000,
              status: '예약중'
            },
            {
              disabled: true,
              check: false,
              subTitle: '30228488100001',
              title: '(무)THE건강한치아보험V(갱신형) 2',
              contractor: '박*민',
              beneficiary: '박*민',
              maturityDate: '2018-07-01',
              maturityPrice: '1500000',
              loanPrice: 1550000,
              taxPrice: 540000,
              realPrice: 960000,
              status: '예약불가'
            }
          ]
          break
        default:
          this.cardList = [
            {
              check: false,
              subTitle: '30228488100001',
              title: '(무)THE간편한건강보험(갱신형)',
              contractor: '박*민',
              beneficiary: '박*민',
              maturityDate: '2018-07-01',
              maturityPrice: '1500000',
              loanPrice: 1550000,
              taxPrice: 540000,
              realPrice: 960000
            },
            {
              check: false,
              subTitle: '30228488100001',
              title: '(무)THE건강한치아보험V(갱신형)',
              contractor: '박*민',
              beneficiary: '박*민',
              maturityDate: '2018-07-01',
              maturityPrice: '1500000',
              loanPrice: 1550000,
              taxPrice: 540000,
              realPrice: 960000
            },
            {
              disabled: true,
              check: false,
              subTitle: '30228488100001',
              title: '(무)THE건강한치아보험V(갱신형)',
              contractor: '박*민',
              beneficiary: '박*민',
              maturityDate: '2018-07-01',
              maturityPrice: '1500000',
              loanPrice: 1550000,
              taxPrice: 540000,
              realPrice: 960000
            }
          ]
          break
      }
    },

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

          ary[this.i] = this.cardList[this.i].realPrice
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
            ary[this.i] = this.cardList[this.i].realPrice
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
