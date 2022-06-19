/**
 * 보안키패드 Plugin
 */
export default {
  install(Vue) {
    Vue.prototype.$Keypad = {
      /**
       * 보안키패드 호출
       * @param {*} keypad_type
       * @param {*} input_type
       * @param {*} ui_type
       * @param {*} sticky_mode
       * @param {*} name_label
       * @param {*} input_maxlength
       * @param {*} input_minlength
       * @param {*} crypt_algorithim
       * @param {*} set_hint
       * @param {*} max_length_message
       * @param {*} min_length_message
       * @param {*} button_sound
       * @param {*} notice_message
       * @param {*} info_message
       * @param {*} alertdialog_title
       * @param {*} secureKey
       * @param {*} callback
       */
      show(keypad_type, input_type, ui_type, sticky_mode, name_label,
        input_maxlength, input_minlength, crypt_algorithim, set_hint, max_length_message, min_length_message,
        button_sound, notice_message, info_message, alertdialog_title, secureKey, callback) {

        var params = {
          keypad_type: keypad_type,
          input_type: input_type,
          ui_type: ui_type,
          sticky_mode: sticky_mode,
          name_label: name_label,
          input_maxlength: input_maxlength,
          input_minlength: input_minlength,
          crypt_algorithim: crypt_algorithim,
          set_hint: set_hint,
          max_length_message: max_length_message,
          min_length_message: min_length_message,
          button_sound: button_sound,
          notice_message: notice_message,
          info_message: info_message,
          alertdialog_title: alertdialog_title,
          secureKey: secureKey,
        };
        window.Lina.execute("keypad", "showSecureKeypad", JSON.stringify(params), callback);
      },

      /**
       * 보안키패드 닫기
       */
      hide() {
        window.Lina.execute("keypad", "hideSecureKeypad");
      },

      /**
       * 복호화
       * @param {*} cipherText
       * @param {*} secureKey
       * @param {*} dataLength
       */
      decrypt(cipherText, secureKey, dataLength) {
        var params = {
            cipherText: cipherText,
            secureKey: secureKey,
            dataLength: dataLength
        }
        return window.Lina.plugin("keypad", "decryptFromSecureKeypad", params);
      },

      /**
       * RandomKey 반환
       * @returns RandomKey 보안키패드 암호화 시 사용된 key 반환
       */
      getRandomKey: function() {
        return window.Lina.execute("keypad", "getRandomKey");
      },

      /**
       * 보안키패드 내부데이터 클리어
       */
      clear() {
        window.Lina.execute("keypad", "clearKeypadData");
      }     
    }
  }
}