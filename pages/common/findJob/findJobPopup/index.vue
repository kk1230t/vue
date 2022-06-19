<template>
  <div>
    <base-buttons
      type="black"
      size="medium"
      @click="showPopup = true"
    >
      직업찾기
    </base-buttons>

    <base-modal
      custom-class="modal"
      title="직업찾기"
      :visible.sync="showPopup"
      type="full"
      top="0"
      width="100%"
    >
      <template #content>
        <find-job-popup />
      </template>
    </base-modal>
  </div>
</template>

<script>
import FindJobPopup from '~/components/FindJob/FindJobPopup'
export default {
  components: {
    FindJobPopup
  },
  data() {
    return {
      showPopup: false,

      mobSelectedValue: 1,
      mobSelect: {
        title: '계좌선택',
        list: [
          {
            value: 1,
            label: '기업은행 0075******8405'
          },
          {
            value: 2,
            label: '국민은행 5278******3178'
          },
          {
            value: 3,
            label: '우리은행 0075******8405'
          }
        ]
      },
      input: {
        disabled: '직업찾기를 통해 검색해주세요'
      },
      input1: {
        value: '사무원'
      },
      tab: {
        activeName: 'first',
        tabList: [
          {
            label: '직업분류로 찾기',
            name: 'first'
          },
          {
            label: '검색으로 찾기',
            name: 'second'
          }
        ]
      },
      radioBtn2: {
        value: '',
        list: [
          {
            label: '사무원',
            value: 1
          },
          {
            label: '교사',
            value: 2
          },
          {
            label: '공무원',
            value: 3
          },
          {
            label: '전업주부',
            value: 4
          }
        ]
      },
      select: {
        value: '',
        list: [
          {
            value: 1,
            label: 'option1'
          },
          {
            value: 2,
            label: 'option1'
          }
        ]
      },
      buttons: {
        negative: {
          show: false
        },
        positive: {
          show: true,
          title: '입력'
        },
        disable: {
          show: false
        }
      },
      radioBtn3: {
        value: '',
        list: [
          {
            label: '경영지원 사무직 관리자',
            value: '1'
          },
          {
            label: '연구직 사무 관리자',
            value: '2'
          },
          {
            label: '교육 사무직 관리자',
            value: '3'
          },
          {
            label: '경영지원 사무직 관리자',
            value: '4'
          }
        ]
      },
      emptyTxt: '검색결과가 없습니다.'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
