<template>
  <div class="l-content ">
    <div class="l-section gap-both" />
    <button @click="test">
      로딩 실행 시키기
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
  },
  data() {
    return {
      items: {
        type: 'system',
        title: `보다 나은
서비스 제공을 위해
시스템 점검 중 입니다.`

      }

    }
  },
  computed: {
    ...mapState('commonStore', ['nowLoadingBar'])
  },

  methods: {
    ...mapMutations('commonStore', ['showLoadingBar']),
    test() {
      this.showLoadingBar()
    }

  }

}
</script>

<style></style>
