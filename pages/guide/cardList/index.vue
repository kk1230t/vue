<template>
  <div>
    <p class="guide-title">
      <span>카드리스트</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-card-list :card-list="cardList2">
          <template #contents="{ scope }">
            <div v-if="scope.idx === 0">
              컨텐츠가 들어갈 부분입니다.
            </div>
          </template>
        </base-card-list>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-card-list :card-list="cardList2"&gt;
                &lt;template #contents="{ scope }"&gt;
                  &lt;div v-if="scope.idx === 0"&gt;컨텐츠가 들어갈 부분입니다.&lt;/div&gt;
                &lt;/template&gt;
              &lt;/base-card-list&gt;

              &lt;!-- 리스트 변수인 cardList2에 데이터 명명이 되어있습니다. --&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>카드리스트-링크</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-card-list :card-list="cardList4">
          <template #topConent="{ scope }">
            <base-tag
              v-for="(tagItem, tagIdx) in scope.item.tag"
              :key="tagIdx"
              :tag-title="tagItem.title"
              :type="tagItem.type"
            />
          </template>
          <template #contents="{ scope }">
            <div v-if="scope.idx === 0">
              첫번째 내용
            </div>
            <div v-if="scope.idx === 1">
              두번째 내용
            </div>
          </template>
        </base-card-list>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-card-list :card-list="cardList4"&gt;
                &lt;template #topConent="{ scope }"&gt;
                  &lt;base-tag v-for="(tagItem, tagIdx) in scope.item.tag" :key="tagIdx" :tag-title="tagItem.title" :type="tagItem.type" /&gt;
                &lt;/template&gt;
                &lt;template #contents="{ scope }"&gt;
                  &lt;div v-if="scope.idx === 0"&gt;
                    첫번째 내용
                  &lt;/div&gt;
                  &lt;div v-if="scope.idx === 1"&gt;
                    두번째 내용
                  &lt;/div&gt;
                &lt;/template&gt;
              &lt;/base-card-list&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>카드리스트-서브텍스트 추가 유형</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-card-list :card-list="cardList5">
          <template #topConent="{ scope }">
            <base-tag
              v-for="(tagItem, tagIdx) in scope.item.tag"
              :key="tagIdx"
              :tag-title="tagItem.title"
              :type="tagItem.type"
            />
          </template>
          <template #contents="{ scope }">
            <div v-if="scope.idx === 0" class="text-color2">
              첫번째 내용
            </div>
          </template>
        </base-card-list>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-card-list :card-list="cardList5"&gt;
                &lt;template #topConent="{ scope }"&gt;
                  &lt;base-tag v-for="(tagItem, tagIdx) in scope.item.tag" :key="tagIdx" :tag-title="tagItem.title" :type="tagItem.type" /&gt;
                &lt;/template&gt;
                &lt;template #contents="{ scope }"&gt;
                  &lt;div v-if="scope.idx === 0" class="text-color2"&gt;
                    첫번째 내용
                  &lt;/div&gt;
                &lt;/template&gt;
              &lt;/base-card-list&gt;

              &lt;!-- 체크박스 형식의 리스트를 사용할 경우, customArea 네임을 가진 scope에 체크박스 컴포넌트를 넣어주시면 됩니다. --&gt;

              &lt;!-- v-model="scope.item.check" 을 변경하지 말고 사용 해주세요.  --&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>카드리스트-체크박스</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-card-list :card-list="cardList">
          <template #topConent="{ scope }">
            <base-tag
              v-for="(tagItem, tagIdx) in scope.item.tag"
              :key="tagIdx"
              :tag-title="tagItem.title"
              :type="tagItem.type"
            />
          </template>
          <template #customArea="{ scope }">
            <base-checkbox v-model="scope.item.check" />
          </template>
          <template #contents="{ scope }">
            <div v-if="scope.idx === 0">
              첫번째 내용
            </div>
            <div v-if="scope.idx === 1">
              두번째 내용
            </div>
          </template>
        </base-card-list>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-card-list :card-list="cardList"&gt;
                &lt;template #topConent="{ scope }"&gt;
                  &lt;base-tag v-for="(tagItem, tagIdx) in scope.item.tag" :key="tagIdx" :tag-title="tagItem.title" :type="tagItem.type" /&gt;
                &lt;/template&gt;
                &lt;template #customArea="{ scope }"&gt;
                  &lt;base-checkbox v-model="scope.item.check" /&gt;
                &lt;/template&gt;
                &lt;template #contents="{ scope }"&gt;
                  &lt;div v-if="scope.idx === 0"&gt;
                    첫번째 내용
                  &lt;/div&gt;
                  &lt;div v-if="scope.idx === 1"&gt;
                    두번째 내용
                  &lt;/div&gt;
                &lt;/template&gt;
              &lt;/base-card-list&gt;

              &lt;!-- 체크박스 형식의 리스트를 사용할 경우, customArea 네임을 가진 scope에 체크박스 컴포넌트를 넣어주시면 됩니다. --&gt;

              &lt;!-- v-model="scope.item.check" 을 변경하지 말고 사용 해주세요. --&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>카드리스트-라디오박스</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-card-list :card-list="cardList3">
          <template #topConent="{ scope }">
            <base-tag
              v-for="(tagItem, tagIdx) in scope.item.tag"
              :key="tagIdx"
              :tag-title="tagItem.title"
              :type="tagItem.type"
            />
          </template>
          <template #customArea="{ scope }">
            <base-radio
              v-model="selectRadio1"
              :label="scope.item.label"
              @change="handleCard(scope.idx)"
            />
          </template>
          <template #contents="{ scope }">
            <div v-if="scope.idx === 0">
              본문내용이 들어온다면 정해진 아이템 내에서 사용해야합니다.
            </div>
            <div v-if="scope.idx === 1">
              <p>본문내용이 들어온다면 정해진 아이템 내에서 사용해야합니다.</p>
              <p>본문내용이 들어온다면 정해진 아이템 내에서 사용해야합니다.</p>
            </div>
          </template>
        </base-card-list>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-card-list :card-list="cardList3"&gt;
                &lt;template #topConent="{ scope }"&gt;
                  &lt;base-tag v-for="(tagItem, tagIdx) in scope.item.tag" :key="tagIdx" :tag-title="tagItem.title" :type="tagItem.type" /&gt;
                &lt;/template&gt;
                &lt;template #customArea="{ scope }"&gt;
                  &lt;base-radio v-model="selectRadio1" :label="scope.item.label" @change="handleCard(scope.idx)" /&gt;
                &lt;/template&gt;
                &lt;template #contents="{ scope }"&gt;
                  &lt;div v-if="scope.idx === 0"&gt;
                    본문내용이 들어온다면 정해진 아이템 내에서 사용해야합니다.
                  &lt;/div&gt;
                  &lt;div v-if="scope.idx === 1"&gt;
                    &lt;p&gt;본문내용이 들어온다면 정해진 아이템 내에서 사용해야합니다.&lt;/p&gt;
                    &lt;p&gt;본문내용이 들어온다면 정해진 아이템 내에서 사용해야합니다.&lt;/p&gt;
                  &lt;/div&gt;
                &lt;/template&gt;
              &lt;/base-card-list&gt;

              &lt;script&gt;
                methods: {
                  handleCard(idx) {
                    // eslint-disable-next-line arrow-parens
                    this.cardList3.forEach(o => {//this.리스트 배열의 변수명
                      this.$set(o, 'check', false)
                    })
                    this.$set(this.cardList3[idx], 'check', true)/this.리스트 배열의 변수명
                  }
                }
              &lt;/script&gt;

              &lt;!-- 라디오 형식의 리스트를 사용할 경우 customArea 네임을 가진 scope에 체크박스 컴포넌트를 넣어주시면 됩니다. --&gt;
              &lt;!-- v-model="scope.item.label" 을 변경하지 말고 사용 해주세요. --&gt;
            </code>
          </pre>
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
      cardList: [
        {
          tag: [
            {
              title: '청약',
              type: 'success'
            },
            {
              title: '유지',
              type: 'primary'
            }
          ],
          check: false,
          subTitle: 'BODY14 0108750694863',
          title: '(무)THE든든한간병비치매보험(해지환급금미지급형)'
        },
        {
          tag: [
            {
              title: '정상',
              type: 'primary'
            }
          ],
          check: false,
          subTitle: 'BODY14 0108750694863',
          title: '(무)THE든든한간병비치매보험(해지환급금미지급형)'
        }
      ],

      selectRadio1: '1',
      cardList3: [
        {
          tag: [
            {
              title: '정상',
              type: 'primary'
            }
          ],
          label: '1',
          check: true,
          subTitle: 'BODY14 0108750694863',
          title: '(무)THE든든한간병비치매보험(해지환급금미지급형)'
        },
        {
          tag: [
            {
              title: '정상',
              type: 'primary'
            }
          ],
          label: '2',
          check: false,
          subTitle: 'BODY14 0108750694863',
          title: '(무)THE든든한간병비치매보험(해지환급금미지급형)'
        }
      ],

      cardList2: [
        {
          tag: '정상',
          title: '(무)THE든든한간병비치매보험(해지환급금미지급형)'
        }
      ],

      cardList4: [
        {
          tag: [
            {
              title: '정상',
              type: 'primary'
            }
          ],
          link: 'link',
          path: '/pc',
          subTitle: 'BODY14 0108750694863',
          title: '(무)THE든든한간병비치매보험(해지환급금미지급형)'
        },
        {
          tag: [
            {
              title: '정상',
              type: 'primary'
            }
          ],
          link: 'link',
          path: '/mobile',
          subTitle: 'BODY14 0108750694863',
          title: '(무)THE든든한간병비치매보험(해지환급금미지급형)'
        }
      ],

      cardList5: [
        {
          tag: [
            {
              title: '오천만원',
              type: 'primary'
            }
          ],
          title: '7대고액암',
          text: '(7대 고액암 치료보험금+일반암 (유방암·전립선암 제외) 치료보험금 합산 지급시)'
        }
      ]
    }
  },

  methods: {
    handleCard(idx) {
      // eslint-disable-next-line arrow-parens
      this.cardList3.forEach(o => {
        this.$set(o, 'check', false)
      })
      this.$set(this.cardList3[idx], 'check', true)
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
