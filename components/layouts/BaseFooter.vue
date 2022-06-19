<template>
  <div>
    <footer class="l-footer">
      <div class="footer">
        <div class="footer-info__center">
          고객센터 1588-0058 <br>
          평일 09:00 ~ 18:00 주말 및 공휴일 휴무
        </div>
        <div class="footer-info__button">
          <base-buttons
            type="reset"
            @click="moreInfo = !moreInfo"
          >
            회사소개 <span v-if="moreInfo">닫기 <i /></span>
            <span v-else>열기 <i /></span>
          </base-buttons>
        </div>
        <div v-if="moreInfo" class="footer-info__more">
          03156 서울특별시 종로구 삼봉로 48(청진동 188) 시그나타워 <br>
          대표이사 조지은<br>
          사업자등록번호 104-81-85673 <br>Copyright©LINA Korea, a Cigna
          Company. All rights reserved
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moreInfo: false
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/layouts/footer';
</style>
