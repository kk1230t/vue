<template>
  <div>
    <p class="guide-title">
      <span>스텝</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-step
          :active="stepActive"
          :list="stepList"
          :show-title="true"
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-step :active="stepActive" :list="stepList" :show-title="true" /&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>스텝 - 세로</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-step
          direction="vertical"
          :active="stepActive2"
          :list="stepList"
          finish-status="success"
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-step direction="vertical" :active="stepActive" :list="stepList" finish-status="success" /&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>스텝 스크롤시</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-step
          :active="stepActive"
          :list="stepList"
          :is-scroll="true"
          :show-title="true"
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-step :active="stepActive" :is-scroll="true" :list="stepList" :is-scroll="true" :show-title="true" /&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>스텝 프로그레스 타입</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-step-progress
          :percentage="percentage"
          class="step-progress-wrap"
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-step-progress :percentage="percentage" class="step-progress-wrap" /&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>스텝 프로그레스 타입 - type2</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-step-progress
          :percentage="52"
          class="step-progress-wrap"
          :color-type="true"
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-step-progress :percentage="percentage" class="step-progress-wrap" :color-type="true" /&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>
    <!-- 세로버전없어서 일단 주석처리 -->
    <!-- <p class="guide-title"><span>스텝</span></p>
      <ul class="guide-content">
        <li class="guide-list">
          <base-step
            direction="vertical"
            :active="stepActive2"
            :list="stepList"
            finish-status="success"
          />
        </li>
      </ul> -->
  </div>
</template>

<script>
export default {
  layout: 'guideLayout',
  data() {
    return {
      stepActive: 3,
      stepActive2: 1,
      stepList: [
        {
          title: '고객정보',
          subtitle:
            '대출금 지급 및 이자 납부를 위해\n본인명의의 계좌를 입력해주세요.'
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
      ],
      percentage: 80
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
