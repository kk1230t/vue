<template>
  <div :class="[type ? 'terms-type--' + type : '']">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.terms-type{
  &--title{
    font-size: $--font-size-big-large;
    font-weight: $--font-weight-medium;
    color: $--color-tertiary;
    margin-bottom: 32px;
  }
  &--subtitle{
    font-size: $--font-size-medium;
    font-weight: $--font-weight-medium;
    color: $--color-tertiary;
    margin-top: 12px;
  }
  &--desc{
    font-size: $--font-size-medium;
    font-weight: $--font-weight-default;
    color: $--color-darkgray;
    margin-top: 12px;
    & + &{
      margin-top: 8px;
    }
  }
  &--lineTitle{
    font-size: $--font-size-large;
    font-weight: $--font-weight-medium;
    color: $--color-tertiary;

    margin-top: 24px;
    padding-bottom: 12px;
    border-bottom: 1px solid $--color-darkgray;
  }
  &--onlyTitle{
    font-size: $--font-size-large;
    font-weight: $--font-weight-medium;
    color: $--color-tertiary;

    margin-top: 24px;
    margin-bottom: 12px;
  }
  &--boldText{
    font-size: $--font-size-big-large;
    font-weight: $--font-weight-medium;
    color: $--color-darkgray;
    margin-top: 8px;
  }
  &--bullet{
    position: relative;
    padding-left: 1rem;
    letter-spacing: -1px;
    & + & {
      margin-top: 8px;
    }
    &::before {
      position: absolute;
      left: 0;
      top: 1.1rem;
      width: 0.4rem;
      height: 0.4rem;
      background-color: #565c63;
      border-radius: 50%;
      content: '';
    }
  }
}
</style>
