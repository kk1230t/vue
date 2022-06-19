<template>
  <div class="tooltip">
    <template v-if="!utilButton">
      <el-popover
        v-bind="$attrs"
        v-model="visible"
        :popper-class="type"
        v-on="$listeners"
      >
        <base-buttons slot="reference" icon-only class="open-btn" :class="type">
          <i v-if="true" class="icon-tooltip" />
          <i v-else class="icon-Tooltip">
            <span class="path1" />
            <span class="path2" />
          </i>
        </base-buttons>
        <base-buttons icon="close" only-icon @click="visible = false" />
        <slot name="content" />
      </el-popover>
    </template>
    <template v-else>
      <base-buttons
        slot="reference"
        type="reset"
        icon-only
        class="open-btn"
        :class="type"
        @click="drawer = true"
      >
        <i v-if="true" class="icon-tooltip" />
        <i v-else class="icon-Tooltip">
          <span class="path1" />
          <span class="path2" />
        </i>
      </base-buttons>
      <base-drawer
        mob
        :size="size"
        :visible.sync="drawer"
        :title="title"
        header-type="type1"
        positive-button="확인"
        @onPositive="confirm"
      >
        <template #content>
          <slot name="content" />
        </template>
      </base-drawer>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: ''
    },
    utilButton: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '30%'
    }
  },
  data() {
    return {
      visible: false,
      drawer: false
    }
  },
  computed: {
    type() {
      return `mode--${this.mode}`
    }
  },
  methods: {
    confirm() {
      this.drawer = false
      this.$emit('confirm')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/components/tooltip';
</style>
