/**
 * 공인인증서 Plugin
 */
export default {
  install(Vue) {
    Vue.prototype.$Cert = {
      /**
       * 인증서 목록
       */
      list : function(callback) {
        return window.Lina.execute("cert", "getCertList", null, callback);
      },

      /**
       * 인증서 삭제
       * @param {*} rdn
       */
      delete: function(rdn, callback) {
        var params = {
            rdn: rdn,
            callback: callback
        };
        window.Lina.execute("cert", "deleteCert", JSON.stringify(params));
      },

      certNumber: function(callback) {
        var params = {
            callback: callback
        };
        window.Lina.execute("cert", "getCertNumber", JSON.stringify(params));
      },

      /**
       * 인증서 복사
       * @param {*} callback
       */
      import: function(callback) {
        var params = {
            callback: callback
        };
        window.Lina.execute("cert", "importCert", JSON.stringify(params));
      },

      /**
       * 인증서 서명
       * @param {*} rdn
       * @param {*} secureKey
       * @param {*} encPassword
       * @param {*} callback
       */
      // sign: function(subjectDN, pwSecureKey, encPassword, encPasswordLen, certPem, signText) {
      sign: function(subjectDN, qwertyCipherString, signText, randomKey) {
          var params = {
              subjectDN: subjectDN,
              qwertyCipherString: qwertyCipherString,
              signText: signText,
              randomKey: randomKey,
          };
          return window.Lina.execute("cert", "signCert", JSON.stringify(params));
      },

      /**
       * 인증서 암호 확인
       * @param {*} subjectName 인증서 이름
       * @param {*} qwertyCipherString PBKDF2DataEncryptCipherDataExWithPadding 문자열
       * @param {*} randomKey
       */
     checkPassword: function(subjectName, qwertyCipherString, randomKey) {
        var params = {
            subjectName: subjectName,
            qwertyCipherString: qwertyCipherString,
            randomKey: randomKey,
        };
        return window.Lina.execute("cert", "checkCertPassword", JSON.stringify(params));
     },
    }
  }
}