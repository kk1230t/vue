<template>
  <div>
    <section class="l-section gap-both">
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
      <base-titles title="신청 가능한 계약 건수" count fsize="18">
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
              대출이율
              <base-tooltip
                title="대출이율"
                mode="skygray"
                util-button
                @confirm="confirm"
              >
                <template #content>
                  <p>기준금리 2.5% + 가산금리 0.5% = <br>대출이율 3.0%</p>
                </template>
              </base-tooltip>
            </dt>
            <dd class="data">
              {{ scope.item.percentPrice }}%
            </dd>
          </dl>
          <dl class="list-info">
            <dt class="title">
              이자납입일
            </dt>
            <dd class="data">
              {{ scope.item.day }}일
            </dd>
          </dl>
          <dl class="list-info">
            <dt class="title">
              대출지급 가능급액
            </dt>
            <dd class="data txt-blue">
              {{ scope.item.possiblePrice }}원
            </dd>
          </dl>
        </template>
      </base-card-list>
    </section>
    <floating-box :has-button="true" :sum-box="['0건선택', '총 신청금액']" />
    <div class="l-bottom">
      <base-buttons type="black" size="medium" full @click="onStep">
        확인
      </base-buttons>
    </div>
  </div>
</template>

<script>
const FloatingBox = () => import('@/components/FloatingBox')
export default {
  components: { FloatingBox },
  data() {
    return {
      amount: '',
      radio: {
        value: 1,
        list: [
          {
            label: '통합 신청',
            value: 1
          },
          {
            label: '계약별 신청',
            value: 2
          }
        ]
      },
      boxList: [
        {
          title: '총 대출가능 금액',
          amount: 0
        }
      ],
      accountList: [
        {
          bank: '카카오뱅크',
          account: '11012345677777'
        }
      ],
      cardList: [
        {
          edit: 'disabled',
          subTitle: '30228488100001',
          title: '(무)THE건강한치아보험V(갱신형)',
          percentPrice: 3.0,
          day: 10,
          possiblePrice: 800000
        },
        {
          edit: 'disabled',
          subTitle: '30228488100001',
          title: '(무)THE건강한치아보험V(갱신형)',
          percentPrice: 3.0,
          day: 10,
          possiblePrice: 800000
        },
        {
          edit: 'disabled',
          subTitle: '30228488100001',
          title: '(무)THE건강한치아보험V(갱신형)',
          percentPrice: 3.0,
          day: 10,
          possiblePrice: 800000
        }
      ]
    }
  },
  methods: {
    confirm() {
      console.log('test')
    },
    onStep() {
      this.$emit('onStep')
    }
  }
}
</script>

<style></style>
