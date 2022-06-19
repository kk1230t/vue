<template>
  <div class="l-approval">
    <div class="approval">
      <base-titles title="승인번호" fsize="16">
        <template #btnArea>
          <base-buttons> 재발급 <i class="icon-Reload" /></base-buttons>
        </template>
      </base-titles>
      <div class="approval-content">
        <p class="approval-number">
          {{ numer }}
        </p>
        <div class="approval-timer">
          <base-step-progress
            timer
            :percentage="percentage"
            class="step-progress-wrap"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numer: 75421277,
      percentage: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.l-approval {
  padding: 20px;
  // border: 1px solid $--color-palegray;
  border: 1px solid #f00;
}
.approval {
  &-number {
    padding: 48px 0;
    text-align: center;
  }
}
</style>
