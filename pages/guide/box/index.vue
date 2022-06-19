<template>
  <div>
    <p class="guide-title">
      <span>box 1개</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-box type="gray" :list="boxList" />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
               &lt;base-box type="gray" :list="boxList" /&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>box 2개</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-box type="gray" :list="boxList2" />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
               &lt;base-box type="gray" :list="boxList2" /&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>box 3개</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-box type="gray" :list="boxList3" />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
               &lt;base-box type="gray" :list="boxList3" /&gt;
            </code>
          </pre>
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
      boxList: [
        {
          title: '총 대출가능 금액',
          amount: 0
        }
      ],
      boxList2: [
        {
          title: '총 대출가능 금액',
          amount: 0
        },
        {
          title: '총 대출가능 금액',
          amount: 0
        }
      ],
      boxList3: [
        {
          title: '총 대출가능 금액',
          amount: 0
        },
        {
          title: '총 대출가능 금액',
          amount: 0
        },
        {
          title: '총 대출가능 금액',
          amount: 0
        }
      ]
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
