<template>
  <div>
    <div class="form_box l-section">
      <div class="title">
        납입방법 선택
      </div>
      <div class="contents">
        <div class="flex_box type2">
          <base-radio v-model="paymentMethodVal" label="신용카드" />
          <base-radio v-model="paymentMethodVal" label="계좌납부" />
          <base-radio v-model="paymentMethodVal" label="가상계좌" />
          <base-radio v-model="paymentMethodVal" label="휴대폰결제" />
          <base-radio v-model="paymentMethodVal" label="카카오페이" />
          <base-radio v-model="paymentMethodVal" label="카카오페이청구서" />
          <base-radio v-model="paymentMethodVal" label="포인트결제" />
        </div>
      </div>
    </div>
    <div class="contents_area">
      <template v-if="paymentMethodVal === '신용카드'">
        <div class="form_box l-section">
          <div class="title">
            카드번호/유효기간
          </div>
          <div class="contents">
            <div class="form_item">
              <div class="form-area_list">
                <base-input v-model="cardNumber.number" />
                <base-input v-model="cardNumber.number2" />
                <base-input v-model="cardNumber.number3" />
                <base-input v-model="cardNumber.number4" />
              </div>
              <div class="form-area_list">
                <base-input v-model="cardNumber2.number" placeholder="yyyy" clearable :append="'년'" />
                <span class="form-item-span">/</span>
                <base-input v-model="cardNumber2.number2" placeholder="mm" clearable :append="'월'" />
              </div>
              <div class="form-area_list">
                <base-buttons type="purple" size="medium" full>
                  카드 확인
                </base-buttons>
              </div>
            </div>
          </div>
        </div>
        <div class="form_box l-section">
          <!-- 납입방법 변경 -->
          <div class="title">
            납입방법 변경
          </div>
          <div class="contents">
            <div class="description_box">
              <p>월보험료 자동납입으로 설정하시면 매월 편리하게 동일한 방법으로 납입하실 수 있습니다. <br><strong class="emphasis">지금 입력한 납입 방법으로 매월 납입</strong>하시겠습니까?</p>
            </div>
            <div class="flex_box type2 gap">
              <base-buttons type="white" size="medium" icon="icon-Check-1">
                예
              </base-buttons>
              <base-buttons type="navy" size="medium" icon="icon-Check-1" plain>
                아니오
              </base-buttons>
            </div>
          </div>
          <div class="title">
            이체일자
          </div>
          <div class="contents">
            <base-radio-buttons v-model="debitDate.value" :list="debitDate.list" type="flex" />
          </div>
        </div>
      </template>

      <template v-else-if="paymentMethodVal === '계좌납부'">
        <div class="form_box l-section">
          <div class="title">
            납입 계좌 선택
          </div>
          <div class="contents">
            <div class="form_item">
              <div class="form-area_list">
                <span v-if="accountList.length === 0" class="account-empty">
                  등록된 계좌가 없습니다.
                </span>
                <template v-else>
                  <base-select-button :select="accountSelect" :value.sync="accountSelectedValue" />
                </template>
              </div>
              <div class="form-area_list">
                <base-buttons type="gray-light" full size="medium" icon="icon-Plus" @click="enterAccountEvent">
                  계좌 신규 등록
                </base-buttons>
              </div>
              <div class="form-area_list">
                <base-buttons type="purple" size="medium" full>
                  예금주 확인
                </base-buttons>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template v-else-if="paymentMethodVal === '가상계좌'">
        <div class="form_box l-section">
          <div class="title">
            은행명/휴대폰번호
          </div>
          <div class="contents">
            <div class="form_item">
              <div class="form-area_list">
                <base-select-button :select="accountSelect" :value.sync="accountSelectedValue" />
              </div>
              <div class="form-area_list">
                <base-input v-model="phoneNumber.number" />
              </div>
              <div class="form-area_list">
                <base-buttons type="purple" size="medium" full>
                  가상계좌 발급
                </base-buttons>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template v-else-if="paymentMethodVal === '휴대폰결제'">
        <div class="form_box l-section">
          <div class="title">
            통신사/휴대폰번호
          </div>
          <div class="contents">
            <div class="form_item">
              <div class="form-area_list">
                <base-select-button :select="agencySelect" :value.sync="agencySelectedValue" />
              </div>
              <div class="form-area_list">
                <base-input v-model="phoneNumber.number" />
              </div>
              <div class="form-area_list">
                <base-buttons type="purple" size="medium" full>
                  가상계좌 발급
                </base-buttons>
              </div>
            </div>
          </div>
        </div>
        <div class="form_box l-section">
          <!-- 2회차부터 보험료 납입방법 -->
          <div class="contents">
            <div class="description_box">
              <base-list type="bullet" :list="guideList">
                <template #customArea="{ scope }">
                  <base-buttons v-if="scope.item.btn" type="gray" size="small">
                    { { scope.item.btn } }
                  </base-buttons>
                </template>
              </base-list>
            </div>
            <div class="title">
              2회부터 보험료 납입방법을 선택하세요.
            </div>
            <div class="flex_box type2 gap">
              <base-radio-buttons v-model="nextPaymentMethod.value" :list="nextPaymentMethod.list" type="flex" />
            </div>
          </div>
          <template v-if="nextPaymentMethod.value === 1">
            <div class="title">
              카드번호/유효기간
            </div>
            <div class="contents">
              <div class="form_item">
                <div class="form-area_list">
                  <base-input v-model="cardNumber.number" />
                  <base-input v-model="cardNumber.number2" />
                  <base-input v-model="cardNumber.number3" />
                  <base-input v-model="cardNumber.number4" />
                </div>
                <div class="form-area_list">
                  <base-input v-model="cardNumber2.number" placeholder="yyyy" clearable :append="'년'" />
                  <span class="form-item-span">/</span>
                  <base-input v-model="cardNumber2.number2" placeholder="mm" clearable :append="'월'" />
                </div>
                <div class="form-area_list">
                  <base-buttons type="purple" size="medium" full>
                    카드 확인
                  </base-buttons>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="title">
              납입 계좌 선택
            </div>
            <div class="contents">
              <div class="form_item">
                <div class="form-area_list">
                  <span v-if="accountList.length === 0" class="account-empty">
                    등록된 계좌가 없습니다.
                  </span>
                  <template v-else>
                    <base-select-button :select="accountSelect" :value.sync="accountSelectedValue" />
                  </template>
                </div>
                <div class="form-area_list">
                  <base-buttons type="gray-light" full size="medium" icon="icon-Plus" @click="enterAccountEvent">
                    계좌 신규 등록
                  </base-buttons>
                </div>
                <div class="form-area_list">
                  <base-buttons type="purple" size="medium" full>
                    예금주 확인
                  </base-buttons>
                </div>
              </div>
            </div>
          </template>
        </div>
      </template>

      <template v-else-if="paymentMethodVal === '카카오페이'">
        <div class="form_box l-section">
          <div class="title">
            휴대폰번호
          </div>
          <div class="contents">
            <div class="form_item">
              <div class="form-area_list">
                <base-input v-model="phoneNumber.number" readonly />
              </div>
            </div>
          </div>
        </div>
      </template>

      <template v-else-if="paymentMethodVal === '카카오페이청구서'">
        <div class="form_box l-section">
          <div class="title">
            휴대폰
          </div>
          <div class="contents">
            <div class="form_item">
              <div class="form-area_list">
                <base-input v-model="phoneNumber.number" clearable readonly />
              </div>
            </div>
          </div>
        </div>
        <div class="form_box l-section">
          <!-- 2회차부터 보험료 납입방법 -->
          <div class="contents">
            <div class="description_box">
              <base-list type="bullet" :list="guideList2">
                <template #customArea="{ scope }">
                  <base-buttons v-if="scope.item.btn" type="gray" size="small">
                    { { scope.item.btn } }
                  </base-buttons>
                </template>
              </base-list>
            </div>
            <div class="title">
              2회부터 보험료 납입방법을 선택하세요.
            </div>
            <div class="flex_box type2 gap">
              <base-radio-buttons v-model="nextPaymentMethod2.value" :list="nextPaymentMethod2.list" type="flex" />
            </div>
          </div>
          <template v-if="nextPaymentMethod2.value === 3">
            <div class="title">
              카드번호/유효기간
            </div>
            <div class="contents">
              <div class="form_item">
                <div class="form-area_list">
                  <base-input v-model="cardNumber.number" />
                  <base-input v-model="cardNumber.number2" />
                  <base-input v-model="cardNumber.number3" />
                  <base-input v-model="cardNumber.number4" />
                </div>
                <div class="form-area_list">
                  <base-input v-model="cardNumber2.number" placeholder="yyyy" clearable :append="'년'" />
                  <span class="form-item-span">/</span>
                  <base-input v-model="cardNumber2.number2" placeholder="mm" clearable :append="'월'" />
                </div>
                <div class="form-area_list">
                  <base-buttons type="purple" size="medium" full>
                    카드 확인
                  </base-buttons>
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="nextPaymentMethod2.value === 4">
            <div class="title">
              납입 계좌 선택
            </div>
            <div class="contents">
              <div class="form_item">
                <div class="form-area_list">
                  <span v-if="accountList.length === 0" class="account-empty">
                    등록된 계좌가 없습니다.
                  </span>
                  <template v-else>
                    <base-select-button :select="accountSelect" :value.sync="accountSelectedValue" />
                  </template>
                </div>
                <div class="form-area_list">
                  <base-buttons type="gray-light" full size="medium" icon="icon-Plus" @click="enterAccountEvent">
                    계좌 신규 등록
                  </base-buttons>
                </div>
                <div class="form-area_list">
                  <base-buttons type="purple" size="medium" full>
                    예금주 확인
                  </base-buttons>
                </div>
              </div>
            </div>
          </template>
        </div>
      </template>

      <template v-else>
        <div class="form_box l-section">
          <div class="title">
            사용 포인트 <span class="emphasis">(보유{{ totalPoint.number }}P)</span>
          </div>
          <div class="contents">
            <div class="form_item">
              <div class="form-area_list">
                <base-input v-model="point.number" clearable :append="'P'" />
              </div>
            </div>
            <div class="form_item type2">
              <div class="description_box">
                <base-list cutom-list-content>
                  <template #cutomList>
                    <li class="list list-bullet">
                      <span class="item-text txt-undefined">포인트 결제시 보험시 <strong class="emphasis">전액결제</strong>만 가능합니다.</span>
                    </li>
                    <li class="list list-bullet">
                      <span class="item-text txt-undefined">포인트로 납입된 보험료는 <strong class="emphasis">소멸되며 포인트로 환급되지 않습니다.</strong></span>
                    </li>
                  </template>
                </base-list>
              </div>
            </div>
          </div>
        </div>
      </template>

      <enterAccountNumber :account-full.sync="accountFull" @onChange="onChange" />
    </div>
  </div>
</template>

<script>
import enterAccountNumber from '@/components/EnterAccountNumber'
export default {
  components: {
    enterAccountNumber
  },
  data() {
    return {
      paymentMethodVal: '신용카드',
      cardNumber: {
        number: ''
      },
      cardNumber2: {
        number: ''
      },
      phoneNumber: {
        number: '010-0000-0000'
      },
      debitDate: {
        value: 1,
        list: [
          {
            label: '10일',
            value: 1
          },
          {
            label: '15일',
            value: 2
          },
          {
            label: '25일',
            value: 3
          },
          {
            label: '말일',
            value: 4
          }
        ]
      },
      accountList: [
        {
          value: 1,
          label: '국민은행 5278******3178'
        }
      ],
      accountSelectedValue: 1,
      accountSelect: {
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
      agencySelectedValue: 1,
      agencySelect: {
        title: '통신사선택',
        list: [
          {
            value: 1,
            label: 'SKT'
          },
          {
            value: 2,
            label: 'KT'
          },
          {
            value: 3,
            label: 'LG U+'
          },
          {
            value: 4,
            label: 'SKT 알뜰폰'
          },
          {
            value: 5,
            label: 'KT 알뜰폰'
          },
          {
            value: 6,
            label: 'LG U+ 알뜰폰'
          }
        ]
      },
      guideList: [
        {
          content: '휴대폰결제는 첫 보험료 납부(1회)만 가능하며, 계약자 본인명의 휴대폰으로만 납부 가능합니다.'
        },
        {
          content: '2회 이후 보험료는 아래 입력하신 결제수단으로 납부됩니다.'
        }
      ],
      nextPaymentMethod: {
        value: 1,
        list: [
          {
            label: '신용카드',
            value: 1
          },
          {
            label: '계좌납부',
            value: 2
          }
        ]
      },
      guideList2: [
        {
          content: '카카오페이는 첫 보험료 납부(1회)만 가능하며, 계약자와 카카오페이 명의자가 동일해야 합니다.'
        },
        {
          content: '2회 이후 보험료는 아래 입력하신 결제수단으로 납부됩니다.'
        }
      ],
      nextPaymentMethod2: {
        value: 3,
        list: [
          {
            label: '신용카드',
            value: 3
          },
          {
            label: '계좌납부',
            value: 4
          }
        ]
      },
      totalPoint: {
        number: '20,000'
      },
      point: {
        number: ''
      },
      accountFull: false
    }
  },
  methods: {
    enterAccountEvent() {
      this.accountFull = true
    },
    enterAccountChange(data) {
      console.log(data)
    }
  }
}
</script>
<style lang="scss" scope>
  .contents_area{
    margin-top:4rem;
  }
  .form_box{
    padding: 0 2rem;
    &+.form_box{
      padding-top: 0;
      margin-top: 2.8rem;
      border: none;
    }
    .title{
      margin-bottom:1.2rem;
      font-size:1.6rem;
      color:$--color-darkgray;
      .emphasis{
        color:$--color-tertiary;
      }
    }
    .contents{
      &+.title{
        margin-top: 2.8rem;
      }
     .form_item{
       &+.form_item{
         margin-top:2.8rem;
       }

       .form-area_list{
         margin-top: 0.8rem;
         &:first-child{
           margin-top: 0;
         }
       }
     }
    }
    .form-area_list{
      .select{
        flex-grow:1;
      }
      .el-button.is-plain{
        height: 50px;
      }
    }
  }
  .flex_box{
    display:flex;
    flex-wrap:wrap;
    flex-grow: 1;
     &.gap{
      gap:0.8rem;
    }
    &.type2 >*{
      flex:1 1 40%;
    }
    &.type3 >*{
      flex:1 1 30%;
    }
    .el-radio{
      margin-right:0;
      margin-top:2.4rem;
      &:first-child,&:nth-child(2){
        margin-top: 0;
      }
    }
  }
  .form-item-span{
    line-height: 5rem;
  }
  .description_box{
    padding:1.6rem;
    margin-bottom: 0.8rem;
    font-size: $--font-size-x-medium;
    background-color:$--color-palegray;
    .emphasis{
      font-weight:$--font-weight-default;
      color:$--color-primary;
    }
  }
</style>
