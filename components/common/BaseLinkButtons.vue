<template>
  <nuxt-link
    class="el-button"
    :class="[typeString, size != '' ? `el-button--${size}` : '' ,{ 'el-button--icon': onlyIcon }, {'full': full},{'half': half},{'el-button--text-icon' : textIcon}, {'is-plain' : plain}, {'is-round' : round}, {'is-disabled': disabled},{bold:bold}]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <i v-if="icon" :class="icon" />
    <span>
      <slot />
    </span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    linkUrl: {
      type: String,
      default: ''
    },
    onlyIcon: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    textIcon: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    half: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    bold: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    typeString() {
      return `el-button--${this.type}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/buttons';
</style>
