import axios from 'axios'
import qs from 'qs'

const $api = axios.create({
  // base URL은 환경에따라 .env 파일 참고
  baseURL: process.env.VUE_APP_API_DOMAIN,
  'Content-Type': 'application/json',
  paramsSerializer: (params) => {
    return qs.stringify(params, { allowDots: true })
  },
  timeout: 5000
})

$api.interceptors.request.use(
  function(config) {
    // console.log(config)
    const result = /[\\/]api[\\/]/.test(config.url)
    if (result) {
      const token = sessionStorage.getItem('token')
      if (token !== '' && token !== null) {
        config.headers.Authorization = `${token}`
      }
    }
    // 필수 포함항목
    /**
     * X-APP-CLIENT-ID
     * Cognito App Client ID
     * app : VUE_APP_CLIENT_ID_APP
     * web : VUE_APP_CLIENT_ID_WEB
     */
    config.headers['X-APP-CLIENT-ID'] = process.env.VUE_APP_CLIENT_ID_WEB
    /**
     * X-LINA-CLIENT-ID
     * clinet 생성 UUID
     */
    config.headers['X-LINA-CLIENT-ID'] = sessionStorage.getItem('uuidv4')
    /**
     * InflowPath
     * PC(HOM) || MobileWeb(MBH) || MobileApp(APH)
     */
    config.headers.InflowPath = 'MBH'

    return config
  },
  function(error) {
    // 오류 요청을 보내기전 수행할 일
    // ...
    return Promise.reject(error)
  }
)

export { $api }
