import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'

// import css from 'highlight.js/lib/languages/css'
import javascript from 'highlight.js/lib/languages/javascript'
import vue from 'vue-highlight.js/lib/languages/vue'

import 'highlight.js/styles/vs2015.css'
import '@/assets/scss/components/highlight.scss'

Vue.use(VueHighlightJS, {
  // Register only languages that you want
  languages: {
    // css,
    javascript,
    vue
  }
})
