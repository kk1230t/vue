<template>
  <el-dialog v-bind="$attrs" :class="type" v-on="$listeners">
    <slot name="content" />
    <div slot="footer" class="el-dialog-footer">
      <slot name="footer" />
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  methods: {
    close() {
      this.$emit('clsoe')
    }
  }

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/modal';
</style>
