<template>
  <div class="layout-sample">
    <nuxt-link to="/sample/pagingList">
      <span style="color: blue">페이징 리스트 샘플보기</span>
    </nuxt-link>
    <h2>데이터 입력</h2>
    <el-form
      ref="registForm"
      :model="bookInfo"
      :rules="rules"
      label-width="100px"
      label-position="left"
    >
      <el-form-item label="title" prop="title">
        <base-input v-model="bookInfo.title" type="text" auto-complete="false" />
      </el-form-item>
      <el-form-item label="isbn" prop="isbn">
        <base-input v-model="bookInfo.isbn" auto-complete="false" />
      </el-form-item>
      <el-form-item label="bookId" prop="bookId">
        <base-input v-model="bookInfo.bookId" auto-complete="false" />
      </el-form-item>
    </el-form>
    <base-buttons type="primary" icon="el-icon-plus" @click="onSubmit('registForm')">
      데이터 추가
    </base-buttons>

    <base-buttons type="info" icon="el-icon-document" @click="onSearch">
      샘플리스트 조회
    </base-buttons>
    <h2>조회 결과</h2>
    <div class="list">
      <ul>
        <!--
          GUIDE::
          리스트 렌더링
          v-for, key값 필수
          참조: https://kr.vuejs.org/v2/guide/list.html
         -->
        <li v-for="(item, index) in list" :key="index">
          <!--
            GUIDE::
            v-model - input 태그의 데이터 바인딩 용도 사용
            v-bind(:) - 태그 및 컴포넌의의 attr값 작성시 사용
            v-on(@) - 이벤트 핸들링시 사용 ex)click, change...
              @click="메서드명"

            참조: https://kr.vuejs.org/v2/guide/forms.html
            참조: https://kr.vuejs.org/v2/guide/events.html
           -->
          <input
            :id="`radio-${index}`"
            v-model="selectId"
            name="list"
            type="radio"
            :value="item.bookId"
            :checked="item.bookId === selectId"
            @change="onSelect(item)"
          >
          <label :for="`radio-${index}`">{{ item.title }}</label>
        </li>
      </ul>
    </div>
    <h2>데이터 수정</h2>
    <el-form
      ref="modifyForm"
      :model="selectedData"
      :rules="rules"
      label-width="100px"
      label-position="left"
      :disabled="!selectId"
    >
      <el-form-item label="title" prop="title">
        <base-input v-model="selectedData.title" type="text" auto-complete="false" />
      </el-form-item>
      <el-form-item label="isbn" prop="isbn">
        <base-input v-model="selectedData.isbn" auto-complete="false" />
      </el-form-item>
      <el-form-item label="bookId">
        <base-input v-model="selectedData.bookId" auto-complete="false" disabled />
      </el-form-item>
    </el-form>
    <div class="d-flex">
      <base-buttons type="success" icon="el-icon-edit" :disabled="!selectId" @click="onModify('modifyForm')">
        선택데이터 수정
      </base-buttons>
      <base-buttons type="danger" icon="el-icon-delete" :disabled="!selectId" @click="onDelete">
        선택데이터 삭제
      </base-buttons>
    </div>

    <div>
      <h2>스토어 활용</h2>
      <base-buttons type="primary" icon="el-icon-plus" :disabled="list.length === 0" @click="addStore">
        스토어 데이터 추가
      </base-buttons>
      <div class="list">
        <ul>
          <li v-for="(item, index) in bookList" :key="index">
            <input
              :id="`radio-${index}`"
              v-model="selectId2"
              :value="item.bookId"
              name="list"
              type="radio"
              :checked="item.bookId === selectId"
              @change="onSelect(item)"
            >
            <label :for="`radio-${index}`">{{ item.title }}</label>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <base-messagebox :box="boxInfo" @onClick="onClick" />
    </div>
  </div>
</template>
<script>
/**
 * GUIDE::
 * store(전역변수) vuex 사용시 활용
 * 참조: https://vuex.vuejs.org/
 */
import { mapState, mapMutations } from 'vuex'
// api service
import { sampleService } from '@/api/services'
// 컴포넌트 import
import BaseButtons from '~/components/common/BaseButtons.vue'
import BaseMessagebox from '~/components/common/BaseMessagebox.vue'
export default {
  // 컴포넌트 사용
  components: { BaseButtons, BaseMessagebox },
  // 페이지 변수
  data() {
    return {
      list: [],
      bookInfo: {
        title: '',
        isbn: '',
        delYn: false,
        bookId: '',
        bookstoreId: '7'
      },
      selectedData: null,
      selectId: null,
      selectId2: null,
      boxInfo: {
        title: '꼭 알아보세요!',
        titleType: 'info',
        listList: [
          {
            content: '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
          },
          {
            content:
              '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
          }
        ],
        btnName: '버튼'
      },
      rules: {
        title: [
          { required: true, message: '필수 입력 값입니다.', trigger: 'blur' }
        ],
        isbn: [
          { required: true, message: '필수 입력 값입니다.', trigger: 'blur' }
        ],
        bookId: [
          { required: true, message: '필수 입력 값입니다.', trigger: 'blur' }
        ]
      }
    }
  },
  /**
   * GUIDE::
   * AKA filter
   * 참조: https://kr.vuejs.org/v2/guide/computed.html
   */
  computed: {
    ...mapState('bookStore', {
      bookList: 'list'
    })
  },
  /**
   * life cycle
   * GUIDE::
   * 참조: https://v3.ko.vuejs.org/api/options-lifecycle-hooks.html
   */
  created() {
    this.selectedData = Object.assign({}, this.bookInfo)
  },
  /**
   * GUIDE::
   * 페이지 메서드 정의
   */
  methods: {
    ...mapMutations('bookStore', ['setBookList']),
    onReset(target) {
      this[target] = {
        title: '',
        isbn: '',
        delYn: false,
        bookId: '',
        bookstoreId: '7'
      }
    },
    onSelect(data) {
      this.selectedData = Object.assign(this.selectedData, data)
    },
    async onSearch() {
      /**
       * nuxtjs 에서 제공하는 컴포넌트간 데이터 통신법
       * $emit('메서드명', 데이터값) - 송신
       * $on('메서드명', 호출함수) - 수신
       * $nuxt.$emit
       * $nuxt.$on
       */
      this.$nuxt.$emit('onLoading', true)
      try {
        const res = await sampleService.getSampleBooks()
        this.list = res.data
        this.selectId = null
        this.$nuxt.$emit('onLoading', false)
      } catch (error) {
        this.$nuxt.$emit('onLoading', false)
        console.log(error)
      }
    },
    onSubmit(refForm) {
      this.$refs[refForm].validate(async(valid) => {
        if (valid) {
          try {
            const payload = { ...this.bookInfo }
            await sampleService.insertSampleBook(payload).then(() => {
              alert('데이터가 추가되었습니다.')
              this.onReset('bookInfo')
              this.onSearch()
            })
          } catch (error) {
            console.log(error)
          }
        } else {
          return false
        }
      })
    },
    onModify(refForm) {
      this.$refs[refForm].validate(async(valid) => {
        if (valid) {
          try {
            const payload = { ...this.selectedData }
            await sampleService.updateSampleBook(payload).then(() => {
              alert('데이터가 수정되었습니다.')
              this.onReset('selectedData')
              this.onSearch()
            })
          } catch (error) {
            console.log(error)
          }
        } else {
          return false
        }
      })
    },
    async onDelete() {
      if (this.selectedData.bookId) {
        try {
          await sampleService
            .deleteSampleBook(this.selectedData.bookId)
            .then(() => {
              alert('데이터가 삭제되었습니다.')
              this.onReset('selectedData')
              this.onSearch()
            })
        } catch (error) {
          console.log(error)
        }
      }
    },
    addStore() {
      // vuex mapMutaion을 이용한 Mutation
      this.setBookList(this.list)

      // store에 직접 접근한 Mutation
      // this.$store.commit('modules/books/setBookList', this.list)
    },
    onClick(emitState) {
      console.log('emitState::', emitState)
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
  .list {
    height: 300px;
    border: 1px #ccc solid;
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    overflow-y: auto;
  }
  table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    input {
      width: 100%;
    }
  }
}
</style>
