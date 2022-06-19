<template>
  <div>
    <base-tab v-model="tab.activeName" :tab-list="tab.tabList" stretch>
      <template #tabContents>
        <div v-if="tab.activeName === 'first'">
          <section class="l-section gap_top">
            <div class="content-box">
              <p class="tit">
                빠른 직업 선택
              </p>
              <base-radio-buttons
                v-model="radioBtn2.value"
                :list="radioBtn2.list"
                type="flex"
              />
            </div>

            <template v-if="radioBtn2.value === 1">
              <div class="content-box">
                <p class="tit">
                  직업명
                </p>
                <div class="form-wrap">
                  <base-input v-model="input1.value" disabled />
                </div>
                <base-buttons
                  type="gray-light"
                  size="small"
                  icon="icon-Reload"
                  full
                >
                  재선택
                </base-buttons>
              </div>
            </template>
            <template v-else>
              <div class="content-box">
                <p class="tit">
                  대분류/중분류/소분류 (직업명)
                </p>
                <div class="form-wrap full">
                  <base-select-button
                    :select="mobSelect"
                    :value.sync="selectedValue"
                    txt="선택해주세요"
                    stt="full"
                  />
                  <base-select-button
                    :select="mobSelect"
                    :value.sync="selectedValue"
                    txt="먼저 대분류를 선택해 주세요"
                    stt="full"
                    disabled
                  />
                  <base-select-button
                    :select="mobSelect"
                    :value.sync="selectedValue"
                    txt="먼저 중분류를 선택해 주세요"
                    stt="full"
                    disabled
                  />
                </div>
              </div>
            </template>
          </section>
          <section class="l-section gap-top-pd">
            <div class="content-box">
              <p class="tit">
                직장명
              </p>
              <div class="form-wrap">
                <base-input
                  v-model="input.default"
                  placeholder="직장명을 입력해주세요"
                />
              </div>
            </div>
          </section>
        </div>

        <div v-if="tab.activeName === 'second'">
          <section class="l-section gap_top">
            <div class="content-box">
              <p class="tit">
                직업명 검색
              </p>
              <div class="form-wrap">
                <base-input
                  v-model="input.default"
                  placeholder="직업명을 입력해주세요"
                />
                <base-buttons
                  type="black"
                  size="medium"
                >
                  검색
                </base-buttons>
              </div>
            </div>
            <div class="content-box">
              <p class="tit">
                직업 검색결과
              </p>
              <div class="form-box">
                <template v-if="radioBtn3.list.length === 0">
                  <div class="empty-txt">
                    <p class="txt">
                      {{ emptyTxt }}
                    </p>
                  </div>
                </template>
                <template v-else>
                  <base-radio-buttons
                    v-model="radioBtn3.value"
                    :list="radioBtn3.list"
                    type="list"
                  />
                </template>
              </div>
            </div>
            <div class="content-box">
              <p class="tit">
                직업명
              </p>
              <div class="form-wrap">
                <base-input v-model="input.disabled" disabled />
              </div>
            </div>
          </section>
          <section class="l-section gap-top-pd">
            <div class="content-box">
              <p class="tit">
                직장명
              </p>
              <div class="form-wrap">
                <base-input
                  v-model="input.default"
                  placeholder="직장명을 입력해주세요"
                />
              </div>
            </div>
          </section>
        </div>
      </template>
    </base-tab>

    <bottom-buttons :buttons="buttons" />
  </div>
</template>

<script>
import BottomButtons from '~/components/BottomButtons'
export default {
  components: {
    BottomButtons
  },
  data() {
    return {
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
  },

  methods: {
    test() {}
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
        .select {
          &.disabled {
            ::v-deep {
              .el-button {
                background-color: $--color-palegray;
              }
            }
          }
          ::v-deep {
            .el-button {
              padding: 12px;
            }
          }
          & + .select {
            margin-top: 8px;
          }
        }
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

.content-box {
  & + & {
    margin-top: 2.8rem;
  }
}

::v-deep {
  .el-dialog__wrapper.full {
    .el-dialog__body {
      padding: 0;
    }
  }
  .icon-Reload {
    margin-right: 4px;
  }
}

.gap-top-pd {
  padding-top: 32px;
}

::v-deep {

  .form-box{
    border: 1px solid $--color-skygray;
    height: 212px;
    overflow: auto;
    padding: 0;
    .empty-txt{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .list{
      padding-left: 0;
    }
    .el-radio-group.list .el-radio-button{
      margin-bottom: 0;
      border: none;
      & + .el-radio-button{
        border-top: 1px solid $--color-skygray;
      }
      &.is-active{
        border-color: $--color-skygray;
      }
    }
  }
}

</style>
