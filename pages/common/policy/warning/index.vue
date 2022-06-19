<template>
  <div class="l-content ">
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
        type: 'warning',
        title: `고객님, 죄송합니다.
                온라인 가입을
                하실 수 없습니다.`,
        subtitle: '휴면보험금 지급 신청이 완료되었습니다.',
        subtitle2: `1천만 원이 넘는 지급금의 경우
심사 후 지급 받으실 수 있어요.
(평일 기준)`
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
