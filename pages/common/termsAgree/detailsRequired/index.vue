<template>
  <div class="l-content">
    <section class="l-section gap_top">
      <base-buttons type="primary" @click="dialog.full = true">
        약관 동의
      </base-buttons>
      <base-modal
        custom-class="modal"
        title="약관 동의"
        :visible.sync="dialog.full"
        type="full"
        top="0"
        width="100%"
      >
        <template #content>
          <section class="l-section">
            <terms-typo type="title">
              보험계약대출의 체결·이행  등을 위한 상세 동의서
            </terms-typo>
            <terms-typo type="desc">
              귀하는 개인(신용)정보의 수집·이용 및 조회, 제공에 관한 동의를 거부하실 수 있으며, 개인이 신용도 등을 평가하기 위한 목적 이외의 개인(신용)정보 제공 동의는 철회할 수  있습니다. 다만, 본 동의는 ‘보험계약 대출 체결·이행’등을 위해 필수적인 사항이므로 동의를 거부하시는 경우 관련 업무수행이 불가능합니다.
            </terms-typo>
            <terms-typo type="desc">
              보험계약대출이 체결 될 경우 귀하의 신용등급이에 영향이 있을 수 있습니다.
            </terms-typo>
            <terms-typo type="desc">
              본 동의서는 보험 계약대출의 체결·이행과 관련하여 귀하의 개인신용정보를 수집·이용 및 제3자에게 제공하기 위해 작성하는 동의서입니다.
            </terms-typo>
            <terms-typo type="desc">
              본 동의 후 동일한 보험계약과 관련된 보험계약 대출의 이용·유지·관리·범위 내에서는 귀하의 개인신용정보의 수집·이용 조회 제3자 제공을 위하여 귀하에게 별도의 추가 동의를 요구하지 않고자 합니다. 이에 동의하십니까?
            </terms-typo>
            <base-buttons type="gray-light" size="medium" icon="icon-Check" plain full>
              동의함 체크박스로 변경해야함
            </base-buttons>
          </section>
          <section class="l-section">
            <terms-typo type="title">
              고유식별정보 수집·이용에 관한 사항
            </terms-typo>
            <terms-typo type="lineTitle">
              수집·이용에 관한 사항
            </terms-typo>

            <terms-typo type="subtitle">
              수집·이용목적
            </terms-typo>
            <terms-typo type="desc">
              보험계약대출의 체결·유지·관리
            </terms-typo>
            <terms-typo type="desc">
              금융거래 업무(금융거재 신청, 대출금 지급·이체, 자동이체 등)
            </terms-typo>
            <terms-typo type="desc">
              보험계약대출의 체결유지관리 및 보험금 청구 등으로 고객이 제공한 개인(신용)정보의 최신성 유지
            </terms-typo>
            <terms-typo type="subtitle">
              보유·이용기간
            </terms-typo>
            <terms-typo type="boldText">
              동의일로부터 본 보험계약대출 관련 거래 종료 후 5년까지 (단, 다른 관련 법령에 해당하는 경우 해당 법령상의 보존기간을 따름)
            </terms-typo>
            <terms-typo type="bullet">
              bullet style todo
            </terms-typo>
            <terms-typo type="lineTitle">
              수집·이용 항목
            </terms-typo>
            <terms-typo type="subtitle">
              고유식별정보
            </terms-typo>
            <terms-typo type="boldText">
              주민등록번호, 외국인등록번호, 여권번호, 운전면허번호
            </terms-typo>
            <base-buttons type="gray-light" size="medium" icon="icon-Check" plain full>
              동의함 체크박스로 변경해야함
            </base-buttons>
          </section>
          <section class="l-section">
            <terms-typo type="title">
              개인신용정보 제공에 관한 사항
            </terms-typo>
            <terms-typo type="lineTitle">
              수집·이용에 관한 사항
            </terms-typo>
            <terms-typo type="subtitle">
              개인(신용)정보
            </terms-typo>
            <terms-typo type="desc">
              일반개인정보 : 성명, 주소, 생년월일, 이메일, 유·무선 전화번호, 성별, 국적, 직업, 국내거소신고번호, 법률 및 국제협약 등의 의무이행을 위한 정보
            </terms-typo>
            <terms-typo type="desc">
              신용거래정보 : 금융거래 업무 관련 정보(보험계약대출의 실행 및 상환 등 출수납), 보험계약 대출관련 정보 (대출실행일, 대출금리, 상환일자, 관리번호, 거래설정, 내역정보 등), 당사 및 신용정보집중기관, 신용정보회사, 금융결제원 등에서 수집·관리하는 상기 개인(신용)정보
            </terms-typo>
            <terms-typo type="desc">
              신용거래정보 : 금융거래 업무 관련 정보(보험계약대출의 실행 및 상환 등 출수납), 보험계약 대출관련 정보 (대출실행이르 대출금, 대출금이, 상환일자, 관리번호, 거래설정, 내역정보 등), 당사 및 신용정보집중기관, 신용정보회사, 금융결제원 등에서 수집·관리하는 상기 개인(신용)정보
            </terms-typo>
            <terms-typo type="bullet">
              bullet style todo
            </terms-typo>
            <base-buttons type="gray-light" size="medium" icon="icon-Check" plain full>
              동의함 체크박스로 변경해야함
            </base-buttons>
          </section>
        </template>
        <template #footer>
          <bottom-buttons :buttons="buttons" />
        </template>
      </base-modal>
    </section>
  </div>
</template>

<script>
import TermsTypo from '~/components/TermsTypo'
import BottomButtons from '~/components/BottomButtons'
export default {
  components: {
    BottomButtons,
    TermsTypo
  },
  data() {
    return {
      dialog: {
        full: true
      },
      buttons: {
        negative: {
          show: false
        },
        positive: {
          show: true,
          title: '확인'
        },
        disable: {
          show: false
        }
      }
    }
  }
}
</script>
