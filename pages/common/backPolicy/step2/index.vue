<template>
  <div class="l-content">
    <div class="l-section gap-both">
      <div class="page-intro">
        <base-titles fsize="24" :title="title" class="page-intro__title" />
        <div class="page-intro__subtitle">
          <span v-nl2br>{{ subtitle }}</span>
        </div>
        <div class="desc_bar" />
        <div class="page-intro__desc">
          <span v-nl2br>{{ desc }}</span>
        </div>
        <bottom-buttons :buttons="buttons" />
      </div>
    </div>
  </div>
</template>

<script>
import BottomButtons from '@/components/BottomButtons'
export default {
  components: {
    BottomButtons
  },
  data() {
    return {
      title: `라인하 고객님, 
가입하신 상품의 중요사항을 
최종 확인하겠습니다`,
      subtitle: `가입하신 
무배당THE 건강한치아보험Ⅴ(갱신형)에 대해 
총 10문항을 확인할 예정이며, 
약 5분 정도 소요됩니다.`,
      desc: `완전판매 해피콜 진행 시 체크한 사항은 
향후 보험계약의 효력여부 등 근거자료로 
활용될 수 있으며, 상품에 대한 안내를 받지 못한 경우 
설계사를 통해 재안내 후 진행해주시기 바랍니다.

문항 중 일부 기억이 나지 않는 경우에도 
도움말을 이용하여 즉시 확인하실 수 있어 
쉽게 진행하실 수 있습니다.`,
      buttons: {
        negative: {
          show: false
        },
        positive: {
          show: true,
          title: '시작하기'
        },
        disable: {
          show: false
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.page-intro {
  .desc_bar{
    height: 1px;
    margin-top: 24px;
    margin-bottom: 24px;
    background: $--color-skygray;
  }
  &__subtitle {
    margin-top: 32px;
  }
  &__desc {
    font-size: 14px;
    color: $--color-darkgray;
  }
}
</style>
