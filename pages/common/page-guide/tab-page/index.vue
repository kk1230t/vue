<template>
  <div>
    <base-tab v-model="tab.activeName" :tab-list="tab.tabList" stretch fixed>
      <template #tabContents>
        <div v-if="tab.activeName === '1'">
          <div class="l-content">
            <div class="l-section gap-both">
              <div style="height:200vh;background:gray" />
            </div>
          </div>
        </div>
        <div v-if="tab.activeName === '2'">
          <div class="l-content">
            <div class="l-section gap-both">
              <div style="height:200vh;background:gray" />
            </div>
          </div>
        </div>
        <div v-if="tab.activeName === '3'">
          <div class="l-content">
            <div class="l-section gap-both">
              <div style="height:200vh;background:gray" />
            </div>
          </div>
        </div>
        <div v-if="tab.activeName === '4'">
          <div class="l-content">
            <div class="l-section gap-both">
              <div style="height:200vh;background:gray" />
            </div>
          </div>
        </div>
      </template>
    </base-tab>
    <tab-toolbar :tabtoolbar="tabtoolbar" />
  </div>
</template>

<script>
import TabToolbar from '~/components/TabToolbar'

export default {
  components: {
    TabToolbar

  },
  data() {
    return {
      tab: {
        activeName: '1',
        tabList: [
          {
            label: '보험상품',
            name: '1'
          },
          {
            label: '사이버창구',
            name: '2'
          },
          {
            label: '케어라운지',
            name: '3'
          },
          {
            label: '고객센터',
            name: '4'
          }
        ]
      },
      tabtoolbar: {
        isVisible: true,
        data: [
          {
            url: '/',
            icon: 'icon-security-1',
            title: '인증센터'
          },
          {
            url: '/',
            icon: 'icon-alarm-1',
            title: '알림함'
          },
          {
            url: '/',
            icon: 'icon-Filter',
            title: '환경설정'
          }
        ]
      }
    }
  }
}
</script>

<style></style>
