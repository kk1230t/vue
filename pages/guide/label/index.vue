<template>
  <div>
    <p class="guide-title">
      <span>레이블</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-tag type="primary" tag-title="청약" />
        <base-tag type="success" tag-title="유지" />
        <base-tag type="gray" tag-title="미납" />
        <base-tag type="danger" tag-title="만기" />
        <base-tag tag-title="특약" />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-tag type="primary" tag-title="청약" /&gt;
              &lt;base-tag type="success" tag-title="유지" /&gt;
              &lt;base-tag type="gray" tag-title="미납" /&gt;
              &lt;base-tag type="danger" tag-title="만기" /&gt;
              &lt;base-tag tag-title="특약" /&gt;
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
    return {}
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
