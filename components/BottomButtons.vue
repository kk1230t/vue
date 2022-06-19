<template>
  <div
    class="bottom-buttons"
    :class="{ onlynegative: buttons.negative.show && !buttons.positive.show }"
  >
    <template v-if="buttons.negative.show">
      <base-buttons
        type="black"
        size="large"
        class="negative-button"
        @click="hasdleNegative"
      >
        {{ buttons.negative.title }}
      </base-buttons>
    </template>
    <template v-if="buttons.positive.show">
      <base-buttons
        class="positive-button"
        type="navy"
        size="large"
        @click="hasdlePositive"
      >
        {{ buttons.positive.title }}
      </base-buttons>
    </template>
    <template v-if="buttons.disable.show">
      <base-buttons
        class="positive-button"
        type="gray"
        size="large"
      >
        {{ buttons.disable.title }}
      </base-buttons>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    buttons: { type: Object, default: () => {} }
  },
  data() {
    return {}
  },
  methods: {
    hasdleNegative() {
      this.$emit('hasdleNegative')
    },
    hasdlePositive() {
      this.$emit('hasdlePositive')
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-buttons {
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;

  ::v-deep.el-button {
    height: 61px;
    &.positive-button {
      flex: 1;
    }
    &.onlynegative {
      flex: 1;
    }
  }
  &.onlynegative {
    ::v-deep.el-button {
      flex: 1;
    }
  }
}
</style>
