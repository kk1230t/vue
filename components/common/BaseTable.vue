<template>
  <el-table
    v-bind="$attrs"
    :data="data"
    :empty-text="emptyText"
    :class="[{'hide-header' : hideHeader},{'has-form' : hasForm}]"

    :summary-method="getSummaries"
    v-on="$listeners"
  >
    <template v-for="(item, index) in header">
      <template v-if="item.groupItem">
        <el-table-column
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :type="item.type"
          :align="item.align"
        >
          <template v-for="(child, childIndex) in item.groupItem">
            <el-table-column
              v-if="child.columnType === 'custom'"
              :key="childIndex"
              :prop="child.prop"
              :label="child.label"
              :type="child.type"
              :align="child.align"
            >
              <template slot-scope="scope">
                <slot :scope="scope" :name="child.prop" />
              </template>
            </el-table-column>
            <el-table-column
              v-else
              :key="childIndex"
              :prop="child.prop"
              :label="child.label"
              :type="child.type"
              :align="child.align"
            />
          </template>
        </el-table-column>
      </template>
      <template v-else>
        <el-table-column
          v-if="item.columnType === 'custom'"
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :type="item.type"
          :align="item.align"
        >
          <template slot-scope="scope">
            <slot :scope="scope" :name="item.prop" />
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :type="item.type"
          :align="item.align"
        />
      </template>
    </template>
  </el-table>
</template>

<script>
export default {
  name: 'TableComponent',
  props: {
    header: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    hasForm: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      emptyText: '데이터가 없습니다.'
    }
  },
  methods: {
    getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '합계'
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = '$ ' + values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
        } else {
          sums[index] = 'N/A'
        }
      })

      return sums
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/table';
</style>
