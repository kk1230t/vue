<template>
  <div class="status-page">
    <template v-if="items.type === 'iconNone'" />
    <template v-else>
      <base-image
        v-if="items.type === 'system'"
        class="status-img"
        :src="require('@/assets/images/common/icon-system.svg')"
        alt="페이지없음"
        lazy
      />
      <base-image
        v-if="items.type === '404'"
        class="status-img"
        :src="require('@/assets/images/common/icon-err404.svg')"
        alt="페이지없음"
        lazy
      />
      <base-image
        v-if="items.type === '500'"
        class="status-img"
        :src="require('@/assets/images/common/icon-err500.svg')"
        alt="페이지없음"
        lazy
      />
      <base-image
        v-if="items.type === 'done'"
        class="status-img"
        :src="require('@/assets/images/common/icon-status-done.svg')"
        alt="완료"
        lazy
      />
      <base-image
        v-if="items.type === 'warning'"
        class="status-img"
        :src="require('@/assets/images/common/icon-status-warning.svg')"
        alt="완료"
        lazy
      />
      <base-image
        v-if="items.type === 'error'"
        class="status-img"
        :src="require('@/assets/images/common/icon-status-error.svg')"
        alt="완료"
        lazy
      />
      <base-image
        v-if="items.type === 'custom'"
        class="status-img"
        :src="items.iconsrc"
        :alt="items.alt"
        lazy
      />
    </template>
    <base-titles is-br fsize="28" :title="items.title" class="status-title" />
    <slot name="subtitle" />
    <div v-if="items.subtitle" v-nl2br class="status-subtitle">
      <span>{{ items.subtitle }}</span>
    </div>
    <div v-if="items.subtitle2" v-nl2br class="status-subtitle">
      <span>{{ items.subtitle2 }}</span>
    </div>
    <slot name="contents" />
    <template v-if="items.hasCall">
      <base-buttons type="text" size="small" class="status-call__link">
        전화상담 예약하기
      </base-buttons>
      <div class="status-call__info">
        <div class="status-call__title">
          <span>고객님, 직접가입이 어려우신가요?</span>
        </div>
        <base-titles fsize="14" title="고객센터 1588-0058" />
        <div><span>(평일 09 : 00~18 : 00)</span></div>
      </div>
    </template>

    <template v-if="items.type === '404'">
      <div class="status-subtitle">
        <span>입력하신 페이지 주소가 정확한지<br>
          다시 한번확인해 주시기 바랍니다.<br>
          <br>
          이용에 불편과 문의사항이 있으실 경우<br>
          언제든지 웹마스터(<base-link-buttons
            to="/"
            class="link-btn"
            type="reset"
          >webmaster@lina.co.kr</base-link-buttons>)<br>로 문의주시면 신속하게 도와드리겠습니다.</span>
        <div class="flex-button">
          <base-buttons type="white" size="small">
            이전화면 이동
          </base-buttons><base-buttons type="white" size="small">
            메인으로 이동
          </base-buttons>
        </div>
      </div>
    </template>

    <template v-if="items.type === '500'">
      <div class="status-subtitle">
        일시적인 오류가 발생하였사오니<br>
        잠시 후 재시도 부탁드립니다.<br>
        <br>
        만약 오류가 지속될 경우<br>
        고객센터로 연락 부탁드립니다.
      </div>
      <div class="status-call__info mt24">
        <base-titles fsize="14" title="고객센터 1588-0058" />
        <div><span>(평일 09 : 00~18 : 00)</span></div>
      </div>
    </template>
    <template v-if="items.type === 'system'">
      <div class="status-subtitle">
        빠른 시간 내에 작업을 마치고<br>
        정상화 할 수 있도록 노력하겠습니다. <br>
        <br>
        서비스 이용에 불편을 드려 죄송합니다.
      </div>
      <div class="status-call__info mt24">
        <base-titles fsize="14" title="시스템 점검기간" />
        <div>
          <span>2022년 05월 01일 AM 01 : 00 부터<br>
            2022년 05월 01일 AM 07 : 00 까지</span>
        </div>
      </div>
    </template>
    <slot name="step" />
  </div>
</template>

<script>
export default {
  props: {
    items: { type: Object, default: () => {} }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.status-page {
  .status {
    &-img {
      width: 40px;
      height: 40px;
    }
    &-title {
      margin-top: 24px;
    }
    &-subtitle {
      margin-top: 12px;
      font-size: 1.6rem;
      color: $--color-darkgray;
      i {
        color: $--color-primary;
      }
      .link-btn {
        color: $--color-primary;
      }
      .flex-button {
        margin-top: 32px;
      }
    }
    &-call__link {
      margin-top: 12px;
      margin-bottom: 40px;
    }
    &-call__info {
      padding: 16px;
      font-size: 1.4rem;
      background-color: $--color-palegray;
      &.mt24 {
        margin-top: 24px;
      }
      .status-call__title {
        margin-bottom: 12px;
      }
      ::v-deep.c-title_title {
        margin-bottom: 4px;
      }
    }
    &-step {
      &__title {
        background: #f4f4f4;
        padding: 8px 12px;
        margin-top: 32px;
      }
      &__list {
        position: relative;
        padding-left: 44px;
        margin-top: 12px;
        b {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          left: 10px;
          top: 0;
          height: 24px;
          width: 24px;
          border: solid 1px;
          border-radius: 100%;
        }
        i {
          color: $--color-primary;
        }
      }
    }
  }
}
</style>
