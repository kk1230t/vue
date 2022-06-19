<template>
  <div>
    <section class="l-section">
      <base-swiper autoplay-button page-show :main-list="swiperList" />
    </section>
    <section class="l-section">
      <base-titles title="이용방법" fsize="20" />
      <page-status :items="items">
        <template #step>
          <div class="status-step">
            <div class="status-step__title">
              <base-titles fsize="16" title="먼저, 스마트폰에서 신청합니다." />
            </div>
            <div class="status-step__list">
              <b>1</b>
              계약선택
            </div>
            <div class="status-step__list">
              <b>2</b>
              약관동의, 신청내용 확인
            </div>
            <div class="status-step__list">
              <b>3</b>
              스마트폰의 승인번호 8자리 확인 입력
            </div>
          </div>
        </template>
      </page-status>
      <page-status :items="items">
        <template #step>
          <div class="status-step">
            <div class="status-step__title">
              <base-titles
                fsize="16"
                title="30분 이내 근처 ATM으로 이동합니다."
              />
            </div>
            <div class="status-step__list">
              <b>4</b>
              ATM화면에서 포인트 출금/캐시 메뉴 <br />
              <base-buttons type="text" size="small">
                ATM별 이용방법
              </base-buttons>
            </div>
            <div class="status-step__list">
              <b>4</b>
              생년월일+승인번호8자리 입력
            </div>
            <div class="status-step__list">
              <b>5</b>
              현금 즉시 출금
            </div>
          </div>
        </template>
      </page-status>
    </section>
    <section class="l-section">
      <base-messagebox :box="boxError">
        <p class="list-wrap">
          라이나생명 모바일 앱에서 보험계약대출신청 후 고객님이 계신 곳에서
          가까운 전국 편의점, 지하철 ATM기기에서 편리하게 현금으로 인출할 수
          있는 서비스입니다.
        </p>
        <p class="list-wrap">
          계약별 1일 1회, 최대 30만원까지 신청 가능하며, ATM기기에 입력할
          승인번호는 발급 후 10분 동안만 유효하오니 근처에 출금 서비스가 가능한
          ATM기기가 있는지 먼저 확인해주세요.
        </p>
      </base-messagebox>
    </section>
    <section class="l-section gap-bottom">
      <base-messagebox
        :box="box.accordion"
        :accdian="true"
        :accdian-icon="box.icon"
      >
        <div class="list-wrap">
          <base-list cutom-list-content>
            <template #cutomList>
              <li class="list list-bullet">
                <span>
                  출금 승인 번호는 발금 후
                  <em class="txt-blue">30분 이내에만 유효</em>하며, 사용전
                  반드시 근처에 출금 서비스가 가능한 ATM기기가 있는지 먼저 확인
                  해주세요. (지하철, CU, GS25, 이마트24, 미니스톱, 세븐일레븐,
                  롯데마트 등)
                </span>
              </li>
              <li class="list list-bullet">
                <span
                  >보험료 납입 방법이 자동이체가 아닌 경우에는 대출금 지급되는
                  계좌로 이자 납입계좌가 등록됩니다. 단, 보험료 납입 계좌의
                  예금주가 계약자와 다른 경우는 이자 납입에 대한 납부자의 동의가
                  필요하므로, 우편, 방문, 전화접수를 이용하여 주시기
                  바랍니다.</span
                >
              </li>
              <li class="list list-bullet">
                <span>
                  <em class="txt-blue"
                    >계약별 1일 1회 최대 30만원까지 신규대출은 10만원부터,
                    추가대출은 1만원부터 신청가능</em
                  >합니다. (평일 08:00~20:00)</span
                >
              </li>
              <li class="list list-bullet">
                <span
                  >단,
                  <em class="txt-blue"
                    >추가대출은 신청일 기준 이자 납입 후 서비스 이용이 가능</em
                  >합니다.</span
                >
              </li>
              <li class="list list-bullet">
                <span
                  >해당 서비스는 ‘계약대출’서비스이며,
                  <em class="txt-blue"
                    >‘이자’가 발생하므로 서비스 신청 전 이율을 확인</em
                  >해주세요.</span
                >
              </li>
              <li class="list list-bullet">
                <span>
                  <em class="txt-blue"
                    >보험계약대출 가능 금액은 해지환급금의 80%</em
                  >
                  범위 이내에 신청 가능합니다.</span
                >
              </li>
              <li class="list list-bullet">
                <span
                  >단, 만기환급형 및 만기 시 분할보험금이 지급되는 상품의 경우
                  <em class="txt-blue"
                    >만기환급금과 해지환급금을 비교하여 적은 금액의 80% 범위</em
                  >
                  이내 신청 가능합니다.</span
                >
              </li>
            </template>
          </base-list>
        </div>
      </base-messagebox>
    </section>

    <div class="l-bottom">
      <base-buttons type="navy" size="medium" full @click="onContract">
        대출신청
      </base-buttons>
    </div>
    <floating-box :show-top="true" :has-button="true" />
  </div>
</template>

<script>
import PageStatus from '~/components/PageStatus'
import FloatingBox from '~/components/FloatingBox'
export default {
  components: { PageStatus, FloatingBox },
  data() {
    return {
      items: {
        type: 'iconNone'
      },
      boxError: {
        title: 'ATM 현금인출 서비스란?',
        titleSize: '20',
        custom: true
      },
      box: {
        icon: 'icon-Open_line',
        content: true,
        accordion: {
          custom: true,
          title: '알려드립니다'
        }
      },
      swiperList: [
        {
          mainTitle: 'ATM으로 간편하고 \n 빠른 소액대출',
          subTitle: '은행에 가지 않아도 가능!',
          children: [
            {
              title: '대출한도',
              data: '1일 1회 최대 30만원'
            },
            {
              title: '대출이율',
              data: '연 2%~4.5%'
            },
            {
              title: '중도상환수수료',
              data: '0원'
            }
          ]
        },
        {
          mainTitle: '계약당 1일 1회, \n 최대 30만원 즉시 인출',
          subTitle: '1일 1회 최대 30만원',
          children: [
            {
              title: '대출한도',
              data: '1일 1회 최대 30만원'
            },
            {
              title: '대출이율',
              data: '연 2%~4.5%'
            },
            {
              title: '중도상환수수료',
              data: '0원'
            }
          ]
        },
        {
          mainTitle: '계약당 1일 1회,\n 최대 30만원 즉시 인출',
          subTitle: '서류? 심사? 방문?',
          children: [
            {
              title: '대출한도',
              data: '1일 1회 최대 30만원'
            },
            {
              title: '대출이율',
              data: '연 2%~4.5%'
            },
            {
              title: '중도상환수수료',
              data: '0원'
            }
          ]
        }
      ]
    }
  },
  methods: {
    onContract() {
      location.href = '/myPage/contractList/atm/contract'
    }
  }
}
</script>

<style lang="scss" scoped>
.info {
  padding-top: 8px;
  font-size: $--font-size-x-medium;
  color: $--color-darkgray;
  &::before {
    content: '*';
  }
  &--title {
    height: 204px;
    padding: {
      top: 32px;
    }
  }
  &--list {
    border-top: 1px solid $--color-skygray;
    padding-top: 24px;
    ::v-deep {
      .data {
        color: $--color-tertiary;
        font: {
          size: $--font-size-medium;
          weight: $--font-weight-medium;
        }
      }
    }
  }
}
</style>
