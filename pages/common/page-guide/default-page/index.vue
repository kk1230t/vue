<template>
  <div class="l-content">
    <div class="l-section gap-both">
      콘텐츠
    </div>
    <bottom-buttons :buttons="buttons" :show-top="true" />
    <floating-box :show-top="true" :has-button="true" />
    <base-drawer
      :visible.sync="drawer1"
      title="타이틀"
      header-type="type1"
      positive-button="확인"
      size="auto"
    >
      <template #content>
        <base-list type="bullet" :list="listList">
          <template #customArea="{ scope }">
            <base-buttons v-if="scope.item.btn" type="text">
              {{ scope.item.btn }}
            </base-buttons>
          </template>
        </base-list>
      </template>
    </base-drawer>
  </div>
</template>

<script>
import BottomButtons from '~/components/BottomButtons'
import FloatingBox from '~/components/FloatingBox'
export default {
  components: {
    BottomButtons,
    FloatingBox
  },
  data() {
    return {
      drawer1: true,

      buttons: {
        negative: {
          show: false,
          title: '확인'
        },
        positive: {
          show: true,
          title: '확인'
        },
        disable: {
          show: false
        }
      },
      listList: [
        {
          content: '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
        },
        {
          content:
            '본문내용이 들어온다면 정해진 아이템\n <>내에서 사용해야 합니다'
        },
        {
          content: '본문내용이 들어온다면 정해진 아이템 내에서 사용해야 합니다'
        }
      ]
    }
  }
}
</script>

<style></style>
