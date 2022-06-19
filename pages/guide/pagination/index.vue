<template>
  <div>
    <p class="guide-title">
      <span>페이지 네이션</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-pagination
          v-if="totalPages"
          :total-pages="totalPages"
          :page-number.sync="pageNumber"
          @change="fetchList"
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code> &lt;base-pagination /&gt; </code>
          </pre>
        </highlight-code>
      </li>
    </ul>
    {{ list }}
  </div>
</template>
<script>
export default {
  layout: 'guideLayout',
  data() {
    return {
      pageNumber: 0,
      totalPages: 8,
      list: null
    }
  },
  mounted() {
  },
  methods: {
    fetchList() {}
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
