<template>
  <el-drawer
    v-bind="$attrs"
    ref="drawer"
    direction="btt"
    :with-header="false"
    :class="{'selectbtn' : selectbtn}"

    v-on="$listeners"
  >
    <div
      class="bottom-sheet__header"
      :class="{ 'bottom-sheet__header-mob': mob }"
    >
      <base-buttons
        v-if="headerType === 'toggle'"
        class="more-info"
        @click="moreInfo = !moreInfo"
      >
        상세정보열기 <i v-if="moreInfo" class="icon-Open_line" /><i
          v-else
          class="icon-Dropdown_line is-active"
        />
      </base-buttons>
      <div class="bottom-sheet__header-top">
        <base-titles :title="$attrs.title" fsize="18" />
        <base-buttons
          only-icon
          icon="icon-Close"
          class="close"
          @click="$refs.drawer.closeDrawer()"
        >
          닫기
        </base-buttons>
      </div>
    </div>
    <div class="bottom-sheet__body" :class="{ 'bottom-sheet__body-mob': mob }">
      <slot name="content" />
    </div>
    <div v-if="negativeButton || positiveButton" :class="{ 'is-ratio': ratio }" class="drawer-bottom__buttons">
      <base-buttons
        v-if="negativeButton"
        size="medium"
        type="cancel"
        @click="$refs.drawer.closeDrawer()"
      >
        {{ negativeButton }}
      </base-buttons>
      <base-buttons
        v-if="positiveButton"
        type="black"
        size="medium"
        @click="onPositive"
      >
        {{ positiveButton }}
      </base-buttons>
    </div>
  </el-drawer>
</template>

<script>
export default {
  props: {
    headerType: { type: String, default: '' },
    negativeButton: { type: String, default: '' },
    positiveButton: { type: String, default: '' },
    ratio: {
      type: Boolean,
      default: true
    },
    mob: {
      type: Boolean,
      default: false
    },
    selectbtn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      moreInfo: false
    }
  },
  methods: {
    onPositive() {
      this.$emit('onPositive')
    }
  }
}
</script>

<style lang="scss" scoped>
.el-drawer__wrapper {
  .bottom-sheet {
    &__header {
      .c-title {
        min-height: 53px;
        padding-top: 12px;
        padding-bottom: 12px;
      }
      .more-info {
        display: flex;
        align-items: center;
        width: 100%;
        height: 25px;
        padding: 8px 0 4px;
        text-align: center;
        color: $--color-txt-black;
        ::v-deep {
          span {
            display: inline-block;
            margin: 0 auto;
            font-size: 14px;
          }
        }
        i {
          display: inline-block;
        }
      }
      &-top {
        display: flex;
        padding-left: 20px;
        align-items: center;
        justify-content: space-between;
      }
      &-mob {
        ::v-deep .c-title {
          font-size: $--font-size-x-medium;
        }
      }
    }
    &__body {
      padding: 0 20px 82px;
      ::v-deep.list-wrap{
        padding-top: 12px;
      &-mob {
        font-size: $--font-size-medium;
        white-space: normal;
      }
    }
    }
  }
  .drawer-bottom {
    &__buttons {
      display: flex;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      ::v-deep .el-button {
        flex: 1;
        border-radius: 0;
        span {
          font-weight: $--font-weight-medium;
        }
        &:hover {
          text-decoration: none;
          span {
            text-decoration: none;
          }
        }
        & + .el-button {
          margin-left: 0;
        }
        &.el-button--cancel {
          background-color: $--color-palegray;
          span {
            color: $--color-darkgray;
          }
        }
      }
      &.is-ratio {
        ::v-deep .el-button {
          flex: 30%;
          & + .el-button {
            flex: 70%;
          }
        }
      }
    }
  }

  ::v-deep {
    .close {
      overflow: hidden;
      height: 53px;
      width: 53px;
      font-size: $--font-size-big-large;
      color: $--color-txt-black;
      &:hover,
      &:focus {
        text-decoration: none;
        background: transparent;
      }
      span {
        position: absolute;
        text-indent: -9999px;
        font-size: 1px;
        color: transparent;
      }
    }
  }

  &.selectbtn{
    .bottom-sheet__body{
      padding: 0 0 82px;
    }
  }
}
</style>
