<template>
  <div>
    [sample2] number키보드, 입력값 표기 :
    <input
      id="m-keyboard-sample2"
      name="m-keyboard-sample2"
      type="value"
      data-tk-kbdtype="number"
      onclick="mtk.onKeyboard(this);"
      title="카드번호 셋째 자리 입력"
      maxlength="7"
      readonly
    >
    <input class="transkeySurl">
  </div>
</template>

<script>
import { addScript } from '@/util/script.js'
export default {
  data() {
    return {
      transkeyOrigin: '',
      transkeySurl: `${process.env.VUE_APP_SOL_DOMAIN}/transkeyServlet`
    }
  },
  mounted() {
    this.onLoad()
  },
  methods: {
    async onLoad() {
      document.getElementsByClassName('transkeySurl').value = this.transkeySurl
      await addScript('/lib/mtranskey/transkey.js')
      await addScript('/lib/mtranskey/TranskeyLibPack_op.js')
      await addScript('/lib/mtranskey/rsa_oaep_files/rsa_oaep-min.js')
      await addScript('/lib/mtranskey/jsbn/jsbn-min.js')
      await addScript('/lib/mtranskey/jsbn/jsbn-min2.js')
      await addScript('/lib/mtranskey/typedarray.js')
      await addScript(this.transkeySurl + '?op=getToken&' + new Date().getTime() + this.transkeyOrigin)
      await addScript(this.transkeySurl + '?op=getInitTime' + this.transkeyOrigin)
      await addScript(this.transkeySurl + '?op=getKeyboardHash' + this.transkeyOrigin)
      initmTranskey()
    }
  }
}
</script>

<style>
.transkeySurl {
  display: none;
}
</style>
