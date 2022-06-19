<template>
  <div>
    <p class="guide-title">
      <span>참조용 개행 디렉티브</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <span v-nl2br>참조용 \n 개행 \n 디렉티브</span>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;span v-nl2br&gt; 참조용 \n 개행 \n 디렉티브 &lt;/span&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>참조용 개행 타이틀</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-titles title="타이틀 \n 입니다." />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code> &lt;base-titles title="타이틀 \n 입니다."&gt; </code>
          </pre>
        </highlight-code>
      </li>
      <p class="guide-title">
        <span>참조용 개행 리스트 -하단 데이터 확인</span>
      </p>
      <li class="guide-list">
        <base-list type="bullet" :list="listList">
          <template #customArea="{ scope }">
            <base-buttons type="text">
              {{ scope.item.btn }}
            </base-buttons>
          </template>
        </base-list>
      </li>

      <p class="guide-title">
        <span>콧수염 보간법 사용시 (소스확인)</span>
      </p>
      <li class="guide-list">
        <p v-nl2br>
          <span>{{ testBr }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'guideLayout',
  data() {
    return {
      testBr: '안녕하세요 저는 라이나 생명입니다. \n 잘부탁드립니다.',
      listList: [
        {
          content:
            '본문내용이 들어온다면 정해진 아이템\n <>내에서 사용해야 합니다'
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
