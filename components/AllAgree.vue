<template>
  <div class="all-agree">
    <base-buttons type="reset" class="allc-btn">
      <i class="icon-Check" /> 모두 동의합니다.
    </base-buttons>
    <ul>
      <li v-for="(item, index) in items" :key="index" class="single-btn">
        <base-link-buttons :to="item.to" type="reset" @click="open">
          <span>{{ item.title }}</span> <i class="icon-ArrowR" />
        </base-link-buttons>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    items: { type: Array, default: () => [] }
  },
  methods: {
    open() {
      this.$emit('open')
    }
  }
}
</script>

<style lang="scss" scoped>
.all-agree {
  margin-top: 28px;
  .allc-btn {
    display: block;
    height: 50px;
    width: 100%;
    font-weight: 700;
    border: solid 1px #afafaf;
  }
  .single-btn {
    display: flex;
    align-items: center;
    padding: 0 16px;
    height: 58px;
    border-bottom: 1px solid #d7d7d7;
    ::v-deep.el-button {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      span {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }
    }
  }
}
</style>
