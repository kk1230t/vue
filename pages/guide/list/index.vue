<template>
  <div>
    <p class="guide-title">
      <span>리스트 bullet</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-list type="bullet" :list="listList">
          <template #customArea="{ scope }">
            <base-buttons v-if="scope.item.btn" type="text">
              {{ scope.item.btn }}
            </base-buttons>
          </template>
        </base-list>
      </li>
      <li class="guide-list">
        <base-list type="bullet" :list="listList">
          <template #customArea="{ scope }">
            <base-buttons v-if="scope.item.btn" type="gray" size="small">
              {{ scope.item.btn }}
            </base-buttons>
          </template>
        </base-list>
      </li>
      <li class="guide-code">
        <highlight-code lang="vue">
          <pre>
            <code>
              &lt;base-list type="bullet" :list="listList"&gt;
                &lt;template #customArea="{ scope }"&gt;
                  &lt;base-buttons v-if="scope.item.btn" type="gray" size="small"&gt;{ { scope.item.btn } }&lt;/base-buttons&gt;
                &lt;/template&gt;
              &lt;/base-list&gt;
            </code>
          </pre>
        </highlight-code>
      </li>

      <li class="guide-list">
        <base-list type="bullet small" :list="listList">
          <template #customArea="{ scope }">
            <base-buttons v-if="scope.item.btn" type="text">
              {{ scope.item.btn }}
            </base-buttons>
          </template>
        </base-list>
      </li>
      <li class="guide-code">
        <highlight-code lang="vue">
          <pre>
            <code>
              &lt;base-list type="bullet small" :list="listList"&gt;
                &lt;template #customArea="{ scope }"&gt;
                  &lt;base-buttons v-if="scope.item.btn" type="text"&gt;{ { scope.item.btn } }&lt;/base-buttons&gt;
                &lt;/template&gt;
              &lt;/base-list&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>리스트 dash</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-list type="dash" :list="listList">
          <template #customArea="{ scope }">
            <base-buttons v-if="scope.item.btn" type="text">
              {{ scope.item.btn }}
            </base-buttons>
          </template>
        </base-list>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-list type="dash" :list="listList"&gt;
                &lt;template #customArea="{ scope }"&gt;
                  &lt;base-buttons v-if="scope.item.btn" type="text"&gt;{ { scope.item.btn } }&lt;/base-buttons&gt;
                &lt;/template&gt;
              &lt;/base-list&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>리스트 링크</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-list type="dash" :list="listListLink" :link="true" />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-list type="dash" :list="listListLink" :link="true" /&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>라인타입 리스트 - 기본</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-list type="line" :list="listListLink" />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-list type="line" :list="listListLink" /&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>라인타입 리스트 - 텍스트 + item + top 짙은 라인</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-list type="line line-bold" :list="listListLine2">
          <template #customArea="{ scope }">
            <base-buttons size="small" type="gray" plain>
              {{ scope.item.btnTitle }}
              <i class="listen" />
            </base-buttons>
          </template>
        </base-list>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-list type="line line-bold" :list="listListLine2"&gt;
                &lt;template #customArea="{ scope }"&gt;
                  &lt;base-buttons size="small" type="gray" plain&gt;
                    { { scope.item.btnTitle } }
                    &lt;i class="listen" /&gt;
                  &lt;/base-buttons&gt;
                &lt;/template&gt;
              &lt;/base-list&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>라인타입 리스트 - 링크</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-list type="line" :list="listListLink" :link="true" />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-list type="line" :list="listListLink" :link="true" /&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>라인타입 리스트 - 라디오 타입</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-list type="line line-bold" :list="listListLine3">
          <template #customArea="{ scope }">
            <base-radio
              v-model="selectRadio"
              type="check"
              :label="scope.item.title"
              border
            />
          </template>
        </base-list>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-list type="line line-bold" :list="listListLine3"&gt;
                &lt;template #customArea="{ scope }"&gt;
                  &lt;base-radio v-model="selectRadio" type="check" :label="scope.item.title" border /&gt;
                &lt;/template&gt;
              &lt;/base-list&gt;
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
    return {
      listList: [
        {
          content: '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
        },
        {
          content:
            '본문내용이 들어온다면 정해진 아이템\n <>내에서 사용해야 합니다'
        },
        {
          btn: '버튼',
          content: '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
        }
      ],

      listListLink: [
        {
          link: '/pc',
          content: '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
        },
        {
          link: '/mob',
          content: '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
        }
      ],

      listListLine2: [
        {
          btnTitle: '청취',
          content: '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
        },
        {
          btnTitle: '청취',
          content: '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
        }
      ],

      selectRadio: 1,
      listListLine3: [
        {
          title: '10점',
          content: '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
        },
        {
          title: '9점',
          content: '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
        },
        {
          title: '8점',
          content: '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
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
