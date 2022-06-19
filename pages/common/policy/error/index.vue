<template>
  <div class="l-content">
    <div class="l-section gap-both">
      <page-status :items="items" />
      <bottom-buttons :buttons="buttons" />
    </div>
  </div>
</template>

<script>
import PageStatus from '~/components/PageStatus'
import BottomButtons from '~/components/BottomButtons'
export default {
  components: {
    PageStatus,
    BottomButtons
  },
  data() {
    return {
      items: {
        type: 'error',
        title: `고객님, 죄송합니다.
                온라인 가입을
                하실 수 없습니다.`,
        subtitle: `보험가입에 추가적인 확인이 필요하여 
더 이상 가입 진행을 하실 수 없습니다. 
자세한 내용은 고객센터로 문의 바랍니다.`,
        hasCall: true
      },
      buttons: {
        negative: {
          show: false
        },
        positive: {
          show: true,
          title: '확인'
        },
        disable: {
          show: false
        }
      }
    }
  }
}
</script>

<style></style>
