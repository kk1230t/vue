<template>
  <div class="l-content">
    <div class="l-section gap-both">
      <page-status :items="items">
        <template #step>
          <div class="status-step">
            <div class="status-step__title">
              <base-titles fsize="16" title="인증방법" />
            </div>
            <div class="status-step__list">
              <b>1</b>
              휴대폰 토스앱으로 이동하여
            </div>
            <div class="status-step__list">
              <b>2</b>
              토스 인증을 완료한 후
            </div>
            <div class="status-step__list">
              <b>3</b>
              다시 해당 화면으로 돌아와서<br>
              아래 <i>인증완료</i> 버튼을 눌러주세요.
            </div>
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
        iconsrc: require('@/assets/images/common/icon-toss-c.svg'),
        alt: '토스로고',
        title: `고객님 휴대폰으로
토스인증을
요청하였습니다.`

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
