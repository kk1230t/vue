<template>
  <el-image v-bind="$attrs" v-on="$listeners">
    <div slot="placeholder" class="image-slot">
      로딩중
    </div>
    <div slot="error" class="image-slot">
      <!-- 로딩 에러시 -->
      <i class="el-icon-picture-outline" />
    </div>
  </el-image>
</template>

<script>
export default {}
</script>

<style lang="scss"></style>
