<template>
  <div>
    [sample1] number타입, *표시 :
    <input
      id="m-keyboard-sample1"
      name="m-keyboard-sample1"
      type="password"
      data-tk-kbdType="number"
      onfocus="mtk.onKeyboard(this);"
      title="주민등록번호 뒷자리 입력"
      placeholder="주민등록번호 뒷자리"
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
