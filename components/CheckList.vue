<template>
  <ul>
    <li
      v-for="(item, idx) in list"
      :key="idx"
      class="check-list"
      :class="type != '' ? `check-list--${type}` : ''"
    >
      <base-checkbox
        :v-model="item.check"
        :label="item.label"
        @change="onChange(item.check, idx)"
      />
      <base-buttons type="reset" @click.prevent="linkBtn">
        <i class="icon-arrowR-2" />
      </base-buttons>
    </li>
  </ul>
</template>

<script>
export default {
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
  methods: {
    onChange(val, idx) {
      this.$set(this.list[idx], 'check', !val)
      this.$emit('update:list', this.list)
    },
    linkBtn() {
      this.$emit('linkBtn')
    }
  }
}
</script>

<style lang="scss" scoped>
.check {
  &-list {
    position: relative;
    background: $--color-palegray;
    padding: 0 16px;

    &:not(:first-child) {
      margin-top: 8px;
    }
    ::v-deep {
      .el-checkbox {
        width: 100%;
        padding: 16px 0;
        &__input {
          &.is-checked + .el-checkbox__label {
            color: $--color-tertiary;
          }
          & + .el-checkbox__label {
            display: inline-block;
            vertical-align: top;
            position: relative;
            padding: 0 22px 0 12px;
            line-height: 26px;
            width: calc(100% - 24px);
            white-space: normal;
            font-size: $--font-size-medium;
          }
        }
      }
      .el-button--reset {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 20px;
        font-family: 'icomoon' !important;
        content: '\e908';
      }
    }
  }
}
</style>
