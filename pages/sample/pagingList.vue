<template>
  <div class="layout-sample">
    <h2>페이징</h2>
    <base-buttons type="info" icon="el-icon-document" @click="fetchCardList">
      paging 샘플리스트 조회
    </base-buttons>
    <base-card-list :card-list="cardList">
      <template #topConent="{ scope }">
        <base-tag v-for="(tagItem, tagIdx) in scope.item.tag" :key="tagIdx" :tag-title="tagItem.title" :type="tagItem.type" />
      </template>
      <template #contents="{ scope }">
        <div>
          {{ scope.item.content }}
        </div>
      </template>
    </base-card-list>
    <base-pagination
      v-if="totalPages"
      :total-pages="totalPages"
      :page-number.sync="pageData.page"
      @change="onPaging"
    />
  </div>
</template>
<script>
// api service
import { sampleService } from '@/api/services'
export default {
  data() {
    return {
      cardList: [],
      pageData: {
        page: 0
      },
      totalPages: 0
    }
  },
  methods: {
    async fetchCardList() {
      this.$nuxt.$emit('onLoading', true)
      try {
        const res = await sampleService.getSamplePageBooks(this.pageData)
        this.totalPages = res.data.totalPages
        this.cardList = res.data.content.map((item) => {
          return {
            title: item.title,
            subTitle: '서브 타이틀 영역',
            tag: [
              {
                title: '정상',
                type: 'primary'
              }
            ],
            id: item.bookstoreId,
            content: '컨텐츠 영역입니다.',
            text: '텍스트 영역'
          }
        })
        this.$nuxt.$emit('onLoading', false)
      } catch (error) {
        this.$nuxt.$emit('onLoading', false)
        console.log(error)
      }
    },
    onPaging(num) {
      this.$nextTick(() => {
        this.fetchCardList()
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.layout-sample {
  padding: 30px 20px;
  h2 {
    margin: 30px 0 10px;
    font-size: 2.4rem;
    font-weight: bold;
  }
  .card-type-list-wrap {
    margin-bottom: 20px;
    & + div {
      text-align: center;
    }
  }
}
</style>
