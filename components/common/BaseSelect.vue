<template>
  <el-select
    v-bind="$attrs"
    :class="type != '' ? `el-select--${type}` : ''"
    v-on="$listeners"
  >
    <el-option
      v-for="item in list"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/select';
</style>
