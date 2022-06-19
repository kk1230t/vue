<template>
  <div
    class="input-wrap"
    :class="{'has-both': hasClear && appendTxt}"
    @mouseleave="isFocus=false"
  >
    <el-input
      v-bind="$attrs"
      ref="ref"
      :class="[{'error':isError},{'focus':isFocus},{'has-append':appendTxt},]"
      v-on="$listeners"
      @focus="isFocus = true"
    />
    <template v-if="appendTxt">
      <div class="append-txt">
        {{ appendTxt }}
      </div>
    </template>
    <template v-if="hasClear &&isFocus">
      <div class="clear-btn">
        <base-buttons
          type="reset"
          @click.prevent="handleClear"
        >
          <span class="icon-Delete"><span class="path1" /><span class="path2" /></span>
        </base-buttons>
      </div>
    </template>
    <template v-if="errorTxt">
      <div class="error-txt">
        {{ errorTxt }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {

    state: {
      type: String,
      default: ''
    },
    appendTxt: {
      type: String,
      default: ''
    },
    hasClear: {
      type: Boolean,
      default: false
    },
    isError: {
      type: Boolean,
      default: false
    },
    errorTxt: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isFocus: false,
      value: this.$attrs.vlaue,
      resetBtn: false
    }
  },
  methods: {
    handleClear() {
      this.$refs.ref.clear()
    }

  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/input';
</style>
