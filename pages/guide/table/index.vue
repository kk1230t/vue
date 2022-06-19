<template>
  <div>
    <p class="guide-title">
      <span>모바일 테이블 기본형</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-table
          :header="mobTableList1.header"
          :data="mobTableList1.data"
          show-summary
        >
          <template #header1="{ scope }">
            <div class="table-wrap">
              <span>항목값</span>
              <base-select
                v-model=" scope.row.header1"
                :list="select.list"
                placeholder="선택해주세요"
              />
              <base-buttons type="black" size="medium">
                Button
              </base-buttons>
            </div>
          </template>
        </base-table>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-table
              :header="mobTableList1.header"
              :data="mobTableList1.data"
              show-summary
            &gt;
              &lt;template #header1="{ scope }"&gt;
                &lt;div class="table-wrap"&gt;
                  &lt;span&gt;항목값&lt;/span&gt;
                  &lt;base-select
                    v-model=" scope.row.header1"
                    :list="select.list"
                    placeholder="선택해주세요"
                  /&gt;
                  &lt;base-buttons type="black" size="medium"&gt;Button&lt;/base-buttons&gt;
                &lt;/div&gt;
              &lt;/template&gt;
            &lt;/base-table&gt;

            //합계가 있는 경우 show-summary props를 넣으면 됩니다.
          </code></pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>모바일 테이블 기본형 - thead 가 없는 경우</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-table
          :header="mobTableList2.header"
          :data="mobTableList2.data"
          :show-header="false"
          :hide-header="true"
          :has-form="true"
        >
          <template #header1="{ scope }">
            <div class="table-wrap">
              <template v-if="scope.row.itemTxt">
                <span class="item">{{ scope.row.header1 }}</span>
                <span v-if="scope.row.itemTxt" class="data"> {{ scope.row.itemTxt }}</span>
              </template>
              <template v-if="scope.row.itemSelect">
                <span class="item">{{ scope.row.header1 }}</span>
                <div class="form-wrap data">
                  <div v-for="(item,index) in scope.row.itemSelect" :key="index" class="form-item">
                    <base-select
                      v-model="item.name"
                      placeholder="선택해주세요"
                    />
                  </div>
                </div>
              </template>
              <template v-if="scope.row.itemRadio">
                <span class="item">{{ scope.row.header1 }}</span>
                <span class="data">
                  <base-radio-buttons v-model="radioBtn.value" :list="radioBtn.list" type="flex" />
                </span>
              </template>
              <template v-if="scope.row.itemButton">
                <span class="item">{{ scope.row.header1 }}</span>
                <span class="data">
                  <base-buttons type="gray" size="medium" plain>
                    Button
                  </base-buttons>
                </span>
              </template>
              <template v-if="scope.row.onlyButton">
                <base-buttons type="gray-light" size="medium" full>
                  Button
                </base-buttons>
              </template>
              <template v-if="scope.row.itemDesc">
                <span class="item">{{ scope.row.header1 }}</span>
                <span v-nl2br class="desc data">{{ scope.row.itemDesc }}</span>
              </template>
            </div>
          </template>
        </base-table>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-table
              :header="mobTableList2.header"
              :data="mobTableList2.data"
              :show-header="false"
              :hide-header="true"
              :has-form="true"
            &gt;
              &lt;template #header1="{ scope }"&gt;
                &lt;div class="table-wrap"&gt;
                  &lt;template v-if="scope.row.itemTxt"&gt;
                    &lt;span&gt;{ { scope.row.header1 } }&lt;/span&gt;
                    &lt;span v-if="scope.row.itemTxt"&gt; { { scope.row.itemTxt } }&lt;/span&gt;
                  &lt;/template&gt;
                  &lt;template v-if="scope.row.itemSelect"&gt;
                    &lt;span&gt;{ { scope.row.header1 } }&lt;/span&gt;
                    &lt;div class="form-wrap"&gt;
                      &lt;div v-for="(item,index) in scope.row.itemSelect" :key="index" class="form-item"&gt;
                        &lt;base-select v-model="item.name" placeholder="선택해주세요" /&gt;
                      &lt;/div&gt;
                    &lt;/div&gt;
                  &lt;/template&gt;
                  &lt;template v-if="scope.row.itemRadio"&gt;
                    &lt;span&gt;{ { scope.row.header1 } }&lt;/span&gt;
                    &lt;base-radio-buttons v-model="radioBtn.value" :list="radioBtn.list" type="flex" /&gt;
                  &lt;/template&gt;
                  &lt;template v-if="scope.row.itemButton"&gt;
                    &lt;span&gt;{ { scope.row.header1 } }&lt;/span&gt;
                    &lt;base-buttons type="gray" size="medium" plain&gt;Button&lt;/base-buttons&gt;
                  &lt;/template&gt;
                  &lt;template v-if="scope.row.onlyButton"&gt;
                    &lt;base-buttons type="gray-light" size="medium" full&gt;Button&lt;/base-buttons&gt;
                  &lt;/template&gt;
                  &lt;template v-if="scope.row.itemDesc"&gt;
                    &lt;span&gt;{ { scope.row.header1 } }&lt;/span&gt;
                    &lt;span v-nl2br class="desc"&gt;{ { scope.row.itemDesc } }&lt;/span&gt;
                  &lt;/template&gt;
                &lt;/div&gt;
              &lt;/template&gt;
            &lt;/base-table&gt;

            // form이 있는 경우 has-form props를 넣으면 됩니다.
          </code></pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>모바일 테이블</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-table
          :header="mobTableList.header"
          :data="mobTableList.data"
        >
          <template #header1="{ scope }">
            {{ scope.row.header1 }}
          </template>
        </base-table>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-table
              :header="mobTableList.header"
              :data="mobTableList.data"
            &gt;
              &lt;template #header1="{ scope }"&gt;
                { { scope.row.header1 } }
              &lt;/template&gt;
            &lt;/base-table&gt;
          </code></pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>모바일 테이블 - thead 가 없는 경우</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-table
          :data="detail.list"
          :show-header="false"
          :hide-header="true"
          :header="detail.header"
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
          &lt;base-table
            :data="detail.list"
            :show-header="false"
            :hide-header="true"
            :header="detail.header"
          /&gt;
          //header가 없을 경우 :show-header="false" 와 :hide-header="true" 옵션을 넣으면 됩니다.
          </code></pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>모바일 리스트 테이블 - 해더형</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-list-table
          class-type="header"
          type="header"
          :list="mobHeaderList"
          empty-txt="대출내역이 없습니다."
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-list-table
              class-type="header"
              type="header"
              :list="mobHeaderList"
              empty-txt="대출내역이 없습니다."
            /&gt;
          </code></pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>모바일 리스트 테이블 - 하단 버튼</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-list-table
          class-type="box type01"
          :list="jobInfo"
        >
          <template #infoBox="{ scope }">
            <base-buttons type="gray-light" size="small" full>
              {{ scope.item.data }}
            </base-buttons>
          </template>
        </base-list-table>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-list-table
              class-type="box type01"
              :list="jobInfo"
            &gt;
              &lt;template #infoBox="{ scope }"&gt;
                &lt;base-buttons type="gray-light" size="small" full&gt;
                  { { scope.item.data } }
                &lt;/base-buttons&gt;
              &lt;/template&gt;
            &lt;/base-list-table&gt;
          </code></pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>모바일 리스트 테이블 - box type01</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-list-table
          class-type="box type01"
          :list="mobList"
          empty-txt="대출내역이 없습니다."
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-list-table
              class-type="box type01"
              :list="mobList"
              empty-txt="대출내역이 없습니다."
            /&gt;
          </code></pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>모바일 리스트 테이블 - box type02</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-list-table
          class-type="box type02"
          :list="mobList"
          empty-txt="대출내역이 없습니다."
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-list-table
              class-type="box type02"
              :list="mobList"
              empty-txt="대출내역이 없습니다."
            /&gt;
          </code></pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>모바일 리스트 테이블 - box type03</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-list-table
          class-type="box type03"
          :list="mobList"
          empty-txt="대출내역이 없습니다."
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-list-table
              class-type="box type03"
              :list="mobList"
              empty-txt="대출내역이 없습니다."
            /&gt;
          </code></pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>모바일 리스트 테이블 - border-radius 있는경우 </span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-list-table
          class-type="box type01 round"
          :list="mobList"
          empty-txt="대출내역이 없습니다."
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-list-table
              class-type="box type01 round"
              :list="mobList"
              empty-txt="대출내역이 없습니다."
            /&gt;

            // class-type 에 round 추가하면 됩니다.
          </code></pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>기본테이블</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-table :header="tableList.header" :data="tableList.data">
          <template #header1="{ scope }">
            <base-buttons type="primary">
              {{ scope.row.header1 }}
            </base-buttons>
          </template>
        </base-table>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
          &lt;base-table :header="tableList.header" :data="tableList.data"&gt;
              &lt;template #header1="{ scope }"&gt;
                 &lt;base-buttons type="primary"&gt; { { scope.row.header1 } } &lt;/base-buttons&gt;
              &lt;/template&gt;
          &lt;/base-table&gt;
          // 테이블에 버튼/인풋 등등 텍스트, 넘버 제외한 요소들이 들어갈 경우
          #header1="{ scope }"을 사용하여 컨텐츠를 넣으면 됩니다. // 체크박스가
          들어가는 경우 hedaer 데이터 영역에서 type: 'selection' 옵션을 넣으면
          됩니다. // 인덱스 (넘버링) 요소가 들어가는 경우 header 데이터 영역에서
          type:'index' 옵션을 넣으면 됩니다.
          </code></pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>테이블 - 합계가 있는 경우</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-table
          :header="tableList2.header"
          :data="tableList2.data"
          show-summary
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
          &lt;base-table :header="tableList2.header" :data="tableList2.data" show-summary /&gt;
          //합계가 있는 경우 show-summary props를 넣으면 됩니다.
          </code></pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>테이블 - 헤더 colspan 되는 경우</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-table :header="tableList3.header" :data="tableList3.data" />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
          &lt;base-table :header="tableList3.header" :data="tableList3.data" &gt;
          //2차 배열 구조 필요
          </code></pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>모바일 리스트 테이블</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-list-table :list="mobList" empty-txt="대출내역이 없습니다.">
          <template #titleSlotName="{ scope }">
            <span>{{ scope.item.title }}<i class="icon-alarm" /></span>
          </template>
          <template #slotName="{ scope }">
            <base-input v-model="scope.item.data" />
          </template>
        </base-list-table>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
          &lt;base-list-table :list="mobList" empty-txt="대출내역이 없습니다." &gt;
            &lt;template #slotName="{ scope }"&gt;
              &lt;base-input v-model="scope.item.data" /&gt;
            &lt;/template&gt;
          &lt;/base-list-table&gt;
          // 리스트 안에 텍스트/넘버 요소 제외한 다른 요소들이 들어갈 경우
          데이터 name 값과 slot -> name값을 맞춰서 안에 컨텐츠를 넣어주면 됩니다.
          </code></pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>모바일 리스트 테이블 - 토글형</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-list-table
          :list="mobLisToggle"
          type="toggle"
          empty-txt="대출내역이 없습니다."
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
          &lt;base-list-table :list="mobLisToggle" type="toggle" empty-txt="대출내역이 없습니다." /&gt;
          // 토글 유형일때 type="toggle" 을 넣어주세요
          </code></pre>
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
      mobHeaderList: [
        {
          header: true,
          title: '항목타이틀명',
          data: '항목타이틀명'
        },
        {
          title: '항목명',
          data: '항목값'
        },
        {
          title: '항목명',
          data: '항목값'
        },
        {
          title: '항목명',
          data: '항목값'
        },
        {
          title: '항목명',
          data: '항목값'
        }
      ],
      mobList: [
        {
          title: '항목명',
          data: '항목값'
        },
        {
          title: '항목명',
          data: '항목값'
        },
        {
          title: '항목명',
          data: '항목값'
        },
        {
          title: '항목명',
          data: '항목값'
        }
      ],
      mobTableList: {
        header: [
          {
            label: '급부명',
            prop: 'header1'
          },
          {
            label: '지급사유',
            prop: 'header2'
          }
        ],
        data: [
          {
            header1: '항목값',
            header2: '항목값'
          },
          {
            header1: '항목값',
            header2: '항목값'
          },
          {
            header1: '항목값',
            header2: '항목값'
          },
          {
            header1: '항목값',
            header2: '항목값'
          },
          {
            header1: '항목값',
            header2: '항목값'
          },
          {
            header1: '항목값',
            header2: '항목값'
          }
        ]
      },
      detail: {
        header: [
          {
            prop: 'header1',
            label: '항목명'
          },
          {
            prop: 'header2',
            label: '항목값'
          }
        ],
        list: [
          {
            header1: '항목명',
            header2: '항목값'
          },
          {
            header1: '항목명',
            header2: '금액의 경우 우측 정렬'
          },
          {
            header1: '항목명',
            header2: '항목값'
          }
        ]
      },
      mobTableList1: {
        header: [
          {
            label: '항목명',
            prop: 'header1',
            columnType: 'custom'
          }
        ],
        data: [
          {
            header1: ''
          },
          {
            header1: ''
          },
          {
            header1: ''
          },
          {
            header1: ''
          }
        ]
      },
      mobTableList2: {
        header: [
          {
            label: '항목명',
            prop: 'header1',
            columnType: 'custom'
          }
        ],
        data: [
          {
            header1: '항목명',
            itemTxt: '지급금액 15만원'
          },
          {
            header1: '항목명',
            itemSelect: [{ name: '' }, { name: '' }]
          },
          {
            header1: '항목명',
            itemSelect: [{ name: '' }]
          },
          {
            header1: '항목명',
            itemRadio: true
          },
          {
            header1: '항목명',
            itemButton: true

          },
          {
            onlyButton: true
          },
          {
            header1: '항목명',
            itemDesc: '피보험자가 보험기간 중 치아우\n식증(충치), 치주질환(잇몸질환)\n또는 재해를 직접적인 원인으로\n치과치료보장개시일 이후'
          }
        ]
      },
      tableList: {
        header: [
          {
            type: 'index',
            label: 'No',
            align: 'center'
          },
          {
            type: 'selection',
            align: 'center'
          },
          {
            label: 'header1',
            prop: 'header1',
            columnType: 'custom'
          },
          {
            label: 'header2',
            groupItem: [
              {
                prop: 'header1',
                label: '자식1',
                columnType: 'custom'
              },
              {
                prop: 'header2',
                label: '자식2'
              }
            ]
          }
        ],
        data: [
          {
            header1: 'content1',
            header2: 'content2'
          },
          {
            header1: 'content1',
            header2: 'content2'
          },
          {
            header1: 'content1',
            header2: 'content2'
          },
          {
            header1: 'content1',
            header2: 'content2'
          },
          {
            header1: 'content1',
            header2: 'content2'
          },
          {
            header1: 'content1',
            header2: 'content2'
          }
        ]
      },
      tableList2: {
        header: [
          {
            prop: 'header1',
            label: '구성'
          },
          {
            prop: 'header2',
            label: '금액'
          },
          {
            prop: 'header3',
            label: '비율'
          }
        ],
        data: [
          {
            header1: '수익증권',
            header2: 10148762442,
            header3: 84.98
          }
        ]
      },
      mobLisToggle: [
        {
          title: '만기보험금',
          dataType: 'primary',
          data: '15,000원'
        },
        {
          title: '계약자',
          data: '라이나'
        },
        {
          title: '만기수익자',
          data: '나이라'
        },
        {
          title: '계약일자',
          data: '2010-01-16'
        },
        {
          title: '1회보험료',
          data: '50,000원'
        },
        {
          title: '만기일자',
          data: '2050-01-16'
        },
        {
          title: '만기 후 적용금리',
          data: '1년이내 1.25% \n 1년초과 3%'
        }
      ],
      tableList3: {
        header: [
          {
            prop: 'header1',
            label: '구성'
          },
          {
            prop: 'header2',
            label: '금액'
          },
          {
            label: '비율',
            groupItem: [
              {
                prop: 'header3',
                label: '자식1'
              },
              {
                prop: 'header4',
                label: '자식2'
              }
            ]
          }
        ],
        data: [
          {
            header1: '수익증권',
            header2: 10148762442,
            header3: 84.98,
            header4: 100
          }
        ]
      },
      select: {
        list: [
          {
            value: '항목1',
            label: '항목1'
          },
          {
            value: '항목2',
            label: '항목2'
          }
        ]
      },
      radioBtn: {
        value: '1',
        list: [
          {
            label: '선택',
            value: '1'
          },
          {
            label: '미선택',
            value: '2'
          }

        ]
      },
      jobInfo: [
        {
          name: 'infoBox',
          title: '직업명',
          data: '사무원'
        },
        {
          name: 'infoBox',
          title: '직장명',
          data: '라이나생명공학연구실'
        },
        {
          name: 'infoBox',
          data: '변경',
          columnType: 'custom'
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
