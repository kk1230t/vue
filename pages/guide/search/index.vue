<template>
  <div>
    <p class="guide-title">
      <span>검색</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <search v-model="searchInput" />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>&lt;search v-model="searchInput" /&gt;</code></pre>
        </highlight-code>
      </li>
      <!-- <li class="guide-list">
        <search v-model="searchInput2" search-type="type2" />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>&lt;search v-model="searchInput2" search-type="type2"/&gt;</code></pre>
        </highlight-code>
      </li> -->
    </ul>
  </div>
</template>

<script>
const Search = () => import('@/components/Search')

export default {
  components: {
    Search
  },
  layout: 'guideLayout',
  data() {
    return {
      searchInput: '',
      searchInput2: ''
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
