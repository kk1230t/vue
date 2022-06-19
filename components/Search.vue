<template>
  <div>
    <div
      class="search"
      :class="[{ 'search-focus': isfocus }, searchType]"
      @click="focusInput"
    >
      <el-input
        ref="serachInput"
        v-bind="$attrs"
        placeholder="검색하세요"
        prefix-icon="icon-Search"
        v-on="$listeners"
        @focus="isfocus = true"
        @blur="isfocus = false"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchType: { type: String, default: '' }
  },
  data() {
    return {
      isfocus: false
    }
  },
  methods: {
    focusInput() {
      this.$refs.serachInput.focus()
    },
    test() {
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  &-focus.search {
  }
  ::v-deep {
    .el-input {
      display: flex;

      align-items: center;
      padding: 16px 16px 16px 44px;
      background-color: $--color-palegray;
      &__inner {
        height: 26px;
        padding-left: 0;
        border-color: $--color-palegray;
        border-radius: 0;
        background-color: $--color-palegray;
        font-size: 16px;
        color: $--color-tertiary;
        line-height: 160%;

        &::placeholder {
          color: $--color-tertiary-lightgray;
        }
      }
      &__prefix {
        display: flex;
        width: 44px;
        top: 0;
        left: 0;
        font-size: 16px;
        color: $--color-darkgray;
        i {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
        }
      }
      &-group__append {
        .el-button {
        }
      }
    }
  }
  // &.type2 {
  //   height: 72px;
  //   padding: 0;
  //   border: none;
  //   border-bottom: solid 2px #4b4e53;
  //   border-radius: 0;

  //   ::v-deep {
  //     .el-input {
  //       &-group__append {
  //         .el-button {
  //           background: #4b4e53;
  //         }
  //       }
  //     }
  //   }
  // }

  // &-focus.search.type2 {
  //   border-color: $--color-secondary;
  // }
}
</style>
