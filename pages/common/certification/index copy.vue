<template>
  <div style="padding: 20px;">
    <el-form :model="kakaopayForm" label-position="left">
      <base-titles fsize="24" title="카카오페이 결제요청 (테스트 불가)" />
      <el-row>
        <el-col :span="24">
          <el-form-item label="가맹점 주문번호" prop="partnerOrderId">
            <base-input
              v-model="kakaopayForm.partnerOrderId"
              placeholder="가맹점 주문번호"
              disabled
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="증권번호" prop="policyNo">
            <base-input
              v-model="kakaopayForm.policyNo"
              placeholder="증권번호"
              disabled
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="생년월일" prop="partnerUserBirthDate">
            <base-input
              v-model="kakaopayForm.partnerUserBirthDate"
              placeholder="YYYYMMDD(- 제외)"
              pattern="[0-9]*"
              type="number"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="전화번호" prop="partnerUserPhoneNumber">
            <base-input
              v-model="kakaopayForm.partnerUserPhoneNumber"
              placeholder="전화번호(- 제외)"
              pattern="[0-9]*"
              type="number"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="상품명" prop="itemName">
            <base-input
              v-model="kakaopayForm.itemName"
              placeholder="상품명"
              disabled
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="상품코드" prop="itemCode">
            <base-input
              v-model="kakaopayForm.itemCode"
              placeholder="상품코드"
              disabled
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="상품 수량" prop="quantity">
            <base-input
              v-model="kakaopayForm.quantity"
              placeholder="개"
              pattern="[0-9]*"
              type="number"
              disabled
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="상품 총액" prop="totalAmount">
            <base-input
              v-model="kakaopayForm.totalAmount"
              placeholder="원"
              pattern="[0-9]*"
              type="number"
              disabled
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div>
      <base-buttons type="primary" size="small" @click="onRequestKakaopay()">
        결제요청
      </base-buttons>
    </div>
    <el-form :model="kakaoForm" label-position="left">
      <base-titles fsize="24" title="카카오톡 전자서명 (테스트 불가)" />
      <el-row>
        <el-col :span="8">
          <el-form-item label="이름" prop="name">
            <base-input
              v-model="kakaoForm.name"
              placeholder="이름"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="생년월일" prop="birthday">
            <base-input
              v-model="kakaoForm.birthday"
              placeholder="YYYYMMDD(- 제외)"
              pattern="[0-9]*"
              type="number"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="전화번호" prop="phoneNo">
            <base-input
              v-model="kakaoForm.phoneNo"
              placeholder="전화번호(- 제외)"
              pattern="[0-9]*"
              type="number"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div>
      <base-buttons :disabled="isRequestKakao" type="primary" size="small" @click="onCertifyKakaoRequest()">
        전자서명 요청
      </base-buttons>
      <base-buttons :disabled="!isRequestKakao" type="info" size="small" @click="onVerifyKakao('verify')">
        전자서명 검증
      </base-buttons>
      <base-buttons :disabled="!isRequestKakao" type="gray" size="small" @click="onVerifyKakao('status')">
        전자서명 상태확인
      </base-buttons>
    </div>

    <el-form :model="tossForm" label-position="left">
      <base-titles fsize="24" title="토스 전자서명" />
      <el-row>
        <el-col :span="12">
          <el-form-item label="문서원문" prop="doc">
            <base-input
              v-model="tossForm.doc"
              placeholder="문서원문"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="서비스명" prop="serviceName">
            <base-input
              v-model="tossForm.serviceName"
              placeholder="서비스명"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="이름" prop="userName">
            <base-input
              v-model="tossForm.userName"
              placeholder="이름"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="생년월일" prop="userBirthday">
            <base-input
              v-model="tossForm.userBirthday"
              placeholder="YYYYMMDD(- 제외)"
              pattern="[0-9]*"
              type="number"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="전화번호" prop="userPhone">
            <base-input
              v-model="tossForm.userPhone"
              placeholder="전화번호(- 제외)"
              pattern="[0-9]*"
              type="number"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div>
      <base-buttons :disabled="isRequestToss" type="primary" size="small" @click="onCertifyToss()">
        전자서명 요청
      </base-buttons>
      <base-buttons :disabled="!isRequestToss" type="info" size="small" @click="onVerifyToss()">
        전자서명 검증
      </base-buttons>
    </div>
  </div>
</template>
<script>
import { commonService, memberService } from '@/api/services'
import BaseInput from '~/components/common/BaseInput.vue'
import BaseButtons from '~/components/common/BaseButtons.vue'
export default {
  components: {
    BaseInput,
    BaseButtons
  },
  data() {
    return {
      kakaopayForm: {
        partnerOrderId: 'ORD202205120001',
        policyNo: 'PNO202205120001',
        partnerUserPhoneNumber: '',
        partnerUserBirthDate: '',
        itemName: '(무)라이나다이렉트치아보험Ⅱ(갱신형)',
        itemCode: 'P00198',
        quantity: 1,
        totalAmount: 15000,
        approvalUrl: 'https://devdirect.lina.co.kr/product/ess/completeKakaoPay',
        cancelUrl: 'https://devdirect.lina.co.kr/product/ess/completeKakaoPay',
        failUrl: 'https://devdirect.lina.co.kr/product/ess/completeKakaoPay'
      },
      isRequestKakao: false,
      kakaoForm: {
        name: '',
        birthday: '',
        phoneNo: ''
      },
      isRequestToss: false,
      tossForm: {
        doc: '테스트 전자서명 원문 내용',
        serviceName: '테스트 서비스명',
        userName: '',
        userPhone: '',
        userBirthday: ''
      },
      kakaoTxid: null,
      tossTxid: null
    }
  },
  methods: {
    /**
     * 카카오톡 전자서명 인증 요청
     */
    async onCertifyKakaoRequest() {
      try {
        const payload = {
          productCode: 'K1110T',
          params: this.kakaoForm
        }
        const res = await memberService.postCertificationKakaoRequest(payload)
        console.log(res)
        switch (res.data.code) {
          case 'MBR2000':
            this.$message({
              message: '카카오톡 요청 완료되었습니다. 앱을 확인해주세요.',
              type: 'success'
            })
            this.isRequestKakao = true
            this.kakaoTxid = res.data.respData.txId
            break
          default:
            this.$message({
              message: res.data.msg,
              type: 'warning'
            })
            break
        }
      } catch (error) {
        console.log(error)
      }
    },
    /**
     * 카카오톡 전자서명 검증 | 검증상태
     *
     * @param { string } 검증타입
     * 'verify': 전자서명 인증 확인
     * 'status': 전자서명 인증 상태 확인
     */
    async onVerifyKakao(type) {
      const payload = {
        txId: this.kakaoTxid
      }
      switch (type) {
        case 'verify':
          try {
            const res = await memberService.onVerifyKakao(payload)
            console.log(res)
            switch (res.data.code) {
              case 'MBR2000':
                switch (res.data.respData.status) {
                  case 'COMPLETED':
                    this.$message({
                      message: '검증 완료되었습니다.',
                      type: 'success'
                    })
                    break
                  default:
                    this.$message({
                      message: res.data.respData.status,
                      type: 'warning'
                    })
                    break
                }
                break
            }
          } catch (error) {
            console.log(error)
          }
          break
        case 'status':
          try {
            const res = await memberService.getCertificationKakaoStatus(payload)
            console.log(res)
            switch (res.data.code) {
              case 'MBR2000':
                switch (res.data.respData) {
                  case 'COMPLETED ':
                    this.$message({
                      message: '서명이 완료되었습니다.',
                      type: 'success'
                    })
                    break
                  case 'REQUESTED':
                    this.$message({
                      message: '사용자에게 전자서명을 요청한 상태입니다.',
                      type: 'warning'
                    })
                    break
                  case 'EXPIRED    ':
                    this.$message({
                      message: '유효시간이 지났습니다. 다시 요청해주세요.',
                      type: 'warning'
                    })
                    this.isRequestKakao = false
                    this.kakaoTxid = null
                    break
                }
                break
              default:
                this.$message({
                  message: res.data.msg,
                  type: 'warning'
                })
                break
            }
          } catch (error) {
            console.log(error)
          }
          break
      }
    },
    /**
     * 토스 전자서명 인증 요청
     */
    async onCertifyToss() {
      const paload = { ...this.tossForm }
      try {
        const res = await memberService.postCertificationTossRequest(paload)
        console.log(res)
        switch (res.data.code) {
          case 'MBR3000':
            this.$message({
              message: '요청 완료되었습니다. 토스앱을 확인하세요.',
              type: 'success'
            })
            this.isRequestToss = true
            this.tossTxid = res.data.respData.txId
            break
          default:
            this.$message({
              message: res.data.msg,
              type: 'warning'
            })
            break
        }
      } catch (error) {
        console.log(error)
      }
    },
    /**
     * 토스 전자서명 검증
     */
    async onVerifyToss() {
      const payload = {
        txId: this.tossTxid
      }
      try {
        const res = await memberService.postCertificationTossVerification(payload)
        console.log(res)
        switch (res.data.code) {
          case 'MBR3000':
            this.$message({
              message: '토스 서명 검증 완료되었습니다',
              type: 'success'
            })
            break
          default:
            this.$message({
              message: res.data.msg,
              type: 'warning'
            })
            break
        }
      } catch (error) {
        console.log(error)
      }
    },
    /**
     * 카카오페이 결제요청
     */
    async onRequestKakaopay() {
      const payload = { ...this.kakaopayForm }
      try {
        const res = await commonService.postPaymentKakaopayPayment(payload)
        console.log(res)
        switch (res.data.code) {
          case 'COMN2000':
            this.$message({
              message: '카카오페이 결제요청에 성공하였습니다. DEV모드는 실제 결제 X',
              type: 'success'
            })
            break
          default:
            this.$message({
              message: res.data.msg,
              type: 'warning'
            })
            break
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.el-form {
  padding-top: 30px;
  h2 {
    font-size: 2.4rem;
    font-weight: 600;
  }
}
</style>
