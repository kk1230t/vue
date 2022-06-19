<template>
  <div>
    <section class="l-section">
      <div>
        <base-checkbox
          v-model="check"
        />
        <span class="check-label" @click="checkLabel"><strong class="point-blue">필수사항문구</strong>를 읽고 확인하였습니다.</span>
      </div>
    </section>

    <section class="l-section">
      <base-messagebox
        :box="box.accordion"
        :accdian="true"
        :accdian-icon="box.icon"
      >
        <div class="list-wrap">
          <base-list cutom-list-content>
            <template #cutomList>
              <li class="list emphasis-bg">
                <ul>
                  <li class="list list-bullet">
                    가입하신 상품에 따라 선택 가능한 납입가능 방법이 상이할 수 있습니다 <strong class="point-red">(저축성보험, 종신보험(GA),
                      치매보험(페이백형)카드이체 불가)</strong>.
                  </li>
                  <li class="list list-bullet">
                    일부 신용카드는 인증서비스를 제공하지 않습니다. 카드인증이 불가한 경우 고객센터(1588-0058)로 문의주시기 바랍니다.
                  </li>
                </ul>
              </li>
              <li class="list list-bullet">
                가입하신 상품에 따라 선택 가능한 납입가능 방법이 상이할 수 있습니다(저축성보험, 종신보험(GA),
                치매보험(페이백형)카드이체 불가).
              </li>
              <li class="list list-bullet">
                일부 신용카드는 인증서비스를 제공하지 않습니다. 카드인증이 불가한 경우 고객센터(1588-0058)로 문의주시기 바랍니다.
              </li>
              <li class="list list-bullet">
                계약상태가 유지 또는 실효인 보험계약에 대해서만
                납입정보변경이 가능합니다.
              </li>
              <li class="list list-bullet">
                카카오페이 자동납부는 신청 시 발송되는 알림톡 내
                URL을 통해 카카오 앱에서 직접 등록처리를 해야만
                납입방법으로 최종 반영되고, 청구진행이 가능합니다.
              </li>
              <li class="list list-bullet">
                신용카드는 15일에 청구이체를 수행하며, 실제 매입일은 카드사마다 상이할 수 있습니다.
              </li>
              <li class="list list-bullet">
                <span class="point-blue">자동이체는 등록 후 금융기관(은행)에 납부자 등록이
                  진행되고 신청일로부터 약 3~4 영업일 소요되며
                  정상적으로 완료 된 경우에만 청구, 이체가 가능합니다.</span>
              </li>
            </template>
          </base-list>
        </div>
      </base-messagebox>
    </section>

    <div class="l-bottom">
      <base-buttons type="navy" size="medium" full :disabled="btnDisabled" @click="onStep">
        확인
      </base-buttons>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      check: true,
      box: {
        icon: 'icon-Open_line',
        content: true,
        accordion: {
          title: '알려드립니다',
          custom: '신청내역에 따라 추가 서류가 필요하기도 합니다'
        }
      }
    }
  },
  methods: {
    checkLabel() {
      this.check = !this.check
    }
  }
}
</script>

<style lang="scss" scoped>
.check-label {
    color: $--color-tertiary;
    font-size: $--font-size-medium;
}
.point-blue {
  color: $--color-primary;
}

</style>
