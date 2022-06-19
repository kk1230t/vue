<template>
  <div>
    <p class="guide-title">
      <span>기본</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-swiper
          autoplay-button
          page-show
          :main-list="swiperList"
          :swiper-option="swiperOption"
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-swiper
                autoplay-button
                page-show
                :main-list="swiperList"
                :swiper-option="swiperOption"
              &gt;&lt;/base-swiper&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'guideLayout',
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      },
      swiperList: [
        {
          mainTitle: '실시간 지급',
          subTitle: '1회 신청금액 100만원까지',
          children: [
            {
              title: '대출한도',
              data: '해지/만기환급금의 50~80%'
            },
            {
              title: '대출이율',
              data: '연 2%~4.5%'
            },
            {
              title: '중도상환수수료',
              data: '0원'
            }
          ]
        },
        {
          mainTitle: '1일 3회까지 신청 가능',
          subTitle: '사이버창구 1일 1회, \n고객센터 추가 신청 시',
          children: [
            {
              title: '대출한도',
              data: '해지/만기환급금의 50~80%'
            },
            {
              title: '대출이율',
              data: '연 2%~4.5%'
            },
            {
              title: '중도상환수수료',
              data: '0원'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.guide {
  padding: 20px;
  &-title {
    padding: 10px 0;
    font: {
      size: 18px;
      weight: bold;
    }
    border-bottom: 1px solid #ddd;
    span {
      &::before {
        margin-right: 5px;
        border-left: 3px solid #000;
        content: '';
      }
    }
  }
  &-content {
    padding: 10px;
  }
  &-list {
    padding: 10px 0;
  }
  &-code {
    margin: 10px 0;
    position: relative;
    background: #dde8f1;
    font-size: 13px;
    white-space: pre;
  }
}
</style>
