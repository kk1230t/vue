<template>
  <div class="floatingbox">
    <div
      v-if="showChat || showTop"
      class="floatingbox-chatbox"
      :class="{ 'has-btn': hasButton }"
    >
      <div v-if="showTop" class="item">
        <base-buttons class="item-btn" type="reset" @click="scrollTop">
          <i class="icon icon-upload" />
        </base-buttons>
      </div>
      <div v-if="showChat" class="item">
        <base-buttons
          class="item-btn chat-btn"
          type="reset"
          @click="openChatbot"
        />
      </div>
    </div>

    <div v-else class="floatingbox-sumbox" :class="{ 'has-btn': hasButton }">
      <div class="floatingbox-sumbox__item">
        <div v-if="sumBox[0]" class="item ">
          {{ sumBox[0] }}
        </div>
        <div v-if="sumBox[1]" class="item">
          {{ sumBox[1] }}
        </div>
        <div v-if="sumBox[2]" class="item">
          {{ sumBox[2] }}
        </div>
      </div>
      <slot name="more" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showChat: { type: Boolean, default: false },
    showTop: { type: Boolean, default: false },
    hasButton: { type: Boolean, default: false },
    sumBox: { type: Array, default: () => [] }
  },
  data() {
    return {}
  },
  methods: {
    scrollTop() {
      window.scrollTo(0, 0)
    },
    openChatbot() {
      this.$emit('openChatbot')
    }
  }
}
</script>

<style lang="scss" scoped>
.floatingbox {
  &-chatbox {
    position: fixed;
    right: 12px;
    bottom: 12px;
    width: 56px;
    z-index: 10;
    &.has-btn {
      bottom: 72px;
    }

    .item {
      margin-bottom: 12px;
      &:last-child {
        margin-bottom: 0;
      }
      &-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 56px;
        height: 56px;
        border: 1px solid $--color-skygray;
        background-color: $--color-white;
        border-radius: 50%;
        .icon {
          font-size: 22px;
        }
        &.chat-btn {
          position: relative;
          color: #fff;
          &::before{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 88px;
            height: 88px;
            background: {
              size: 100%;
              position: 0 0;
              image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='88' viewBox='0 0 88 88' fill='none'%3E%3Cg filter='url(%23filter0_d_951_19792)'%3E%3Cpath d='M64.5068 64.5068C64.1159 64.1159 64.1178 63.4833 64.4949 63.0791C66.7724 60.6384 68.5955 57.8069 69.8751 54.7178C71.2825 51.3201 72.0047 47.6777 72 44C72 28.5356 59.4644 16 44 16C28.5356 16 16 28.5356 16 44C16 59.4644 28.5356 72 44 72H69.5858C70.4767 72 70.9228 70.9229 70.2929 70.2929L64.5068 64.5068Z' fill='%236E27C5'/%3E%3C/g%3E%3Ccircle cx='36' cy='44' r='2' fill='white'/%3E%3Ccircle cx='44' cy='44' r='2' fill='white'/%3E%3Ccircle cx='52' cy='44' r='2' fill='white'/%3E%3Cdefs%3E%3Cfilter id='filter0_d_951_19792' x='0' y='0' width='88' height='88' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='8'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_951_19792'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_951_19792' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E");
            }
            content: '';
          }
        }
      }
    }
  }
  &-sumbox {
    position: fixed;
    left: 45px;
    right: 45px;
    bottom: 8px;
    background-color: $--color-white;
    z-index: 10;
    &.has-btn {
      bottom: 69px;
    }
    &__item {
      display: flex;
      align-items: center;
      height: 46px;
      border: 1px solid $--color-skygray;

      .item {
        flex: auto;
        position: relative;
        font-size: 14px;
        font-weight: 700;
        text-align: center;
        &:last-child{
          color: $--color-success-purple;
        }
        &::before {
          content: '';
          position: absolute;
          right: 0;
          width: 1px;
          height: 22px;
          background-color: $--color-skygray;
        }
        &:last-child::before {
          content: none;
        }
      }
    }
  }
}
</style>
