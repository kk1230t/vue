<template>
  <div>
    <p class="guide-title">
      <span>플로팅 박스</span>
    </p>
    <ul class="guide-content">
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>  &lt;floating-box :show-chat="true" :show-top="true" :has-button="true" @openChatbot="openChatbot" /&gt;
            </code></pre>
        </highlight-code>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>&lt;floating-box
      :show-chat="true"
      :show-top="true"
      :has-button="true"
      :sum-box="['2', '2', '2천만']"
    /&gt;
    &lt;!--
    중앙 하단 정보

    필요에 따라 항목값 셋팅
    :sum-box="['2', '2', '2천만']
    :sum-box="['', '2', '2천만']
    --&gt;
    </code></pre>
        </highlight-code>
      </li>
    </ul>
    <floating-box :show-chat="true" :show-top="true" :has-button="true" @openChatbot="openChatbot" />
    <floating-box
      :show-sum="true"
      :has-button="true"
      :sum-box="['2년', '2건 선택', '총 2천만원']"
    />
  </div>
</template>

<script>
import FloatingBox from '~/components/FloatingBox'

export default {
  components: { FloatingBox },
  layout: 'guideLayout',
  data() {
    return {}
  },
  methods: {
    openChatbot() {
      console.log('test')
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
