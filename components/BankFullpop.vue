<template>
  <div>
    <el-radio-group v-model="banklRadio">
      <el-radio
        v-for="item in items"
        :key="item.id"
        :label="item.id"
        :class="`el-radio__${type}`"
      >
        <span>{{ item.name }}</span>
        <base-image
          :alt="item.alt"
          :src="item.src"
          lazy
        />
      </el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String, // 클래스 변수
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    },
    tabList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      banklRadio: '2'
    }
  }
}
</script>

<style lang="scss" scoped>

.el-radio-group {
  padding: 0 16px;
  .el-radio {
    &__label-cover {
      width: calc(100% / 3 - 8px);
      margin: 0 4px 8px;
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      padding: 44px 0 12px;
      line-height: 1.6;
      text-align: center;
      font-size: $--font-size-x-medium;
      border: 1px solid $--color-border-list;
      color: $--color-tertiary;

       &.is-checked {
        border: 1px solid $--color-primary;
      }
    }

    ::v-deep &__inner {
      display: none;

      &::after {
        display: none;
      }
    }

    ::v-deep &__label {
      padding-left: 0;

      .el-image {
        position: absolute;
        top: 12px;
        left: 50%;
        display: block;
        transform: translateX(-50%);

        &__inner {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
