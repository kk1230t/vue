<template>
  <div class="el-radio-wrap">
    <el-radio-group
      ref="radioGroup"
      v-bind="$attrs"
      v-model="selectedValue"
      :class="type"
      v-on="$listeners"
      @change="onChange"
    >
      <el-radio-button
        v-for="item in list"
        :key="item.value"
        :label="item.value"
        :disabled="item.disabled"
      >
        <slot :scope="item">
          {{ item.label }}
        </slot>
      </el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    list: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selectedValue: this.$attrs.value,
      selectedLabel: undefined
    }
  },
  watch: {
    selectedValue(newVal) {
      this.selectedLabel = this.list.filter(e => e.value === newVal)[0].label
    }
  },

  methods: {
    onChange() {
      this.$emit('onChange', this.selectedValue, this.selectedLabel)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/radioButtons.scss';
</style>
