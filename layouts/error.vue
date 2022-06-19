<template>
  <div class="error">
    <h1>에러페이지</h1>
    <div>
      {{ errorText }}
    </div>
  </div>
</template>
<script>
export default {
  props: ['error'],
  computed: {
    errorText() {
      let text = ''
      switch (this.error.statusCode) {
        case 400:
          text = 'Bad Request'
          break
        case 401:
          text = '인증되지 않은 사용자입니다.'
          break
        case 404:
          text = '페이지를 찾을 수 없습니다.'
          break
        case 500:
          text = 'Server Error'
          break
        default:
          text = 'etc Error...'
          break
      }
      return text
    }
  }
}
</script>
<style lang="scss" scoped>
.error {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  h1 {
    font-size: 2.4rem;
    font-weight: bold;
  }
}
</style>
