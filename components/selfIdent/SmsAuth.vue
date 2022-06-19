<template>
  <div class="content-box">
    <p class="tit">
      휴대폰번호
    </p>
    <div class="sms-auth">
      <div class="form-wrap">
        <base-input
          v-model="input.default"
          placeholder="010-1234-1234"
        />
        <base-buttons
          :disabled="!input.default"
          type="black"
          size="medium"
          @click="show=!show"
        >
          인증
        </base-buttons>
      </div>

      <template v-if="show">
        <div class="form-wrap">
          <base-input
            v-model="input.value"
          />
          <span class="sms-auth-txt">03:00</span>
        </div>
        <base-buttons
          type="purple"
          size="medium"
          full
          @click="onAlert()"
        >
          인증확인
        </base-buttons>
      </template>
    </div>

    <base-modal
      :show-close="false"
      :visible.sync="alert"
      type="system"
      width="280px"
    >
      <template #content>
        <p class="message">
          {{ alertMsg }}
        </p>
      </template>
      <template #footer>
        <base-buttons type="gray" size="large" @click="alert=false">
          확인
        </base-buttons>
      </template>
    </base-modal>
  </div>
</template>

<script>
export default {
  props: {
    alertMsg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      alert: false,
      input: {
        default: '',
        value: ''
      },
      show: false
    }
  },
  methods: {
    onAlert() {
      this.alert = true
      this.$emit('onAlert')
    }

  }
}
</script>

<style lang="scss" scoped>
.tit {
  color: $--color-darkgray;
}

.sms-auth{
  .form-wrap{
    position: relative;
    display: flex;
    margin: 8px 0;
    & + .form-wrap{
      margin-top: 8px;
      margin-bottom: 12px;
    }
    .el-button {
      margin-left: 0.8rem;
    }
  }
  &-txt{
    display: inline-block;
    position: absolute;
    top: 47%;
    right: 1.2rem;
    transform: translateY(-50%);
    width: auto;
    color: $--color-tertiary-red;
  }
}
</style>
