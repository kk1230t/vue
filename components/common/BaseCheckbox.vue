<template>
  <el-checkbox
    :class="type != '' ? `el-checkbox--${type}` : ''"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/checkbox';
</style>
