import { $api } from '@/api'
export const commonService = {
  /**
   * 카카오페이 결제 준비
   * @param { obejct } payload
   * {
   *  partnerOrderId: string (가맹점 주문번호 최대 100자)
   *  policyNo: string (증권번호)
   *  partnerUserPhoneNumber: string (-하이픈 제외 숫자만 )
   *  partnerUserBirthDate: string (YYYYMMDD)
   *  itemName: string (상품명 최대 100자)
   *  itemCode: string (상품코드 최대 100자)
   *  quantity: number (상품 수량)
   *  totalAmount: number (상품 총액)
   *  approvalUrl: string (결제 성공시 URL)
   *  cancelUrl: string (결제 취소시 URL)
   *  failUrl: string (결제 실패시 URL)
   * }
   * 
   * 참조: https://wiki.digitallina.com/pages/viewpage.action?pageId=41262318
   */
  async postPaymentKakaopayPayment(payload) {
    return await $api.post('/public/common/v1/payment/kakaopay-payment', payload)
  },
}
