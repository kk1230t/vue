<template>
  <div>
    <div class="left">
      <h2 class="title">
        <nuxt-link to="/common">
          공통페이지
        </nuxt-link>
      </h2>
      <ul>
        <li v-for="(item, idx) in list" :key="idx">
          <nuxt-link :to="item.link">
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonLayout',
  data() {
    return {
      list: [
        {
          link: '/common/policy/error',
          name: '1-1) 전체공통정책'
        },
        {
          link: '/common/policy/done',
          name: '1-2) 전체공통정책'
        },
        {
          link: '/common/policy/warning',
          name: '1-3) 전체공통정책'
        },
        {
          link: '/common/backPolicy/step1',
          name: '2-1) 뒤로가기정책'
        },
        {
          link: '/common/backPolicy/step2',
          name: '2-2) 뒤로가기정책'
        },

        {
          link: '/common/page-guide/default-page',
          name: '3) 페이지가이드 기본'
        },
        {
          link: '/common/page-guide/step-page',
          name: '4) ㄴ 스텝 기본'
        },
        {
          link: '/common/page-guide/error-page/page404',
          name: '5) ㄴ 에러 404'
        },
        {
          link: '/common/page-guide/error-page/page500',
          name: '5) ㄴ 에러 500'
        },
        {
          link: '/common/page-guide/error-page/page-system',
          name: '5) ㄴ 시스템 공지'
        },
        {
          link: '/common/page-guide/error-page/page-loading',
          name: '5) ㄴ 페이지 로딩'
        },
        {
          link: '/common/page-guide/tab-page',
          name: '6) 탭페이지 가이드 기본'
        },
        {
          link: '/common/form/input',
          name: '11) 기본인풋 폼'
        },
        {
          link: '/common/form/combie',
          name: ' 12) 복합 기본인풋 폼'
        },
        {
          link: '/common/step',
          name: '14) 스텝'
        },
        {
          link: '/common/termsAgree/individualTerms',
          name: '28-1) 약관동의 > 개별약관'
        },
        {
          link: '/common/termsAgree/detailsRequired',
          name: '28-2) 약관 상세 (필수)'
        },
        {
          link: '/common/termsAgree/detailsChoice',
          name: '28-3) 약관 상세 (선택)'
        },
        {
          link: '/common/selfAuth/choiceAuth',
          name: '43~8) 본인인증 공통 버튼리스트'
        },
        {
          link: '/common/selfAuth/authCommonForm',
          name: '46~8) 본인인증 공통 입력폼'
        },

        {
          link: '/common/selfAuth/toPinNumber',
          name: '44) 핀번호 인증'
        },
        {
          link: '/common/notification',
          name: '30) 안내사항'
        },
        {
          link: '/common/financial',
          name: '32) 금융사 선택'
        },
        {
          link: '/common/selfAuth/toFinger',
          name: '44) 지문 인증'
        },
        {
          link: '/common/selfAuth/choiceCertification',
          name: '45) 인증서 인증'
        },
        {
          link: '/common/selfAuth/toKakao',
          name: '46) 카카오 인증'
        },
        {
          link: '/common/selfAuth/toNaver',
          name: '47) 네이버 인증'
        },
        {
          link: '/common/selfAuth/toToss',
          name: '48 ) 토스 인증'
        },
        {
          name: '50) 전문금융소비자 여부 확인',
          link: '/fundsuitability/fundSuitability'
        },
        {
          link: '/fundsuitability/fundSuitabilityWeak',
          name: '50-2) 취약금융 소비자 해당 여부 확인'
        },
        {
          link: '/fundsuitability/fundSuitabilityError',
          name: '50-3) 부적합 case'
        },
        {
          link: '/fundsuitability/gettingStart',
          name: '51) 펀드적합성진단 - 시작'
        },
        {
          link: '/fundsuitability/diagnosticItem/step1',
          name: '51-1) 펀드 적합성 진단 항목'
        },
        {
          link: '/fundsuitability/diagnosticItem/diagnosticResults',
          name: '51-2) 펀드 적합성 진단 결과'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.left {
  position: fixed;
  width: 200px;
  height: 100%;
  overflow: scroll;
  background: #f1f1f1;
  .title {
    padding: 10px;
    font-size: 16px;
    font-weight: 900;
    text-align: center;
    border-bottom: 2px solid #ccc;
  }
  li {
    padding: 4px;
    border-bottom: 1px solid #ddd;
    font-size: 1.4rem;

    a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
.contents {
  width: calc(100% - 200px);
  padding: 10px {
    top: 15px;
  };
  margin-left: 200px;
  .info {
    font-size: 20px;
    font-weight: 900;
    text-align: center;
  }
}
</style>
