<template>
  <div class="progress">
    <template v-if="timer">
      <el-progress
        v-bind="$attrs"
        :format="format"
        class="progress-timer"
        :class="{ type2: colorType === true }"
        v-on="$listeners"
      />
    </template>
    <template v-else>
      <el-progress
        v-bind="$attrs"
        :format="format"
        :class="{ type2: colorType === true }"
        v-on="$listeners"
      />
      <span class="progress-all"> {{ maxPercentage }} </span>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    colorType: {
      type: Boolean,
      default: false
    },
    maxPercentage: {
      type: Number,
      default: 10
    },
    timer: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    format(percentage) {
      // return percentage === 100 ? 'Full' : `${percentage}%`;
      const maxPercentage = 10
      const result = Math.floor(percentage / maxPercentage) < 10

      if (result) {
        return `0${Math.floor(percentage / maxPercentage)}` /// ${maxPercentage}`
      } else {
        return `${Math.floor(percentage / maxPercentage)}` /// ${maxPercentage}`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/step';
</style>
