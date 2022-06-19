<template>
  <div
    class="l-messagebox"
    :class="[
      { 'is-bg': bgColor },
      { 'is-round': round },
      { 'is-shadow': shadow },
      { 'is-plain': plain }
    ]"
  >
    <template v-if="accdian">
      <button
        class="is-accordion"
        :class="{ reverse: !showList }"
        @click="onAccodian"
      >
        <base-titles
          :fsize="box.titleSize ? box.titleSize : '18'"
          :title="box.title"
          :class="box.titleType != '' ? `is-${box.titleType}` : ''"
        />
        <span class="icon-Open_line" />
      </button>
    </template>
    <template v-else>
      <base-titles
        :fsize="box.titleSize ? box.titleSize : '18'"
        :title="box.title"
        :class="box.titleType != '' ? `is-${box.titleType}` : ''"
      />
    </template>
    {{ box.accdian }}
    <template v-if="listContent && showList">
      <template v-if="box.custom">
        <slot />
      </template>
      <template v-else>
        <base-list type="bullet" :list="box.listList" />
        <base-buttons
          v-if="box.btnName"
          type="text"
          size="small"
          @click="onClick"
        >
          {{ box.btnName }}
        </base-buttons>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    box: {
      type: Object,
      default: () => {}
    },
    accdian: {
      type: Boolean,
      default: false
    },
    listContent: {
      type: Boolean,
      default: true
    },
    accdianIcon: {
      type: String,
      default: 'down'
    },
    bgColor: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showList: true
    }
  },
  methods: {
    onAccodian() {
      this.showList = !this.showList
    },
    onClick() {
      this.$emit('onClick', 'emitState')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/messageBox.scss';

.list-wrap {
  ::v-deep {

    .list {
      position: relative;
      padding-left: 1rem;
      letter-spacing: -1px;

      & + .list {
        margin-top: 0.8rem;
      }

      &.small {
        font-size: $--font-size-default;

        & + .list {
          margin-top: 0.4rem;
        }

        .el-button--text {
          font-size: $--font-size-x-medium;
        }
      }

      &::before {
        position: absolute;
        left: 0rem;
      }
      &-bullet {
        &::before {
          top: 1.1rem;
          width: 0.4rem;
          height: 0.4rem;
          background-color: #565c63;
          border-radius: 50%;
          content: '';
        }
      }

      &.emphasis-bg {
        padding: 16px;
        background: $--color-success-magenta-light;
      }

      .point-blue {
        color: $--color-primary;
      }

      .point-red {
        color: $--color-tertiary-red;
      }
    }
  }
}

</style>
