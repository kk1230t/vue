<template>
  <div class="bl">
    <div v-for="(item, index) in listButtons" :key="index" class="bl-items" :class="{focus:item.selected}">
      <base-buttons type="reset" class="bl-item" @click="selectBtn(index)">
        <div class="bl-wrap">
          <div class="bl-img">
            <base-image :src="item.img" :alt="item.title" />
          </div>
          <div class="bl-title">
            {{ item.title }}
          </div>
        </div>
      </base-buttons>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listButtons: { type: Array, default: () => [] }
  },
  methods: {
    selectBtn(index) {
      this.$emit('selectBtn', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.bl {
  &-items {
    display: flex;
    align-items: center;
    height: 64px;
    border: 1px solid #d7d7d7;

    margin-bottom: 8px;
    &.focus {
      border: 1px solid #150f96;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
    }
    .bl-item {
      padding-left: 24px;
      height: 100%;
      width: 100%;
      text-align: left;
      text-decoration: none !important;
      ::v-deep {
        span {
          text-decoration: none !important;
        }
      }
      .bl-wrap {
        display: flex;
        align-items: center;
        font-size: 0;
        .bl-img {
          width: 24px;
          margin-right: 12px;
        }
        .bl-title {
          font-size: 1.6rem;
        }
      }
    }
  }
}
</style>
