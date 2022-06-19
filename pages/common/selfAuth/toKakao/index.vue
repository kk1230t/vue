<template>
  <div class="l-content">
    <div class="l-section gap-both">
      <page-status :items="items">
        <template #subtitle>
          <div class="status-subtitle">
            카카오톡을 통해 인증 완료 후,<br>
            이 화면에서 <i>인증 완료</i> 버튼을누르시면<br>
            본인인증이 완료 됩니다.
          </div>
        </template>
      </page-status>
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
        iconsrc: require('@/assets/images/common/icon-kakao-c.svg'),
        alt: '네이버로고',
        title: `카카오 인증 메시지가
                고객님 휴대폰으로
                발송되었습니다.`
      },
      buttons: {
        negative: {
          show: false,
          title: '인증완료'
        },
        positive: {
          show: true,
          title: '인증완료'
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
