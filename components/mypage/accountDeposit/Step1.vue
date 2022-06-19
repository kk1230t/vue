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
                @confirm="onAlert('H')"
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
              :class="scope.item.price <= 100000 ? 'is-error' : ''"
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
            <div v-if="scope.item.price <= 100000" class="list-info">
              <span class="data txt-red">10만원 이상 신청 가능</span>
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
          @click="onAlert('A')"
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
        <base-buttons type="gray" size="large" @click="agreement = true">
          네
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
                '보험계약대출은 10만 원부터 1만 원단위로 신청이 가능하며, 1회 신청금액 100만 원 이하의 경우 실시간 지급됩니다. (사이버 창구 실시간 대출 지급 업무시간 : 2시~23시)'
            },
            {
              content:
                '변액상품의 보험계약대출은 월 1회만 신청 가능하며, 접수일로부터 2영업일 이후에 지급됩니다.'
            },
            {
              content:
                '1회 신청금액 100만 원 초과 건은 접수 후 심사를 거쳐 익영업일 오후 6시 이내에 지급받으실 수 있습니다.'
            },
            {
              content:
                '대출 신청 가능 금액은 진행 상황에 따라 달라질 수 있습니다. (변액의 경우, 신청 일자와 지급 일자의 적립금 변동에 따라 달라질 수 있습니다.)'
            },
            {
              content:
                '일부 변액보험은 인출(중도인출, 보험계약대출) 또는 계약 변경 접수 후 2영업일 이후에 처리가 완료되며, 처리 중에는 인출 또는 편드 변경 접수 불가합니다.'
            },
            {
              color: 'blue',
              content:
                '간편 비밀번호를 이용하실 경우 대출, 중도인출, 만기/휴면/분할보험금, 해지환급금, 배당금 신청이 불가하오니 해당 서비스 접수를 위해서는 공인인증서 등록 후 서비스 이용 부탁드리겠습니다(단, 그 외 서비스는 간편 비밀번호 등록만으로 사용이 가능합니다).'
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
      if (type === 'A') {
        this.alertMessage =
          '금융사고 방지를 위해 100만 원 초과 대출 신청이 불가능합니다. 추가 신청이 필요하신 경우 고객센터(1588-0058) 또는 라운지 방문을이용해 주시기 바랍니다.'
      } else if (type === 'B') {
        this.alertMessage =
          '대출 신청은 계약을 기준으로 각 채널별(Mobile, Web, Mobile App, PC)  1일 1회, 전 채널 합산 총 3회까지 신청 가능합니다. 추가 신청이 필요하신 경우 고객센터 (1588-0058) 또는 라운지 방문을  통하여 가능합니다.'
      } else if (type === 'C') {
        this.alertMessage = '해당 계약은 보험계약 대출이 불가능한 계약입니다.'
      } else if (type === 'D') {
        this.alertMessage =
          '계약자와 만기 수익자가 동일하지 않아 신청이 불가능합니다.'
      } else if (type === 'E') {
        this.alertMessage =
          '전자금융사고 피해 예방을 위해 디지털 신규 / 갱신 고객이신 경우 3일간 대출 가능 금액이 제한됩니다. 추가 신청이 필요하신 경우 고객센터(1588-0058) 또는 라운지 방문을 이용해 주시기 바랍니다. (일일 최대 30만원 / 3일 합산 30만원)'
      } else if (type === 'F') {
        this.alertMessage =
          '금융사고 방지를 위해 1개월 이내 휴대폰 번호 변경 이력이 존재하며 신규 계좌를 등록하신 경우 대출 신청이 불가능합니다. 추가 신청이 필요하신 경우 고객센터(1588-0058) 또는 라운지 방문을 이용해주시기 바랍니다.'
      } else if (type === 'G') {
        this.alertMessage =
          '금융사고 방지를 위해 당일 인증수단 등록 및 갱신하신 경우 대출 신청이 불가능합니다. 고객센터(1588-0058) 또는 라운지 방문을 이용해주시기 바랍니다.'
      } else if (type === 'H') {
        this.alertMessage =
          '대출 신청은 계약을 기준으로 각 채널별(Mobile, Web, Mobile App, PC) 1일 1회, 전 채널 합산 총 3회까지 신청 가능합니다.추가 신청이 필요하신 경우 고객센터 (1588-0058) 또는 라운지 방문을 통하여 가능합니다.'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
