<template>
  <div>
    <p class="guide-title">
      <span>레이지 로드 + object-fit 없음 </span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-image
          alt="샘플이미지"
          lazy
          :src="require('@/assets/images/sample/sample-image01.png')"
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-image
            alt="샘플이미지"
            lazy
            :src="require('@/assets/images/common/bank01.png')"
             /&gt;
         </code></pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>레이지 로드 + object-fit </span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <div v-for="(fit, idx) in fits" :key="idx">
          <base-image
            alt="샘플이미지"
            lazy
            :fit="fit"
            :src="require('@/assets/images/sample/sample-image01.png')"
          />
          object-fit :
          {{ fit }}
        </div>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>&lt;base-image
              alt="샘플이미지"
              lazy
              :fit="fill"
              :src="require('@/assets/images/common/bank01.png')" /&gt;</code>
         </pre>
        </highlight-code>
      </li>
      <li>
        <a
          target="blank"
          href="https://element.eleme.io/#/en-US/component/image"
        >element 이미지 참고</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'guideLayout',
  data() {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down']
    }
  }
}
</script>

<style lang="scss" scoped>
.el-image {
  width: 100px;
  height: 100px;
}

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
