<template>
  <div class="l-content">
    <div class="l-section gap_top">
      <form action="">
        <div class="input-form-label">
          <div class="input-form-label_wrap">
            <span class="label-tit">이름</span>
          </div>
        </div>
        <div class="input-form">
          <base-input
            v-model="pageTitle"
            has-clear
            placeholder="이름을 입력해 주세요"
          />
        </div>

        <div class="input-form-label">
          <div class="input-form-label_wrap">
            <span class="label-tit">생년월일</span>
          </div>
        </div>
        <div class="input-form">
          <base-input v-model="pageTitle" has-clear placeholder="1990101" />
        </div>

        <div class="input-form-label">
          <div class="input-form-label_wrap">
            <span class="label-tit">성별</span>
          </div>
        </div>
        <div class="input-form">
          <base-radio-buttons
            v-model="radioBtn2.value"
            :list="radioBtn2.list"
            type="flex"
          />
        </div>

        <div class="input-form-label">
          <div class="input-form-label_wrap">
            <span class="label-tit">국적</span>
          </div>
        </div>
        <div class="input-form">
          <base-radio-buttons
            v-model="radioBtn2.value"
            :list="radioBtn2.list"
            type="flex"
          />
        </div>

        <div class="input-form-label">
          <div class="input-form-label_wrap">
            <span class="label-tit">일반전화</span>
          </div>
        </div>
        <div class="input-form">
          <base-input v-model="pageTitle" has-clear placeholder="1234 - 1234" />
        </div>

        <div class="input-form-label">
          <div class="input-form-label_wrap">
            <span class="label-tit">휴대폰</span>
          </div>
        </div>
        <div class="input-form">
          <base-select-button :select="select" :value.sync="selectedValue" txt="선택해주세요" />
        </div>

        <div class="input-form-label">
          <div class="input-form-label_wrap">
            <span class="label-tit">발급일자</span>
          </div>
        </div>
        <div class="input-form">
          <base-input v-model="pageTitle" has-clear placeholder="년" />
          <base-input v-model="pageTitle" has-clear placeholder="월" />
          <base-input v-model="pageTitle" has-clear placeholder="일" />
          <div class="input-form-bottom">
            <base-buttons type="purple" size="medium">
              인증완료
            </base-buttons>
          </div>
        </div>

        <div class="input-form-label">
          <div class="input-form-label_wrap">
            <span class="label-tit">이메일</span>
          </div>
        </div>
        <div class="input-form">
          <base-input v-model="pageTitle" has-clear placeholder="010 - 1234 - 8282" />
          <base-select-button :select="select" :value.sync="selectedValue" txt="선택해주세요" @chageLabel="chageLabel" />

          <div class="input-form-bottom">
            <base-input v-model="emailtxt" :disabled="!self" :has-clear="self" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      self: false,
      pageTitle: '',
      emailtxt: '@NAVER.COM',
      selectedValue: 1,
      select: {
        title: '지역번호',
        list: [
          {
            value: 1,
            label: '@NAVER.COM'
          },
          {
            value: 2,
            label: '@GMAIL.COM'
          },
          {
            value: 3,
            label: '직접입력',
            selfinput: true

          }
        ]
      },
      radioBtn2: {
        value: '1',
        list: [
          {
            label: '남자',
            value: '1'
          },
          {
            label: '여자',
            value: '2'
          }
        ]
      },

      radioBtn3: {
        value: '1',
        list: [
          {
            label: '내국인',
            value: '1'
          },
          {
            label: '외국인',
            value: '2'
          }
        ]
      }
    }
  },
  methods: {
    chageLabel(val) {
      if (val === '직접입력') { this.self = true; this.emailtxt = '' } else {
        this.self = false
        this.emailtxt = val
      }
    }
  }
}
</script>
