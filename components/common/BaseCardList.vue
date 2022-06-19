<template>
  <div class="card-type-list-wrap">
    <ul class="card-type--list">
      <li v-if="cardList.length === 0" class="list list-empty">
        <p>{{ emptyTxt }}</p>
      </li>
      <template v-else>
        <li
          v-for="(item, idx) in cardList"
          :key="idx"
          class="list"
          :class="[
            { 'is-active': item.check || item.lable },
            { 'is-disabled': item.disabled },
            type != '' ? `list--${type}` : ''
          ]"
          :state="link"
        >
          <template v-if="onlyContent">
            <div class="list-content-only">
              <slot name="contents" :scope="{ item, idx }" />
            </div>
          </template>
          <template v-else>
            <nuxt-link
              v-if="item.link === 'link'"
              :to="item.path"
              class="list-top--inner type-link"
            >
              <span class="icon-ArrowR" />
              <div class="title">
                <slot name="topConent" :scope="{ item, idx }" />
                <p v-if="item.subTitle" class="title-sub">
                  {{ item.subTitle }}
                </p>
                <strong class="ellipsis">{{ item.title }}</strong>
                <div v-if="item.text" class="sub-text">
                  {{ item.text }}
                </div>
              </div>
            </nuxt-link>

            <div v-else class="list-top--inner">
              <div
                v-if="item.check === true || item.check === false"
                class="list-top--label"
              >
                <slot name="customArea" :scope="{ item, idx }" />
              </div>
              <div class="title">
                <slot name="topConent" :scope="{ item, idx }" />
                <p v-if="item.subTitle" class="title-sub">
                  {{ item.subTitle }}
                </p>
                <strong class="ellipsis">{{ item.title }}</strong>
                <div v-if="item.text" class="sub-text">
                  {{ item.text }}
                </div>
              </div>
            </div>
            <div class="list-content">
              <slot name="contents" :scope="{ item, idx }" />
            </div>
          </template>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    cardList: {
      type: Array,
      default: () => []
    },

    link: {
      type: String,
      default: ''
    },
    emptyTxt: {
      type: String,
      default: '데이터가 없습니다.'
    },
    type: {
      type: String,
      default: ''
    },
    onlyContent: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/cardList';
</style>
