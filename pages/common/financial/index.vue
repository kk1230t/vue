
<template>
  <div>
    <base-buttons type="primary" @click="dialog.full = true">
      금융사선택
    </base-buttons>

    <base-modal
      title="금융사선택"
      :visible.sync="dialog.full"
      type="full"
      top="0"
      width="100%"
    >
      <template #content>
        <div>
          <base-tab v-model="tab.activeName" lazy :tab-list="tab.tabList" :fulltype="true">
            <template #tabContents>
              <div v-if="tab.activeName === 'first'">
                <bank-fullpop :items="list" type="label-cover" />
              </div>
              <div v-if="tab.activeName === 'second'">
                <bank-fullpop :items="list2" type="label-cover" />
              </div>
            </template>
          </base-tab>
        </div>
      </template>

      <template #footer>
        <base-buttons
          type="navy"
          size="large"
          @click="dialog.full = false"
        >
          확인
        </base-buttons>
      </template>
    </base-modal>
  </div>
</template>

<script>
import BankFullpop from '@/components/BankFullpop'

export default {
  // layout: 'guideLayout',
  components: {
    BankFullpop
  },

  data() {
    return {
      tab: {
        activeName: 'first',
        tabList: [
          {
            label: '은행',
            name: 'first'
          },
          {
            label: '증권사',
            name: 'second'
          }
        ]
      },
      dialog: {
        full: false
      },
      list: [
        { name: '카카오뱅크', id: '1', src: require('@/assets/images/common/bank01.png'), alt: '' },
        { name: '케이뱅크', id: '2', src: require('@/assets/images/common/bank02.png'), alt: '' },
        { name: '상호신용금고', id: '3', src: require('@/assets/images/common/bank03.png'), alt: '' },
        { name: '홍콩상하이은행', id: '4', src: require('@/assets/images/common/bank04.png'), alt: '' },
        { name: 'JP모간체이스', id: '5', src: require('@/assets/images/common/bank05.png'), alt: '' },
        { name: '농협은행', id: '6', src: require('@/assets/images/common/bank06.png'), alt: '' },
        { name: '국민은행', id: '7', src: require('@/assets/images/common/bank07.png'), alt: '' },
        { name: '신한은행', id: '8', src: require('@/assets/images/common/bank08.png'), alt: '' },
        { name: '우리은행', id: '9', src: require('@/assets/images/common/bank09.png'), alt: '' },
        { name: '기업은행', id: '10', src: require('@/assets/images/common/bank10.png'), alt: '' },
        { name: '하나은행', id: '11', src: require('@/assets/images/common/bank11.png'), alt: '' },
        { name: '우체국', id: '12', src: require('@/assets/images/common/bank12.png'), alt: '' },
        { name: '외환은행', id: '13', src: require('@/assets/images/common/bank13.png'), alt: '' },
        { name: '새마을금고', id: '14', src: require('@/assets/images/common/bank14.png'), alt: '' },
        { name: 'SC제일은행', id: '15', src: require('@/assets/images/common/bank15.png'), alt: '' },
        { name: '씨티은행', id: '16', src: require('@/assets/images/common/bank16.png'), alt: '' },
        { name: '대구은행', id: '17', src: require('@/assets/images/common/bank17.png'), alt: '' },
        { name: '부산은행', id: '18', src: require('@/assets/images/common/bank18.png'), alt: '' },
        { name: '광주은행', id: '19', src: require('@/assets/images/common/bank19.png'), alt: '' },
        { name: '전북은행', id: '20', src: require('@/assets/images/common/bank20.png'), alt: '' },
        { name: '경남은행', id: '21', src: require('@/assets/images/common/bank21.png'), alt: '' },
        { name: '신협', id: '22', src: require('@/assets/images/common/bank22.png'), alt: '' },
        { name: '수협', id: '23', src: require('@/assets/images/common/bank23.png'), alt: '' },
        { name: '제주은행', id: '24', src: require('@/assets/images/common/bank24.png'), alt: '' },
        { name: '산업은행', id: '25', src: require('@/assets/images/common/bank25.png'), alt: '' },
        { name: '모건스탠리은행', id: '26', src: require('@/assets/images/common/bank26.png'), alt: '' },
        { name: '산림조합중앙회', id: '27', src: require('@/assets/images/common/bank27.png'), alt: '' }
      ],
      list2: [
        { name: '유안타증권', id: '1', src: require('@/assets/images/common/securities01.png'), alt: '' },
        { name: 'KB증권', id: '2', src: require('@/assets/images/common/securities02.png'), alt: '' },
        { name: '삼성증권', id: '3', src: require('@/assets/images/common/securities03.png'), alt: '' },
        { name: '한국투자증권', id: '4', src: require('@/assets/images/common/securities04.png'), alt: '' },
        { name: 'NH투자증권', id: '5', src: require('@/assets/images/common/securities05.png'), alt: '' },
        { name: '하이투자증권', id: '6', src: require('@/assets/images/common/securities06.png'), alt: '' },
        { name: 'HMC투자증권', id: '7', src: require('@/assets/images/common/securities07.png'), alt: '' },
        { name: '이베스트투자증권', id: '8', src: require('@/assets/images/common/securities08.png'), alt: '' },
        { name: 'SK증권', id: '9', src: require('@/assets/images/common/securities09.png'), alt: '' },
        { name: '아이엠투자증권', id: '10', src: require('@/assets/images/common/securities10.png'), alt: '' },
        { name: '한화증권', id: '11', src: require('@/assets/images/common/securities11.png'), alt: '' },
        { name: '하나대투증권', id: '12', src: require('@/assets/images/common/securities12.png'), alt: '' },
        { name: '동부증권', id: '13', src: require('@/assets/images/common/securities13.png'), alt: '' },
        { name: '유진투자증권', id: '14', src: require('@/assets/images/common/securities14.png'), alt: '' },
        { name: '부국증권', id: '15', src: require('@/assets/images/common/securities15.png'), alt: '' },
        { name: '신영증권', id: '16', src: require('@/assets/images/common/securities16.png'), alt: '' },
        { name: 'LIG투자증권', id: '17', src: require('@/assets/images/common/securities17.png'), alt: '' },
        { name: '한양증권', id: '18', src: require('@/assets/images/common/securities18.png'), alt: '' },
        { name: '리딩투자증권', id: '19', src: require('@/assets/images/common/securities19.png'), alt: '' },
        { name: 'IBK투자증권', id: '20', src: require('@/assets/images/common/securities20.png'), alt: '' },
        { name: 'KTB투자증권', id: '21', src: require('@/assets/images/common/securities21.png'), alt: '' },
        { name: 'BNK투자증권', id: '22', src: require('@/assets/images/common/securities22.png'), alt: '' },
        { name: '골든브릿지투자증권', id: '23', src: require('@/assets/images/common/securities23.png'), alt: '' },
        { name: '메리츠증권', id: '24', src: require('@/assets/images/common/securities24.png'), alt: '' },
        { name: '신한금융투자', id: '25', src: require('@/assets/images/common/securities25.png'), alt: '' },
        { name: '대신증권', id: '26', src: require('@/assets/images/common/securities26.png'), alt: '' },
        { name: '키움증권', id: '27', src: require('@/assets/images/common/securities27.png'), alt: '' }
      ]
    }
  }
}

</script>
