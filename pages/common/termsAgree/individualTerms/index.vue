<template>
  <div>
    <base-buttons type="primary" @click="drawer1 = !drawer1">
      약관동의
    </base-buttons>
    <base-drawer
      :visible.sync="drawer1"
      title="약관동의"
      positive-button="모두 동의"
      size="auto"
    >
      <template #content>
        <p class="tit">
          보험계약대출 신청을 위해<br />아래의 내용을 읽고 동의 해주세요.
        </p>
        <check-list :list="list" @linkBtn="linkBtn" @onChange="onChange()" />
      </template>
    </base-drawer>
  </div>
</template>

<script>
import CheckList from '@/components/CheckList'
export default {
  components: { CheckList },
  data() {
    return {
      drawer1: true,

      list: [
        {
          check: false,
          label: '보험계약대출의 체결·이행 등을 위한 상세 동의서'
        },
        {
          check: false,
          label: '고유식별정보 제공에 관한 사항'
        },
        {
          check: false,
          label: '개인신용정보 제공에 관한 사항'
        }
      ]
    }
  },
  methods: {
    linkBtn() {
      console.log('test')
    },
    onChange(val) {
      // for (let idx = 0; idx < this.list.length; idx++) {
      //   this.list.[idx].check
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
.tit {
  margin: 1.2rem 0;
  font-size: $--font-size-medium;
  color: $--color-darkgray;
}

::v-deep {
  .check-list {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 16px;
    .el-checkbox {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 0;
      &__input {
        + .el-checkbox__label {
          line-height: 25px;
          &::after {
            display: none;
          }
        }
      }
    }
  }
}
</style>
