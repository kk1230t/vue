<template>
  <div>
    <p class="guide-title">
      <span>메세지박스 info</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-messagebox :box="boxInfo" />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code> &lt;base-messagebox :box="boxInfo" /&gt; </code>
          </pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>메세지박스 tootip</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-messagebox plain :box="boxTooltip" />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code> &lt;base-messagebox :box="boxTooltip" /&gt; </code>
          </pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>메세지박스 error</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-messagebox plain :box="boxError" />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code> &lt;base-messagebox :box="boxError" /&gt; </code>
          </pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>메세지박스 info 배경 있는 유형 </span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-messagebox plain :box="boxInfoBg" />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code> &lt;base-messagebox :box="boxInfoBg" /&gt; </code>
          </pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>메세지박스 라인 있는 유형 </span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-messagebox plain :box="boxInfoBg" />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code> &lt;base-messagebox :box="boxInfoBg" /&gt; </code>
          </pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>메세지박스 tootip 둥근 유형 </span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-messagebox plain :box="boxTooltip" round />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code> &lt;base-messagebox :box="boxTooltip" round /&gt; </code>
          </pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>메세지박스 error 배경 있는 유형 </span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-messagebox :box="boxErrorBg" bg-color />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code> &lt;base-messagebox :box="boxErrorBg" bg-color /&gt; </code>
          </pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>메세지박스 error box-shadow </span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-messagebox :box="boxErrorBg" shadow />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code> &lt;base-messagebox :box="boxErrorBg" shadow /&gt; </code>
          </pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>메세지박스 Accordion </span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-messagebox
          :box="box.accordion"
          :accdian="true"
          :accdian-icon="box.icon"
          :list-content="box.content"
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-messagebox
              :box="box.accordion"
              :accdian="true"
              :accdian-icon="box.icon"
              :list-content="box.content"
               /&gt;
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
      boxInfo: {
        title: '꼭 알아보세요!',
        titleType: 'info',
        listList: [
          {
            content:
              '본문내용이 들어온다면 정해진 아이템 \n내에서 사용해야 합니다'
          },
          {
            content:
              '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
          }
        ],
        btnName: '버튼'
      },
      boxTooltip: {
        title: '꼭 알아보세요!',
        titleType: 'tooltip',
        listList: [
          {
            content:
              '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
          },
          {
            content:
              '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
          }
        ],
        btnName: '버튼'
      },
      boxError: {
        title: '꼭 알아보세요!',
        titleType: 'error',
        listList: [
          {
            content:
              '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
          },
          {
            content:
              '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
          }
        ],
        btnName: '버튼'
      },
      boxInfoBg: {
        title: '꼭 알아보세요!',
        titleType: 'info',
        bgColor: true,
        listList: [
          {
            content:
              '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
          },
          {
            content:
              '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
          }
        ],
        btnName: '버튼'
      },
      boxTooltipBg: {
        title: '꼭 알아보세요!',
        titleType: 'tooltip',
        bgColor: true,
        listList: [
          {
            content:
              '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
          },
          {
            content:
              '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
          }
        ],
        btnName: '버튼'
      },
      boxErrorBg: {
        title: '꼭 알아보세요!',
        titleType: 'error',
        listList: [
          {
            content:
              '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
          },
          {
            content:
              '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
          }
        ],
        btnName: '버튼'
      },
      box: {
        icon: 'icon-Open_line',
        content: true,
        accordion: {
          title: '꼭 알아보세요!',
          titleType: 'error',
          listList: [
            {
              content:
                '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
            },
            {
              content:
                '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
            }
          ],
          btnName: '버튼'
        }
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
