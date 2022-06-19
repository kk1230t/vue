<template>
  <ul class="event-board">
    <li
      v-for="(item, index) in event"
      :key="index"
      class="list"
    >
      <nuxt-link :to="item.link">
        <base-image
          :alt="item.alt"
          :src="item.src"
          lazy
        />
        <slot name="content" :scope="{ item, index }" />
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      default: false
    },
    event: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.event-board {
  .list {
    overflow: hidden;
    position: relative;
    width: 100%;
    border: 1px solid $--color-skygray;
    border-radius: 8px;
    &:first-child {
      margin-top: 32px;
    }
    & + .list {
      margin-top: 16px;
    }

    > a {
      display: block;

      .el-image {
        display: block;
        width: 100%;
        height: 16rem;
        background: $--color-palegray;
      }

      ::v-deep {
        .c-title {
          position: static;
          padding: 16px;
          border-top: 1px solid $--color-skygray;
          .label-cover {
            position: absolute;
            top: 1.2rem;
            left: 1.2rem;
          }

          .c-title_title {
            color: $--color-tertiary;
          }

          .c-title_sub {
            white-space: normal;
          }
        }
      }
    }
  }
}
</style>
