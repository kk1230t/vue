<template>
  <div class="l-box" :class="type != '' ? `l-box--${type}` : ''">
    <dl v-for="(item, idx) in list" :key="idx" class="box-content">
      <dt class="box-title">
        {{ item.title }}
      </dt>
      <dd class="box-amount">
        {{ item.amount }}
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.l-box{
  display: flex;
  gap: 5px;
  &--gray{
    .box-content{
      background: $--color-palegray;
    }
  }
  .box{
    &-content{
      flex: 1;
      padding: 16px;
      position: relative;
      font: {
        size: $--font-size-x-medium;
        weight: $--font-weight-medium;
      }
      color: $--color-primary;
    }
    &-amount {
      position: absolute;
      top: 50%;
      right: 16px;
      transform: translateY(-50%);
      font-size: $--font-size-big-large;
    }
  }
}
</style>
