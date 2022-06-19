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
        type: 'custom',
        iconsrc: require('@/assets/images/common/icon-status-finger.svg'),
        alt: '지문인증',
        title: `계속하려면
지문을 사용해주세요.`,
        subtitle: `본인 인증을 위해
지문 센서에 손가락을 대세요.`
      },
      buttons: {
        negative: {
          show: true,
          title: '확인'
        },
        positive: {
          show: false
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
