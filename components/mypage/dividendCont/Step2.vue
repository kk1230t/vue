<template>
  <div>
    <section class="l-section">
      <base-titles title="계좌정보 입력" count fsize="20" />
      <div class="l-account">
        <P class="account-title">
          지급 계좌 선택
        </P>
        <div class="account-box">
          <span v-if="accountList.length === 0" class="account-empty">
            등록된 계좌가 없습니다.
          </span>
          <template v-else>
            <base-select-button :select="select" :value.sync="selectedValue" />
          </template>
          <base-buttons type="gray-light" full size="medium" icon="icon-Plus">
            계좌 신규 등록
          </base-buttons>
        </div>
      </div>
    </section>

    <div class="l-bottom">
      <base-buttons
        type="navy"
        size="medium"
        full
        :disabled="btnDisabled"
        @click="onStep"
      >
        확인
      </base-buttons>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: '',
      btnDisabled: false,
      accountList: [
        {
          value: 1,
          label: '국민은행 5278******3178 '
        }
      ],
      selectedValue: 1,
      select: {
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
  },
  methods: {
    onStep() {
      this.$emit('onStep')
    }
  }
}
</script>

<style lang="scss" scoped>
.account {
  &-title {
    font-size: $--font-size-medium;
    color: $--color-darkgray;
    padding: {
      top: 28px;
      bottom: 8px;
    }
  }
  &-box {
    ::v-deep {
      .el-button {
        margin-top: 12px;
      }
    }
  }
  &-empty {
    display: block;
    margin-top: 4px;
    padding: 48px 0;
    width: 100%;
    border: 1px solid $--color-palegray;
    text-align: center;
    color: $--color--txt-gray;
    font-size: $--font-size-medium;
  }
}
</style>
