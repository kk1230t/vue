<template>
  <div :class="{ 'header-scroll': isScroll }" class="steps-wrap">
    <el-steps ref="steps" v-bind="$attrs" v-on="$listeners">
      <el-step v-for="(item, index) in list" :key="index" :title="item.title" />
    </el-steps>

    <base-titles v-if="showTitle" :title="list[$attrs.active].title" fsize="24">
      <template v-if="!isScroll" #subContent>
        <p class="c-title_sub">
          <!-- <span v-nl2br>{{ list[$attrs.active].subtitle }}</span> -->
          <template v-if="list[$attrs.active].customArea">
            <slot name="content" />
          </template>
          <span v-else>{{ list[$attrs.active].subtitle }}</span>
        </p>
      </template>
    </base-titles>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    isScroll: {
      type: Boolean,
      default: false
    },
    showTitle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      title: '',
      subtitle: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/step';
</style>
