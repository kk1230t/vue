<template>
  <div
    class="c-title"
    :class="[{ 'button-top': buttonTop }, { 'is-count': count },{center:center}]"
  >
    <div class="c-title_content">
      <div v-if="isExistLabel" class="c-title_text">
        <slot name="label" />
      </div>
      <h3 class="c-title_title" :class="[size, `fs-${fsize}`]">
        <i v-if="hasIcon" class="c-title_icon" :class="hasIcon" />
        <template v-if="to">
          <nuxt-link :to="to" class="c-title_link">
            <span>{{ title }} </span>
            <i class="link-icon icon-ArrowR type-arrow" />
          </nuxt-link>
        </template>
        <template v-else>
          <span v-if="isBr" v-nl2br>{{ title }}</span>
          <span v-else>{{ title }}</span>
        </template>
      </h3>
      <div v-if="isExistCont" class="c-title_text">
        <slot name="subContent" />
      </div>
    </div>
    <div v-if="isExistBtn" class="btn-area">
      <slot name="btnArea" />
    </div>
    <slot name="rightContent" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    hasIcon: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    fsize: {
      type: String,
      default: ''
    },
    buttonTop: {
      type: Boolean,
      default: false
    },
    titleLink: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: ''
    },
    count: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    isBr: {
      type: Boolean,
      default: false
    }

  },

  computed: {
    isExistLabel() {
      return !!this.$slots.label
    },

    isExistCont() {
      return !!this.$slots.subContent
    },

    isExistBtn() {
      return !!this.$slots.btnArea
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/titles';
</style>
