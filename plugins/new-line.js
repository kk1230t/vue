import Vue from 'vue'

Vue.directive('nl2br', {
  inserted(el) {
    el.textContent = el.textContent.replace(/</g, '&lt')
    el.textContent = el.textContent.replace(/>/g, '&gt')
    el.innerHTML = el.textContent.replace(/(?:\r\n|\r|\n|\\n|\\r)/g, '</br>')
  }
})
