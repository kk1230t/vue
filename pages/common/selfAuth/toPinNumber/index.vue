<template>
  <div class="l-content">
    <div class="l-section">
      <div class="auth-pin">
        <base-titles fsize="24" center title="간편비밀번호 입력" />
        <div class="number-to-dot">
          <div class="item has-value" />
          <div class="item has-value" />
          <div class="item has-value" />
          <div class="item" />
          <div class="item" />
          <div class="item" />
        </div>
        <div class="choice-auth">
          <base-link-buttons bold to="/" type="text-gray" size="mini">
            다른 방식으로 로그인
          </base-link-buttons>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.auth-pin {
  position: absolute;
  top: 134px;
  left: 32px;
  right: 32px;
  .number-to-dot {
    display: flex;
    justify-content: center;
    margin: 48px 0;
    font-size: 0;
    .item {
      flex:none;
      margin-right: 16px;
      height: 16px;
      width: 16px;
      background-color: #d7d7d7;
      border-radius: 100%;
      &:last-child{
        margin-right: 0;
      }
       &.has-value {
        background-color: #6e27c5;
      }
    }
  }
  .choice-auth{
     display: flex;
    justify-content: center;
  }
}
</style>
