<template>
  <div class="login">
    <div class="login_form">
      <div>
        <label for="login_id">아이디</label>
        <input
          id="login_id"
          v-model="form.username"
          type="text"
          placeholder="아이디를 입력해주세요"
        >
      </div>
      <div>
        <label for="login_pw">비밀번호</label>
        <input
          id="login_pw"
          v-model="form.password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        >
      </div>
      <button type="button" @click="onSubmit">
        로그인
      </button>
    </div>
    <div class="data">
      <base-titles fsize="24" title="Cognito idToken" />
      <textarea v-model="idToken" cols="30" rows="10" />
    </div>
    <div class="data">
      <base-titles fsize="24" title="UUID" />
      <base-input v-model="uid" />
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import { memberService } from '~/api/services'
export default {
  data() {
    return {
      form: {
        username: 'membertest',
        password: 'P@sswd12',
        idvrfWayCd: '08'
      },
      idToken: null
    }
  },
  computed: {
    ...mapState({
      uuid: state => state.authStore.uuid
    }),
    uid() {
      return this.uuid || sessionStorage.getItem('uuidv4')
    }
  },
  mounted() {},
  methods: {
    ...mapMutations('authStore', ['setTokenInfo']),
    async onSubmit() {
      this.$nuxt.$emit('onLoading', true)
      try {
        const res = await memberService.postMemberLogin(this.form)
        this.idToken = res.data.token.idToken

        sessionStorage.setItem('token', this.idToken)
        sessionStorage.setItem('refreshToken', res.data.token.refreshToken)
        this.setTokenInfo(res.data.token)

        this.$nuxt.$emit('onLoading', false)
      } catch (error) {
        console.log(error)
        this.$nuxt.$emit('onLoading', false)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &_form {
    width: 320px;
    > div {
      display: flex;
      margin-bottom: 10px;
    }
  }
  label {
    width: 100px;
  }
  .data {
    width: 90%;
    textarea {
      width: 100%;
      height: 220px;
      padding: 10px;
      resize: none;
    }
  }
}
</style>
