<template>
  <section class="l-section">
    <div>
      <event-list :event="list" :link="true">
        <template #content="{ scope }">
          <base-titles :title="scope.item.titler" fsize="18" is-br>
            <template #label>
              <div class="label-cover">
                <base-tag
                  v-for="(tagItem, tagIdx) in scope.item.tag"
                  :key="tagIdx"
                  :tag-title="tagItem.title"
                  :type="tagItem.type"
                />
              </div>
            </template>
            <template #subContent>
              <p
                v-for="(subItem, subIdx) in scope.item.info"
                :key="subIdx"
                class="c-title_sub"
              >
                {{ subItem.infotit }} : {{ subItem.infotxt }}
              </p>
            </template>
          </base-titles>
        </template>
      </event-list>
    </div>
  </section>
</template>

<script>
import EventList from '@/components/EventList'

export default {
  components: {
    EventList
  },
  data() {
    return {
      list: [
        {
          tag: [
            {
              title: '진행중',
              type: 'success'
            }
          ],
          info: [
            {
              infotit: '이벤트 기간',
              infotxt: '2022.01.01 ~ 2022.01.19'
            },
            {
              infotit: '당첨자 발표',
              infotxt: '2022.03.03'
            }
          ],

          link: '/mob',
          titler: '이벤트 명',
          // src: require('@/assets/images/common/bank01.png'),
          alt: ''
        },
        {
          tag: [
            {
              title: '종료',
              type: 'gray'
            }
          ],
          info: [
            {
              infotit: '이벤트 기간',
              infotxt: '2022.01.01 ~ 2022.01.19'
            },
            {
              infotit: '당첨자 발표',
              infotxt: '2022.03.03'
            }
          ],

          link: '/mob',
          titler: '이벤트 명',
          // src: require('@/assets/images/common/bank01.png'),
          alt: ''
        }
      ]
    }
  }
}
</script>
