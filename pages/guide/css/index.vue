<template>
  <div>
    <p class="guide-title">
      <span>text</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <p class="txt-blue">
          txt-blue
        </p>
        <p class="txt-purple">
          txt-purple
        </p>
        <p class="txt-magenta">
          txt-magenta
        </p>
        <div class="bg-blue">
          <p class="txt-white">
            txt-white
          </p>
        </div>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
            &lt;p class="txt-blue"&gt;txt-blue&lt;/p&gt;
            &lt;p class="txt-purple"&gt;txt-purple&lt;/p&gt;
            &lt;p class="txt-magenta"&gt;txt-magenta&lt;/p&gt;
            &lt;p class="txt-white"&gt;txt-white &lt;/p&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>background</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <div class="bg-blue" />
        <div class="bg-purple" />
        <div class="bg-magenta" />
        <div class="bg-black" />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
            &lt;div class="bg-blue" /&gt;
            &lt;div class="bg-purple" /&gt;
            &lt;div class="bg-magenta" /&gt;
            &lt;div class="bg-black" /&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'guideLayout'
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
    >div{
      padding: 10px;
    }
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
