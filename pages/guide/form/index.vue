<template>
  <div>
    <p class="guide-title">
      <span>Input</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <div class="input-form-label">
          <div class="input-form-label_wrap">
            <span class="label-tit">항목명</span>
            <base-tooltip title="Title" mode="skygray " placement="bottom">
              <template #content>
                <span v-nl2br> 내용을 전달합니다.\n 내용을 전달합니다. </span>
              </template>
            </base-tooltip>
          </div>
        </div>
        <div class="input-form">
          <base-input v-model="pageTitle" has-clear placeholder="힌트텍스트" />
        </div>

        <div class="input-form-label">
          <div class="input-form-label_wrap">
            <span class="label-tit">항목명</span>
            <base-tooltip title="Title" mode="skygray " placement="bottom">
              <template #content>
                <span v-nl2br> 내용을 전달합니다.\n 내용을 전달합니다. </span>
              </template>
            </base-tooltip>
          </div>
          <div class="input-form-label_wrap">
            <span class="label-tit">항목명</span>
            <base-tooltip title="Title" mode="skygray " placement="bottom">
              <template #content>
                <span v-nl2br> 내용을 전달합니다.\n 내용을 전달합니다. </span>
              </template>
            </base-tooltip>
          </div>
        </div>
        <div class="input-form">
          <base-input v-model="pageTitle" placeholder="힌트텍스트" has-clear />
          <base-input v-model="pageTitle" placeholder="힌트텍스트" has-clear />
        </div>
        <div class="input-form">
          <base-input
            v-model="pageTitle"
            placeholder="힌트텍스트"
            has-clear
            append-txt="원"
            error-txt="오류메세지"
          />
        </div>
        <div class="input-form">
          <base-input
            v-model="pageTitle"
            placeholder="힌트텍스트"
            has-clear
            append-txt="원"
            is-error
            error-txt="오류메세지"
          />
        </div>
        <div class="input-form">
          <base-input
            v-model="pageTitle"
            placeholder="힌트텍스트"
            has-clear
            append-txt="원"
            disabled
            error-txt="오류메세지"
          />
        </div>
        <div class="input-form">
          <base-input
            v-model="pageTitle"
            type="textarea"
            placeholder="힌트텍스트"
          />
        </div>
        <div class="input-form">
          <base-input
            v-model="pageTitle"
            type="textarea"
            placeholder="힌트텍스트"
            disabled
          />
        </div>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
               &lt;div class="input-form-label"&gt;
        &lt;div class="input-form-label_wrap"&gt;
          &lt;span class="label-tit"&gt;항목명&lt;/span&gt;
          &lt;base-tooltip title="Title" mode="skygray " placement="bottom"&gt;
            &lt;template #content&gt;
              &lt;span v-nl2br&gt; 내용을 전달합니다.\n 내용을 전달합니다. &lt;/span&gt;
            &lt;/template&gt;
          &lt;/base-tooltip&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="input-form"&gt;
        &lt;base-input v-model="pageTitle" has-clear placeholder="힌트텍스트" /&gt;
      &lt;/div&gt;

      &lt;div class="input-form-label"&gt;
        &lt;div class="input-form-label_wrap"&gt;
          &lt;span class="label-tit"&gt;항목명&lt;/span&gt;
          &lt;base-tooltip title="Title" mode="skygray " placement="bottom"&gt;
            &lt;template #content&gt;
              &lt;span v-nl2br&gt; 내용을 전달합니다.\n 내용을 전달합니다. &lt;/span&gt;
            &lt;/template&gt;
          &lt;/base-tooltip&gt;
        &lt;/div&gt;
        &lt;div class="input-form-label_wrap"&gt;
          &lt;span class="label-tit"&gt;항목명&lt;/span&gt;
          &lt;base-tooltip title="Title" mode="skygray " placement="bottom"&gt;
            &lt;template #content&gt;
              &lt;span v-nl2br&gt; 내용을 전달합니다.\n 내용을 전달합니다. &lt;/span&gt;
            &lt;/template&gt;
          &lt;/base-tooltip&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="input-form"&gt;
        &lt;base-input v-model="pageTitle" placeholder="힌트텍스트" has-clear /&gt;
        &lt;base-input v-model="pageTitle" placeholder="힌트텍스트" has-clear /&gt;
      &lt;/div&gt;
      &lt;div class="input-form"&gt;
        &lt;base-input
          v-model="pageTitle"
          placeholder="힌트텍스트"
          has-clear
          append-txt="원"
          error-txt="오류메세지"
        /&gt;
      &lt;/div&gt;
      &lt;div class="input-form"&gt;
        &lt;base-input
          v-model="pageTitle"
          placeholder="힌트텍스트"
          has-clear
          append-txt="원"
          is-error
          error-txt="오류메세지"
        /&gt;
      &lt;/div&gt;
      &lt;div class="input-form"&gt;
        &lt;base-input
          v-model="pageTitle"
          placeholder="힌트텍스트"
          has-clear
          append-txt="원"
          disabled
          error-txt="오류메세지"
        /&gt;
      &lt;/div&gt;
      &lt;div class="input-form"&gt;
        &lt;base-input
          v-model="pageTitle"
          type="textarea"
          placeholder="힌트텍스트"
        /&gt;
      &lt;/div&gt;
      &lt;div class="input-form"&gt;
        &lt;base-input
          v-model="pageTitle"
          type="textarea"
          placeholder="힌트텍스트"
          disabled
        /&gt;
      &lt;/div&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>스위치</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-switch v-model="switchVa1" />
        <base-switch v-model="switchVa1d" disabled />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-switch v-model="switchVa1" /&gt;
              &lt;base-switch v-model="switchVa1d" disabled /&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>라디오</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-radio v-model="radioVal" label="라디오1" />
        <base-radio v-model="radioVal" label="라디오2" />
        <base-radio v-model="radioVal" label="라디오3" disabled />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-radio v-model="radioVal" label="라디오1" /&gt;
              &lt;base-radio v-model="radioVal" label="라디오2" /&gt;
              &lt;base-radio v-model="radioVal" label="라디오3" disabled /&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-radio v-model="radioVald" type="check" label="라디오1" />
        <base-radio v-model="radioVald" type="check" label="라디오2" />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-radio v-model="radioVald" type="check" label="라디오1" /&gt;
              &lt;base-radio v-model="radioVald" type="check" label="라디오2" /&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>라디오버튼</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-radio-buttons v-model="radioBtn" :list="radioBtn.list" />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-radio-buttons v-model="radioBtn.value" :list="radioBtn.list" /&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-radio-buttons
          v-model="radioBtn2.value"
          :list="radioBtn2.list"
          type="flex"
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-radio-buttons v-model="radioBtn2.value" :list="radioBtn2.list" type="flex" /&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>체크박스</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-checkbox v-model="check" />
        <base-checkbox v-model="check1" disabled />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-checkbox v-model="check" /&gt;
              &lt;base-checkbox v-model="check1" disabled /&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>셀렉트박스</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-select
          v-model="select.value"
          :list="select.list"
          placeholder="선택해주세요"
        />
        <base-select
          v-model="select.value"
          :list="select.list"
          placeholder="선택해주세요"
          disabled
        />
        <base-select
          v-model="select.value"
          :list="select.list"
          placeholder="선택해주세요"
          type="text"
        />
        <base-select
          v-model="select.value"
          :list="select.list"
          placeholder="선택해주세요"
          type="text"
          size="large"
        />
        <base-select
          v-model="select.value"
          :list="select.list"
          placeholder="선택해주세요"
          type="text"
          size="medium"
        />
        <base-select
          v-model="select.value"
          :list="select.list"
          placeholder="선택해주세요"
          type="text"
          size="medium-x"
        />
        <base-select
          v-model="select.value"
          :list="select.list"
          placeholder="선택해주세요"
          type="text"
          size="small"
        />
        <base-select
          v-model="select.value"
          :list="select.list"
          placeholder="선택해주세요"
          type="text"
          size="mini"
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-select v-model="select.value" :list="select.list" placeholder="선택해주세요" /&gt;
              &lt;base-select v-model="select.value" :list="select.list" placeholder="선택해주세요" disabled /&gt;
              &lt;base-select v-model="select.value" :list="select.list" placeholder="선택해주세요" type="text" /&gt;
              &lt;base-select v-model="select.value" :list="select.list" placeholder="선택해주세요" type="text" size="large" /&gt;
              &lt;base-select v-model="select.value" :list="select.list" placeholder="선택해주세요" type="text" size="medium" /&gt;
              &lt;base-select v-model="select.value" :list="select.list" placeholder="선택해주세요" type="text" size="medium-x" /&gt;
              &lt;base-select v-model="select.value" :list="select.list" placeholder="선택해주세요" type="text" size="small" /&gt;
              &lt;base-select v-model="select.value" :list="select.list" placeholder="선택해주세요" type="text" size="mini" /&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>모바일 셀렉트 박스</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-select-button
          :select="mobSelect"
          :value.sync="mobSelectedValue"
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
            &lt;base-select-button :select="mobSelect" :value.sync="mobSelectedValue" /&gt;
            </code>
         </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>datepicker</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-date-picker
          v-model="date.ranges"
          type="daterange"
          align="right"
          start-placeholder="사직일"
          end-placeholder="종료일"
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-date-picker v-model="date.ranges" type="daterange" align="right" start-placeholder="사직일" end-placeholder="종료일" /&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>2개 유형</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <div class="form-area_list">
          <base-select
            v-model="type2.value"
            :list="type2.list"
            placeholder="선택해주세요"
          />
          <base-select
            v-model="type2.value2"
            :list="type2.list"
            placeholder="선택해주세요"
          />
        </div>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;div class="form-area_list"&gt;
                  &lt;base-select v-model="type2.value" :list="type2.list" placeholder="선택해주세요" /&gt;
                  &lt;base-select v-model="type2.value2" :list="type2.list" placeholder="선택해주세요" /&gt;
              &lt;/div&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <div class="form-area_list">
          <base-input v-model="type2.inp" placeholder="선택해주세요" />
          <base-input v-model="type2.inp2" placeholder="선택해주세요" />
        </div>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;div class="form-area_list"&gt;
                  &lt;base-input v-model="type2.inp" placeholder="선택해주세요" /&gt;
                  &lt;base-input v-model="type2.inp2" placeholder="선택해주세요" /&gt;
              &lt;/div&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>3개 유형</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <div class="form-area_list">
          <base-select
            v-model="type3.value"
            :list="type3.list"
            placeholder="선택해주세요"
          />
          <base-select
            v-model="type3.value2"
            :list="type3.list"
            placeholder="선택해주세요"
          />
          <base-select
            v-model="type3.value3"
            :list="type3.list"
            placeholder="선택해주세요"
          />
        </div>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;div class="form-area_list"&gt;
                  &lt;base-select v-model="type3.value" :list="type3.list" placeholder="선택해주세요" /&gt;
                  &lt;base-select v-model="type3.value2" :list="type3.list" placeholder="선택해주세요" /&gt;
                  &lt;base-select v-model="type3.value3" :list="type3.list" placeholder="선택해주세요" /&gt;
              &lt;/div&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <div class="form-area_list">
          <base-input v-model="type3.inp" placeholder="선택해주세요" />
          <base-input v-model="type3.inp2" placeholder="선택해주세요" />
          <base-input v-model="type3.inp3" placeholder="선택해주세요" />
        </div>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;div class="form-area_list"&gt;
                &lt;base-input v-model="type3.inp" placeholder="선택해주세요" /&gt;
                &lt;base-input v-model="type3.inp2" placeholder="선택해주세요" /&gt;
                &lt;base-input v-model="type3.inp3" placeholder="선택해주세요" /&gt;
              &lt;/div&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>연락처 유형</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <div class="form-area_list type2" :class="isACtive ? 'is-active' : ''">
          <base-select
            v-model="tel.value"
            :list="tel.list"
            placeholder="선택해주세요"
          />
          <base-input v-model="tel.value1" placeholder="선택해주세요" />
          <base-input v-model="tel.value2" placeholder="선택해주세요" />
        </div>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;div class="form-area_list type2" :class="isACtive ? 'is-active' : ''" &gt;
                &lt;base-select v-model="tel.value" :list="tel.list" placeholder="선택해주세요" /&gt;
                &lt;base-input v-model="tel.value1" placeholder="선택해주세요" /&gt;
                &lt;base-input v-model="tel.value2" placeholder="선택해주세요" /&gt;
              &lt;/div&gt;
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
      pageTitle: '',
      input: {
        default: '',
        hasclear: '',
        disabled: 'disabeld',
        textarea: '',
        txt: ''
      },
      switchVa1: true,
      switchVa1d: false,
      radioVal: '라디오1',
      radioVald: '라디오1',
      check: false,
      check1: true,

      radioBtn: {
        value: '1',
        list: [
          {
            label: '선택1',
            value: '1',
            disabled: false
          },
          {
            label: '선택2',
            value: '2',
            disabled: false
          },
          {
            label: '선택3',
            value: '3',
            disabled: true
          }
        ]
      },

      radioBtn2: {
        value: '1',
        list: [
          {
            label: '선택1',
            value: '1'
          },
          {
            label: '선택2',
            value: '2'
          },
          {
            label: '선택3',
            value: '3'
          }
        ]
      },

      select: {
        value: '',
        list: [
          {
            value: 1,
            label: 'option1'
          },
          {
            value: 2,
            label: 'option1'
          }
        ]
      },

      date: {
        ranges: ''
      },

      type2: {
        value: '',
        value2: '',
        inp: '',
        inp2: '',
        list: [
          {
            value: 1,
            label: 'option1'
          },
          {
            value: 2,
            label: 'option1'
          }
        ]
      },

      type3: {
        value: '',
        value2: '',
        value3: '',
        inp: '',
        inp2: '',
        inp3: '',
        list: [
          {
            value: 1,
            label: 'option1'
          },
          {
            value: 2,
            label: 'option1'
          }
        ]
      },

      tel: {
        value: '',
        value2: '',
        value3: '',
        list: [
          {
            value: 1,
            label: '010'
          },
          {
            value: 2,
            label: '011'
          }
        ]
      },

      isACtive: false,
      ruleForm: {
        inpVal: '',
        selectVal: ''
      },

      rules: {
        inpVal: [{ required: true, message: '오류메세지', trigger: 'blur' }],
        selectVal: [{ required: true, message: '오류메세지', trigger: 'blur' }]
      },
      mobSelectedValue: 1,
      mobSelect: {
        title: '계좌선택',
        list: [
          {
            value: 1,
            label: '기업은행 0075******8405'
          },
          {
            value: 2,
            label: '국민은행 5278******3178'
          },
          {
            value: 3,
            label: '우리은행 0075******8405'
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
