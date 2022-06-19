<template>
  <div>
    <p class="guide-title">
      <span>아코디언</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-accordion
          v-model="accodoan.activeNames1"
          :list="accodoan.accodoanList"
        >
          <template #contents="{ contents }">
            {{ contents }}
          </template>
        </base-accordion>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
          &lt;base-accordion v-model="accodoan.activeNames1" :list="accodoan.accodoanList" &gt;
          &lt;template #contents="{ contents }"&gt;{ { contents } }&lt;/template&gt;
          &lt;/base-accordion&gt;
          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-accordion
          v-model="accodoan.activeNames4"
          :list="accodoan.accodoanList2"
        >
          <template #title1>
            <span>타이틀 1</span>
          </template>
          <template #title2>
            <span>타이틀 2</span>
          </template>
          <template #contents="{ contents }">
            <ul>
              <li><span>타이틀a</span><span>{{ contents.a }}</span></li>
              <li><span>타이틀b</span><span>{{ contents.c }}</span></li>
              <li><span>타이틀c</span><span>{{ contents.b }}</span></li>
            </ul>
          </template>
        </base-accordion>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
          &lt;base-accordion v-model="accodoan.activeNames1" :list="accodoan.accodoanList" &gt;
          &lt;template #title1&gt;
            &lt;span&gt;타이틀 1&lt;/span&gt;
          &lt;/template&gt;
          &lt;template #title2&gt;
            &lt;span&gt;타이틀 2&lt;/span&gt;
          &lt;/template&gt;
          &lt;template #contents="{ contents }"&gt;{ { contents } }&lt;/template&gt;
          &lt;/base-accordion&gt;
          </code></pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>아코디언2</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-accordion
          v-model="accodoan.activeNames2"
          accordion
          :list="accodoan.accodoanList"
        >
          <template #contents="{ contents }">
            {{ contents }}
          </template>
        </base-accordion>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
          &lt;base-accordion v-model="accodoan.activeNames2" accordion
          :list="accodoan.accodoanList" &gt;
           &lt;template #contents="{ contents}"&gt;{ { contents } } &lt;/template&gt;
          &lt;/base-accordion &gt;
          </code></pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>아코디언(라인 없는 경우 class noneline 추가)</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-accordion
          v-model="accodoan.activeNames3"
          accordion
          :list="accodoan.accodoanList"
          class="noneline"
        >
          <template #contents="{ contents }">
            {{ contents }}
          </template>
        </base-accordion>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
          &lt;base-accordion v-model="accodoan.activeNames2" accordion
          :list="accodoan.accodoanList" class="noneline" &gt;
           &lt;template #contents="{ contents}"&gt;{ { contents } } &lt;/template&gt;
          &lt;/base-accordion &gt;
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
      accodoan: {
        activeNames1: [],
        activeNames2: 0,
        activeNames4: 0,
        accodoanList: [
          {
            title:
              '제목1제목1제목1제목1제목1제목1제목1제목1제목1제목1제목1제목1제목1',
            contents:
              '내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1'
          },
          {
            title:
              '제목2제목2제목2제목2제목2제목2제목2제목2제목2제목2제목2제목2제목2',
            contents:
              '내용2내용2내용2내용2내용2내용2내용2내용2내용2내용2내용2내용2내용2내용2내용2내용2내용2내용2내용2내용2내용2내용2내용2내용2'
          }
        ],
        accodoanList2: [
          {
            customTitle: true,
            titleName: 'title1',
            contents: {
              a: '1 - 1',
              b: '1 - 2',
              c: '1 - 3'
            }
          },
          {
            customTitle: true,
            titleName: 'title2',
            contents: {
              a: '2 - 1',
              b: '2 - 2',
              c: '2 - 3'
            }
          }
        ]
      }
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
