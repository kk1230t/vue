<template>
  <div class="l-content">
    <div class="l-section gap_top self-auth">
      <p class="tit">
        본인인증 방법 선택
      </p>
      <list-button :list-buttons="listButtons" @selectBtn="selectBtn" />
      <bottom-buttons :buttons="buttons" />
    </div>
    <div class="l-section">
      <all-agree :items="items" />

      <div class="content-box gap-top-pd">
        <p class="tit">
          통신사
        </p>
        <div class="form-wrap full">
          <base-select-button :select="mobSelect" :value.sync="selectedValue" txt="통신사를 선택해주세요" stt="full" />
        </div>
      </div>

      <sms-auth />
    </div>
    <bottom-buttons :buttons="buttons" />
  </div>
</template>

<script>
import SmsAuth from '~/components/selfIdent/SmsAuth.vue'
import AllAgree from '~/components/AllAgree'
import ListButton from '~/components/ListButton'
import BottomButtons from '~/components/BottomButtons'
export default {
  components: { SmsAuth, AllAgree, ListButton, BottomButtons },
  data() {
    return {
      mobSelectedValue: 1,
      mobSelect: {

        title: '통신사',
        list: [
          {
            value: 1,
            label: 'SKT'
          },
          {
            value: 2,
            label: 'KT'
          },
          {
            value: 3,
            label: 'LGU+'
          },
          {
            value: 4,
            label: 'SKT 알뜰폰'
          },
          {
            value: 5,
            label: 'KT 알뜰폰'
          },
          {
            value: 6,
            label: 'LGU+ 알뜰폰'
          }
        ]
      },
      listButtons: [
        {
          title: '카카오 인증',
          img: require('@/assets/images/common/icon-kakao.svg'),
          selected: false
        },
        {
          title: '네이버 인증',
          img: require('@/assets/images/common/icon-naver.svg'),
          selected: false
        },
        {
          title: '휴대폰 본인인증',
          img: require('@/assets/images/common/icon-mobile.svg'),
          selected: false
        }
      ],
      buttons: {
        negative: {
          show: false,
          title: ''
        },
        positive: {
          show: true,
          title: '확인'
        },
        disable: {
          show: false
        }
      },
      items: [
        { title: '개인정보 이용 동의', to: '' },
        { title: '고유식별정보 처리 동의', to: '' },
        { title: '통신사 이용약관 동의', to: '' },
        { title: '서비스 이용약관 동의', to: '' }
      ],
      select: {
        value: '',
        list: [
          {
            value: 1,
            label: 'SKT'
          },
          {
            value: 2,
            label: 'KT'
          }
        ]
      },
      input: {
        default: '',
        value: '234567'
      }
    }
  },
  methods: {
    selectBtn(index) {
      this.listButtons.forEach((item) => {
        item.selected = false
      })
      this.listButtons[index].selected = true
    }
  }
}
</script>

<style lang="scss" scoped>

.content-box {
  & + & {
    margin-top: 2.8rem;
  }
}

.tit {
  color: $--color-darkgray;
  margin-block: 8px;
}

.gap-top-pd {
  padding-top: 32px;
}

::v-deep {
  .el-drawer__wrapper{
    .el-drawer.btt{

      .bottom-sheet__body{
        padding: 0 0 50px 0;
        .el-radio-group.list .el-radio-button{
          margin-bottom: 0;
          border: none;
          padding: 16px 20px;
          & + .el-radio-button{
            border-top: 1px solid $--color-skygray;
          }
          &.is-active{
            border-color: $--color-skygray;
          }
        }
      }
    }
  }
}

.form-wrap {
  &.full {
    .select{
      ::v-deep {
        .el-button{
          padding: 12px;
          font-size: $--font-size-medium;
        }
      }
    }
  }
}

</style>
