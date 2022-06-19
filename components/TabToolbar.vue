<template>
  <div class="tab-toolbar">
    <div
      v-for="item in tabtoolbar.data"
      :key="item.title"
      class="tab-toolbar__item"
    >
      <base-link-buttons :to="item.url" type="reset">
        <i :class="item.icon" /><span>{{ item.title }}</span>
      </base-link-buttons>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    tabtoolbar: { type: Object, default: () => {} }
  }
}
</script>
<style lang="scss" scoped>
.tab-toolbar {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  text-align: center;
  height: 62px;
  background: #f4f4f4;

  &__item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    font-size: 0;
    ::v-deep {
      a {
        display: block;
        height: 20px;
        width: 100%;
        > span {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        i {
          margin-right: 7px;
          font-size: 16px;
        }
        span {
          font-size: 14px;
        }
      }
    }
    &:last-child {
      color: $--color-success-purple;
    }
    &::before {
      content: '';
      position: absolute;
      right: 0;
      width: 1px;
      height: 12px;
      background-color: $--color-skygray;
    }
    &:last-child::before {
      content: none;
    }
  }
}
</style>
