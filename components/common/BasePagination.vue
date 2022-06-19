<template>
  <div>
    <div class="pagination" :class="{'pagination-center' : paginationcenter}">
      <base-buttons
        type="gray"
        size="mini"
        circle
        plain
        icon="icon-ArrowL02"
        :disabled="currentPage === 0"
        @click="onPaging(currentPage - 1)"
      >
        <span class="btn-pre">이전</span>
      </base-buttons>
      <ul class="pagination-list-wrap">
        <li v-for="(item) in paginationList" :key="item" class="pagination-list" :class="{'is-active': currentPage === item}">
          <base-buttons size="mini" @click="onPaging(item)">
            {{ item + 1 }}
          </base-buttons>
        </li>
      </ul>
      <base-buttons
        type="gray"
        size="mini"
        circle
        plain
        icon="icon-ArrowR02"
        :disabled="currentPage === totalPages - 1"
        @click="onPaging(currentPage + 1)"
      >
        <span class="btn-next">다음</span>
      </base-buttons>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      default: 1,
      require: true
    },
    pageNumber: {
      type: Number,
      default: 0,
      require: true
    },
    pagination: {
      type: Object,
      default: () => {
        return {
          total: 1000,
          pageSize: 30,
          count: 11
        }
      }
    },
    paginationcenter: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      viewMaxPaging: 5, // 화면 표시될 페이징 갯수
      paginationList: [],
      currentPage: null
    }
  },
  computed: {
    isLessPaging() { // 리스트 전체 페이징 <= 화면상 표시될 페이징
      return this.totalPages <= this.viewMaxPaging
    }
  },
  mounted() {
    this.currentPage = this.pageNumber
    this.makePaging('mount')
  },
  methods: {
    makePaging(type, num) {
      let pagination = []
      if (type === 'mount') {
        const paging = this.isLessPaging ? this.totalPages : this.viewMaxPaging
        for (let i = 0; i < paging; i++) {
          pagination.push(i)
        }
        this.paginationList = pagination
      } else {
        pagination = this.paginationList.slice()
        const pagingIndex = this.paginationList.indexOf(num)
        if (!this.isLessPaging) {
          if (pagingIndex < 2) {
            if (num !== 0 && num !== 1) {
              switch (pagingIndex) {
                case 0:
                  pagination.unshift(num - 2)
                  pagination.pop()
                  pagination.unshift(num - 1)
                  pagination.pop()
                  break
                case 1:
                  pagination.pop()
                  pagination.unshift(num - 2)
              }
              this.paginationList = [...pagination]
            } else if (num === 1 && !pagination.includes(0)) {
              pagination.pop()
              pagination.unshift(num - 1)
              this.paginationList = [...pagination]
            }
          } else if (pagingIndex > 2) {
            if (num !== this.totalPages - 1 && num !== this.totalPages - 2) {
              switch (pagingIndex) {
                case 4:
                  pagination.shift()
                  pagination.push(num + 1)
                  pagination.shift()
                  pagination.push(num + 2)
                  break
                case 3:
                  pagination.shift()
                  pagination.push(num + 2)
              }
              this.paginationList = [...pagination]
            } else if (num === this.totalPages - 2 && !pagination.includes(this.totalPages - 1)) {
              pagination.shift()
              pagination.push(num + 1)
              this.paginationList = [...pagination]
            }
          }
        }
      }
    },
    async onPaging(num) {
      if (this.currentPage === num) { return false }
      await this.makePaging('change', num)
      this.$nextTick(() => {
        this.currentPage = num
        this.$emit('change', num)
        this.$emit('update:pageNumber', num)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/pagination';

.pagination {
  &.pagination-center {
    margin-top: 32px;
    text-align: center;
  }
}
</style>
