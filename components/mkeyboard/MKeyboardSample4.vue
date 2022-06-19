<template>
  <div>
    [sample4] qwerty키보드, 입력값표기 :
    <input
      id="m-keyboard-sample4"
      name="m-keyboard-sample4"
      type="value"
      data-tk-kbdType="qwerty"
      onclick="mtk.onKeyboard(this);"
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
