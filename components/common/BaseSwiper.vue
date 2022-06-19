<template>
  <div class="l-swiper">
    <swiper
      ref="swiper"
      class="swiper"
      :options="swiperOption"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <swiper-slide v-for="(item, idx) in mainList" :key="idx" :role="idx">
        <div class="info--title">
          <base-titles :title="item.mainTitle" fsize="28">
            <template #label>
              <p class="c-title_sub">
                {{ item.subTitle }}
              </p>
            </template>
          </base-titles>
        </div>
        <div class="info--list">
          <base-list-table :list="item.children" />
        </div>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination" />
    </swiper>
    <div v-if="pageShow" class="swiper-count">
      <span class="swiper-count-current">{{ currentPage }}</span>
      <span class="swiper-count-total">{{ totalPage }}</span>
    </div>
    <div v-if="autoplayButton" class="swiper-auto-btn">
      <base-buttons size="mini" only-icon :icon="icon" @click="onPlay" />
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import required modules

import 'swiper/css/swiper.css'

export default {
  name: 'MyPage',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    mainList: {
      type: Array,
      default: () => []
    },
    autoplayButton: {
      type: Boolean,
      default: false
    },
    pageShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      icon: 'icon-play',
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
          renderCustom: (swiper, current, total) => {
            if (swiper.autoplay.running) {
              this.icon = 'icon-play'
            } else {
              this.icon = 'icon-Dropdown'
            }

            this.currentPage = this.setPageNumber(current)
            const scaleX = current / total
            const paginationHtml = `<span class="swiper-pagination-progressbar-fill" style="transform: translate3d(0px, 0px, 0px) scaleX(${scaleX}) scaleY(1); transition-duration: 300ms;"></span>`
            swiper.pagination.el.className =
              'swiper-pagination swiper-pagination-progressbar'
            return paginationHtml
          }
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      },
      currentPage: 1
    }
  },
  computed: {
    swiper() {
      return this.$refs.swiper.$swiper
    },
    totalPage() {
      return this.setPageNumber(this.mainList.length)
    }
  },
  methods: {
    setPageNumber(number) {
      if (number < 10) {
        number = '0' + number
      }
      return number
    },
    onPlay() {
      console.log(this.swiper)
      if (this.icon === 'icon-Dropdown') {
        this.icon = 'icon-play'
        this.swiper.autoplay.start()
      } else if (this.icon === 'icon-play') {
        this.icon = 'icon-Dropdown'
        this.swiper.autoplay.stop()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.l-swiper {
  position: relative;
}
.swiper {
  &-pagination {
    top: 49%;
    left: 20px;
    transform: translateY(-50%);
    width: 60%;
    ::v-deep .swiper-pagination-progressbar-fill {
      background-color: $--color-primary;
    }
  }
  &-count {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: calc(60% + 45px);
    line-height: 0;
    &-current {
      float: left;
    }
    &-total {
      float: right;
    }
  }
  &-auto-btn {
    position: absolute;
    top: 49.6%;
    left: calc(60% + 45px);
    transform: translateY(-50%);
    padding: 0;
    z-index: 1;
    ::v-deep {
      .el-button.el-button--icon {
        transform: rotate(270deg);
        i {
          line-height: 1;
          &.icon-play {
            height: 8px;
            width: 10px;
            border: 3px solid $--color-tertiary {
              left: 0;
              right: 0;
            }
          }
        }
      }
    }
  }
}
.info {
  &--title {
    height: 204px;
    padding: {
      top: 32px;
    }
  }
  &--list {
    border-top: 1px solid $--color-skygray;
    padding-top: 24px;
    ::v-deep {
      .data {
        color: $--color-tertiary;
        font: {
          size: $--font-size-medium;
          weight: $--font-weight-medium;
        }
      }
    }
  }
}
</style>
