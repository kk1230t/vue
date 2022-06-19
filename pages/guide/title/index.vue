<template>
  <div>
    <p class="guide-title">
      <span>제목서식 </span>
    </p>
    <!-- 14 16 20 24 28  32 36 40 48 -->
    <ul class="guide-content">
      <li>
        <template v-for="(item) in ['14', '16', '20', '24', '28' , '32' ,'36' ,'40' ,'48']">
          <base-titles
            :key="item"
            has-icon="icon-Home"
            :fsize="item"
            to="/guide"
            :title="`타이틀 ${item}px`"
          />
        </template>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-titles fsize="14" has-icon="icon-Home"  title="타이틀" /&gt;
               &lt;!-- 여러 라인으로 자동개행 필요시 isBr 속성 추가 --&gt;
              &lt;!-- 가운데 정렬시  center  속성 추가 --&gt;
            &lt;!-- 아이콘 필요시 has-icon="icon-Home"  속성 추가 --&gt;
            &lt;!-- 링크타입 일때 to="/guide" 속성 추가 --&gt;
            &lt;!-- fsize에 10px 부터 48px까지 --&gt;
          </code></pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>제목 + 버튼</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-titles
          title="우측버튼 센터 타입"
          fsize="18"
        >
          <template #btnArea>
            <base-buttons type="reset" right-type="close" />
          </template>
        </base-titles>
      </li>
      <li class="guide-list">
        <base-titles
          title="우측버튼 센터 타입"
          fsize="18"
        >
          <template #btnArea>
            <base-buttons type="reset" right-type="right" />
          </template>
        </base-titles>
      </li>
      <li class="guide-list">
        <base-titles
          title="우측버튼 센터 타입"
          fsize="18"
        >
          <template #btnArea>
            <base-buttons type="reset" right-type="arrow" />
          </template>
        </base-titles>
      </li>
      <li class="guide-list">
        <base-titles
          title="우측버튼 센터 타입"
          fsize="18"
        >
          <template #btnArea>
            <base-buttons type="reset" right-type="home" />
          </template>
        </base-titles>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
          &lt;base-titles title="우측버튼 센터 타입" fsize="18"&gt;
              &lt;template #btnArea&gt;
                  &lt;base-buttons  type="reset" right-type="home" /&gt;
              &lt;/template&gt;
          &lt;/base-titles&gt;

           &lt;!-- 위쪽부터
           right-type="close"
           right-type="right"
           right-type="arrow"
           right-type="home"
           --&gt;
          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-titles
          title="우측버튼 베이스 라인"
          fsize="18"
          :button-top="true"
          is-br
        >
          <template #btnArea>
            <base-buttons type="reset" right-type="arrow" />
          </template>
          <template #subContent>
            <p class="c-title_sub">
              <span>- 설명문구</span>
            </p>
          </template>
        </base-titles>
      </li>

      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
          &lt;base-titles title="우측버튼 베이스 라인" fsize="18" :button-top="true" &gt;
              &lt;template #btnArea&gt;
                  &lt;base-buttons type="reset" class="type-arrow"&gt;
                  &lt;b&gt;버튼&lt;/b&gt;&lt;i class="icon-ArrowR02" /&gt;
                  &lt;/base-buttons&gt;
              &lt;/template&gt;
              &lt;template #subContent&gt;
                  &lt;p class="c-title_sub"&gt;-설명문구&lt;/p&gt;
              &lt;/template&gt;
          &lt;/base-titles&gt;
         </code></pre>
        </highlight-code>
      </li>

      <li class="guide-list">
        <base-titles
          title="타이틀 링크 타입"
          fsize="18"
          :title-link="true"
          :button-top="true"
        >
          <template #subContent>
            <p class="c-title_sub">
              설명문구
            </p>
          </template>
        </base-titles>
      </li>

      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
          &lt;base-titles title="타이틀 링크 타입" fsize="18" :title-link="true" :button-top="true" &gt;
              &lt;template #btnArea&gt;
                  &lt;base-buttons type="reset"&gt;버튼 &gt;&lt;/base-buttons&gt;
              &lt;/template&gt;
              &lt;template #subContent&gt;
                  &lt;p class="c-title_sub"&gt;- 설명문구&lt;/p&gt;
               &lt;/template&gt;
          &lt;/base-titles&gt;
         </code></pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>제목 서식의 설명 문구</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-titles title="Header" fsize="18">
          <template #subContent>
            <p class="c-title_sub">
              설명문구
            </p>
          </template>
        </base-titles>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-titles title="Header" fsize="18"&gt;
                &lt;template #subContent&gt;
                    &lt;p class="c-title_sub"&gt;- 설명문구&lt;/p&gt;
                &lt;/template&gt;
            &lt;/base-titles&gt;
         </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-titles title="Header" fsize="18">
          <template #label>
            <p class="c-title_sub">
              설명문구
            </p>
          </template>
        </base-titles>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
          &lt;base-titles title="Header" fsize="18"&gt;
              &lt;template #label&gt;
                 &lt;p class="c-title_sub"&gt;- 설명문구&lt;/p&gt;
              &lt;/template&gt;
          &lt;/base-titles&gt;
         </code></pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>타이틀 박스- 운용의 예</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-titles title="Header" fsize="24">
          <template #label>
            <base-tag
              v-for="(item, idx) in tagList"
              :key="idx"
              class="titlt-tag"
              :tag-title="item.title"
              :type="item.type"
            />
          </template>
        </base-titles>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-titles title="Header" fsize="24"&gt;
                &lt;template #label&gt;
                    &lt;base-tag v-for="(item, idx) in tagList" :key="idx" :tag-title="item.title" :type="item.type" /&gt;
                &lt;/template&gt;
            &lt;/base-titles&gt;
        </code></pre>
        </highlight-code>
        <highlight-code lang="javascript">
          <pre><code>
            tagList: [
         {
          title: '청약',
          type: 'primary'
        },
        {
          title: '유지',
          type: 'success'
        }
      ]
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
      tagList: [
        {
          title: '청약',
          type: 'primary'
        },
        {
          title: '유지',
          type: 'success'
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
