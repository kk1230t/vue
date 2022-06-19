/**
 * Camera Plugin
 */
export default {
  install(Vue) {
    Vue.prototype.$Camera = {
      /**
       * Camera 호출
       * @param {*} callback 
       */
      call(callback) {
        window.Lina.execute("camera", "callCamera", null, callback);
      },
    }
  }
}