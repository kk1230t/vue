<template>
  <el-collapse v-bind="$attrs" v-on="$listeners">
    <el-collapse-item
      v-for="(item, index) in list"
      :key="index"
      :title="item.title"
      :name="index"
    >
      <template v-if="item.customTitle" #title>
        <slot :name="item.titleName" />
      </template>
      <slot name="contents" :contents="item.contents" />
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/accordion';
</style>
