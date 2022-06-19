<template>
  <div>
    <div v-if="visibleCurrent" class="slider-current">
      {{ $attrs.value }} <span>점</span>
    </div>
    <div
      class="slider-wrap"
      :class="{ 'side-btn': hasSideBtn, 'active-top-info': showSelectValue }"
    >
      <base-buttons v-if="hasSideBtn" @click="minusClick">
        <i class="icon-Minus" />
      </base-buttons>
      <div :class="{ 'side-btn-slide': hasSideBtn }">
        <el-slider
          tooltip-class="ch-slider-tooltip"
          :show-tooltip="false"
          v-bind="$attrs"
          v-on="$listeners"
          @change="handeInput"
          @input="handeInput"
        />
      </div>
      <base-buttons v-if="hasSideBtn" @click="plusClick">
        <i class="icon-Plus" />
      </base-buttons>
      <div v-if="bottomBtns" class="bottom-btns">
        <base-buttons
          v-for="item in bottomBtns"
          :key="item"
          @click="stepPlusBtn(item)"
        >
          +{{ item }}년
        </base-buttons>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visibleCurrent: { type: Boolean, default: false },
    hasSideBtn: { type: Boolean, default: false },
    showSelectValue: { type: Boolean, default: false },
    bottomBtns: { type: Array, default: () => [] }
  },
  data() {
    return {
      currentValue: 0,
      bottomBtnValue: 0
    }
  },
  mounted() {
    if (this.showSelectValue) {
      const t = document.querySelectorAll(
        '.active-top-info .el-slider__button-wrapper'
      )

      const addElLeft = document.createElement('div')
      const addElRight = document.createElement('div')

      addElLeft.setAttribute('class', 'top-info')
      addElLeft.setAttribute('id', 'left-value')
      t[0].appendChild(addElLeft)

      addElRight.setAttribute('class', 'top-info')
      addElRight.setAttribute('id', 'right-value')
      t[1].appendChild(addElRight)
      this.handeInput()
    }
  },
  methods: {
    minusClick() {
      this.$emit('minusClick')
    },
    plusClick() {
      this.$emit('plusClick')
    },
    stepPlusBtn(stepValue) {
      this.$emit('stepPlusBtn', stepValue)
    },
    handeInput() {
      if (this.showSelectValue) {
        const t = document.querySelector('.active-top-info')

        t.querySelector('#left-value').innerText = `${this.$attrs.value[0]}년납`

        t.querySelector(
          '#right-value'
        ).innerText = `${this.$attrs.value[1]}년납`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .slider-wrap {
    &.active-top-info {
      .top-info {
        position: absolute;
        top: -1.5rem;
        left: -3rem;
        width: 10rem;
        font-weight: $--font-weight-medium;
      }
    }
    .el-slider {
      &__runway {
        background-color: $--color-palegray;
        .el-slider {
          &__marks-text {
            color: $--color-tertiary-lightgray;
            margin-top: 1.2rem;
          }
        }
      }
      &__bar {
        background-color: $--color-secondary-blue;
      }
      &__button {
        border-color: $--color-secondary-blue;
      }
      &__stop {
        display: none;
      }
      &__marks {
        &-text {
          width: 5rem;
          &:first-child {
            margin-left: 1.2rem;
          }
        }
      }
    }
    &.side-btn {
      display: flex;
      .el-button {
        flex: none;
        &--default {
          width: 3.2rem;
          height: 3.2rem;
          padding: 0.8rem;
          border: 1px solid $--color-darkgray;
          border-radius: initial;
        }
      }
      .side-btn-slide {
        flex: 1;
        margin: 0 0.8rem;
        .el-slider {
          margin: 0 0.8rem;
        }
      }
    }
    .bottom-btns {
      display: flex;
      margin-top: 3.3rem;
      .el-button {
        flex: 1;
        height: 3.8rem;
        padding: 0.8rem 1.85rem;
        color: $--color-tertiary;
        border: 1px solid $--color-tertiary-lightgray;
        border-radius: initial;
        font-weight: $--font-weight-medium;
        font-size: $--font-size-x-medium;
        & + .el-button {
          margin-left: 8px;
        }
      }
    }
  }
  .slider-current {
    font-size: $--font-size-extra-large;
    font-weight: $--font-weight-medium;
    color: $--color-tertiary;
    display: flex;
    justify-content: center;
    align-items: baseline;
    span {
      font-size: $--font-size-medium;
    }
  }
}
</style>
