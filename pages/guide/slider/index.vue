<template>
  <div>
    <!-- <base-slider
            v-model="sliderValue1"    슬라이더 값 ,
            :min="0"   최소값
            :max="1000" 최대값
            :visibleCurrent="true"  슬라이더 중앙상단 현재값
            :marks="sliderMark" 슬라이더 좌우하단에 고정표시값
            data필요
            sliderMark: {
               0: {
                label: '0점'
               },
               100: {
                label: '100점'
                }
            },

            :bottomBtns="[10, 20, 30, 40]"  하단 버튼 증가값 4개의 배열필요
            @stepPlusBtn="handleStepPlus"   하단 버튼 동작 부분 메소드에 선언필요

                 handleStepPlus(stepValue) {
                  this.sliderValue6 = this.sliderValue6 + stepValue
                 }

            @minusClick="handleMinus" 좌우 1단위의 마이너버튼 동작
            @plusClick="handlePlus"   좌우 1단위의 마이너버튼 동작
            메소드에 선언필요

                 handlePlus() {
                   this.sliderValue5++
               },

               handleMinus() {
                  this.sliderValue5--
             },

          ></base-slider> -->
    <p class="guide-title">
      <span>기본</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-slider v-model="sliderValue1" :min="0" :max="1000" />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-slider v-model="sliderValue1" :min="0" :max="1000" /&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>현재값 + 마크</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-slider
          v-model="sliderValue2"
          :visible-current="true"
          :marks="sliderMark"
          :min="0"
          :max="100"
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-slider v-model="sliderValue2" :visible-current="true" :marks="sliderMark" :min="0" :max="100" /&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>구간선택</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-slider v-model="sliderValue3" range :max="100" />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre>
            <code>
              &lt;base-slider v-model="sliderValue3" range :max="100" /&gt;
            </code>
          </pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>구간선택 + 마크</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-slider
          ref="slider"
          v-model="sliderValue4"
          :format-tooltip="setTooltip"
          range
          :show-select-value="true"
          :marks="sliderMark2"
          :max="100"
          :show-tooltip="true"
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
          &lt;base-slider ref="slider" v-model="sliderValue4" :format-tooltip="setTooltip" range :show-select-value="true" :marks="sliderMark2" :max="100" :show-tooltip="true" /&gt;
          </code></pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>현재값 + 마크 - + 버튼</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-slider
          v-model="sliderValue5"
          :marks="sliderMark"
          :min="0"
          :max="100"
          :has-side-btn="true"
          :visible-current="true"
          @minusClick="handleMinus"
          @plusClick="handlePlus"
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
          &lt;base-slider v-model="sliderValue5" :marks="sliderMark" :min="0" :max="100" :has-side-btn="true" :visible-current="true"  @minusClick="handleMinus" @plusClick="handlePlus" /&gt;
          </code></pre>
        </highlight-code>
      </li>
    </ul>

    <p class="guide-title">
      <span>현재값 + 마크 하단버튼</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-slider
          v-model="sliderValue6"
          :marks="sliderMark"
          :min="0"
          :max="100"
          :visible-current="true"
          :bottom-btns="[10, 20, 30, 40]"
          @stepPlusBtn="handleStepPlus"
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
          &lt;base-slider v-model="sliderValue6" :marks="sliderMark" :min="0" :max="100" :visible-current="true" :bottom-btns="[10, 20, 30, 40]" @stepPlusBtn="handleStepPlus" /&gt;
          </code></pre>
        </highlight-code>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'guideLayout',
  data() {
    return {
      sliderValue1: 0,
      sliderValue2: 0,
      sliderValue3: [30, 60],
      sliderValue4: [30, 60],
      sliderValue5: 0,
      sliderValue6: 0,
      sliderstepValue: 0,
      sliderMark: {
        0: {
          label: '0점'
        },
        100: {
          label: '100점'
        }
      },
      sliderMark2: {
        0: {
          label: '20년납'
        },
        100: {
          label: '100년납'
        }
      }
    }
  },
  methods: {
    // chSlider 메소드
    setTooltip(v) {
      return v + '년납'
    },
    handlePlus() {
      this.sliderValue5++
    },
    handleMinus() {
      this.sliderValue5--
    },
    handleStepPlus(stepValue) {
      this.sliderValue6 = this.sliderValue6 + stepValue
    },
    onAccodian() {
      this.box.content = !this.box.content
      if (this.box.content) {
        this.box.icon = 'down'
      } else {
        this.box.icon = 'up'
      }
    }
    // chSlider 메소드
  }
}
</script>

<style lang="scss" scoped>
.guide {
  padding: 20px;
  &-title {
    padding: 10px 0;
    font: {
      size: 18px;
      weight: bold;
    }
    border-bottom: 1px solid #ddd;
    span {
      &::before {
        margin-right: 5px;
        border-left: 3px solid #000;
        content: '';
      }
    }
  }
  &-content {
    padding: 10px;
  }
  &-list {
    padding: 10px 0;
  }
  &-code {
    margin: 10px 0;
    position: relative;
    background: #dde8f1;
    font-size: 13px;
    white-space: pre;
  }
}
</style>
