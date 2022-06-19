<template>
  <div>
    <base-drawer
      :visible.sync="drawer1"
      title="통신사"
      header-type="type1"
      positive-button="확인"
      size="auto"
    >
      <template #content>
        <div class="form-box">
          <base-radio-buttons v-model="radioBtn1.value" :list="radioBtn1.list" type="list" />
        </div>
      </template>
    </base-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer1: true,
      radioBtn1: {
        value: '',
        list: [
          {
            label: 'SKT',
            value: '1'
          },
          {
            label: 'KT',
            value: '2'
          },
          {
            label: 'LGU+',
            value: '3'
          },
          {
            label: 'SKT 알뜰폰',
            value: '4'
          },
          {
            label: 'KT 알뜰폰',
            value: '5'
          },
          {
            label: 'LGU+ 알뜰폰',
            value: '6'
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep {
  .el-drawer__wrapper{
    .el-drawer.btt{
      .bottom-sheet__body{
        padding: 0 0 50px 0;
        .form-box{
          .el-radio-group.list .el-radio-button{
            margin-bottom: 0;
            border: none;
            padding: 16px 20px;
            & + .el-radio-button{
              border-top: 1px solid $--color-skygray;
            }
            &.is-active{
              border-color: $--color-skygray;
            }
          }
        }
      }
    }
  }
}
</style>
