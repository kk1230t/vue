<template>
  <div class="l-content">
    <section class="l-section gap_top">
      <p class="tit">
        직업
      </p>

      <base-list-table
        class-type="box type01"
        :list="jobInfo"
      >
        <template #infoBox="{ scope }">
          <base-buttons
            type="gray-light"
            size="small"
            full
            @click="showPopup = true"
          >
            {{ scope.item.data }}
          </base-buttons>
        </template>
      </base-list-table>
    </section>

    <base-modal
      custom-class="modal"
      title="직업찾기"
      :visible.sync="showPopup"
      type="full"
      top="0"
      width="100%"
    >
      <template #content>
        <find-job-popup />
      </template>
    </base-modal>
  </div>
</template>

<script>
import FindJobPopup from '~/components/FindJob/FindJobPopup'
export default {
  components: {
    FindJobPopup
  },
  data() {
    return {
      showPopup: false,
      jobInfo: [
        {
          name: 'infoBox',
          title: '직업명',
          data: '사무원'
        },
        {
          name: 'infoBox',
          title: '직장명',
          data: '라이나생명공학연구실'
        },
        {
          name: 'infoBox',
          data: '변경',
          columnType: 'custom'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.tit{
  font-size: $--font-size-medium;
  color: $--color-darkgray;
  margin-bottom: 0.8rem;
}

</style>
