<template>
  <header class="l-header">
    <div class="header">
      <h1 class="logo">
        {{ pageTitle }}
      </h1>
      <nuxt-link to="/" class="prev_page" title="페이지 이동">
        이전
      </nuxt-link>
      <base-buttons
        aria-label="메뉴"
        class="button_menu"
        @click="onGnb('open')"
      />
      <div v-if="isOpen" class="l-gnb">
        <div class="gnb-top">
          <h2 class="user">
            안녕하세요 {{ userInfo.name }}님
          </h2>
          <div class="gnb-top-btns">
            <base-buttons
              aria-label="홈"
              btn-type="home"
              class="button-home"
              @click="goHome"
            />
            <base-buttons
              aria-label="닫기"
              btn-type="close"
              class="button-close"
              @click="onGnb('close')"
            />
          </div>
        </div>
        <div class="gnb-wrap__btn">
          <div
            v-for="(menu, index) in commonMenu"
            :key="`cMenu-${index}`"
            class="gnb-list__btn"
          >
            <nuxt-link :to="menu.link" @click.native="onGnb('close')">
              <i class="icon" :class="menu.icon" />

              <div class="menu-name">
                {{ menu.name }}
              </div>
              <!-- 활성화시    <div class="menu-name active">{{ menu.name }}</div> -->
            </nuxt-link>
          </div>
        </div>
        <div class="gnb-wrap">
          <ul>
            <li v-for="(item, idx) in gnbList" :key="idx" class="gnb-list">
              <div class="gnb-title">
                <base-buttons
                  type="text"
                  :class="{
                    isActive: onGnbActive === idx
                  }"
                  @click="onGnbActive = idx"
                >
                  {{ item.title }}
                </base-buttons>
              </div>
              <div v-if="onGnbActive === idx" class="gnb-wrap__sub">
                <ul>
                  <li
                    v-for="(childItem, childIdx) in item.childGnbList"
                    :key="childIdx"
                    class="gnb-list__child"
                  >
                    <div class="gnb-title__sub">
                      <base-buttons
                        type="text"
                        class="gnb-title__sub__text"
                        @click="childItem.isActive = !childItem.isActive"
                      >
                        {{ childItem.title }}
                        <i v-if="childItem.isActive" class="icon-Minus" />
                        <i v-else class="icon-Plus" />
                      </base-buttons>
                    </div>
                    <el-collapse-transition>
                      <ul v-if="childItem.isActive" class="gnb-wrap__last">
                        <li
                          v-for="(lastItem, lastIdx) in childItem.lastGnbList"
                          :key="lastIdx"
                          class="gnb-list__last"
                        >
                          <nuxt-link :to="lastItem.link">
                            {{
                              lastItem.title + childIdx
                            }}
                          </nuxt-link>
                        </li>
                      </ul>
                    </el-collapse-transition>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="nowLoadingBar" class="page-load-progress">
        <div class="inner-bar" :style="{width:10+'%'}" />
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      barWidth: 0,
      pageTitle: '타이틀',
      userInfo: {
        name: '라이나'
      },
      onGnbActive: 0,
      isOpen: false,
      gnbList: [
        {
          title: '보험상품',
          childGnbList: [
            {
              title: '타이틀 Header6',
              isActive: true,
              lastGnbList: [
                {
                  link: '/',
                  title: '(무)골라담는간편건강보험'
                },
                {
                  link: '/',
                  title: '(무)골라담는간편건강보험'
                },
                {
                  link: '/',
                  title: '(무)골라담는간편건강보험'
                },
                {
                  link: '/',
                  title: '(무)골라담는간편건강보험'
                }
              ]
            },
            {
              title: '타이틀 Header6',
              isActive: true,
              lastGnbList: [
                {
                  link: '/',
                  title: '(무)골라담는간편건강보험'
                },
                {
                  link: '/',
                  title: '(무)골라담는간편건강보험'
                },
                {
                  link: '/',
                  title: '(무)골라담는간편건강보험'
                },
                {
                  link: '/',
                  title: '(무)골라담는간편건강보험'
                }
              ]
            }
          ]
        },
        {
          title: '사이버건강창구',
          childGnbList: [
            {
              title: '타이틀 Header16',
              isActive: false,
              lastGnbList: [
                {
                  link: '/',
                  title: '(무)골라담는간편건강보험'
                },
                {
                  link: '/',
                  title: '(무)골라담는간편건강보험'
                },
                {
                  link: '/',
                  title: '(무)골라담는간편건강보험'
                },
                {
                  link: '/',
                  title: '(무)골라담는간편건강보험'
                }
              ]
            }
          ]
        },
        {
          title: '케어라운지',
          childGnbList: [
            {
              title: '타이틀 Header16',
              isActive: false,
              lastGnbList: [
                {
                  link: '/',
                  title: '(무)골라담는간편건강보험'
                },
                {
                  link: '/',
                  title: '(무)골라담는간편건강보험'
                },
                {
                  link: '/',
                  title: '(무)골라담는간편건강보험'
                },
                {
                  link: '/',
                  title: '(무)골라담는간편건강보험'
                }
              ]
            }
          ]
        },
        {
          title: '고객센터',
          childGnbList: [
            {
              title: '타이틀 Header16',
              isActive: false,
              lastGnbList: [
                {
                  link: '/',
                  title: '(무)골라담는간편건강보험'
                },
                {
                  link: '/',
                  title: '(무)골라담는간편건강보험'
                },
                {
                  link: '/',
                  title: '(무)골라담는간편건강보험'
                },
                {
                  link: '/',
                  title: '(무)골라담는간편건강보험'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {

    ...mapState('commonStore', ['commonMenu', 'nowLoadingBar'])
  },
  methods: {
    onGnb(type) {
      this.isOpen = type === 'open'
    },
    goHome() {
      this.onGnb('close')
      this.$router.push('/')
    }

  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layouts/header';
</style>
