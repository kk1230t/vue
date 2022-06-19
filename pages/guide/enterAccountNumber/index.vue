
<template>
  <div>
    <base-buttons type="gray-light" full size="medium" icon="icon-Plus" @click="enterAccountEvent">
      계좌 신규 등록
    </base-buttons>
    <enterAccountNumber :account-full.sync="accountFull" @onChange="onChange" />
  </div>
</template>

<script>
import enterAccountNumber from '@/components/EnterAccountNumber'

export default {
  components: {
    enterAccountNumber
  },
  layout: 'guideLayout',
  data() {
    return {
      accountFull: false
    }
  },
  methods: {
    enterAccountEvent() {
      this.accountFull = true
    },
    enterAccountChange(data) {
      console.log(data)
    }
  }
}
</script>
