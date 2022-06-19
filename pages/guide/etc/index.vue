<template>
  <div>
    <p class="guide-title">
      <span>지급 및 납부 계좌 선택</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <div class="l-account">
          <P class="account-title"> 지급 및 납부 계좌 선택 </P>
          <div class="account-box">
            <span v-if="accountList.length === 0" class="account-empty">
              등록된 계좌가 없습니다.
            </span>
            <template v-else>
              <base-select-button
                :select="select"
                :value.sync="selectedValue"
              />
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
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;div class="l-account"&gt;
                &lt;P class="account-title"&gt; 지급 및 납부 계좌 선택 &lt;/P&gt;
                &lt;div class="account-box"&gt;
                  &lt;span v-if="accountList.length === 0" class="account-empty"&gt;
                    등록된 계좌가 없습니다.
                  &lt;/span&gt;
                  &lt;template v-else&gt;
                    &lt;base-select-button :select="select" :value.sync="selectedValue" /&gt;
                  &lt;/template&gt;
                  &lt;base-buttons
                    type="gray-light"
                    full
                    size="medium"
                    icon="icon-Plus"
                    @click="onalert('A')"
                  &gt;
                    계좌 신규 등록
                  &lt;/base-buttons&gt;
                &lt;/div&gt;
                &lt;P class="account-title"&gt; 이자 납부일 &lt;/P&gt;
                &lt;base-radio-buttons
                  v-model="interestPayment"
                  :list="interestPaymentList"
                  type="flex"
                /&gt;
              &lt;/div&gt;
            </code>
          </pre>
        </highlight-code>
        <highlight-code lang="javascript">
          <code>
            <pre>
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
              }
             </pre
            >
          </code>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>알려드립니다. -> 강조색상이 들어간 경우</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-messagebox
          :box="box.accordion"
          :accdian="true"
          :accdian-icon="box.icon"
        >
          <div class="list-wrap">
            <base-list cutom-list-content>
              <template #cutomList>
                <li class="list list-bullet">
                  <span
                    ><em class="txt-blue">신청내역에 따라 추가 서류가 필요</em
                    >하기도 합니다.</span
                  >
                </li>
                <li class="list list-bullet">
                  <span
                    >보험료 납입 방법이 자동이체가 아닌 경우에는 대출금 지급되는
                    계좌로 이자 납입계좌가 등록됩니다. 단, 보험료 납입 계좌의
                    예금주가 계약자와 다른 경우는 이자 납입에 대한 납부자의
                    동의가 필요하므로, 우편, 방문, 전화접수를 이용하여 주시기
                    바랍니다.</span
                  >
                </li>
                <li class="list list-bullet">
                  <span
                    >보험계약대출 이율 변경 내역 및 일자는 상품공시실 메뉴에서
                    확인하실 수 있습니다.</span
                  >
                </li>
                <li class="list">
                  <base-buttons type="text" size="small">
                    상품공시실 바로가기
                  </base-buttons>
                </li>
              </template>
            </base-list>
          </div>
        </base-messagebox>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
            &lt;base-messagebox
              :box="box.accordion"
              :accdian="true"
              :accdian-icon="box.icon"
            &gt;
              &lt;div class="list-wrap"&gt;
                &lt;base-list cutom-list-content&gt;
                  &lt;template #cutomList&gt;
                    &lt;li class="list list-bullet"&gt;&lt;span&gt;&lt;em class="txt-blue"&gt;신청내역에 따라 추가 서류가 필요&lt;/em&gt;하기도 합니다.&lt;/span&gt;&lt;/li&gt;
                    &lt;li class="list list-bullet"&gt;&lt;span&gt;보험료 납입 방법이 자동이체가 아닌 경우에는 대출금 지급되는 계좌로 이자 납입계좌가 등록됩니다. 단, 보험료 납입 계좌의 예금주가 계약자와 다른 경우는 이자 납입에 대한 납부자의 동의가 필요하므로, 우편, 방문, 전화접수를 이용하여 주시기 바랍니다.&lt;/span&gt;&lt;/li&gt;
                    &lt;li class="list list-bullet"&gt;&lt;span&gt;보험계약대출 이율 변경 내역 및 일자는 상품공시실 메뉴에서 확인하실 수 있습니다.&lt;/span&gt;&lt;/li&gt;
                    &lt;li class="list"&gt;&lt;base-buttons type="text" size="small"&gt;상품공시실 바로가기&lt;/base-buttons&gt;&lt;/li&gt;
                  &lt;/template&gt;
                &lt;/base-list&gt;
              &lt;/div&gt;
            &lt;/base-messagebox&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'guideLayout',
  data() {
    return {
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
          custom: true,
          title: '알려드립니다'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.guide {
  padding: 20px;
  &-title {
    padding: 10px 0;
    font: {
      size: 18px;
      weight: bold;
    }
    border-bottom: 1px solid #ddd;
    span {
      &::before {
        margin-right: 5px;
        border-left: 3px solid #000;
        content: '';
      }
    }
  }
  &-content {
    padding: 10px;
  }
  &-list {
    padding: 10px 0;
  }
  &-code {
    margin: 10px 0;
    position: relative;
    background: #dde8f1;
    font-size: 13px;
    white-space: pre;
  }
}
</style>
