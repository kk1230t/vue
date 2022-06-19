<template>
  <div>
    <section class="l-section gap-bottom">
      <base-titles title="지급계좌 확인" count fsize="18" />
      <base-card-list
        :card-list="accountList"
        empty-txt="가입한 보험이 없습니다."
        type="ready-only"
        only-content
      >
        <template #contents="{ scope }">
          <dl class="list-info">
            <dt class="title">
              은행
            </dt>
            <dd class="data">
              {{ scope.item.bank }}
            </dd>
          </dl>
          <dl class="list-info">
            <dt class="title">
              계좌번호
            </dt>
            <dd class="data">
              {{ scope.item.account }}
            </dd>
          </dl>
        </template>
      </base-card-list>
      <base-titles title="신청 계약" count fsize="18">
        <template #rightContent>
          <span class="count">총 {{ cardList.length }}건</span>
        </template>
      </base-titles>
      <base-card-list
        :card-list="cardList"
        empty-txt="가입한 보험이 없습니다."
        type="ready-only"
      >
        <template #topConent="{ scope }">
          <base-tag
            v-for="(tagItem, tagIdx) in scope.item.tag"
            :key="tagIdx"
            :tag-title="tagItem.title"
            :type="tagItem.type"
          />
        </template>
        <template #contents="{ scope }">
          <dl class="list-info">
            <dt class="title">
              배당원금 합계
            </dt>
            <dd class="data">
              {{ scope.item.principal }}원
            </dd>
          </dl>
          <dl class="list-info">
            <dt class="title">
              이자 합계
            </dt>
            <dd class="data">
              {{ scope.item.interest }}원
            </dd>
          </dl>
          <dl class="list-info">
            <dt class="title">
              총 배당금
            </dt>
            <dd class="data">
              {{ scope.item.balancePrice }}원
            </dd>
          </dl>
          <dl class="list-info">
            <dt class="title">
              최소상환금
            </dt>
            <dd class="data">
              {{ scope.item.ieastPrice }}원
            </dd>
          </dl>
          <dl class="list-info">
            <dt class="title">
              실 지급금
            </dt>
            <dd class="data txt-blue">
              {{ scope.item.truePrice }}원
            </dd>
          </dl>
        </template>
      </base-card-list>
    </section>
    <template v-if="cardList.length > 0">
      <floating-box v-model="allPrice" :has-button="true" :sum-box="['총' + cardList.length + '건', '총 ' + allPrice + '원']" />
      <div class="l-bottom">
        <base-buttons type="navy" size="medium" full>
          확인
        </base-buttons>
      </div>
    </template>
    <template v-else>
      <floating-box :show-top="true" />
    </template>
  </div>
</template>

<script>
const FloatingBox = () => import('@/components/FloatingBox')
export default {
  components: { FloatingBox },
  data() {
    return {
      allPrice: 0,
      accountList: [
        {
          bank: '카카오뱅크',
          account: '11012345677777'
        }
      ],
      cardList: [
        {
          subTitle: '30228488100001',
          title: '(무)THE건강한치아보험V(갱신형)',
          principal: 900000,
          interest: 100000,
          balancePrice: 1000000,
          ieastPrice: -50000,
          truePrice: 950000
        }
      ]
    }
  },

  mounted() {
    this.checkDefault()
  },

  methods: {
    checkDefault() {
      const len = this.cardList.length
      const ary = []

      for (this.i = 0; this.i < len; this.i++) {
        ary[this.i] = this.cardList[this.i].truePrice
      }

      const result = ary.reduce(function add(sum, currValue) {
        return sum + currValue
      }, 0)

      this.allPrice = result
    }
  }
}
</script>

<style></style>
