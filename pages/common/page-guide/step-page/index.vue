<template>
  <div>
    <template v-if="step===1">
      <div class="l-content">
        <div class="l-section gap-both">
          <base-titles
            title="담보계약 선택 (명사형)"
            fsize="18"
            is-br
          >
            <template #subContent>
              <p class="c-title_sub">
                <span v-nl2br>보험계약 선택 후 금액을 입력해주세요.
                  이렇게 최대 두줄을 권장합니다.</span>
              </p>
            </template>
          </base-titles>
          <bottom-buttons :buttons="buttons1" :show-top="true" @hasdlePositive="step = 2" />
        </div>
      </div>
    </template>
    <template v-if="step===2">
      <base-step :active="stepActive" :list="stepList" :show-title="true" />
      <bottom-buttons :buttons="buttons2" @hasdleNegative="step = 1" @hasdlePositive="step = 3" />
    </template>
    <template v-if="step===3">
      <div class="l-content ">
        <div class="l-section gap-both">
          <page-status :items="items" />
          <bottom-buttons :buttons="buttons3" @hasdlePositive="step = 3" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import PageStatus from '~/components/PageStatus'
import BottomButtons from '~/components/BottomButtons'
export default {
  components: {
    PageStatus,
    BottomButtons
  },
  data() {
    return {
      items: {
        type: 'done',
        title: '배당금 신청 완료',
        subtitle: `다음 영업일 18시 이내에
                  지급 받으실 수 있어요. 
                  (평일 기준)`
      },
      step: 1,
      buttons1: {
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
      buttons2: {
        negative: {
          show: true,
          title: '이전'
        },
        positive: {
          show: true,
          title: '확인'
        },
        disable: {
          show: false
        }
      },
      buttons3: {
        negative: {
          show: false
        },
        positive: {
          show: true,
          title: '완료 화면 내 버튼 선택적 사용'
        },
        disable: {
          show: false
        }
      },
      stepActive: 0,
      stepList: [
        {
          title: '계좌정보입력',
          subtitle: '대출금 지급 및 이자 납부를 위해\n본인명의의 계좌를 입력해주세요.'
        },
        {
          title: '보험료계산',
          subtitle:
            '대출금 지급 및 이자 납부를 위해\n본인명의의 계좌를 입력해주세요.'
        },
        {
          title: '피보험자 정보',
          subtitle:
            '대출금 지급 및 이자 납부를 위해\n본인명의의 계좌를 입력해주세요.'
        },
        {
          title: '가입서류 확인',
          subtitle:
            '대출금 지급 및 이자 납부를 위해\n본인명의의 계좌를 입력해주세요.'
        },
        {
          title: '전자서명',
          subtitle:
            '대출금 지급 및 이자 납부를 위해\n본인명의의 계좌를 입력해주세요.'
        }
      ]

    }
  },
  methods: {
    hasdlePositive() {
      console.log('dddd')
    }
  }
}
</script>

<style></style>
