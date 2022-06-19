<template>
  <ul class="list-wrap" :class="{ 'board-wrap': boardwrap }">
    <template v-if="cutomListContent">
      <slot name="cutomList" />
    </template>
    <template v-else>
      <li
        v-for="(item, index) in list"
        :key="index"
        class="list"
        :class="type != '' ? `list-${type}` : ''"
      >
        <template v-if="link">
          <nuxt-link :to="item.link" class="item-text">
            {{ item.content }}
            <span
              v-if="type === 'line'"
              class="icon icon-ArrowR"
              :class="item.color != '' ? `txt-${item.color}` : ''"
            />
            <slot name="linkCustomArea" :scope="{ item, index }" />
          </nuxt-link>
          <slot :name="item.items" />
        </template>
        <template v-else>
          <span
            v-nl2br
            class="item-text"
            :class="item.color != '' ? `txt-${item.color}` : ''"
            >{{ item.content }}</span
          >
          <slot name="customArea" :scope="{ item, index }" />
        </template>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    },
    boardwrap: {
      type: Boolean,
      default: false
    },
    cutomListContent: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/list';

.list-wrap {
  &.board-wrap {
    .icon-ArrowR {
      display: none;
    }
    ::v-deep .c-title {
      .c-title_title {
        margin-top: 12px;
      }
      .c-title_sub {
        margin-top: 0;
        color: $--color-darkgray;
        white-space: normal;
      }
    }
  }
}
</style>
