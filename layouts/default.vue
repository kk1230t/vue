<template>
  <div class="l-wrap">
    <base-header />
    <div v-loading="isLoading" class="l-container">
      <nuxt />
    </div>
    <!-- <base-footer /> -->
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import { mapMutations } from 'vuex'
const BaseHeader = () => import('@/components/layouts/BaseHeader')
// const BaseFooter = () => import('@/components/layouts/BaseFooter')
export default {
  name: 'DefaultLayouts',
  components: {
    BaseHeader
    // BaseFooter
  },
  data() {
    return {
      isLoading: false,
      uuid: null
    }
  },
  created() {
    this.$nuxt.$on('onLoading', this.onLoading)
  },
  async mounted() {
    // 최초 로드시 uuid 생성 및 셋팅
    if (!sessionStorage.getItem('uuidv4')) {
      this.uuid = await uuidv4()
      await sessionStorage.setItem('uuidv4', this.uuid)
      await this.setUuid(this.uuid)
    } else {
      await this.setUuid(this.uuid)
    }
  },
  methods: {
    ...mapMutations('authStore', ['setUuid']),
    onLoading(loading = false) {
      this.isLoading = loading
    }
  }
}
</script>

<style lang="scss">
.l {
  &-wrap {
    height: 100vh;
  }
  &-container {
    padding:54px 0 0;
    width: 100%;
    min-height: 100%;
    overflow: auto;
  }
}
</style>
