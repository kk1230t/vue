<template>
  <div>
    <base-modal
      title="계좌번호 입력"
      :visible="accountFull"
      type="full"
      top="0"
      width="100%"
      @close="enterAccountEvent()"
    >
      <template #content>
        <div class="form_box l-section">
          <div class="title">
            은행 선택
          </div>
          <div class="contents">
            <div class="form_item">
              <base-buttons v-model="bankName" type="sky-gray" size="medium" plain full>
                은행 선택
              </base-buttons>
              <!-- <base-select-button v-model="bankName" :select="bankSelect" :value.sync="bankSelectedValue" /> -->
              <!-- 금융사 선택(/common/financial) 연결 -->
            </div>
          </div>
          <div class="title">
            계좌번호 입력
          </div>
          <div class="contents">
            <div class="form_item">
              <base-input v-model="accountNumber" placeholder="숫자만 입력" />
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <base-buttons
          type="primary"
          size="large"
          @click="enterAccountEvent()"
        >
          확인
        </base-buttons>
      </template>
    </base-modal>
  </div>
</template>

<script>
export default {
  props: {
    accountFull: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      accountNumber: ''
    }
  },
  methods: {
    enterAccountEvent() {
      this.$emit('update:accountFull', false)
      this.$emit('onChange', {
        accountNumber: this.accountNumber,
        bankName: this.bankName
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.form_box{
    padding-top: 3.2rem;
}
</style>
