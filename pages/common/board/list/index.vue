<template>
  <div>
    <base-list type="line" :list="list" :boardwrap="true" :link="true">
      <template #linkCustomArea="{ scope }">
        <base-titles :title="scope.item.titler" :ctitle-subtxt="scope.item.subtxt" fsize="18" is-br>
          <template v-if="scope.item.title!=null" #label>
            <base-tag :tag-title="scope.item.title" :type="scope.item.type" />
          </template>
          <template #subContent>
            <p class="c-title_sub">
              {{ scope.item.subtxt }}
            </p>
          </template>
        </base-titles>
      </template>
    </base-list>

    <base-pagination paginationcenter="true" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          link: '/mob',
          title: 'NEW',
          type: 'primary',
          titler: '라이나생명, 구성원 위한 \n 코로나19 자가진단검사실 설치운영',
          subtxt: '2015.01.01~2022.01.01'
        },
        {
          link: '/mob',
          title: '청약',
          type: 'primary',
          titler: '라이나생명 ‘골라담는간편건강보험’ 인기… \n 광고상 수상도',
          subtxt: '2016.01.01~2022.01.01'
        },
        {
          link: '/mob',
          titler: '라이나생명, 기업혁신대상 산업부장관상 수상',
          subtxt: '2017.01.01~2022.01.01'
        },
        {
          link: '/mob',
          titler: '라이나생명, 데일리 헬스케어 플랫폼 \n TUNE H 론칭',
          subtxt: '2018.01.01~2022.01.01'
        }
      ]
    }
  }
}
</script>
