<template>
  <div class="l-content">
    <section class="l-section gap_top">
      <p class="tit">
        직업
      </p>
      <div class="form-wrap">
        <base-input v-model="input.disabled" disabled />
        <base-buttons
          type="black"
          size="medium"
          @click="showPopup = true"
        >
          직업찾기
        </base-buttons>
      </div>

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
    </section>
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
      input: {
        disabled: '직업찾기를 통해 검색해주세요'
      },
      input1: {
        value: '사무원'
      },
      dialog: {
        full: false
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
.tit {
  font-size: $--font-size-medium;
  color: $--color-darkgray;
  margin-bottom: 0.8rem;
}
.form-wrap {
  display: flex;
  .el-button {
    margin-left: 0.8rem;
  }
}

.el-dialog {
  &__body {
    .form-wrap {
      &.full {
        flex-flow: column;
      }
      & + .el-button {
        margin-top: 1.2rem;
      }
    }
  }
  &__footer {
    .el-button {
      height: 6.1rem;
    }
  }
}

::v-deep {
  .el-dialog__wrapper.full {
    .el-dialog__body {
      padding: 0;
    }
  }
  .icon-Reload{
    margin-right: 4px;
  }
}

.gap-top-pd {
  padding-top: 32px;
}

</style>
