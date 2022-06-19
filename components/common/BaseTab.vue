<template>
  <el-tabs v-bind="$attrs" :class="[{'full-type' : fulltype},{'fixed':fixed}]" v-on="$listeners">
    <el-tab-pane
      v-for="(item, index) in tabList"
      :key="index"
      :label="item.label"
      :name="item.name"
      lazy
    >
      {{ type }}
      <slot name="tabContents" />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  props: {
    fulltype: { type: Boolean, default: false },
    tabList: {
      type: Array,
      default: () => []
    },
    fixed: {
      type: Boolean, default: false
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/tab';
.el-tabs{
  &.full-type{
    ::v-deep .el-tabs__nav {
    display: flex;
    width: 100%;

    .el-tabs__item {
      flex: 1;
      padding: 1.7rem 0 !important;
    }
  }
  }
}

</style>
