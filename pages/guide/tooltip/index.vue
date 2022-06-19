<template>
  <div>
    <p class="guide-title">
      <span>툴팁</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-tooltip title="Title" mode="blue" placement="top">
          <template #content>
            <span v-nl2br>내용을 전달합니다.\n 내용을 전달합니다.</span>
          </template>
        </base-tooltip>
      </li>
      <li class="guide-list">
        <base-tooltip title="Title" mode="purple" placement="top">
          <template #content>
            <span v-nl2br>내용을 전달합니다.\n 내용을 전달합니다.</span>
          </template>
        </base-tooltip>
      </li>
      <li class="guide-list">
        <base-tooltip title="Title" mode="red">
          <template #content>
            <span v-nl2br>내용을 전달합니다.\n 내용을 전달합니다.</span>
          </template>
        </base-tooltip>
      </li>
      <li class="guide-list">
        <base-tooltip title="Title" mode="black">
          <template #content>
            <span v-nl2br>내용을 전달합니다.\n 내용을 전달합니다.</span>
          </template>
        </base-tooltip>
      </li>
      <li class="guide-list">
        <base-tooltip title="Title" mode="darkgray">
          <template #content>
            <span v-nl2br>내용을 전달합니다.\n 내용을 전달합니다.</span>
          </template>
        </base-tooltip>
      </li>
      <li class="guide-list">
        <base-tooltip title="Title" mode="skygray">
          <template #content>
            <span v-nl2br>내용을 전달합니다.\n 내용을 전달합니다.</span>
          </template>
        </base-tooltip>
      </li>
      <li class="guide-list">
        <base-tooltip title="Title" mode="palegray">
          <template #content>
            <span v-nl2br>내용을 전달합니다.\n 내용을 전달합니다.</span>
          </template>
        </base-tooltip>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-tooltip title="Title" mode="blue" placement="bottom"  &gt;
                  &lt;template #content&gt;
                    &lt;span v-nl2br&gt;
                  내용을 전달합니다.\n 내용을 전달합니다.
                     &lt;/span&gt;
                  &lt;/template&gt;
              &lt;/base-tooltip&gt;
                &lt;!--  mode 종류    blue ,purple ,red ,black ,darkgray ,skygray ,palegray --&gt;
                &lt;!--  툴팁 위치조정  placement="top | bottom" --&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
      <p class="guide-title">
        <span>툴팁모양 버튼</span>
      </p>
      <li class="guide-list">
        <base-tooltip :util-button="true" title="" mode="purple" @handleClick="openModal" />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
               &lt;base-tooltip :util-button="true" title="" mode="purple" @handleClick="openModal" /&gt;
                &lt;!--  mode 종류    blue ,purple ,red ,black ,darkgray ,skygray ,palegray --&gt;
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
  },
  methods: {
    openModal() {
      console.log('모달열기')
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
