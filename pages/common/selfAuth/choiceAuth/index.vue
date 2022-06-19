<template>
  <div class="l-content">
    <div class="l-section gap-both self-auth">
      <base-titles fsize="24" title="본인인증 방식 선택" />
      <list-button :list-buttons="listButtons" @selectBtn="selectBtn" />
      <bottom-buttons :buttons="buttons" />
    </div>
  </div>
</template>

<script>
import ListButton from '~/components/ListButton'
import BottomButtons from '~/components/BottomButtons'
export default {
  components: { ListButton, BottomButtons },
  data() {
    return {
      listButtons: [
        {
          title: '간편비밀번호',
          img: require('@/assets/images/common/icon-lock.svg'),
          selected: false
        },
        {
          title: '휴대폰 본인인증',
          img: require('@/assets/images/common/icon-mobile.svg'),
          selected: false
        },
        {
          title: '바이오 인증',
          img: require('@/assets/images/common/icon-finger.svg'),
          selected: false
        },
        {
          title: '공동인증서',
          img: require('@/assets/images/common/icon-monitor.svg'),
          selected: false
        },
        {
          title: '카카오 인증',
          img: require('@/assets/images/common/icon-kakao.svg'),
          selected: false
        },
        {
          title: '네이버 인증',
          img: require('@/assets/images/common/icon-naver.svg'),
          selected: false
        },
        {
          title: '토스 인증',
          img: require('@/assets/images/common/icon-toss.svg'),
          selected: false
        }
      ],
      buttons: {
        negative: {
          show: false,
          title: ''
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
  },
  methods: {
    selectBtn(index) {
      this.listButtons.forEach((item) => {
        item.selected = false
      })
      this.listButtons[index].selected = true
    }
  }
}
</script>

<style lang="scss" scoped>
.self-auth {
  .c-title {
    margin-bottom: 32px;
  }
}
</style>
