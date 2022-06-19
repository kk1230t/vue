<template>
  <div>
    <div class="left">
      <h2 class="title">
        <nuxt-link to="/guide"> 가이드페이지 </nuxt-link>
      </h2>
      <ul>
        <li v-for="(item, idx) in list" :key="idx">
          <nuxt-link :to="item.link">
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="contents">
      <h2 v-if="$route.name !== 'guide'" class="info">
        변수명 확인 부탁드립니다.
      </h2>
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuideLayout',
  data() {
    return {
      list: [
        {
          link: '/guide/title',
          name: '타이틀'
        },
        {
          link: '/guide/list',
          name: '리스트'
        },
        {
          link: '/guide/cardList',
          name: '카드리스트'
        },
        {
          link: '/guide/table',
          name: '테이블'
        },
        {
          link: '/guide/tab',
          name: '탭'
        },
        {
          link: '/guide/accordion',
          name: '아코디언'
        },
        {
          link: '/guide/button',
          name: '버튼'
        },
        {
          link: '/guide/linkButton',
          name: '링크버튼'
        },
        {
          link: '/guide/pagination',
          name: '페이지네이션'
        },
        {
          link: '/guide/label',
          name: '레이블'
        },
        {
          link: '/guide/form',
          name: '폼'
        },
        {
          link: '/guide/modal',
          name: '팝업'
        },
        {
          link: '/guide/step',
          name: '스탭'
        },
        {
          link: '/guide/slider',
          name: '슬라이더'
        },
        {
          link: '/guide/messagebox',
          name: '메세지박스'
        },
        {
          link: '/guide/tooltip',
          name: '툴팁'
        },
        {
          link: '/guide/bottomSheet',
          name: '바텀 시트'
        },
        {
          link: '/guide/icons',
          name: '아이콘'
        },
        {
          link: '/guide/newline',
          name: '개행'
        },
        {
          link: '/guide/image',
          name: '이미지'
        },
        {
          link: '/guide/search',
          name: '검색'
        },
        {
          link: '/guide/floatingbox',
          name: '플로팅박스'
        },
        {
          link: '/guide/box',
          name: '박스형태'
        },
        {
          link: '/guide/swiper',
          name: '슬라이드'
        },
        {
          link: '/guide/css',
          name: 'css'
        },
        {
          link: '/guide/etc',
          name: '기타'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.left {
  position: fixed;
  width: 200px;
  height: 100%;
  overflow: scroll;
  background: #f1f1f1;
  .title {
    padding: 10px;
    font-size: 16px;
    font-weight: 900;
    text-align: center;
    border-bottom: 2px solid #ccc;
  }
  li {
    padding: 4px;
    border-bottom: 1px solid #ddd;
    font-size: 1.4rem;

    a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
.contents {
  width: calc(100% - 200px);
  padding: 10px {
    top: 15px;
  }
  margin-left: 200px;
  .info {
    font-size: 20px;
    font-weight: 900;
    text-align: center;
  }
}
</style>
