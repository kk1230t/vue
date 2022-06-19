<template>
  <el-radio
    :class="type != '' ? `el-radio--${type}` : ''"
    :label="label"
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
    },
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/radio';
</style>
