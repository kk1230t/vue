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
          보험계약대출 신청을 위해 아래의 내용을 읽고 동의 해주세요.
        </p>

        <div class="agree-sub">
          <div class="required">
            <base-accordion
              v-model="accodoan1.activeNames1"
              :list="accodoan1.accodoanList"
            >
              <template #contents>
                <check-list :list="list1" @linkBtn="linkBtn" @onChange="onChange()" />
              </template>
            </base-accordion>
          </div>
        </div>

        <div class="agree-sub">
          <div class="required">
            <base-accordion
              v-model="accodoan2.activeNames2"
              :list="accodoan2.accodoanList"
            >
              <template #contents>
                <check-list :list="list2" @linkBtn="linkBtn" @onChange="onChange()" />
              </template>
            </base-accordion>
          </div>
        </div>
        <div class="agree-sub">
          <check-list :list="list3" @linkBtn="linkBtn" @onChange="onChange()" />
        </div>
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

      list1: [
        {
          check: false,
          label: '고유식별정보 제공에 관한 사항'
        },
        {
          check: false,
          label: '제3자 제공에 관한 사항'
        }
      ],
      list2: [
        {
          check: false,
          label: '고유식별정보 제공에 관한 사항'
        },
        {
          check: false,
          label: '제3자 제공에 관한 사항'
        }
      ],
      list3: [
        {
          check: false,
          label: '개인신용정보 제공 (선택)'
        }
      ],
      accodoan1: {
        activeNames1: 0,
        accodoanList: [
          {
            title:
              '보험계약대출 약정서'
          }
        ]
      },
      accodoan2: {
        activeNames2: 0,
        accodoanList: [
          {
            title:
              '보험계약대출 약정서'
          }
        ]
      }
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

  .agree-sub{
    padding-bottom: 8px;
    .required{
      .check-list{
        background-color: transparent;
        padding: 16px;
        &:not(:first-child) {
          margin-top: 0;
        }
      }
    }
  }

  .el-collapse-item {
    .el-collapse-item__header{
      padding: 16px;
      background-color: transparent;
      border-left: 1px solid $--color-skygray;
      border-right: 1px solid $--color-skygray;
      &.is-active{
        border-bottom-color: $--color-skygray;
      }
    }
    .el-collapse-item__wrap{
      border-bottom: none;
    }
  }
}

</style>
