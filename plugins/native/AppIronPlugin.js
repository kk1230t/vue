/**
 *  AppIron Plugin
 *  (TouchEn AppIron)
 */
export default {
  install(Vue) {
    Vue.prototype.$AppIron = {
      /**
       * 무결성 검증 시작
       * @param {} callback 
       */
      check(callback) {
        window.Lina.plugin("appshield", "startAppShield", null, callback);
      },

      /**
       * Session ID 반환
       * @returns Session ID
       */
      getSid() {
        return window.Lina.plugin("appshield", "getAppShieldSid");
      },

      /**
       * Token 반환
       * @returns Token
       */
      getToken() {
        return window.Lina.plugin("appshield", "getAppShieldToken");
      },

      toast(message, duration) {
        window.Lina.popup.toast(message, duration)
      }
    }
  }
}