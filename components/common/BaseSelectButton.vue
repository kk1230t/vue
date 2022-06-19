<template>
  <div class="select" v-bind="$attrs" :class="{'disabled' : disabled}">
    <base-buttons
      size="meidum"
      full
      plain
      @click="handleClick"
    >
      {{ selectedLabel }}
      <i class="icon-Dropdown" />
    </base-buttons>
    <base-drawer
      :visible.sync="drawer"
      :size="size"
      :title="select.title"
      header-type="type1"
      positive-button="확인"
      :append-to-body="true"
      selectbtn
      @onPositive="confirm"
    >
      <template #content>
        <base-radio-buttons
          ref="radioList"
          :label="selectedLabel"
          :value="selectedValue"
          :list="select.list"
          :type="`list ${stt}`"
          @onChange="onChange"
        />
      </template>
    </base-drawer>
  </div>
</template>

<script>
export default {
  props: {
    select: {
      type: Object,
      default: () => {}
    },
    size: {
      type: String,
      default: '70%'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    stt: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      drawer: false,
      isSelected: false,
      isSelf: false,
      selectedValue: undefined,
      selectedLabel: this.$attrs.txt,
      tempSelectedValue: undefined,
      tempSelectedLabel: undefined
    }
  },

  watch: {
    drawer(newVal) {
      if (newVal && this.selectedValue) {
        this.$refs.radioList.onChange()
      }
    },
    selectedValue(newVal) {
      this.tempSelectedValue = newVal
    },
    selectedlabel(newVal) {
      this.tempSelectedLabel = newVal
    }
  },
  created() {
    console.log(this.drawer)
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.drawer = true
      }
    },
    onChange(value, label) {
      this.tempSelectedValue = value
      this.tempSelectedLabel = label
    },
    confirm() {
      this.isSelected = true
      this.selectedValue = this.tempSelectedValue
      this.selectedLabel = this.tempSelectedLabel
      this.$emit('update:value', this.selectedValue)
      this.$emit('chageLabel', this.selectedLabel)
      this.drawer = false
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  &.el-button {
    &:hover,
    &:focus,
    &:active {
      span {
        text-decoration: none;
      }
    }
  }
  .el-button.is-plain {
    border-color: $--color-skygray !important;
    height: 40px;
    &:hover,
    &:focus,
    &:active {
      span {
        text-decoration: none;
      }
    }
    span {
      position: relative;
      display: block;
      text-align: left;
      i {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
