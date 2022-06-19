import { $api } from '@/api'
export const memberService = {
  /**
   * @param { object } payload
   * Cognito Token 발급
   * {
   *    username: string,
   *    password: string
   * }
   */
  async postMemberLogin(payload) {
    return await $api.post('/public/member/v1/login', payload)
  },
  /**
   * 카카오톡 전자서명 준비
   * @param { obejct } payload
   * {
   *  productCode: string (K1110 | K1112),
   *  params: object = {
   *    phoneNo: string (-하이픈 제외 숫자만)
   *    name: string
   *    birthday: string (YYYYMMDD)
*     }
   * }
   *
   * 참조: https://wiki.digitallina.com/pages/viewpage.action?pageId=41261074
   */
  async postCertificationKakaoRequest(payload) {
    return await $api.post(`/public/member/v1/certification/kakao-request/${payload.productCode}`, payload.params)
  },
  /**
   * 카카오톡 본인 인증 - 전자서명 검증
   * @param { object } payload
   * {
   *  txId: string (카카오톡 전자서명 인증 요청 response txId)
   * }
   *
   * 참조: https://wiki.digitallina.com/pages/viewpage.action?pageId=41263107
   */
  async getCertificationKaKaoVerification(payload) {
    return await $api.get(`/public/member/v1/certification/kakak-verification/${payload.txId}`)
  },
  /**
   *
   * @param { object } payload
   * {
   *  txId: string (카카오톡 전자서명 인증 요청 response txId)
   * }
   *
   * 참조: https://wiki.digitallina.com/pages/viewpage.action?pageId=41263105
   */
  async getCertificationKakaoStatus(payload) {
    return await $api.get(`/public/member/v1/certification/kakao-status/${payload.txId}`)
  },
  /**
   * 토스 전자서명 인증 요청
   * @param { object } payload
   * {
   *  doc: string (전자서명 하기위한 원문)
   *  serviceName: string (서비스명)
   *  userName: string
   *  userPhone: string (-하이픈 제외 숫자만)
   *  userBirthday: string (YYYYMMDD)
   * }
   *
   * 참조: https://wiki.digitallina.com/pages/viewpage.action?pageId=41262572
   */
  async postCertificationTossRequest(payload) {
    return await $api.post('/public/member/v1/certification/toss-request', payload)
  },
  /**
   * 토스 전자서명 결과확인
   * @param { object } payload
   * {
   *  txId: string (토스 전자서명 인증 요청 response txId)
   * }
   *
   * 참조: https://wiki.digitallina.com/pages/viewpage.action?pageId=41262951
   */
  async postCertificationTossVerification(payload) {
    return await $api.post('/public/member/v1/certification/toss-verification', payload)
  }
}
