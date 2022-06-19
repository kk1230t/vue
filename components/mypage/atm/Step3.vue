<template>
  <div>
    <section class="l-section">
      <base-titles title="계좌정보 입력" count fsize="20" />
      <div class="l-account">
        <P class="account-title"> 지급 및 납부 계좌 선택 </P>
        <div class="account-box">
          <span v-if="accountList.length === 0" class="account-empty">
            등록된 계좌가 없습니다.
          </span>
          <template v-else>
            <base-select-button :select="select" :value.sync="selectedValue" />
          </template>
          <base-buttons
            type="gray-light"
            full
            size="medium"
            icon="icon-Plus"
            @click="onalert('A')"
          >
            계좌 신규 등록
          </base-buttons>
        </div>
        <P class="account-title"> 이자 납부일 </P>
        <base-radio-buttons
          v-model="interestPayment"
          :list="interestPaymentList"
          type="flex"
        />
      </div>
    </section>
    <section class="l-section">
      <base-messagebox
        :box="box.accordion"
        :accdian="true"
        :accdian-icon="box.icon"
        :list-content="box.content"
      />
    </section>
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
    <base-modal
      :show-close="false"
      :visible.sync="alert"
      type="system"
      width="280px"
    >
      <template #content>
        <p class="message">
          {{ modalMessage }}
        </p>
      </template>
      <template #footer>
        <base-buttons type="gray" size="large" @click="alert = false">
          확인
        </base-buttons>
      </template>
    </base-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      alert: false,
      modalMessage: '',
      account: '',
      btnDisabled: false,
      accountList: [
        {
          value: 1,
          label: '국민은행 5278******3178 '
        }
      ],
      interestPayment: 1,
      interestPaymentList: [
        {
          value: 1,
          label: '10일'
        },
        {
          value: 2,
          label: '15일'
        },
        {
          value: 3,
          label: '25일'
        },
        {
          value: 4,
          label: '말일'
        }
      ],
      selectedValue: 1,
      select: {
        title: '계좌선택',
        list: [
          {
            value: 1,
            label: '기업은행 0075******8405'
          },
          {
            value: 2,
            label: '국민은행 5278******3178'
          },
          {
            value: 3,
            label: '우리은행 0075******8405'
          }
        ]
      },
      box: {
        icon: 'icon-Open_line',
        content: true,
        accordion: {
          title: '알려드립니다',
          listList: [
            {
              content: '선택하신 계좌 저옵로 매월 이자가 청구됩니다.'
            },
            {
              content:
                '기존에 보험계약대출금이 있는 경우에는, 기존 대출금에 대한 처리일 까지의 발생된 이자를 신규 대출금에서 공제한 후 요청하신 계좌로 지급해 드립니다. (모든 대출금에 대한 이자는 처리일 기준입니다.)'
            },
            {
              content:
                '변액보험은 인출(중도인출, 대출) 또는 펀드 변경 접수 + 2영업일 이내 인출 및 펀드변경 접수 불가합니다. \n ex). 01/11 변액대출 신청: 01/11 ~ 01/13 중도 인출 및 펀드 변경, 대출 접수 불가(01/14일 부터 접수 가능)'
            },
            {
              content:
                '당일 인출(변액중도 인출, 변액대출), 펀드 변경 중복접수 불가합니다.'
            },
            {
              content:
                '대출금 지급은 영업일 기준 익일 18시 이내 지급됩니다. 단 토,일, 공휴일 접수는 익 영업일 18시 이내 지급됩니다.'
            },
            {
              content:
                '변액 보험의 경우는 3영업일 이내에 지급됩니다. 단 토, 일, 공휴일 접수는 익영업일 기준 3영업일 이내 지급됩니다.'
            }
          ]
        }
      }
    }
  },
  methods: {
    onStep() {
      this.$emit('onStep')
    },
    onalert(type) {
      this.alert = true
      if (type === 'A') {
        this.modalMessage =
          '신규 계좌가 아닌 기존에 등록되어 있던 계좌를 이용해 주세요. 금융사고 방지를 위해 1개월 이내 휴대폰 번호 변경 이력이 있는 고객님께서는 1개월 이내로 등록된 계좌(신규 계좌)로 지급 신청이 불가능합니다.'
      } else if (type === 'B') {
        this.modalMessage =
          '유효하지 않은 계좌입니다. 은행 또는 계좌번호를 확인해 주세요'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
