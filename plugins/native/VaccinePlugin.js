/**
 * Vaccine Plugin
 */
export default {
  install(Vue) {
    Vue.prototype.$Vaccine = {
      start(callback) {
        window.Lina.plugin("vaccine", "startVaccine", null, callback)
      },
      stop() {
        window.Lina.plugin("vaccine", "stopVaccine")
      }
    }
  }
}