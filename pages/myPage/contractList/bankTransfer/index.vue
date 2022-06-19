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
              <base-titles
                fsize="16"
                title="PC와 스마트폰 모두 신청가능해요!"
              />
            </div>
            <div class="status-step__list">
              <b>1</b>
              계약선택
            </div>
            <div class="status-step__list">
              <b>2</b>
              약관동의
            </div>
            <div class="status-step__list">
              <b>3</b>
              신청정보 입력
            </div>
            <div class="status-step__list">
              <b>4</b>
              본인인증
            </div>
            <div class="status-step__list">
              <b>5</b>
              신청완료
            </div>
          </div>
          <p class="info">금액에 따라 실시간 또는 익엽업일 지급</p>
        </template>
      </page-status>
    </section>
    <section class="l-section">
      <base-messagebox :box="boxError">
        <p class="list-wrap">
          계약자가 대출을 원할 경우 약관에 의해 해지환급금 또는 해지환급금과
          만기 시 지급되는 환급금 중 적은 금액의 80% 범위(변액의 경우는
          해지환급금의 50% 범위) 내에서 회사가 정하는 방법에 따라 대출을 받을 수
          있는 제도로 10만 원부터 1만 원단위로 대출 가능하며, 대출 기간은 대출
          이자가 정상 납입되는 한 계약 만기일까지입니다.
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
                  <em class="txt-blue">신청내역에 따라 추가 서류가 필요</em
                  >하기도 합니다.
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
        title: '보험계약 대출이란?',
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
          mainTitle: '실시간 지급',
          subTitle: '1회 신청금액 100만원까지',
          children: [
            {
              title: '대출한도',
              data: '해지/만기환급금의 50~80%'
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
          mainTitle: '1일 3회까지 신청 가능',
          subTitle: '사이버창구 1일 1회, \n고객센터 추가 신청 시',
          children: [
            {
              title: '대출한도',
              data: '해지/만기환급금의 50~80%'
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
      location.href = '/myPage/contractList/bankTransfer/contract'
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
