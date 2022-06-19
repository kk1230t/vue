<template>
  <div />
</template>

<script>
export default {
  layout: 'CommonLayout'

}
</script>

<style lang="scss" scoped>
  ::v-deep.el-table {
    margin-top: 30px;
    td.el-table__cell{
      &:not(:last-child){
        border-right: 1px solid #e7ecf3;
      }
    }
  }
  .guide-list{
    &::before{
      margin-right: 10px;
      content: '-';
    }
    a:hover{
      color: $--color-primary;
      text-decoration: underline;
    }
  }
  .top-info{
    display: flex;
    .flex-1{
      flex: 1;
      ::v-deep.el-textarea
      {
        &__inner{
        height: 100px;
        }
      }
    }

  }
</style>
