<template>
  <div>
    <div>
      <base-modal
        title="펀드 적합성 진단"
        :visible.sync="dialog.full"
        type="full"
        top="0"
        width="100%"
      >
        <template #content>
          <div class="contnet-inner">
            <div class="title-box">
              <base-titles fsize="20" title="전문금융소비자 여부 확인" />
              <base-tooltip
                :util-button="true"
                title=""
                mode="lightgray"
                @handleClick="openModal"
              />
            </div>

            <base-radio-buttons
              v-model="value"
              :list="list"
              title
              type="list"
            />

            <p class="sub-tit">
              직업
            </p>
            <base-list-table class-type="box type01" :list="jobInfo">
              <template #infoBox="{ scope }">
                <base-buttons type="gray-light" size="small" full>
                  {{ scope.item.data }}
                </base-buttons>
              </template>
            </base-list-table>
            <bottom-buttons :buttons="buttons" />
          </div>
        </template>
      </base-modal>
    </div>
    <div>
      <base-drawer
        :visible.sync="drawer1"
        title="전문금융소비자 여부 확인"
        header-type="type1"
        positive-button="확인"
        size="55%"
      >
        <template #content>
          <div>
            <p class="drawer-title">
              전문금융소비자
            </p>
            <base-titles fsize="16" title="" />
            <base-list type="bullet" :list="listList">
              <template #customArea="{ scope }">
                <base-buttons v-if="scope.item.btn" type="gray" size="small">
                  { { scope.item.btn } }
                </base-buttons>
              </template>
            </base-list>
            <p class="drawer-title">
              일반금융소비자
            </p>
            <base-list type="bullet" :list="listList2">
              <template #customArea="{ scope }">
                <base-buttons v-if="scope.item.btn" type="gray" size="small">
                  { { scope.item.btn } }
                </base-buttons>
              </template>
            </base-list>
          </div>
        </template>
      </base-drawer>
    </div>
  </div>
</template>

<script>
import BottomButtons from '@/components/BottomButtons'
export default {
  components: {
    BottomButtons
  },
  data() {
    return {
      dialog: {
        full: true
      },

      drawer1: false,
      jobInfo: [
        {
          name: 'infoBox',
          title: '직업명',
          data: '사무원'
        },
        {
          name: 'infoBox',
          title: '직장명',
          data: '라이나생명'
        },
        {
          name: 'infoBox',
          data: '변경',
          columnType: 'custom'
        }
      ],
      listList: [
        {
          content:
            '금융소비자 보호에 관한 법률 제2조 제9호에 따라 금융상품에 관한 전문성 또는 소유자산규모 등에 비추어 금융상품계약에 따른 위험감수능력이 있는 금융소비자를 의미함'
        },
        {
          content:
            '국가, 한국은행, 금융회사, 주권상장법인, 지방자치단체, 금융협회, 공공기관, 지방공기업 등'
        },
        {
          content:
            '단체보험을 체결하고자 하는 자 및 동일한 회사, 사업장, 조합 등 5인 이상의 근로자를 고용하고 있는 단체 등'
        }
      ],
      listList2: [
        {
          content: '위의 전문금융소비자에 해당하지 않는 경우'
        }
      ],
      buttons: {
        negative: {
          show: true,
          title: '취소'
        },
        positive: {
          show: true,
          title: '다음'
        },
        disable: {
          show: false
        }
      },
      value: '1',
      list: [
        {
          label: '보험설계사·대리점 및 보험중개사 등',
          value: '1'
        },
        {
          label: '해당사항 없음 (일반금융소비자)',
          value: '2'
        },
        {
          label: '기타',
          value: '3'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep {
  .contnet-inner {
    padding:12px 20px 32px;
    .title-box {
      display: flex;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 12px;

      .mode--lightgray {
        margin-left: 4px;
        span {
          text-decoration: none;
          &.icon-tooltip {
            &::before {
              background-color: $--color-tertiary-lightgray;
            }
          }
        }
      }
    }
    .sub-tit {
      margin-top: 32px;
      margin-bottom: 8px;
      font-size: $--font-size-medium;
      font-weight: $--font-weight-default;
      color: $--color-darkgray;
    }
    .el-radio-group.list {
      padding-left: 0;
    }
  }
  .bottom-sheet__body {
    color: $--color-darkgray;
    .drawer-title {
      margin-top: 12px;
      margin-bottom: 4px;
      color: $--color-tertiary;
      font-size: $--font-size-medium;
      font-weight: $--font-weight-medium;
    }
    .list-bullet:before {
      background-color: $--color-darkgray;
    }
  }
}
</style>
