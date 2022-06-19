<template>
  <div>
    <p class="guide-title">
      <span>바텀 시트</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-buttons type="primary" @click="drawer1 = !drawer1">
          1번호출
        </base-buttons>
        <base-drawer
          :visible.sync="drawer1"
          title="타이틀 입니다."
          negative-button="취소"
          positive-button="확인"
        >
          <template #content>
            <div />
          </template>
        </base-drawer>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
          &lt;base-buttons type="primary" @click="drawer1 = !drawer1"&gt; 1번호출&lt;/base-buttons &gt;
          &lt;base-drawer
            :visible.sync="drawer1"
              title="타이틀 입니다."
              header-type="type1"
              negative-button="취소"
              positive-button="확인"
            &gt;
              &lt;template #content&gt;
                  &lt;div&gt;&lt;/div&gt;
              &lt;/template&gt;
          &lt;/base-drawer&gt;
          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="primary" @click="drawer2 = !drawer2">
          2번호출
        </base-buttons>
        <base-drawer
          :visible.sync="drawer2"
          title="타이틀 입니다."
          positive-button="확인"
        >
          <template #content>
            <div />
          </template>
        </base-drawer>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
          &lt;base-buttons type="primary" @click="drawer2 = !drawer2"&gt; 2번호출&lt;/base-buttons &gt;
          &lt;base-drawer
              :visible.sync="drawer2"
              title="타이틀 입니다."
              header-type="type1"
              positive-button="확인"
            &gt;
              &lt;template #content&gt;
                  &lt;div&gt;&lt;/div&gt;
              &lt;/template&gt;
          &lt;/base-drawer&gt;
          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="primary" @click="drawer3 = !drawer3">
          3번호출
        </base-buttons>
        <base-drawer
          :visible.sync="drawer3"
          title="타이틀 입니다."
          header-type="toggle"
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="primary" @click="drawer3 = !drawer3"&gt; 3번호출&lt;/base-buttons &gt;
            &lt;base-drawer :visible.sync="drawer3" title="타이틀 입니다." header-type="type2" /&gt;
          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="primary" @click="drawer4 = !drawer4">
          4번호출
        </base-buttons>
        <base-drawer
          :visible.sync="drawer4"
          ratio
          title="타이틀 입니다."
          negative-button="취소"
          positive-button="확인"
        >
          <template #content>
            <div />
          </template>
        </base-drawer>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
          &lt;base-buttons type="primary" @click="drawer4 = !drawer4"&gt; 2번호출&lt;/base-buttons &gt;
          &lt;base-drawer
              :visible.sync="drawer4"
              ratio
              title="타이틀 입니다."
              header-type="type1"
              negative-button="취소"
              positive-button="확인"
            &gt;
              &lt;template #content&gt;
                  &lt;div&gt;&lt;/div&gt;
              &lt;/template&gt;
          &lt;/base-drawer&gt;
          // 버튼 사이즈 다른 경우 ratio 변수 추가
          </code></pre>
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
      drawer1: false,
      drawer2: false,
      drawer3: false,
      drawer4: false
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
