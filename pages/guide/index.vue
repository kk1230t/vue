<template>
  <div>
    <base-titles fsize="20" title="참고사이트" />
    <div class="top-info">
      <ul class="flex-1">
        <li class="guide-list">
          <a href="https://kr.vuejs.org/v2/guide/index.html">vuejs</a>
        </li>
        <li class="guide-list">
          <a href="https://element.eleme.io/#/en-US">element ui</a>
        </li>
        <li class="guide-list">
          <a href="https://nuxtjs.org/">nuxt js</a>
        </li>
        <li class="guide-list">
          <a href="https://sass-lang.com/">sass</a>
        </li>
        <li class="guide-list">
          <a href="https://v1.github.surmon.me/vue-awesome-swiper/">swiper</a>
        </li>
      </ul>

      <div class="flex-1">
        <base-input v-model="txt" type="textarea" @input="convertTag" />
      </div>
    </div>
    <base-titles fsize="20" title="파일명" />
    <div class="top-info-1">
      <base-titles fsize="16" title="폴더명 규칙" />
      <p>page 폴더명 : 카멜 케이스 ex.atoA</p>
      <P>** myPage > index.vue -> 폴더 > index.vue</P>
      <p>components 파일 : 파스칼 케이스 ex.AtoA</p>
      <base-titles fsize="16" title="이미지 / 아이콘 파일" />
      <p>더미 이미지(DB에서 나중에 변경될 이미지들) : /assets/images/sample</p>
      <P>데이터가 아닌 이미지(고정적인 이미지) : /assets/images/common</P>
      <P>아이콘 : /assets/images/common/icons</P>
      <ul>
        <li class="guide-list">
          <span>사이버창구: </span><span class="txt-blue">myPage</span>
        </li>
        <li class="guide-list">
          <span>보험상품: </span><span class="txt-blue">product</span>
        </li>
      </ul>
    </div>
    <base-titles fsize="20" title="워크리스트" />
    <base-table :data="data" :header="header">
      <template #file="{ scope }">
        <nuxt-link :to="scope.row.file">
          {{ scope.row.file }}
        </nuxt-link>
      </template>
    </base-table>
  </div>
</template>

<script>
import menuData from '@/pages/guide/menuData.json'
export default {
  layout: 'guideLayout',
  data() {
    return {
      txt: '',
      header: [
        {
          type: 'index',
          label: 'NO',
          align: 'center'
        },
        {
          label: '브랜치명',
          prop: 'key',
          align: 'center'
        },
        {
          prop: 'deth1',
          label: 'deth1',
          width: '300px'
        },
        {
          prop: 'deth2',
          label: 'deth2'
        },
        {
          prop: 'deth3',
          label: 'deth3'
        },
        {
          prop: 'type',
          label: '유형'
        },
        {
          prop: 'file',
          label: '파일명',
          columnType: 'custom'
        },
        {
          prop: 'name',
          label: '담당자'
        },
        {
          prop: 'state',
          label: '작업상태',
          align: 'center'
        },
        {
          prop: 'dueday',
          label: '완료예정일'
        },
        {
          prop: 'endday',
          label: '완료일'
        },
        {
          prop: 'exit',
          label: '비고'
        }
      ],
      data: menuData.data
    }
  },
  methods: {
    convertTag() {
      let a = this.txt.replaceAll('<', '&lt;')
      a = a.replaceAll('>', '&gt;')
      this.txt = a
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep.el-table {
  margin-top: 30px;
  td.el-table__cell {
    &:not(:last-child) {
      border-right: 1px solid #e7ecf3;
    }
  }
}
.guide-list {
  &::before {
    margin-right: 10px;
    content: '-';
  }
  a:hover {
    color: $--color-primary;
    text-decoration: underline;
  }
}
.top-info {
  display: flex;
  .flex-1 {
    flex: 1;
    ::v-deep.el-textarea {
      &__inner {
        height: 100px;
      }
    }
  }
  &-1 {
    display: block;
  }
}
</style>
