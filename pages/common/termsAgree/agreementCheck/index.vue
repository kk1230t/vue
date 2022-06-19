<template>
  <div class="l-content">
    <section class="l-section gap_top">
      <base-buttons type="primary" @click="dialog.full = true">
        약관 동의
      </base-buttons>
      <base-modal
        custom-class="modal"
        title="동의 및 확인사항"
        :visible.sync="dialog.full"
        type="full"
        top="0"
        width="100%"
      >
        <template #content>
          <section class="l-section gap_top">
            <terms-typo type="title">
              계약 대출 체결시 금리결정(변동)요인
            </terms-typo>

            <base-messagebox :box="terms1">
              <terms-typo type="desc">
                보험료의 일부를 장래보험금 지급의 재원으로 적립하는 책임준비금은
                예정이율 이상으로 부리되어야만 위험자본(RBC)적립 등 장래의
                보험금지급재원을 안정적으로 유지할 수 있으며 보험회사의
                자산건정성을 유지할 수 있습니다. 보험계약대출은 이러한
                책임준비금을 재원으로 시행하게 됩니다. 이에 따라,
                보험계약대출이율 가산금리는 회사의 운용자산이익률과
                금융시장여건, 대출금관리비용, 시중의 대출이율수준 등을 고려하여
                결정하게 됩니다.
              </terms-typo>
            </base-messagebox>

            <base-messagebox :box="terms2">
              <terms-typo type="desc"> 변동주기 : 분기 </terms-typo>
              <terms-typo type="desc">
                변동사유 : 금리연동형 상품(종신보험 플랜)의 경우 기초서류 상
                가산금리가 명시되어 있으므로 가산금리 자체의 변경은 없습니다.
                단, 종신보험의 공시이율은 분기마다 시장수익률을 반영하여
                분기마다 재 산출 / 적용되므로 대출이율도 연동하여 변동됩니다.
              </terms-typo>
            </base-messagebox>

            <base-buttons
              type="gray-light"
              size="medium"
              icon="icon-Check"
              plain
              full
            >
              동의함
            </base-buttons>
          </section>
          <section class="l-section">
            <terms-typo type="title"> 보험계약대출 약정서 </terms-typo>

            <base-messagebox :box="terms3">
              <terms-typo type="desc">
                본인은 라이나생명보험주식회사(이하 ‘회사’ 라 한다)로부터
                보험계약대출을 받음에 있어 다음과 같이 약정합니다.
              </terms-typo>
            </base-messagebox>

            <base-messagebox :box="terms4">
              <base-card-list
                :card-list="cardList"
                empty-txt="가입한 보험이 없습니다."
                type="ready-only"
              >
                <template #topConent="{ scope }">
                  <base-tag
                    v-for="(tagItem, tagIdx) in scope.item.tag"
                    :key="tagIdx"
                    :tag-title="tagItem.title"
                    :type="tagItem.type"
                  />
                </template>
                <template #contents="{ scope }">
                  <dl class="list-info">
                    <dt class="title">계약자</dt>
                    <dd class="data">
                      {{ scope.item.contractor }}
                    </dd>
                  </dl>
                  <dl class="list-info">
                    <dt class="title">만기수익자</dt>
                    <dd class="data">
                      {{ scope.item.maturity }}
                    </dd>
                  </dl>
                  <dl class="list-info">
                    <dt class="title">대출신청금액</dt>
                    <dd class="data txt-blue">{{ scope.item.amount }}원</dd>
                  </dl>
                  <dl class="list-info">
                    <dt class="title">대출한도</dt>
                    <dd class="data">{{ scope.item.limit }}원</dd>
                  </dl>
                  <dl class="list-info">
                    <dt class="title">금리구분</dt>
                    <dd class="data">
                      {{ scope.item.Interest }}
                    </dd>
                  </dl>
                  <dl class="list-info">
                    <dt class="title">해지환급금 부리이율</dt>
                    <dd class="data">{{ scope.item.revocation }}%</dd>
                  </dl>
                  <dl class="list-info">
                    <dt class="title">가산금리</dt>
                    <dd class="data">{{ scope.item.additional }}%</dd>
                  </dl>
                  <dl class="list-info">
                    <dt class="title">적용금리</dt>
                    <dd class="data">{{ scope.item.applied }}%</dd>
                  </dl>
                </template>
              </base-card-list>
            </base-messagebox>

            <base-messagebox :box="terms5">
              <terms-typo type="bullet">
                대출기간 : 보험계약대출 대상 계약의 보험기간 (연금보험은 연금
                개시 전 / 2005년 4월 1일 이후 계약은 효력상실임)
              </terms-typo>
              <terms-typo type="bullet">
                대출한도 : 보험계약대출 대상 계약의 해지환급금 또는 해지환급금과
                만기 시 지급되는 환급금 중 적은 금액 기준 이내(추후 변동가능)
              </terms-typo>
              <terms-typo type="bullet">
                [금리연동형] 산정기준 : 공시이율 + 1.5% (대출신청일기준,
                매월변동)
              </terms-typo>
              <terms-typo type="bullet">
                [확정금리형] 산정기준 : 공시이율 + 1.5%
              </terms-typo>
              <terms-typo type="bullet">
                상기 이자율은 신청일 기준이며, 대출 기간 중 이율 변동 시 변동된
                이율이 적용 됩니다.
              </terms-typo>
              <terms-typo type="bullet">
                대출원리금 상환 : 대출기간 내 언제든지 상환 가능
              </terms-typo>
              <terms-typo type="bullet">
                즉시변제 및 상계·차감처리, 주소변경 통지 의무 등은 약정서 제
                2조부터 제 8조의 내용을 반드시 확인하시기 바랍니다.
              </terms-typo>
            </base-messagebox>

            <base-messagebox :box="terms6">
              <terms-typo type="desc">
                (1) "보험계약대출"이라 함은 보험계약의 해지환급금 또는
                해지환급금과 만기 시 지급되는 환급금 중 적은 금액 범위 내에서
                회사가 정한 방법으로 금전을 차용하는 것을 말한다.
              </terms-typo>
              <terms-typo type="desc">
                (2) "보험계약대출대상계약"이라 함은 보험계약대출의 기초가 되는
                보험계약을 말한다.
              </terms-typo>
            </base-messagebox>

            <base-messagebox :box="terms7">
              <terms-typo type="desc">
                보험계약대출의 대출기간은 보험계약대출대상계약의
                보험기간(연금보험은 연금개시 전/2005.4.1 이후 계약은
                효력상실일까지로 한다) 내로 하되, 본인은 언제라도
                보험계약대출금을 상환할 수 있다.
              </terms-typo>
            </base-messagebox>

            <base-messagebox :box="terms8">
              <terms-typo type="desc">
                (1) 보험계약대출의 이자율 등은 회사가 정하는 바에 따르며,
                이자율이 변경되는 경우 변경일 이후의 기간에 변경된 이자율을
                적용한다.
              </terms-typo>
              <terms-typo type="desc">
                (2) 보험계약대출이자는 은행자동이체 납부를 원칙으로 하되
                즉시출금, 가상계좌를 이용할 수 있고, 일단위로 계산하여 매월
                대출이자 납입응당일(이하 "이자납부일"이라 한다)에 납부하는 것을
                원칙으로 한다. (단, 납입응당일이 공휴일인 경우 그 익영업일로
                한다)
              </terms-typo>
              <terms-typo type="desc">
                (3) 보험계약대출 관련 인지세 및 기타비용은 차주인 계약자가 50%,
                회사가 50% 균등 부담한다.
              </terms-typo>
            </base-messagebox>

            <base-messagebox :box="terms9">
              <terms-typo type="desc">
                (1) 다음의 각호에서 정한 사유가 발생한 경우에는 즉시
                보험계약대출 원금과 이자를 변제하기로한다. 단, 회사에서 연장을
                승인한 경우에는 기한의 이익을 상실하지 않는다.
              </terms-typo>
              <terms-typo type="desc">
                ①보험계약대출대상계약의 보험기간이 만료되거나 대상계약이 무효로
                된 때
              </terms-typo>
              <terms-typo type="desc">
                ② 2002. 8. 1전에 체결된 보험계약을 기초로 한 보험계약대출의 경우
                보험계약대출원리금 합계액이 해지환급금을 초과한 때
              </terms-typo>
              <terms-typo type="desc">
                ③ 2002. 8. 1부터 2005. 3. 31까지 체결된 보험계약을 기초로 한
                보험계약대출의 경우 대상 보험계약이 보험료 미납을 이유로
                해지되고 보험계약대출원리금 합계액이 해지환급금을 초과한 때
              </terms-typo>
              <terms-typo type="desc">
                ④ 2005.4.1 후에 체결된 보험계약을 기초로 한 보험계약대출의 경우
                보험료미납을 이유로 대상 보험계약이 해지되는 때
              </terms-typo>
              <terms-typo type="desc">
                (2) 제 1항 2호, 3호의 경우에 회사는 해당 보험계약을 해지( 해지
                )하여 해지환급금과 보험계약대출원리금을 상계( 해 지 환 급 금 과
                보 험 계 약 대 출 원 리 금 을 상 계 )할 수 있다.
              </terms-typo>
              <terms-typo type="desc">
                (3) 보험계약대출 처리 후 계약사항 변경이나 해지환급금이 변동되어
                보험계약대출원리금 합계액이 그 해지환급금을 초과( 보 험 계 약 대
                출 원 리 금 합 계 액 이 해 지 환 급 금 을 초 과 )하게 되는 경우,
                본인은 초과분을 즉시 상환( 초 과 분 을 즉 시 상 환 )하여야 한다.
              </terms-typo>
            </base-messagebox>

            <base-messagebox :box="terms10">
              <terms-typo type="desc">
                보험계약대출계약에서 정한 제지급금 지급사유가 발생한 때에는
                회사는 대출기간의 만료여부와 상관없이 해당 보험계약의 약관에서
                정한 바에 따라 제지급금에서 보험계약대출원리금을 공제하고 나머지
                잔액을 본인이나 보험금을 받는 자(보험수익자)등에 지급한다.
              </terms-typo>
            </base-messagebox>

            <base-messagebox :box="terms11">
              <terms-typo type="desc">
                (1) 계약자(보험수익자가 계약자와 다른 경우 보험수익자를
                포함한다)는 주소 또는 연락처가 변경된 경우에는 지체 없이 그
                변경내용을 회사에 알려야 한다.
              </terms-typo>
              <terms-typo type="desc">
                (2) 제1항에서 정한 대로 계약자 또는 보험수익자가 변경 내용을
                알리지 않은 경우에는 계약자 또는 보험수익자가 회사에 알린 최종의
                주소 또는 연락처로 등기우편 등 우편물에 대한 기록이 남는
                방법으로 알린 사항은 일반적으로 도달이 필요한 시일이 지난 때에
                계약자 또는 보험수익자에게 도달한 것으로 본다. 단, 계약자에게
                중대한 영향을 미치는 중요한 의사표시인 경우에는
                배달증명부내용증명에 의한 경우에 한하여 도달한 것으로 본다.
              </terms-typo>
            </base-messagebox>
            <base-messagebox :box="terms12">
              <terms-typo type="desc">
                (1) 변액보험계약대출은 유지중에만 가능하며, 대출기간은
                효력상실일까지로 한다.
              </terms-typo>
              <terms-typo type="desc">
                (2) 변액보험계약대출은 지급일 기준 계약 별 월 1회, 연 12회
                가능하다.
              </terms-typo>
              <terms-typo type="desc">
                (3) 변액보험계약대출 기준가는 아래와 같이 적용 한다.
              </terms-typo>
              <terms-typo type="bullet">
                지급 : 접수일 +제2영업일의 기준가가 적용되어 특별계정에서
                일반계정으로 이체
              </terms-typo>
              <terms-typo type="bullet">
                상환(이자납입) : - 계약일자 2004.9.17 ~ 2005.5.31 : 상환일(D)
                기준가 - 계약일자 2005.6.1 ~ 2009.3.31, 특정상품이면서 계약일자
                2009.4.1 ~ 2010.3.31 : 상환일 + 1일(D+1) 기준가 - 2009.4.1 ~
                현재 : 상환일 + 제2영업일(D+2) 기준가
              </terms-typo>
              <base-buttons
                type="gray-light"
                size="medium"
                icon="icon-Check"
                plain
                full
              >
                동의함
              </base-buttons>
            </base-messagebox>
          </section>
          <section class="l-section">
            <base-messagebox :box="terms13">
              <div class="image-box">
                <img
                  src="@/assets/images/sample/sample-image02.png"
                  alt="보험계약대출 상품설명서"
                />
              </div>
              <base-buttons
                type="gray-light"
                size="medium"
                icon="icon-Check"
                plain
                full
              >
                동의함
              </base-buttons>
            </base-messagebox>
          </section>
          <section class="l-section">
            <base-messagebox :box="terms14">
              <terms-typo type="desc">
                보험계약대출 약정서의 [제4조 기한이익의 상실]에 의거, 대출원금
                및 이자 합계액이 해약환급금을 초과할 경우, 자동해약 될 수 있음을
                확인하셨습니까?
              </terms-typo>
              <base-buttons
                type="gray-light"
                size="medium"
                icon="icon-Check"
                plain
                full
              >
                동의함
              </base-buttons>
            </base-messagebox>
          </section>
        </template>
        <template #footer>
          <bottom-buttons :buttons="buttons" />
        </template>
      </base-modal>
    </section>
  </div>
</template>

<script>
import TermsTypo from '~/components/TermsTypo'
import BottomButtons from '~/components/BottomButtons'
export default {
  components: {
    BottomButtons,
    TermsTypo
  },
  data() {
    return {
      dialog: {
        full: true
      },
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
      },
      cardList: [
        {
          edit: 'disabled',
          subTitle: '30228488100001',
          title: '무) 메디컬플랜변액유니버셜보험_적립형',
          contractor: '라인하',
          maturity: '라인숙',
          amount: 10000000,
          limit: 10000000,
          Interest: '금리확정형',
          revocation: 2.0,
          additional: 0.2,
          applied: 2.0
        },
        {
          edit: 'disabled',
          subTitle: '30228488100001',
          title: '무) 메디컬플랜변액유니버셜보험_적립형',
          contractor: '라인하',
          maturity: '라인숙',
          amount: 10000000,
          limit: 10000000,
          Interest: '금리확정형',
          revocation: 2.0,
          additional: 0.2,
          applied: 2.0
        }
      ],
      terms1: {
        title: '대출이율의 주요한 결정요인',
        titleSize: '18',
        custom: true
      },
      terms2: {
        title: '변동금리 대출상품의 금리변동주기, 금리변동사유',
        titleSize: '18',
        custom: true
      },
      terms3: {
        title: '',
        titleSize: '18',
        custom: true
      },
      terms4: {
        title: '제 1조 (거래조건)',
        titleSize: '18',
        custom: true
      },
      terms5: {
        title: '',
        titleSize: '18',
        custom: true
      },
      terms6: {
        title: '제 2조 정의',
        titleSize: '18',
        custom: true
      },
      terms7: {
        title: '제 3조 대출기간 및 원리금상환',
        titleSize: '18',
        custom: true
      },
      terms8: {
        title: '제 4조 대출이자납입 및 인지세',
        titleSize: '18',
        custom: true
      },
      terms9: {
        title: '5조 즉시변제',
        titleSize: '18',
        custom: true
      },
      terms10: {
        title: '제 6조 우선변제',
        titleSize: '18',
        custom: true
      },
      terms11: {
        title: '제 7조 주소변경의 통지',
        titleSize: '18',
        custom: true
      },
      terms12: {
        title: '제 8조 변액보험계약대출',
        titleSize: '18',
        custom: true
      },
      terms13: {
        title: '보험계약대출 상품설명서',
        titleSize: '20',
        custom: true
      },
      terms14: {
        title: '자동해약 관련 안내',
        titleSize: '20',
        custom: true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.l-messagebox {
  & + & {
    margin-top: 24px;
  }
}
.image-box {
  img {
    width: 100%;
  }
}
.card-type-list-wrap {
  margin-top: 12px;
}
</style>
