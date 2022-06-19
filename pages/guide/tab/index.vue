<template>
  <div>
    <p class="guide-title">
      <span>탭</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-tab v-model="tab.activeName" :tab-list="tab.tabList">
          <template #tabContents>
            <div v-if="tab.activeName === 'first'">
              tab1content
            </div>
            <div v-if="tab.activeName === 'second'">
              tab2content
            </div>
          </template>
        </base-tab>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-tab v-model="tab.activeName" :tab-list="tab.tabList"&gt;
            &lt;template #tabContents&gt;
            &lt;div v-if="tab.activeName ==='first'"&gt;tab1content&lt;/div&gt;
            &lt;div v-if="tab.activeName ==='second'"&gt;tab2content&lt;/div&gt; &lt;/template&gt;
            &lt;/base-tab&gt;
            //데이터 영역에서 name영역과 컨텐츠의 activeName을 동일하게 맞춰 주어야 합니다.
          </code></pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>카드 형식 탭</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-tab v-model="tabCard.activeName" type="card" :tab-list="tabCard.tabList">
          <template #tabContents>
            <div v-if="tabCard.activeName === 'first'">
              tab1content
            </div>
            <div v-if="tabCard.activeName === 'second'">
              tab2content
            </div>
          </template>
        </base-tab>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-tab v-model="tab.activeName" type="card" :tab-list="tab.tabList"&gt;
            &lt;template #tabContents&gt;
            &lt;div v-if="tab.activeName ==='first'"&gt;tab1content&lt;/div&gt;
            &lt;div v-if="tab.activeName ==='second'"&gt;tab2content&lt;/div&gt; &lt;/template&gt;
            &lt;/base-tab&gt;
            //데이터 영역에서 name영역과 컨텐츠의 activeName을 동일하게 맞춰 주어야 합니다.
          </code></pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>탭 인 탭</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-tab v-model="tabIntab.activeName" type="card" stretch :tab-list="tabIntab.tabList">
          <template #tabContents>
            <div v-if="tabIntab.activeName === 'first'">
              <base-tab v-model="tabIntab.subActiveName" :tab-list="tabIntab.tabList2">
                <template #tabContents>
                  <div v-if="tabIntab.subActiveName === 'first2'">
                    tab1content
                  </div>
                  <div v-if="tabIntab.subActiveName === 'second2'">
                    tab2content
                  </div>
                </template>
              </base-tab>
            </div>
            <div v-if="tabIntab.activeName === 'second'">
              tab2content
            </div>
          </template>
        </base-tab>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
          &lt;base-tab v-model="tabIntab.activeName" type="card" :tab-list="tabIntab.tabList"&gt;
          &lt;template #tabContents&gt;
            &lt;div v-if="tabIntab.activeName === 'first'"&gt;
              &lt;base-tab v-model="tabIntab.subActiveName" :tab-list="tabIntab.tabList"&gt;
                &lt;template #tabContents&gt;
                  &lt;div v-if="tabIntab.subActiveName === 'first'"&gt;
                    tab1content
                  &lt;/div&gt;
                  &lt;div v-if="tabIntab.subActiveName === 'second'"&gt;
                    tab2content
                  &lt;/div&gt;
                &lt;/template&gt;
              &lt;/base-tab&gt;
            &lt;/div&gt;
            &lt;div v-if="tabIntab.activeName === 'second'"&gt;
              tab2content
            &lt;/div&gt;
          &lt;/template&gt;
        &lt;/base-tab&gt;
        //데이터 영역에서 name영역과 컨텐츠의 activeName을 동일하게 맞춰 주어야 합니다.
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
      tab: {
        activeName: 'first',
        tabList: [
          {
            label: 'tab1',
            name: 'first'
          },
          {
            label: 'tab2',
            name: 'second'
          }
        ]
      },
      tabCard: {
        activeName: 'first',
        tabList: [
          {
            label: 'tab1',
            name: 'first'
          },
          {
            label: 'tab2',
            name: 'second'
          }
        ]
      },
      tabIntab: {
        activeName: 'first',
        subActiveName: 'first2',
        tabList: [
          {
            label: 'tab1',
            name: 'first'
          },
          {
            label: 'tab2',
            name: 'second'
          }
        ],
        tabList2: [
          {
            label: 'tab1',
            name: 'first2'
          },
          {
            label: 'tab2',
            name: 'second2'
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
