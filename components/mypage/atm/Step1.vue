<template>
  <div>
    <section class="l-section">
      <base-box type="gray" :list="boxList" />
      <template v-if="cardList.length > 0">
        <base-radio-buttons
          v-model="radio.value"
          :list="radio.list"
          type="flex"
          @change="radioChange"
        />
        <div class="l-amount">
          <base-input
            v-model="amount"
            type="number"
            placeholder="금액입력"
            has-clear
            append-txt="원"
          />
          <p class="info">
            대출이율이 낮은 보험계약 순으로 금액이 입력됩니다.
          </p>
        </div>
      </template>
      <base-titles title="신청 가능한 계약 건수" count fsize="18">
        <template #rightContent>
          <span class="count">총 {{ cardList.length }}건</span>
        </template>
      </base-titles>
      <base-card-list :card-list="cardList" empty-txt="가입한 보험이 없습니다.">
        <template #topConent="{ scope }">
          <base-tag
            v-for="(tagItem, tagIdx) in scope.item.tag"
            :key="tagIdx"
            :tag-title="tagItem.title"
            :type="tagItem.type"
          />
        </template>
        <template #customArea="{ scope }">
          <base-checkbox
            v-model="scope.item.check"
            :disabled="scope.item.disabled"
          />
        </template>
        <template #contents="{ scope }">
          <dl class="list-info">
            <dt class="title">
              대출이율
              <base-tooltip
                title="대출이율"
                mode="skygray"
                util-button
                @confirm="onAlert('C')"
              >
                <template #content>
                  <p>기준금리 2.5% + 가산금리 0.5% = <br>대출이율 3.0%</p>
                </template>
              </base-tooltip>
            </dt>
            <dd class="data">
              {{ scope.item.percentPrice }}%
            </dd>
          </dl>
          <dl class="list-info">
            <dt class="title">
              대출이자
            </dt>
            <dd class="data">
              {{ scope.item.interestPrice }}원
            </dd>
          </dl>
          <dl class="list-info">
            <dt class="title">
              기 대출금 잔액
            </dt>
            <dd class="data">
              {{ scope.item.balancePrice }}원
            </dd>
          </dl>
          <dl class="list-info">
            <dt class="title">
              신청가능 금액
            </dt>
            <dd class="data txt-blue">
              {{ scope.item.possiblePrice }}원
            </dd>
          </dl>
          <template v-if="scope.item.check">
            <div
              class="list-info"
              :class="scope.item.price >= 300000 ? 'is-error' : ''"
            >
              <base-input
                v-model="scope.item.price"
                has-clear
                append-txt="원"
                type="number"
                :disabled="scope.item.edit"
              />
            </div>
            <dl class="list-info">
              <dt class="title">
                실 지급 금액
              </dt>
              <dd class="data txt-blue-bold">
                {{ scope.item.realApplePrice }}원
              </dd>
            </dl>
            <div v-if="scope.item.price >= 300000" class="list-info">
              <span class="data txt-red"
                >계약별 1일 1회 30만원까지 신청 가능</span
              >
            </div>
          </template>
        </template>
      </base-card-list>
    </section>
    <section class="l-section">
      <base-messagebox
        :box="box.accordion"
        :accdian="true"
        :accdian-icon="box.icon"
        :list-content="box.content"
      />
    </section>
    <template v-if="cardList.length > 0">
      <floating-box :has-button="true" :sum-box="['0건선택', '총 신청금액']" />
      <div class="l-bottom">
        <base-buttons
          type="black"
          size="medium"
          full
          :disabled="btnDisabled"
          @click="onAlert('B')"
        >
          확인
        </base-buttons>
      </div>
    </template>
    <template v-else>
      <floating-box :show-top="true" />
    </template>
    <base-modal
      :show-close="false"
      :visible.sync="alert"
      type="system"
      width="280px"
    >
      <template #content>
        <p class="message">
          {{ alertMessage }}
        </p>
      </template>
      <template #footer>
        <base-buttons
          v-if="type !== 'B'"
          type="gray"
          size="large"
          @click="alert = false"
        >
          확인
        </base-buttons>
        <base-buttons v-else type="gray" size="large" @click="agreement = true">
          확인
        </base-buttons>
      </template>
    </base-modal>
    <base-drawer
      :visible.sync="agreement"
      title="약관동의"
      positive-button="모두 동의"
      size="auto"
      @onPositive="onStep"
    >
      <template #content>
        <p class="tit">
          보험계약대출 신청을 위해<br>아래의 내용을 읽고 동의 해주세요.
        </p>
        <check-list
          :list="agreeList"
          @linkBtn="agreeModal = true"
          @onChange="onChange()"
        />
      </template>
    </base-drawer>
    <base-modal
      custom-class="modal"
      title="약관 동의"
      :visible.sync="agreeModal"
      type="full"
      top="0"
      width="100%"
    >
      <template #content>
        <section class="l-section">
          <terms-typo type="title">
            보험계약대출의 체결·이행 등을 위한 상세 동의서
          </terms-typo>
          <terms-typo type="desc">
            귀하는 개인(신용)정보의 수집·이용 및 조회, 제공에 관한 동의를
            거부하실 수 있으며, 개인이 신용도 등을 평가하기 위한 목적 이외의
            개인(신용)정보 제공 동의는 철회할 수 있습니다. 다만, 본 동의는
            ‘보험계약 대출 체결·이행’등을 위해 필수적인 사항이므로 동의를
            거부하시는 경우 관련 업무수행이 불가능합니다.
          </terms-typo>
          <terms-typo type="desc">
            보험계약대출이 체결 될 경우 귀하의 신용등급이에 영향이 있을 수
            있습니다.
          </terms-typo>
          <terms-typo type="desc">
            본 동의서는 보험 계약대출의 체결·이행과 관련하여 귀하의
            개인신용정보를 수집·이용 및 제3자에게 제공하기 위해 작성하는
            동의서입니다.
          </terms-typo>
          <terms-typo type="desc">
            본 동의 후 동일한 보험계약과 관련된 보험계약 대출의
            이용·유지·관리·범위 내에서는 귀하의 개인신용정보의 수집·이용 조회
            제3자 제공을 위하여 귀하에게 별도의 추가 동의를 요구하지 않고자
            합니다. 이에 동의하십니까?
          </terms-typo>
          <base-buttons
            type="gray-light"
            size="medium"
            icon="icon-Check"
            plain
            full
          >
            동의함 체크박스로 변경해야함
          </base-buttons>
        </section>
        <section class="l-section">
          <terms-typo type="title">
            고유식별정보 수집·이용에 관한 사항
          </terms-typo>
          <terms-typo type="lineTitle">
            수집·이용에 관한 사항
          </terms-typo>

          <terms-typo type="subtitle">
            수집·이용목적
          </terms-typo>
          <terms-typo type="desc">
            보험계약대출의 체결·유지·관리
          </terms-typo>
          <terms-typo type="desc">
            금융거래 업무(금융거재 신청, 대출금 지급·이체, 자동이체 등)
          </terms-typo>
          <terms-typo type="desc">
            보험계약대출의 체결유지관리 및 보험금 청구 등으로 고객이 제공한
            개인(신용)정보의 최신성 유지
          </terms-typo>
          <terms-typo type="subtitle">
            보유·이용기간
          </terms-typo>
          <terms-typo type="boldText">
            동의일로부터 본 보험계약대출 관련 거래 종료 후 5년까지 (단, 다른
            관련 법령에 해당하는 경우 해당 법령상의 보존기간을 따름)
          </terms-typo>
          <terms-typo type="bullet">
            bullet style todo
          </terms-typo>
          <terms-typo type="lineTitle">
            수집·이용 항목
          </terms-typo>
          <terms-typo type="subtitle">
            고유식별정보
          </terms-typo>
          <terms-typo type="boldText">
            주민등록번호, 외국인등록번호, 여권번호, 운전면허번호
          </terms-typo>
          <base-buttons
            type="gray-light"
            size="medium"
            icon="icon-Check"
            plain
            full
          >
            동의함 체크박스로 변경해야함
          </base-buttons>
        </section>
        <section class="l-section">
          <terms-typo type="title">
            개인신용정보 제공에 관한 사항
          </terms-typo>
          <terms-typo type="lineTitle">
            수집·이용에 관한 사항
          </terms-typo>
          <terms-typo type="subtitle">
            개인(신용)정보
          </terms-typo>
          <terms-typo type="desc">
            일반개인정보 : 성명, 주소, 생년월일, 이메일, 유·무선 전화번호, 성별,
            국적, 직업, 국내거소신고번호, 법률 및 국제협약 등의 의무이행을 위한
            정보
          </terms-typo>
          <terms-typo type="desc">
            신용거래정보 : 금융거래 업무 관련 정보(보험계약대출의 실행 및 상환
            등 출수납), 보험계약 대출관련 정보 (대출실행일, 대출금리, 상환일자,
            관리번호, 거래설정, 내역정보 등), 당사 및 신용정보집중기관,
            신용정보회사, 금융결제원 등에서 수집·관리하는 상기 개인(신용)정보
          </terms-typo>
          <terms-typo type="desc">
            신용거래정보 : 금융거래 업무 관련 정보(보험계약대출의 실행 및 상환
            등 출수납), 보험계약 대출관련 정보 (대출실행이르 대출금, 대출금이,
            상환일자, 관리번호, 거래설정, 내역정보 등), 당사 및
            신용정보집중기관, 신용정보회사, 금융결제원 등에서 수집·관리하는 상기
            개인(신용)정보
          </terms-typo>
          <terms-typo type="bullet">
            bullet style todo
          </terms-typo>
          <base-buttons
            type="gray-light"
            size="medium"
            icon="icon-Check"
            plain
            full
          >
            동의함 체크박스로 변경해야함
          </base-buttons>
        </section>
      </template>
      <template #footer>
        <bottom-buttons
          :buttons="buttons"
          @hasdlePositive="agreeModal = false"
        />
      </template>
    </base-modal>
  </div>
</template>

<script>
import CheckList from '@/components/CheckList'
import TermsTypo from '~/components/TermsTypo'
import BottomButtons from '~/components/BottomButtons'
const FloatingBox = () => import('@/components/FloatingBox')
export default {
  components: { FloatingBox, CheckList, TermsTypo, BottomButtons },
  data() {
    return {
      alert: false,
      agreement: false,
      agreeModal: false,
      alertMessage: '',
      type: '',
      amount: '',
      btnDisabled: true,
      radio: {
        value: 1,
        list: [
          {
            label: '통합 신청',
            value: 1
          },
          {
            label: '계약별 신청',
            value: 2
          }
        ]
      },
      boxList: [
        {
          title: '총 대출가능 금액',
          amount: 0
        }
      ],
      cardList: [
        {
          check: false,
          edit: 'disabled',
          subTitle: '30228488100001',
          title: '(무)THE건강한치아보험V(갱신형)',
          percentPrice: 3.0,
          interestPrice: 30000,
          balancePrice: 10000000,
          possiblePrice: 800000,
          price: '800000',
          realApplePrice: '팔십만원'
        },
        {
          check: false,
          edit: 'disabled',
          subTitle: '30228488100001',
          title: '(무)THE건강한치아보험V(갱신형)',
          percentPrice: 3.0,
          interestPrice: 30000,
          balancePrice: 10000000,
          possiblePrice: 800000,
          price: '800000',
          realApplePrice: '팔십만원'
        },
        {
          disabled: true,
          edit: 'disabled',
          check: false,
          subTitle: '30228488100001',
          title: '(무)THE건강한치아보험V(갱신형)',
          percentPrice: 3.0,
          interestPrice: 30000,
          balancePrice: 10000000,
          possiblePrice: 800000,
          price: '800000',
          realApplePrice: '팔십만원'
        }
      ],
      box: {
        icon: 'icon-Open_line',
        content: true,
        accordion: {
          title: '알려드립니다',
          listList: [
            {
              content:
                'ATM 현금 즉시 대출 신청은 10만원부터 1만원 단위로 신청 가능합니다. (이용가능시간 : 평일 오전 8시 ~ 오후 9시)'
            },
            {
              content:
                '기 대출 잔액이 있는 경우 대출일 기준 이자 납입 후 신청 가능합니다.'
            },
            {
              content:
                'ATM 현금 즉시 대출 신청은 계약 별 1일 1회 최대 30만원까지 가능합니다. 추가 신청은 고객센터(1588-0058) 또는 라운지 방문을 통하여 가능합니다. (라운지 업무시간 : 평일 오전 9시 ~ 오후 4시) '
            },
            {
              content:
                '서비스 신청 완료 시 발급되는 승인번호를 가까운 편의점 ATM기기에 입력 후 바로 현금출금이 가능합니다. '
            },
            {
              content:
                '승인번호 입력 이전 단계에서 보안을 위해 생년월일 입력이 필요합니다.'
            },
            {
              content:
                '승인번호 발급 후 30분 이내에 미 출근 시 신청 내역은 바로 자동 취소 처리 됩니다.'
            },
            {
              content: '신청 가능 금액은 진행 상황에 따라 달라질 수 있습니다.'
            },
            {
              content:
                '보험계약대출 원리금은 계약해지 시, 해지환급금에서 차감됩니다.'
            },
            {
              content:
                '계약실효(보험료 2개월 미납) 시, 요청하신 대출금액이 지급되지 않습니다.'
            },
            {
              content:
                '보험계약대출 약정서의 내용에 동의하셔야 대출 신청 가능합니다.'
            },
            {
              content:
                '타인을 위한 보험계약 대출은 모바일앱으로 접수가 불가하오니 고객센터(1588-0058)로 문의 바랍니다.'
            },
            {
              content:
                '일반금융소비자는 대출상품 판매업자 등으로부터 충분한 설명을 받을 권리가 있으며, 설명을 이해한 후 거래하실 것을 권고드립니다.'
            },
            {
              content:
                '상환능력에 비해 대출금, 신용카드 사용액이 과도할 경우 개인신용평점이 하락할 수 있습니다.'
            },
            {
              content:
                '개인신용평점 하락으로 금융거래와 관련된 불이익이 발생할 수 있습니다.'
            },
            {
              content:
                '일정기간 납부해야 할 원리금이 연체될 경우에 계약만료 기간이 도래하기 전에 모든 원리금을 변제해야 할 의무가 발생할 수 있습니다.'
            }
          ]
        }
      },
      agreeList: [
        {
          check: false,
          label: '보험계약대출의 체결·이행 등을 위한 상세 동의서'
        },
        {
          check: false,
          label: '고유식별정보 수집·이용에 관한 사항'
        },
        {
          check: false,
          label: '개인신용정보 수집·이용에 관한 사항'
        },
        {
          check: false,
          label: '고유식별정보 제공에 관한 사항'
        },
        {
          check: false,
          label: '개인신용정보 제공에 관한 사항'
        }
      ],
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
  },
  watch: {
    cardList: {
      handler(newVal) {
        const checkCnt = newVal.filter(e => e.check).length
        if (checkCnt > 0) {
          this.btnDisabled = false
        } else {
          this.btnDisabled = true
        }
      },
      deep: true
    }
  },
  created() {
    this.onAlert('A')
  },
  methods: {
    radioChange() {
      console.log('sssss')
      const value = this.radio.value
      switch (value) {
        case 2:
          this.cardList = [
            {
              check: false,
              subTitle: '30228488100001',
              title: '(무)THE건강한치아보험V(갱신형)',
              percentPrice: 3.0,
              interestPrice: 30000,
              balancePrice: 10000000,
              possiblePrice: 800000,
              price: '800000',
              realApplePrice: '팔십만원'
            },
            {
              check: false,
              subTitle: '30228488100001',
              title: '(무)THE건강한치아보험V(갱신형)',
              percentPrice: 3.0,
              interestPrice: 30000,
              balancePrice: 10000000,
              possiblePrice: 800000,
              price: '800000',
              realApplePrice: '팔십만원'
            },
            {
              disabled: true,
              check: false,
              subTitle: '30228488100001',
              title: '(무)THE건강한치아보험V(갱신형)',
              percentPrice: 3.0,
              interestPrice: 30000,
              balancePrice: 10000000,
              possiblePrice: 800000,
              price: '800000',
              realApplePrice: '팔십만원'
            }
          ]
          break
        default:
          this.cardList = [
            {
              check: false,
              edit: 'disabled',
              error: '',
              subTitle: '30228488100001',
              title: '(무)THE건강한치아보험V(갱신형)',
              percentPrice: 3.0,
              interestPrice: 30000,
              balancePrice: 10000000,
              possiblePrice: 800000,
              price: '800000',
              realApplePrice: '팔십만원'
            },
            {
              check: false,
              edit: 'disabled',
              error: '',
              subTitle: '30228488100001',
              title: '(무)THE건강한치아보험V(갱신형)',
              percentPrice: 3.0,
              interestPrice: 30000,
              balancePrice: 10000000,
              possiblePrice: 800000,
              price: '800000',
              realApplePrice: '팔십만원'
            },
            {
              disabled: true,
              check: false,
              edit: 'disabled',
              error: '',
              subTitle: '30228488100001',
              title: '(무)THE건강한치아보험V(갱신형)',
              percentPrice: 3.0,
              interestPrice: 30000,
              balancePrice: 10000000,
              possiblePrice: 800000,
              price: '800000',
              realApplePrice: '팔십만원'
            }
          ]
          break
      }
    },
    onStep() {
      this.$emit('onStep')
    },
    confirm() {
      console.log('test')
    },
    onAlert(type) {
      this.alert = true
      this.type = type
      if (type === 'A') {
        this.alertMessage = 'ATM 현금 즉시 대출 신청은 계약자만 가능합니다.'
      } else if (type === 'B') {
        this.alertMessage =
          '해당 계약은 ATM 현금 즉시 대출 신청이 불가능한 계약입니다.'
      } else if (type === 'C') {
        this.alertMessage =
          '대출 신청은 계약을 기준으로 각 채널별(Mobile, Web, Mobile App, PC) 1일 1회, 전 채널 합산 총 3회까지 신청 가능합니다. 추가 신청이 필요하신 경우 고객센터 (1588-0058) 또는 라운지 방문을 통하여 가능합니다.'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
