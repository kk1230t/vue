<template>
  <div class="l-content ">
    <div class="l-section gap-both">
      <page-status :items="items" :has-call="true" />
    </div>
  </div>
</template>

<script>
import PageStatus from '~/components/PageStatus'
export default {
  components: {
    PageStatus
  },
  data() {
    return {
      items: {
        type: '500',
        title: `서비스 이용에
불편을 드려 죄송합니다.`

      }

    }
  }
}
</script>

<style></style>
