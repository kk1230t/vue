<template>
  <el-button
    :class="[{ 'el-button--icon': onlyIcon }, {'full': full}, {'half': half}, {'half': half},`title-btn-${rightType}`,{'el-button--text-icon' : textIcon}]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
    <template v-if="rightType === 'close'">
      <i class="icon-Close-1 " />
    </template>
    <template v-if="rightType === 'right'">
      <i class="icon-arrowR-2" />
    </template>
    <template v-if="rightType === 'arrow'">
      <b>버튼</b><i class="icon-ArrowR02" />
    </template>
    <template v-if="rightType === 'home'">
      <i class="icon-Home" />
    </template>
  </el-button>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    onlyIcon: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    half: {
      type: Boolean,
      default: false
    },
    textIcon: {
      type: Boolean,
      default: false
    },
    rightType: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/buttons';
</style>
