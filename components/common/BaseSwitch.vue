<template>
  <el-switch v-bind="$attrs" :width="width" v-on="$listeners" />
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 44
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/switch';
</style>
