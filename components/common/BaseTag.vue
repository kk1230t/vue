<template>
  <el-tag v-bind="$attrs" size="small" v-on="$listeners">
    {{ tagTitle }}
  </el-tag>
</template>

<script>
export default {
  name: 'TagComponent',
  props: {
    tagTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/tag';
</style>
