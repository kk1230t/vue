<template>
  <div>
    <p class="guide-title">
      <span>confirm</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-buttons type="primary" @click="dialog.confirm = true">
          confirm
        </base-buttons>
        <base-modal
          :show-close="false"
          :visible.sync="dialog.confirm"
          :close-on-click-modal="false"
          type="system"
          width="280px"
        >
          <template #content>
            <p class="message">
              동의하시겠습니까?
            </p>
          </template>
          <template #footer>
            <div class="btn-group">
              <base-buttons type="gray-light" @click="dialog.confirm = false">
                아니요
              </base-buttons>
              <base-buttons type="gray" @click="dialog.confirm = false">
                네
              </base-buttons>
            </div>
          </template>
        </base-modal>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-buttons type="primary" @click="dialog.confirm = true"&gt;confirm&lt;/base-buttons&gt;

              &lt;base-modal :show-close="false" :visible.sync="dialog.confirm" type="system" width="280px"&gt;
                &lt;template #content&gt;
                  &lt;p class="message"&gt;동의하시겠습니까?&lt;/p&gt;
                &lt;/template&gt;
                &lt;template #footer&gt;
                  &lt;div class="btn-group"&gt;
                    &lt;base-buttons type="gray-light" @click="dialog.confirm = false"&gt;아니요&lt;/base-buttons&gt;
                    &lt;base-buttons type="gray" @click="dialog.confirm = false"&gt;네&lt;/base-buttons&gt;
                  &lt;/div&gt;
                &lt;/template&gt;
              &lt;/base-modal&gt;

               :close-on-click-modal="false" 마스크영역선택시 닫힘 방지
               base-modal 에 속성 추가
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>alert</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-buttons type="primary" @click="dialog.alert = true">
          alert
        </base-buttons>
        <base-modal
          :show-close="false"
          :visible.sync="dialog.alert"
          type="system"
          width="280px"
        >
          <template #content>
            <p class="message">
              동의하시겠습니까?
            </p>
          </template>
          <template #footer>
            <base-buttons
              type="gray"
              size="large"
              @click="dialog.alert = false"
            >
              네
            </base-buttons>
          </template>
        </base-modal>
      </li>
      <li class="guide-list">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-buttons type="primary" @click="dialog.alert = true"&gt;alert&lt;/base-buttons&gt;

              &lt;base-modal :show-close="false" :visible.sync="dialog.alert" type="system" width="280px"&gt;
                &lt;template #content&gt;
                  &lt;p class="message"&gt;동의하시겠습니까?&lt;/p&gt;
                &lt;/template&gt;
                &lt;template #footer&gt;
                  &lt;base-buttons type="gray" size="large" @click="dialog.alert = false"&gt;네&lt;/base-buttons&gt;
                &lt;/template&gt;
              &lt;/base-modal&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>모달 유형 1</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-buttons type="primary" @click="dialog.modal1 = true">
          모달 유형 1 팝업
        </base-buttons>
        <base-modal title="타이틀" :visible.sync="dialog.modal1" width="360px">
          <template #content>
            <h3>blank</h3>
            참고사항 및 컨텐츠 그룹핑에 활용할 경우 사용합니다.
            이 부분에 Head/body 등 컴퍼넌트를 교체하여 사용합니다.
          </template>
          <template #footer>
            <base-buttons
              type="gray"
              size="large"
              @click="dialog.modal1 = false"
            >
              확인
            </base-buttons>
          </template>
        </base-modal>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-buttons type="primary" @click="dialog.modal1 = true"&gt;모달 유형 1 팝업&lt;/base-buttons&gt;

              &lt;base-modal title="타이틀" :visible.sync="dialog.modal1" width="360px"&gt;
                &lt;template #content&gt;
                  &lt;h3&gt;blank&lt;/h3&gt;
                  참고사항 및 컨텐츠 그룹핑에 활용할 경우 사용합니다.
                  이 부분에 Head/body 등 컴퍼넌트를 교체하여 사용합니다.
                &lt;/template&gt;
                &lt;template #footer&gt;
                  &lt;base-buttons type="gray" size="large" @click="dialog.modal1 = false"&gt;확인&lt;/base-buttons&gt;
                &lt;/template&gt;
              &lt;/base-modal&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>모달 유형 2</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-buttons type="primary" @click="dialog.modal3 = true">
          모달 유형 2 팝업
        </base-buttons>
        <base-modal title="타이틀" :visible.sync="dialog.modal3" width="360px">
          <template #content>
            <h3>blank</h3>
            참고사항 및 컨텐츠 그룹핑에 활용할 경우 사용합니다.
            이 부분에 Head/body 등 컴퍼넌트를 교체하여 사용합니다.
          </template>
          <template #footer>
            <div class="btn-group">
              <base-buttons type="gray-light" @click="dialog.modal3 = false">
                아니요
              </base-buttons>
              <base-buttons type="gray" @click="dialog.modal3 = false">
                네
              </base-buttons>
            </div>
          </template>
        </base-modal>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-buttons type="primary" @click="dialog.modal3 = true"&gt;모달 유형 2 팝업&lt;/base-buttons&gt;

              &lt;base-modal title="타이틀" :visible.sync="dialog.modal3" width="360px"&gt;
                &lt;template #content&gt;
                  &lt;h3&gt;blank&lt;/h3&gt;
                  참고사항 및 컨텐츠 그룹핑에 활용할 경우 사용합니다.
                  이 부분에 Head/body 등 컴퍼넌트를 교체하여 사용합니다.
                &lt;/template&gt;
                &lt;template #footer&gt;
                  &lt;div class="btn-group"&gt;
                    &lt;base-buttons type="gray-light" @click="dialog.modal3 = false"&gt;아니요&lt;/base-buttons&gt;
                    &lt;base-buttons type="gray" @click="dialog.modal3 = false"&gt;네&lt;/base-buttons&gt;
                  &lt;/div&gt;
                &lt;/template&gt;
              &lt;/base-modal&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>full 팝업</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-buttons type="primary" @click="dialog.full = true">
          full 팝업
        </base-buttons>
        <base-modal
          title="타이틀"
          :visible.sync="dialog.full"
          type="full"
          top="0"
          width="100%"
        >
          <template #content>
            <h3>blank</h3>
            참고사항 및 컨텐츠 그룹핑에 활용할 경우 사용합니다.
            이 부분에 Head/body 등 컴퍼넌트를 교체하여 사용합니다.
          </template>
          <template #footer>
            <base-buttons
              type="primary"
              size="large"
              @click="dialog.full = false"
            >
              확인
            </base-buttons>
          </template>
        </base-modal>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-buttons type="primary" @click="dialog.full = true"&gt;full 팝업&lt;/base-buttons&gt;

              &lt;base-modal title="타이틀" :visible.sync="dialog.full" type="full" top="0" width="100%"&gt;
                &lt;template #content&gt;
                  &lt;h3&gt;blank&lt;/h3&gt;
                  참고사항 및 컨텐츠 그룹핑에 활용할 경우 사용합니다.
                  이 부분에 Head/body 등 컴퍼넌트를 교체하여 사용합니다.
                &lt;/template&gt;
                &lt;template #footer&gt;
                  &lt;base-buttons type="primary" size="large" @click="dialog.full = false"&gt;확인&lt;/base-buttons&gt;
                &lt;/template&gt;
              &lt;/base-modal&gt;
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
      dialog: {
        confirm: false,
        alert: false,
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
        full: false
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
