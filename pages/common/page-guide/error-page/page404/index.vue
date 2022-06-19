<template>
  <div class="l-content ">
    <div class="l-section gap-both">
      <page-status :items="items" />
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
        type: '404',
        title: `원하시는 페이지를
찾을 수 없습니다.`

      }

    }
  }
}
</script>

<style></style>
