<template>
  <div class="l-content">
    <div class="l-section gap_top">
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
    </div>

    <!-- <base-input v-model="input.default" placeholder="힌트텍스트" />
      <base-input v-model="input.default" placeholder="힌트텍스트" has-clear append-txt="원"" />
      <base-input v-model="input.has-clear" placeholder="힌트텍스트" has-clear />
      <base-input v-model="input.disabled" placeholder="힌트텍스트" has-clear disabled error />
      <base-input v-model="input.textarea" placeholder="힌트텍스트" type="textarea" maxlength="30" />
      <base-input v-model="input.txt" placeholder="힌트텍스트" has-clear state="num" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: ''
    }
  }
}
</script>
