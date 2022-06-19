<template>
  <div>
    <choice-certification :list="list" />
  </div>
</template>
<script>
import ChoiceCertification from '~/components/selfAuth/ChoiceCertification'
export default {
  components: {
    ChoiceCertification
  },
  data() {
    return {
      list: [{
        label: '선택1',
        value: 1,
        name: '라인하-12345678',
        issued: '증권/보험용',
        div: 'SignKorea CA3',
        expire: '2022.02.23'
      },
      {
        label: '선택2',
        value: 2,
        name: '라인굿-12345678',
        issued: '보험/보험용',
        div: 'SignKorea KA3',
        expire: '2022.02.23'
      },
      {
        label: '선택3',
        value: 3,
        name: '라인샷-12345678',
        issued: '대물/보험용',
        div: 'SignUSA KA3',
        expire: '2030.02.23'
      }

      ]
    }
  }

}
</script>
