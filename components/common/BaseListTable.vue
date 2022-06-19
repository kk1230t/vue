<template>
  <ul
    class="info-list-wrap"
    :class="classType != '' ? `info-list-wrap-${classType}` : ''"
  >
    <template v-if="list.length === 0">
      <li class="info-list__none">
        {{ emptyTxt }}
      </li>
    </template>
    <template v-else>
      <template v-if="type === 'toggle'">
        <template v-for="(item, idx) in list">
          <template v-if="isToggle">
            <li :key="idx" class="info-list">
              <template v-if="item.titleType === 'tooltip'">
                <slot :name="item.titleName" :scope="{ item, idx }" />
              </template>
              <template v-else>
                <span class="item">{{ item.title }}</span>
              </template>
              <template v-if="item.columnType === 'custom'">
                <slot :name="item.name" :scope="{ item, idx }" />
              </template>
              <template v-else>
                <strong class="data" :class="item.dataType">
                  {{ item.data }}
                </strong>
              </template>
            </li>
          </template>
          <template v-else>
            <li v-if="idx < 2" :key="idx" class="info-list">
              <template v-if="item.titleType === 'tooltip'">
                <slot :name="item.titleName" :scope="{ item, idx }" />
              </template>
              <template v-else>
                <span class="item">{{ item.title }}</span>
              </template>
              <template v-if="item.columnType === 'custom'">
                <slot :name="item.name" :scope="{ item, idx }" />
              </template>
              <template v-else>
                <strong class="data" :class="item.dataType">
                  {{ item.data }}
                </strong>
              </template>
            </li>
          </template>
        </template>
        <base-buttons full @click="onToggle">
          {{ btnTitle }}
          <i :class="iconClass" />
        </base-buttons>
      </template>
      <template v-else>
        <li
          v-for="(item, idx) in list"
          :key="idx"
          class="info-list"
          :class="item.header ? 'info-list--header' : ''"
        >
          <template v-if="item.noTitle">
            <slot :name="item.name" :scope="{ item, idx }" />
          </template>
          <template v-else>
            <span v-if="item.titleType === 'tooltip'" class="item">
              <slot :name="item.titleName" :scope="{ item, idx }" />
            </span>
            <template v-else>
              <span class="item">{{ item.title }}</span>
            </template>
            <template v-if="item.columnType === 'custom'">
              <slot :name="item.name" :scope="{ item, idx }" />
            </template>
            <template v-else>
              <strong class="data" :class="item.dataType">
                {{ item.data }}
              </strong>
            </template>
          </template>
        </li>
      </template>
    </template>
  </ul>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    },
    emptyTxt: {
      type: String,
      default: '데이터가 없습니다.'
    },
    classType: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isToggle: false,
      btnTitle: '더보기',
      iconClass: 'el-icon-arrow-down'
    }
  },
  methods: {
    onToggle() {
      this.isToggle = !this.isToggle
      if (this.isToggle) {
        this.btnTitle = '접기'
        this.iconClass = 'el-icon-arrow-up'
      } else {
        this.btnTitle = '더보기'
        this.iconClass = 'el-icon-arrow-down'
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/components/list';
</style>
