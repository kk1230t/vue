<template>
  <div>
    <section class="l-section">
      <board-detail>
        <template #boxContent>
          sdsfd
        </template>
      </board-detail>
      <!-- <div>
        <base-titles title="고객경험기획팀 TMR 모집 \n (과장급/계약직)" fsize="24" is-br>
          <template #label>
            <base-tag v-for="(item, idx) in tagList" :key="idx" :tag-title="item.title" :type="item.type" />
          </template>
          <template #subContent>
            <p class="c-title_sub">
              2022.04.21(목) 00:00 ~ 2022.05.06(금) 23:59
            </p>
            <p class="c-title_sub">
              주말동안 야구를 하다가 공을 던지는 과정에서 무리를 했는지 어깨가 너무 뻐근합니다. <br>어깨를 돌릴 때 소리도 나는 것 같고 평소와는 너무 달라서 어떻게 해야 할지 문의 드립니다.
            </p>
          </template>
        </base-titles>
      </div> -->
    </section>

    <bottom-buttons :buttons="buttons" />
  </div>
</template>

<script>
import BoardDetail from '@/components/BoardDetail'
import BottomButtons from '@/components/BottomButtons'
export default {
  components: {
    BoardDetail,
    BottomButtons
  },
  data() {
    return {
      titler: 'sdsd'
    }
  }
}
</script>
