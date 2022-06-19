<template>
  <div>
    <template v-if="step === '1'">
      <div class="l-content">
        <div class="l-section gap_top">
          <div class="c-search">
            <div class="base-input-form">
              <div iv class="tit">
                주소
              </div>
            </div>
            <div class="c-search__input">
              <base-buttons
                class="input-btn"
                type="gray-light"
                size="medium"
                @click="pop1 = !pop1"
              >
                주소찾기를 통해 검색해주세요
              </base-buttons>
              <base-buttons
                class="input-btn"
                type="black"
                size="medium"
                @click="pop1 = !pop1"
              >
                주소찾기
              </base-buttons>
            </div>
          </div>
        </div>
      </div>
    </template>
    <base-modal
      title="주소찾기"
      :visible.sync="pop1"
      type="full"
      top="0"
      width="100%"
    >
      <template #content>
        <div class="l-content">
          <section class="l-section gap_top">
            <div class="c-search">
              <div class="c-search__input">
                <base-input
                  v-model="searchInput"
                  class="input-btn"
                  placeholder="예)삼봉로 48"
                  has-clear
                />
                <base-buttons
                  class="input-btn"
                  type="black"
                  size="medium"
                  @click="(step = '3'), (pop1 = !pop1)"
                >
                  검색
                </base-buttons>
              </div>
            </div>
          </section>
          <section v-if="searchInput === ''" class="l-section">
            <div class="c-search">
              <div class="c-search__tip">
                <div class="tit">
                  Tip
                </div>
                <div class="desc">
                  아래와 같은 조합으로 검색을 하시면 더욱 정확한 결과가
                  검색됩니다.
                </div>
                <div class="item">
                  <span class="top">도로명+건물번호</span>
                  <span class="bottom">예)판교역로 234, 제주 첨단로 242</span>
                </div>
                <div class="item">
                  <span class="top">도로명+건물번호</span>
                  <span class="bottom">예)판교역로 234, 제주 첨단로 242</span>
                </div>
                <div class="item">
                  <span class="top">도로명+건물번호</span>
                  <span class="bottom">예)판교역로 234, 제주 첨단로 242</span>
                </div>
                <div class="item">
                  <span class="top">도로명+건물번호</span>
                  <span class="bottom">예)판교역로 234, 제주 첨단로 242</span>
                </div>
              </div>
            </div>
          </section>

          <section v-else class="l-section nopadding">
            <div class="c-search">
              <div class="c-search__card">
                <template v-if="!showAddpostlist">
                  <div class="addr-short-list">
                    <base-buttons
                      v-for="(item, index) in shortAddrList"
                      :key="index"
                      type="reset"
                      @click="showAddpostlist = !showAddpostlist"
                    >
                      <span v-html="item.title" />
                      <i class="icon-ArrowR btn-icon" />
                    </base-buttons>
                  </div>
                </template>
                <div v-if="showAddpostlist">
                  <base-radio-buttons
                    v-model="radio"
                    type="reset-radio "
                    :list="cardList"
                  >
                    <template #default="{ scope }">
                      <div class="addr-post-list">
                        <div>
                          <span class="post-code">
                            {{ scope.postCode }}
                          </span>
                          <span class="post-addr">
                            {{ scope.newAddr }}
                          </span>
                          <span class="post-addr">
                            {{ scope.oldAddr }}
                          </span>
                          <i class="icon-Check post-icon" />
                        </div>
                      </div>
                    </template>
                  </base-radio-buttons>
                  <div class="addr-post-list__empty">
                    <div class="empty-info">
                      <div>
                        <div class="title">
                          검색 결과가 없습니다.
                        </div>
                        <base-buttons type="reset">
                          (구) 주소찾기
                        </base-buttons>
                      </div>
                    </div>
                    <div class="empty-info-desc">
                      <div>
                        <div class="desc">
                          찾으시려는 도로명주소의 건물번호 또는 건물명까지
                          상세히 입력해주세요.
                        </div>
                        <div class="desc">
                          정식 건축물이 없는 주소인 경우 (가건물, 컨테이너 등)
                          ‘구 주소찾기’를 이용해주세요.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </template>
      <template #footer>
        <base-buttons
          type="navy"
          size="large"
          @click=";(pop1 = false), (pop2 = !pop2)"
        >
          선택
        </base-buttons>
      </template>
    </base-modal>

    <base-modal
      title="상세주소 입력"
      :visible.sync="pop2"
      width="100%"
      class="addr-detail-input"
    >
      <template #content>
        <div class="c-search">
          <div class="addr-card inpop">
            <div class="post-code">
              {{ selectedAddr.postCode }}
            </div>
            <div class="post-addr">
              {{ selectedAddr.newAddr }}
            </div>
            <div class="post-addr">
              [지번]&nbsp;{{ selectedAddr.oldAddr }}
            </div>

            <div class="post-input">
              <base-input v-model="postInput" placeholder="상세주소 입력" />
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <base-buttons
          type="navy"
          :plain="postInput===''"
          :disabled="postInput===''"
          size="large"
          @click="pop2 = false"
        >
          적용
        </base-buttons>
      </template>
    </base-modal>

    <template v-if="step === '3'">
      <div class="l-content">
        <div class="l-section gap_top">
          <div class="c-search">
            <div class="base-input-form">
              <div iv class="tit">
                주소
              </div>
            </div>
            <div class="c-search__card">
              <div
                v-for="(item, index) in cardList"
                :key="index"
                class="addr-card"
              >
                <div class="post-code">
                  {{ item.postCode }}
                </div>
                <div class="post-addr">
                  [도로명]&nbsp;{{ item.newAddr }}
                </div>
                <div class="post-addr">
                  [지번]&nbsp;{{ item.oldAddr }}
                </div>
                <div class="post-input">
                  <base-buttons
                    type="gray-light"
                    size="medium"
                    full
                    @click="step = '4'"
                  >
                    변경
                  </base-buttons>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-if="step === '4'">
      <div class="l-content">
        <section class="l-section gap_top">
          <div class="c-search">
            <div class="c-search__input">
              <base-input
                v-model="searchInput2"
                class="input-btn"
                placeholder="예)삼봉로 48"
              />
              <base-buttons class="input-btn" type="black" size="medium">
                검색
              </base-buttons>
            </div>
          </div>
        </section>
        <section class="l-section nopadding">
          <div class="c-search">
            <div class="c-search__card">
              <base-radio-buttons
                v-model="radio"
                type="reset-radio "
                :list="cardList"
              >
                <template #default="{ scope }">
                  <div class="addr-post-list">
                    <span class="post-code">
                      {{ scope.postCode }}
                    </span>
                    <span class="post-addr">
                      {{ scope.newAddr }}
                    </span>
                    <span class="post-addr">
                      {{ scope.oldAddr }}
                    </span>
                    <i class="icon-Check post-icon" />
                  </div>
                </template>
              </base-radio-buttons>
            </div>
          </div>
        </section>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pop1: false,
      pop2: false,
      searchInput: '',
      searchInput2: '종로구 삼봉로 48',
      postInput: '',
      step: '1',
      radio: '',
      showAddpostlist: false,
      cardList: [
        {
          postCode: '03156',
          newAddr: '03156 서울 종로구 삼봉로 48',
          oldAddr: '서울 종로구 청진동 188 시그나타워 15층',
          value: '0'
        },
        {
          postCode: '03156',
          newAddr: '03156 서울 종로구 삼봉로 48',
          oldAddr: '서울 종로구 청진동 188 시그나타워 15층',
          value: '1'
        },
        {
          postCode: '03156',
          newAddr: '03156 서울 종로구 삼봉로 48',
          oldAddr: '서울 종로구 청진동 188 시그나타워 15층',
          value: '2'
        }
      ],
      shortAddrList: [
        {
          title: '서울특별시 <b>종로구</b>'
        },
        {
          title: '서울특별시 <b>종로구</b> 12'
        },
        {
          title: '서울특별시 <b>종로구</b> 245'
        }
      ],
      selectedAddr: {
        postCode: '03156',
        newAddr: '서울 종로구 삼봉로 48',
        oldAddr: '서울 종로구 청진동 188 시그나타워 15층'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.nopadding {
  padding: 0;
}
.c-search {
  &__input {
    display: flex;
    .input-btn {
      flex: auto;
      margin-right: 8px;
      &:last-child {
        margin-right: 0;
        flex: 1;
      }
    }
  }
  &__tip {
    .tit {
      margin-bottom: 4px;

      font-weight: 700;
    }
    .desc {
      margin-bottom: 24px;
      font-size: 14px;
    }
    .item {
      margin-bottom: 12px;
      font-size: 14px;
      .top {
        display: block;
        color: #4b4e53;
      }
      .bottom {
        display: block;
        color: #150f96;
      }
    }
  }
  ::v-deep {
    .reset-radio {
      .el-radio-button {
        padding: 20px;
        border-bottom: 1px solid #d7d7d7;
        background: #ffffff;
        .addr-post-list {
          span {
            display: block;
            line-height: 1.6;
            letter-spacing: -0.3px;
            text-align: left;
            white-space: normal;
          }
          .post-icon {
            position: absolute;
            right: 0;
            top: 0;
          }
          .post-code {
            font-weight: 700;
            margin-bottom: 4px;
          }
        }
        &.is-active {
          .addr-post-list {
            span {
              color: #150f96;
            }
            .post-icon {
              color: #150f96;
            }
          }
        }
      }
    }
  }
  .addr-card {
    padding: 20px;
    border: 1px solid #d7d7d7;
    background: #ffffff;
    margin-bottom: 20px;
    .post-code {
      font-weight: 700;
      margin-bottom: 8px;
    }
    .post-input {
      margin-top: 20px;
    }
  }
  .c-search__card {
    .addr-short-list {
      .el-button--reset {
        display: flex;
        align-items: center;
        padding: 0 44px 0 20px;
        width: 100%;
        height: 66px;
        border-bottom: 1px solid #d7d7d7;
        ::v-deep {
          span {
            b {
              color: #150f96;
            }
            .btn-icon {
              position: absolute;
              right: 44px;
            }
          }
        }
      }
    }
    .addr-post-list__empty {
      .empty-info {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 158px;
        text-align: center;
        border-bottom: solid 1px #d7d7d7;
        .title {
          margin-bottom: 12px;
          font-size: 1.4rem;
        }
        .el-button {
          font-size: 1.4rem;
          font-weight: 700;
          border-bottom: 1px solid #000;
        }
      }
      .empty-info-desc {
        display: flex;
        padding: 32px 20px 0 20px;
        .desc {
          position: relative;
          margin-bottom: 8px;
          padding-left: 12px;
          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 7px;
            width: 4px;
            height: 4px;
            background-color: #4b4e53;
            border-radius: 100%;
          }
        }
      }
    }
  }
}
::v-deep {
  .addr-detail-input {
    &.el-dialog__wrapper {
      .c-search {
        .addr-card {
          &.inpop {
            padding: 0;
            margin-bottom: 0;
            border: none;
            .post-code {
              font-size: 14px;
              margin-bottom: 4px;
            }
            .post-input {
              margin-top: 12px;
            }
          }
        }
      }
      .el-dialog__footer {
        padding: 0;
      }
    }
  }
}
</style>
