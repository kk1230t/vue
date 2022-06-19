/**
 * Gallery Plugin
 */
export default {
  install(Vue) {
    Vue.prototype.$Gallery = {  
      /**
       * Gallery 호출
       * @param {*} callback 
       */
      call(callback, selectableCount, maxFileSize) {
        let params = {
          selectableCount: selectableCount,
          maxFileSize: maxFileSize
        }
        window.Lina.execute("gallery", "callGallery", params, callback);
      },

      /**
       * base64로 인코딩된 썸네일 이미지 반환
       * @param {long} photoId 
       * @param {int} width 
       * @param {int} height 
       * @returns 
       */
      thumbnailToBase64(photoId, width, height) {
        let params = {
          photoId: photoId,
          width: width,
          height: height
        }
        return window.Lina.execute("gallery", "thumbnailToBase64", params);
      }
    }
  }
}