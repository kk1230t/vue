<template>
  <div>
    <!-- 타입 리셋 Style -->
    <div>
      <p class="guide-title">
        <span>타입 리셋</span>
      </p>
      <ul class="guide-content">
        <li class="guide-list">
          <base-buttons type="reset">
            Default
          </base-buttons>
          <base-link-buttons to="/" type="reset">
            Default
          </base-link-buttons>
          <!--내부링크 -->
          <base-link
            href="https://direct.e-lina.co.kr/"
            type="reset"
            title="새창"
            target="_blank"
          >
            Default
          </base-link>
        <!-- 외부링크 -->
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
              &lt;base-buttons type="reset"&gt;Default&lt;/base-buttons&gt;
              &lt;base-link-buttons to="/" type="reset"&gt;Default&lt;/base-link-buttons&gt; &lt;!-- 내부링크 --&gt;
              &lt;base-link href="#" type="reset" title="새창" target="_blank"&gt;Default&lt;/base-link&gt; &lt;!-- 외부링크 --&gt;
              </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!--// 타입 리셋 Style -->

    <!-- Button_Color_Style -->
    <div>
      <p class="guide-title">
        <span>Button_Color_Style</span>
      </p>
      <P class="guide-sub-title">
        버튼 기본 스타일 <strong class="font-red">type="색상명", size="large"</strong> 작성 - <strong>height:58px;</strong>
      </P>
      <ul class="guide-content">
        <li class="guide-list">
          <base-buttons type="navy" size="large">
            Button
          </base-buttons>
          <base-buttons type="purple" size="large">
            Button
          </base-buttons>
          <base-buttons type="magenta" size="large">
            Button
          </base-buttons>
          <base-buttons type="green" size="large">
            Button
          </base-buttons>
          <base-buttons type="sky-blue" size="large">
            Button
          </base-buttons>
          <base-buttons type="black" size="large">
            Button
          </base-buttons>
          <base-buttons type="gray" size="large">
            Button
          </base-buttons>
          <base-buttons type="gray" size="large" disabled>
            Button
          </base-buttons>
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
            &lt;!-- type에 color명을 넣어주세요. --&gt;
            &lt;base-buttons type="navy" size="large"&gt;Button&lt;base-buttons&gt;
            &lt;base-buttons type="purple" size="large"&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="magenta" size="large"&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="green" size="large"&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="sky-blue" size="large"&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="large"&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="gray" size="large"&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="gray" disabled size="large"&gt;Button&lt;/base-buttons&gt;
            </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!--//Button_Color_Style -->

    <!-- Button_Line_Style -->
    <div>
      <p class="guide-title">
        <span>Button_Line_Style</span>
      </p>
      <P class="guide-sub-title">
        라인 스타일 <strong class="font-red">plain</strong> 추가 - <strong>height:58px;</strong>
      </P>
      <ul class="guide-content">
        <li class="guide-list">
          <base-buttons type="navy" size="large" plain>
            Button
          </base-buttons>
          <base-buttons type="purple" size="large" plain>
            Button
          </base-buttons>
          <base-buttons type="magenta" size="large" plain>
            Button
          </base-buttons>
          <base-buttons type="green" size="large" plain>
            Button
          </base-buttons>
          <base-buttons type="sky-blue" size="large" plain>
            Button
          </base-buttons>
          <base-buttons type="black" size="large" plain>
            Button
          </base-buttons>
          <base-buttons type="gray" size="large" plain>
            Button
          </base-buttons>
          <base-buttons type="gray-light" size="large" plain>
            Button
          </base-buttons>
          <base-buttons type="yellow" size="large" plain>
            Button
          </base-buttons>
          <base-buttons type="yellow" size="large" disabled>
            Button
          </base-buttons>
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
            &lt;!-- plain 추가 --&gt;
            &lt;base-buttons type="navy" size="large" plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="large" plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="magenta" size="large" plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="green" size="large" plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="sky-blue" size="large" plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="large" plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="gray" size="large" plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="large" plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="yellow" size="large" plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="yellow" size="large" plain disabled&gt;Button&lt;/base-buttons&gt;
            </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!--// Button_Line_Style -->

    <!-- Button_Line_Style -->
    <div>
      <p class="guide-title">
        <span>Button_Round_Style</span>
      </p>
      <P class="guide-sub-title">
        라운드 스타일 <strong class="font-red">round</strong>
      </P>
      <ul class="guide-content">
        <li class="guide-list">
          <base-buttons type="navy" size="large" round>
            Button
          </base-buttons>
          <base-buttons type="purple" size="large" round>
            Button
          </base-buttons>
          <base-buttons type="magenta" size="large" round>
            Button
          </base-buttons>
          <base-buttons type="green" size="large" round>
            Button
          </base-buttons>
          <base-buttons type="sky-blue" size="large" round>
            Button
          </base-buttons>
          <base-buttons type="black" size="large" round>
            Button
          </base-buttons>
          <base-buttons type="gray" size="large" round>
            Button
          </base-buttons>
          <base-buttons type="gray-light" size="large" round>
            Button
          </base-buttons>
          <base-buttons type="yellow" size="large" round>
            Button
          </base-buttons>
          <base-buttons type="yellow" size="large" disabled round>
            Button
          </base-buttons>

          <br>

          <base-buttons type="navy" size="large" plain round>
            Button
          </base-buttons>
          <base-buttons type="purple" size="large" plain round>
            Button
          </base-buttons>
          <base-buttons type="magenta" size="large" plain round>
            Button
          </base-buttons>
          <base-buttons type="green" size="large" plain round>
            Button
          </base-buttons>
          <base-buttons type="sky-blue" size="large" plain round>
            Button
          </base-buttons>
          <base-buttons type="black" size="large" plain round>
            Button
          </base-buttons>
          <base-buttons type="gray" size="large" plain round>
            Button
          </base-buttons>
          <base-buttons type="gray-light" size="large" plain round>
            Button
          </base-buttons>
          <base-buttons type="yellow" size="large" plain round>
            Button
          </base-buttons>
          <base-buttons type="yellow" size="large" disabled round>
            Button
          </base-buttons>
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
            &lt;!-- round 추가 --&gt;
            &lt;base-buttons type="navy" size="large" round&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="large" round&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="magenta" size="large" round&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="green" size="large" round&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="sky-blue" size="large" round&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="large" round&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="gray" size="large" round&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="large" round&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="yellow" size="large" round&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="yellow" size="large" disabled round&gt;Button&lt;/base-buttons&gt;

            &lt;base-buttons type="navy" size="large" plain round&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="large" plain round&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="magenta" size="large" plain round&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="green" size="large" plain round&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="sky-blue" size="large" plain round&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="large" plain round&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="gray" size="large" plain round&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="large" plain round&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="yellow" size="large" plain round&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="yellow" size="large" disabled round&gt;Button&lt;/base-buttons&gt;
            </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!--// Button_Line_Style -->

    <!-- Button_Size_Medium -->
    <div>
      <p class="guide-title">
        <span>Button_Size_Medium</span>
      </p>
      <P class="guide-sub-title">
        <strong class="font-red">
          size="medium"
        </strong> 추가 - <strong>height:50px;</strong>
      </P>
      <ul class="guide-content">
        <li class="guide-list">
          <base-buttons type="navy" size="medium">
            Button
          </base-buttons>
          <base-buttons type="purple" size="medium">
            Button
          </base-buttons>
          <base-buttons type="magenta" size="medium">
            Button
          </base-buttons>
          <base-buttons type="green" size="medium">
            Button
          </base-buttons>
          <base-buttons type="sky-blue" size="medium">
            Button
          </base-buttons>
          <base-buttons type="black" size="medium">
            Button
          </base-buttons>
          <base-buttons type="gray" size="medium">
            Button
          </base-buttons>
          <base-buttons type="gray" size="medium" disabled>
            Button
          </base-buttons>

          <br>

          <base-buttons type="navy" size="medium" plain>
            Button
          </base-buttons>
          <base-buttons type="purple" size="medium" plain>
            Button
          </base-buttons>
          <base-buttons type="magenta" size="medium" plain>
            Button
          </base-buttons>
          <base-buttons type="green" size="medium" plain>
            Button
          </base-buttons>
          <base-buttons type="sky-blue" size="medium" plain>
            Button
          </base-buttons>
          <base-buttons type="black" size="medium" plain>
            Button
          </base-buttons>
          <base-buttons type="gray-light" size="medium" plain>
            Button
          </base-buttons>
          <base-buttons type="gray" size="medium" plain disabled>
            Button
          </base-buttons>
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
            &lt;!-- size="medium" --&gt;
            &lt;base-buttons type="navy" size="medium"&gt;Button&lt;base-buttons&gt;
            &lt;base-buttons type="purple" size="medium"&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="magenta" size="medium"&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="green" size="medium"&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="sky-blue" size="medium"&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="medium"&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="gray" size="medium" &gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="gray" size="medium" disabled&gt;Button&lt;/base-buttons&gt;

            &lt;!-- line style --&gt;
            &lt;base-buttons type="navy" size="medium" plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="medium" plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="magenta" size="medium" plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="green" size="medium" plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="sky-blue" size="medium" plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="medium" plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="gray" size="medium" plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="medium" plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="gray" size="medium" plain disabled&gt;Button&lt;/base-buttons&gt;
            </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!--//Button_Size_Medium -->

    <!-- Button_Size_Small -->
    <div>
      <p class="guide-title">
        <span>Button_Size_Small</span>
      </p>
      <P class="guide-sub-title">
        <strong class="font-red">
          size="small"
        </strong> 추가 - <strong>height:38px;</strong>
      </P>
      <ul class="guide-content">
        <li class="guide-list">
          <base-buttons type="navy" size="small">
            Button
          </base-buttons>
          <base-buttons type="purple" size="small">
            Button
          </base-buttons>
          <base-buttons type="magenta" size="small">
            Button
          </base-buttons>
          <base-buttons type="green" size="small">
            Button
          </base-buttons>
          <base-buttons type="sky-blue" size="small">
            Button
          </base-buttons>
          <base-buttons type="black" size="small">
            Button
          </base-buttons>
          <base-buttons type="gray" size="small">
            Button
          </base-buttons>
          <base-buttons type="gray" size="small" disabled>
            Button
          </base-buttons>
          <br>
          <base-buttons type="navy" size="small" plain>
            Button
          </base-buttons>
          <base-buttons type="purple" size="small" plain>
            Button
          </base-buttons>
          <base-buttons type="magenta" size="small" plain>
            Button
          </base-buttons>
          <base-buttons type="green" size="small" plain>
            Button
          </base-buttons>
          <base-buttons type="sky-blue" size="small" plain>
            Button
          </base-buttons>
          <base-buttons type="black" size="small" plain>
            Button
          </base-buttons>
          <base-buttons type="gray" size="small" plain>
            Button
          </base-buttons>
          <base-buttons type="gray" size="small" plain disabled>
            Button
          </base-buttons>
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
            &lt;!-- size="small" --&gt;
            &lt;base-buttons type="navy" size="small"&gt;Button&lt;base-buttons&gt;
            &lt;base-buttons type="purple" size="small"&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="magenta" size="small"&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="green" size="small"&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="sky-blue" size="small"&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="small"&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="gray" size="small" &gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="gray" size="small" disabled&gt;Button&lt;/base-buttons&gt;

            &lt;!-- line style --&gt;
            &lt;base-buttons type="navy" size="small" plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="small" plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="magenta" size="small" plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="green" size="small" plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="sky-blue" size="small" plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="small" plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="gray" size="small" plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="gray" size="small" plain disabled&gt;Button&lt;/base-buttons&gt;
            </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!--//Button_Size_Medium -->

    <!-- Button_Size_Full -->
    <div>
      <p class="guide-title">
        <span>Button_Size_Full</span>
      </p>
      <ul class="guide-content">
        <li class="guide-list">
          <div style="margin-bottom:5px;">
            <base-buttons type="navy" size="large" full>
              button
            </base-buttons>
          </div>
          <div style="margin-bottom:5px;">
            <base-buttons type="navy" size="large" plain full>
              button
            </base-buttons>
          </div>
          <div style="margin-bottom:5px;">
            <base-buttons type="magenta" size="medium" full>
              button
            </base-buttons>
          </div>
          <div style="margin-bottom:5px;">
            <base-buttons type="sky-blue" size="small" plain full>
              button
            </base-buttons>
          </div>
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
               &lt;!--full width:100% --&gt;
              &lt;base-buttons type="navy" size="large" full&gt;button&lt;/base-buttons&gt;
              &lt;base-buttons type="navy" size="large" plain full&gt;button&lt;/base-buttons&gt;
              &lt;base-buttons type="magenta" size="medium" full&gt;button&lt;/base-buttons&gt;
              &lt;base-buttons type="sky-blue" size="small" plain full&gt;button&lt;/base-buttons&gt;
              </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!-- //Button_Size_Full -->

    <p class="guide-title">
      <span>Blue_Basic</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-buttons type="navy" size="large">
          Default
        </base-buttons>
        <base-buttons type="navy" size="medium">
          Medium
        </base-buttons>
        <base-buttons type="navy" size="small">
          Small
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="navy" size="large"&gt; Default &lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="medium"&gt; Medium &lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="small"&gt; Small &lt;/base-buttons&gt;

          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="navy" size="large" round>
          Default
        </base-buttons>
        <base-buttons type="navy" size="medium" round>
          Medium
        </base-buttons>
        <base-buttons type="navy" size="small" round>
          Small
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="navy" size="large" round&gt; Default &lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="medium" round&gt; Medium &lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="small" round&gt; Small &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="navy" size="large" plain>
          Default
        </base-buttons>
        <base-buttons type="navy" size="medium" plain>
          Medium
        </base-buttons>
        <base-buttons type="navy" size="small" plain>
          Small
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="navy" size="large" plain&gt; Default &lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="medium" plain&gt; Medium &lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="small" plain&gt; Small &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="navy" size="large" disabled>
          Default
        </base-buttons>
        <base-buttons type="navy" size="medium" disabled>
          Medium
        </base-buttons>
        <base-buttons type="navy" size="small" disabled>
          Small
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="navy" size="large" disabled&gt; Default &lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="medium" disabled&gt; Medium &lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="small" disabled&gt; Small &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="navy" size="large" icon="icon-Plus">
          더보기
        </base-buttons>
        <base-buttons type="navy" size="medium" icon="icon-Plus">
          더보기
        </base-buttons>
        <base-buttons type="navy" size="small" icon="icon-Plus">
          더보기
        </base-buttons>
        <base-buttons type="navy" size="large" icon="icon-Plus" round>
          더보기
        </base-buttons>
        <base-buttons type="navy" size="medium" icon="icon-Plus" round>
          더보기
        </base-buttons>
        <base-buttons type="navy" size="small" icon="icon-Plus" round>
          더보기
        </base-buttons>
        <base-buttons type="navy" size="large" icon="icon-Plus" plain>
          더보기
        </base-buttons>
        <base-buttons type="navy" size="medium" icon="icon-Pluss" plain>
          더보기
        </base-buttons>
        <base-buttons type="navy" size="small" icon="icon-Plus" plain>
          더보기
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="navy" size="large" icon="icon-Plus"&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="medium" icon="icon-Plus"&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="small" icon="icon-Plus"&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="large" icon="icon-Plus" round&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="medium" icon="icon-Plus" round&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="small" icon="icon-Plus" round&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="large" icon="icon-Plus" plain&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="medium" icon="icon-Plus" plain&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="small" icon="icon-Plus" plain&gt; 더보기 &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>Purple</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-buttons type="purple" size="large">
          large
        </base-buttons>
        <base-buttons type="purple" size="medium">
          Medium
        </base-buttons>
        <base-buttons type="purple" size="small">
          Small
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;!-- size (large, medium, small)--&gt;
            &lt;base-buttons type="purple" size="large"&gt; Default &lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="medium"&gt; Medium &lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="small"&gt; Small &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="purple" size="large" round>
          large
        </base-buttons>
        <base-buttons type="purple" size="medium" round>
          Medium
        </base-buttons>
        <base-buttons type="purple" size="small" round>
          Small
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;!-- round --&gt;
            &lt;base-buttons type="purple" size="large" round&gt; Default &lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="medium" round&gt; Medium &lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="small" round&gt; Small &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="purple" size="large" plain>
          Default
        </base-buttons>
        <base-buttons type="purple" size="medium" plain>
          Medium
        </base-buttons>
        <base-buttons type="purple" size="small" plain>
          Small
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
             &lt;!-- plain --&gt;
            &lt;base-buttons type="purple" size="large" plain&gt; Default &lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="medium" plain&gt; Medium &lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="small" plain&gt; Small &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>

      <li class="guide-list">
        <base-buttons type="purple" size="large">
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="purple" size="medium">
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="purple" size="small">
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="purple" size="large" round>
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="purple" size="medium" round>
          더보기
          <i class=" icon-arror2L" />
        </base-buttons>
        <base-buttons type="purple" size="small" round>
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="purple" size="large" plain>
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="purple" size="medium" plain>
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="purple" size="small" plain>
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="purple" size="large"&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="medium"&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="small"&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="large" round&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="medium" round&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="small" round&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="large" plain&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="medium" plain&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="small" plain&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="purple" size="large" icon="icon-Plus">
          더보기
        </base-buttons>
        <base-buttons type="purple" size="medium" icon="icon-Plus">
          더보기
        </base-buttons>
        <base-buttons type="purple" size="small" icon="icon-Plus">
          더보기
        </base-buttons>
        <base-buttons type="purple" size="large" icon="icon-Plus" round>
          더보기
        </base-buttons>
        <base-buttons type="purple" size="medium" icon="icon-Plus" round>
          더보기
        </base-buttons>
        <base-buttons type="purple" size="small" icon="icon-Plus" round>
          더보기
        </base-buttons>
        <base-buttons type="purple" size="large" icon="icon-Plus" plain>
          더보기
        </base-buttons>
        <base-buttons type="purple" size="medium" icon="icon-Plus" plain>
          더보기
        </base-buttons>
        <base-buttons type="purple" size="small" icon="icon-Plus" plain>
          더보기
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="purple" size="large" icon="icon-Plus"&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="medium" icon="icon-Plus"&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="small" icon="icon-Plus"&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="large" icon="icon-Plus" round&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="medium" icon="icon-Plus" round&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="small" icon="icon-Plus" round&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="large" icon="icon-Plus" plain&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="medium" icon="icon-Plus" plain&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="small" icon="icon-Plus" plain&gt; 더보기 &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>black_Basic</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-buttons type="black" size="large">
          Default
        </base-buttons>
        <base-buttons type="black" size="medium">
          Medium
        </base-buttons>
        <base-buttons type="black" size="small">
          Small
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
          &lt;base-buttons type="black" size="large"&gt; Default &lt;/base-buttons&gt;
          &lt;base-buttons type="black" size="medium"&gt; Medium &lt;/base-buttons&gt;
          &lt;base-buttons type="black" size="small"&gt; Small &lt;/base-buttons&gt;
        </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="black" size="large" round>
          Default
        </base-buttons>
        <base-buttons type="black" size="medium" round>
          Medium
        </base-buttons>
        <base-buttons type="black" size="small" round>
          Small
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="black" size="large" round&gt; Default &lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="medium" round&gt; Medium &lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="small" round&gt; Small &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="black" size="large" plain>
          Default
        </base-buttons>
        <base-buttons type="black" size="medium" plain>
          Medium
        </base-buttons>
        <base-buttons type="black" size="small" plain>
          Small
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="black" size="large" plain&gt; Default &lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="medium" plain&gt; Medium &lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="small" plain&gt; Small &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>

      <li class="guide-list">
        <base-buttons type="black" size="large">
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="black" size="medium">
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="black" size="small">
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="black" size="large" round>
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="black" size="medium" round>
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="black" size="small" round>
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="black" size="large" plain>
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="black" size="medium" plain>
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="black" size="small" plain>
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="black" size="large"&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="medium"&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="small"&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="large" round&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="medium" round&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="small" round&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="large" plain&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="medium" plain&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="small" plain&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="black" size="large" icon="icon-Plus">
          더보기
        </base-buttons>
        <base-buttons type="black" size="medium" icon="icon-Plus">
          더보기
        </base-buttons>
        <base-buttons type="black" size="small" icon="icon-Plus">
          더보기
        </base-buttons>
        <base-buttons type="black" size="large" icon="icon-Plus" round>
          더보기
        </base-buttons>
        <base-buttons type="black" size="medium" icon="icon-Plus" round>
          더보기
        </base-buttons>
        <base-buttons type="black" size="small" icon="icon-Plus" round>
          더보기
        </base-buttons>
        <base-buttons type="black" size="large" icon="icon-Plus" plain>
          더보기
        </base-buttons>
        <base-buttons type="black" size="medium" icon="icon-Plus" plain>
          더보기
        </base-buttons>
        <base-buttons type="black" size="small" icon="icon-Plus" plain>
          더보기
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="black" size="large" icon="icon-Plus"&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="medium" icon="icon-Plus"&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="small" icon="icon-Plus"&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="large" icon="icon-Plus" round&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="medium" icon="icon-Plus" round&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="small" icon="icon-Plus" round&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="black" icon="icon-Plus" plain&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="medium" icon="icon-Plus" plain&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="black" size="small" icon="icon-Plus" plain&gt; 더보기 &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>Gray_Light</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-buttons type="gray-light" size="large">
          Default
        </base-buttons>
        <base-buttons type="gray-light" size="medium">
          Medium
        </base-buttons>
        <base-buttons type="gray-light" size="small">
          Small
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="gray-light" size="large"&gt; Default &lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="medium"&gt; Medium &lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="small"&gt; Small &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="gray-light" size="large" round>
          Default
        </base-buttons>
        <base-buttons type="gray-light" size="medium" round>
          Medium
        </base-buttons>
        <base-buttons type="gray-light" size="small" round>
          Small
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="gray-light" size="large" round&gt; Default &lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="medium" round&gt; Medium &lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="small" round&gt; Small &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="gray-light" size="large" plain>
          Default
        </base-buttons>
        <base-buttons type="gray-light" size="medium" plain>
          Medium
        </base-buttons>
        <base-buttons type="gray-light" size="small" plain>
          Small
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="gray-light" size="large" plain&gt; Default &lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="medium" plain&gt; Medium &lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="small" plain&gt; Small &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>

      <li class="guide-list">
        <base-buttons type="gray-light" size="large">
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="gray-light" size="medium">
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="gray-light" size="small">
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="gray-light" size="large" round>
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="gray-light" size="medium" round>
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="gray-light" size="small" round>
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="gray-light" size="large" plain>
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="gray-light" size="medium" plain>
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="gray-light" size="small" plain>
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="gray-light" size="large"&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="medium"&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="small"&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="large" round&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="medium" round&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="small" round&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="large" plain&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="medium" plain&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="small" plain&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="gray-light" size="large" icon="icon-Plus">
          더보기
        </base-buttons>
        <base-buttons type="gray-light" size="medium" icon="icon-Plus">
          더보기
        </base-buttons>
        <base-buttons type="gray-light" size="small" icon="icon-Plus">
          더보기
        </base-buttons>
        <base-buttons type="gray-light" size="large" icon="icon-Plus" round>
          더보기
        </base-buttons>
        <base-buttons type="gray-light" size="medium" icon="icon-Plus" round>
          더보기
        </base-buttons>
        <base-buttons type="gray-light" size="small" icon="icon-Plus" round>
          더보기
        </base-buttons>
        <base-buttons type="gray-light" size="large" icon="icon-Plus" plain>
          더보기
        </base-buttons>
        <base-buttons type="gray-light" size="medium" icon="icon-Plus" plain>
          더보기
        </base-buttons>
        <base-buttons type="gray-light" size="small" icon="icon-Plus" plain>
          더보기
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="gray-light" size="large" icon="icon-Plus"&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="medium" icon="icon-Plus"&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="small" icon="icon-Plus"&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="large" icon="icon-Plus" round&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="medium" icon="icon-Plus" round&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="small" icon="icon-Plus" round&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="large" icon="icon-Plus" plain&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="medium" icon="icon-Plus" plain&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="gray-light" size="small" icon="icon-Plus" plain&gt; 더보기 &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>White</span>
    </p>
    <ul class="guide-content" style="background: #000">
      <li class="guide-list">
        <base-buttons type="white" size="large">
          Default
        </base-buttons>
        <base-buttons type="white" size="medium">
          Medium
        </base-buttons>
        <base-buttons type="white" size="small">
          Small
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="white" size="large"&gt; Default &lt;/base-buttons&gt;
            &lt;base-buttons type="white" size="medium"&gt; Medium &lt;/base-buttons&gt;
            &lt;base-buttons type="white" size="small"&gt; Small &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="white" size="large" round>
          Default
        </base-buttons>
        <base-buttons type="white" size="medium" round>
          Medium
        </base-buttons>
        <base-buttons type="white" size="small" round>
          Small
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="white" size="large" round&gt; Default &lt;/base-buttons&gt;
            &lt;base-buttons type="white" size="medium" round&gt; Medium &lt;/base-buttons&gt;
            &lt;base-buttons type="white" size="small" round&gt; Small &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="white" size="large" disabled>
          Default
        </base-buttons>
        <base-buttons type="white" size="medium" disabled>
          Medium
        </base-buttons>
        <base-buttons type="white" size="small" disabled>
          Small
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="white" size="large" disabled&gt; Default &lt;/base-buttons&gt;
            &lt;base-buttons type="white" size="medium" disabled&gt; Medium &lt;/base-buttons&gt;
            &lt;base-buttons type="white" size="small" disabled&gt; Small &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="white" size="large">
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="white" size="medium">
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="white" size="small">
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="white" size="large" round>
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="white" size="medium" round>
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="white" size="small" round>
          더보기
          <i class="icon-arror2L" />
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="white" size="large"&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="white" size="medium"&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="white" size="small"&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="white" size="large" round&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="white" size="medium" round&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="white" size="small" round&gt; 더보기 &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="white" size="large" icon="icon-Plus">
          더보기
        </base-buttons>
        <base-buttons type="white" size="medium" icon="icon-Plus">
          더보기
        </base-buttons>
        <base-buttons type="white" size="small" icon="icon-Plus">
          더보기
        </base-buttons>
        <base-buttons type="white" size="large" icon="icon-Plus" round>
          더보기
        </base-buttons>
        <base-buttons type="white" size="medium" icon="icon-Plus" round>
          더보기
        </base-buttons>
        <base-buttons type="white" size="small" icon="icon-Plus" round>
          더보기
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="white" size="large" icon="icon-Plus"&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="white" size="medium" icon="icon-Plus"&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="white" size="small" icon="icon-Plus"&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="white" size="large" icon="icon-Plus" round&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="white" size="medium" icon="icon-Plus" round&gt; 더보기 &lt;/base-buttons&gt;
            &lt;base-buttons type="white" size="small" icon="icon-Plus" round&gt; 더보기 &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>Text Button blue</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-buttons type="text">
          Default
        </base-buttons>
        <base-buttons type="text" size="medium">
          Medium
        </base-buttons>
        <base-buttons type="text" size="small">
          Small
        </base-buttons>
        <base-buttons type="text" size="mini">
          Mini
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="text"&gt; Default &lt;/base-buttons&gt;
            &lt;base-buttons type="text" size="medium"&gt; Medium &lt;/base-buttons&gt;
            &lt;base-buttons type="text" size="small"&gt; Small &lt;/base-buttons&gt;
            &lt;base-buttons type="text" size="mini"&gt; Mini &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="text" text-icon>
          Default
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="text" text-icon size="medium">
          Medium
          <i class="icon-arror2L" />
        </base-buttons>

        <base-buttons type="text" text-icon size="small">
          Small
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="text" text-icon size="mini">
          Mini
          <i class="icon-arror2L" />
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;!--text-icon 추가 --&gt;
            &lt;base-buttons type="text" text-icon&gt; Default &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="text" text-icon size="medium"&gt; Medium &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="text" text-icon size="small"&gt; Small &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="text" text-icon size="mini"&gt; Mini &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="text" size="large" disabled>
          Default
        </base-buttons>
        <base-buttons type="text" size="medium" disabled>
          Medium
        </base-buttons>
        <base-buttons type="text" size="small" disabled>
          Small
        </base-buttons>
        <base-buttons type="text" size="mini" disabled>
          Mini
        </base-buttons>
        <base-buttons type="text" size="large" disabled>
          Default
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="text" size="medium" disabled>
          Medium
          <i class="icon-arrowR-2" />
        </base-buttons>
        <base-buttons type="text" size="small" disabled>
          Small
          <i class="icon-arrowR-2" />
        </base-buttons>
        <base-buttons type="text" size="mini" disabled>
          Mini
          <i class="icon-arrowR-2" />
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="text" size="large" disabled&gt; Default &lt;/base-buttons&gt;
            &lt;base-buttons type="text" size="medium" disabled&gt; Medium &lt;/base-buttons&gt;
            &lt;base-buttons type="text" size="small" disabled&gt; Small &lt;/base-buttons&gt;
            &lt;base-buttons type="text" size="mini" disabled&gt; Mini &lt;/base-buttons&gt;
            &lt;base-buttons type="text" disabled&gt; Default &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="text" size="medium" disabled&gt; Medium &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="text" size="small" disabled&gt; Small &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            &lt;base-buttons type="text" size="mini" disabled&gt; Mini &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>Text Button gray</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-buttons type="text-gray">
          Default
        </base-buttons>
        <base-buttons type="text-gray" size="medium">
          Medium
        </base-buttons>
        <base-buttons type="text-gray" size="small">
          Small
        </base-buttons>
        <base-buttons type="text-gray" size="mini">
          Mini
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;base-buttons type="text-gray"&gt; Default &lt;/base-buttons&gt;
            &lt;base-buttons type="text-gray" size="medium"&gt; Medium &lt;/base-buttons&gt;
            &lt;base-buttons type="text-gray" size="small"&gt; Small &lt;/base-buttons&gt;
            &lt;base-buttons type="text-gray" size="mini"&gt; Mini &lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="text-gray" text-icon>
          Default
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="text-gray" text-icon size="medium">
          Medium
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="text-gray" text-icon size="small">
          Small
          <i class="icon-arror2L" />
        </base-buttons>
        <base-buttons type="text-gray" text-icon size="mini">
          Mini
          <i class="icon-arror2L" />
        </base-buttons>
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
          &lt;!--text-icon 추가 --&gt;
          &lt;base-buttons type="text-gray" text-icon&gt;Default&lt;i class="icon-arror2L" /&gt;&lt;/base-buttons&gt;
          &lt;base-buttons type="text-gray" text-icon size="medium"&gt;Medium &lt;i class="icon-arror2L" /&gt;
          &lt;/base-buttons&gt;
          &lt;base-buttons type="text-gray" text-icon size="small"&gt;Small &lt;i class="icon-arror2L" /&gt;&lt;/base-buttons&gt;
          &lt;base-buttons type="text-gray" text-icon size="mini"&gt;Mini &lt;i class="icon-arror2L" /&gt;&lt;/base-buttons&gt;
          </code></pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>Icon Only blue</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-buttons type="navy" only-icon icon="icon-Plus" />
        <base-buttons type="navy" only-icon icon="icon-Plus" size="medium" />
        <base-buttons type="navy" only-icon icon="icon-Plus" size="small" />
        <!-- // Default -->
        <base-buttons type="navy" only-icon icon="icon-Plus" plain />
        <base-buttons type="navy" only-icon icon="icon-Plus" size="medium" plain />
        <base-buttons type="navy" only-icon icon="icon-Plus" size="small" plain />
        <!-- // plain -->
        <base-buttons type="navy" only-icon icon="icon-Plus" circle />
        <base-buttons type="navy" only-icon icon="icon-Plus" size="medium" circle />
        <base-buttons type="navy" only-icon icon="icon-Plus" size="small" circle />
        <!-- // circle -->
        <base-buttons
          type="navy"
          only-icon
          icon="icon-Plus"
          circle
          plain
        />
        <base-buttons
          type="navy"
          only-icon
          icon="icon-Plus"
          size="medium"
          circle
          plain
        />
        <base-buttons
          type="navy"
          only-icon
          icon="icon-Plus"
          size="small"
          circle
          plain
        />
        <!-- // circle - plain-->
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;!-- Default --&gt;
            &lt;base-buttons type="navy" only-icon icon="icon-Plus" /&gt;&lt;!-- Size : 40px X 40px --&gt;
            &lt;base-buttons type="navy" only-icon icon="icon-Plus" size="medium" /&gt; &lt;!-- Size : 32px X 32px --&gt;
            &lt;base-buttons type="navy" only-icon icon="icon-Plus" size="small" /&gt;&lt;!-- Size : 24px X 24px --&gt;
            &lt;!-- plain --&gt;
            &lt;base-buttons type="navy" only-icon icon="icon-Plus" plain /&gt;
            &lt;base-buttons type="navy" only-icon icon="icon-Plus" size="medium" plain /&gt;
            &lt;base-buttons type="navy" only-icon icon="icon-Plus" size="small" plain /&gt;
             &lt;!-- circle --&gt;
            &lt;base-buttons type="navy" only-icon icon="icon-Plus" circle /&gt;
            &lt;base-buttons type="navy" only-icon icon="icon-Plus" size="medium" circle /&gt;
            &lt;base-buttons type="navy" only-icon icon="icon-Plus" size="small" circle /&gt;
             &lt;!-- circle -  plain --&gt;
             &lt;base-buttons type="navy" only-icon icon="icon-Plus" circle plain/&gt;
            &lt;base-buttons type="navy" only-icon icon="icon-Plus" size="medium" circle plain/&gt;
            &lt;base-buttons type="navy" only-icon icon="icon-Plus" size="small" circle plain /&gt;

          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="navy" only-icon icon="icon-ArrowR02" />
        <base-buttons type="navy" only-icon icon="icon-ArrowR02" size="medium" />
        <base-buttons type="navy" only-icon icon="icon-ArrowR02" size="small" />
        <!-- // Default -->
        <base-buttons type="navy" only-icon icon="icon-ArrowR02" plain />
        <base-buttons type="navy" only-icon icon="icon-ArrowR02" size="medium" plain />
        <base-buttons type="navy" only-icon icon="icon-ArrowR02" size="small" plain />
        <!-- // plain -->
        <base-buttons type="navy" only-icon icon="icon-ArrowR02" circle />
        <base-buttons
          type="navy"
          only-icon
          icon="icon-ArrowR02"
          size="medium"
          circle
        />
        <base-buttons
          type="navy"
          only-icon
          icon="icon-ArrowR02"
          size="small"
          circle
        />
        <!--// circle -->
        <base-buttons type="navy" only-icon icon="icon-ArrowR02" circle plain />
        <base-buttons
          type="navy"
          only-icon
          icon="icon-ArrowR02"
          size="medium"
          circle
          plain
        />
        <base-buttons
          type="navy"
          only-icon
          icon="icon-ArrowR02"
          size="small"
          circle
          plain
        />
        <!--// circle - plain -->
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;!-- Default --&gt;
            &lt;base-buttons type="navy" only-icon icon="icon-ArrowR02" /&gt;
            &lt;base-buttons type="navy" only-icon icon="icon-ArrowR02" size="medium" /&gt;
            &lt;base-buttons type="navy" only-icon icon="icon-ArrowR02" size="small" /&gt;
            &lt;!-- plain --&gt;
            &lt;base-buttons type="navy" only-icon icon="icon-ArrowR02" plain /&gt;
            &lt;base-buttons type="navy" only-icon icon="icon-ArrowR02" size="medium" plain /&gt;
            &lt;base-buttons type="navy" only-icon icon="icon-ArrowR02" size="small" plain /&gt;
            &lt;!-- circle --&gt;
            &lt;base-buttons type="navy" only-icon icon="icon-ArrowR02" circle /&gt;
            &lt;base-buttons type="navy" only-icon icon="icon-ArrowR02" size="medium" circle /&gt;
            &lt;base-buttons type="navy" only-icon icon="icon-ArrowR02" size="small" circle /&gt;
            &lt;!-- circle -  plain --&gt;
             &lt;base-buttons type="navy" only-icon icon="icon-ArrowR02" circle plain/&gt;
            &lt;base-buttons type="navy" only-icon icon="icon-ArrowR02" size="medium" circle plain/&gt;
            &lt;base-buttons type="navy" only-icon icon="icon-ArrowR02" size="small" circle plain /&gt;

          </code></pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>Icon Only gray</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-buttons type="gray" only-icon icon="icon-Plus" />
        <base-buttons type="gray" only-icon icon="icon-Plus" size="medium" />
        <base-buttons type="gray" only-icon icon="icon-Plus" size="small" />
        <!-- //Default -->
        <base-buttons type="gray" only-icon icon="icon-Plus" circle />
        <base-buttons type="gray" only-icon icon="icon-Plus" size="medium" circle />
        <base-buttons type="gray" only-icon icon="icon-Plus" size="small" circle />
        <!-- //Circle -->
        <base-buttons type="gray" only-icon icon="icon-Plus" plain />
        <base-buttons type="gray" only-icon icon="icon-Plus" size="medium" plain />
        <base-buttons type="gray" only-icon icon="icon-Plus" size="small" plain />
        <!-- //Plain -->
        <base-buttons type="gray" only-icon icon="icon-Plus" circle plain />
        <base-buttons
          type="gray"
          only-icon
          icon="icon-Plus"
          size="medium"
          circle
          plain
        />
        <base-buttons
          type="gray"
          only-icon
          icon="icon-Plus"
          size="small"
          circle
          plain
        />
        <!-- //Circle - Plain -->
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;!-- Default --&gt;
            &lt;base-buttons type="gray" only-icon icon="icon-Plus" /&gt;
            &lt;base-buttons type="gray" only-icon icon="icon-Plus" size="medium" /&gt;
            &lt;base-buttons type="gray" only-icon icon="icon-Plus" size="small" /&gt;
            &lt;!-- Circle --&gt;
            &lt;base-buttons type="gray" only-icon icon="icon-Plus" circle /&gt;
            &lt;base-buttons type="gray" only-icon icon="icon-Plus" size="medium" circle /&gt;
            &lt;base-buttons type="gray" only-icon icon="icon-Plus" size="small" circle /&gt;
            &lt;!-- Plain --&gt;
            &lt;base-buttons type="gray" only-icon icon="icon-Plus" plain /&gt;
            &lt;base-buttons type="gray" only-icon icon="icon-Plus" size="medium" plain /&gt;
            &lt;base-buttons type="gray" only-icon icon="icon-Plus" size="small" plain /&gt;
            &lt;!-- Circle - Plain --&gt;
            &lt;base-buttons type="gray" only-icon icon="icon-Plus" circle plain /&gt;
            &lt;base-buttons type="gray" only-icon icon="icon-Plus" size="medium" circle plain/&gt;
            &lt;base-buttons type="gray" only-icon icon="icon-Plus" size="small" circle plain /&gt;
          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="gray" only-icon icon="icon-ArrowR02" />
        <base-buttons type="gray" only-icon icon="icon-ArrowR02" size="medium" />
        <base-buttons type="gray" only-icon icon="icon-ArrowR02" size="small" />
        <!-- //Default -->
        <base-buttons type="gray" only-icon icon="icon-ArrowR02" circle />
        <base-buttons type="gray" only-icon icon="icon-ArrowR02" size="medium" circle />
        <base-buttons type="gray" only-icon icon="icon-ArrowR02" size="small" circle />
        <!-- //Circle -->
        <base-buttons type="gray" only-icon icon="icon-ArrowR02" plain />
        <base-buttons type="gray" only-icon icon="icon-ArrowR02" size="medium" plain />
        <base-buttons type="gray" only-icon icon="icon-ArrowR02" size="small" plain />
        <!-- //Plain -->
        <base-buttons type="gray" only-icon icon="icon-ArrowR02" circle plain />
        <base-buttons
          type="gray"
          only-icon
          icon="icon-ArrowR02"
          size="medium"
          circle
          plain
        />
        <base-buttons
          type="gray"
          only-icon
          icon="icon-ArrowR02"
          size="small"
          circle
          plain
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
            &lt;!-- Default --&gt;
            &lt;base-buttons type="gray" only-icon icon="icon-ArrowR02" /&gt;
            &lt;base-buttons type="gray" only-icon icon="icon-ArrowR02" size="medium" /&gt;
            &lt;base-buttons type="gray" only-icon icon="icon-ArrowR02" size="small" /&gt;
            &lt;!-- Circle --&gt;
            &lt;base-buttons type="gray" only-icon icon="icon-ArrowR02" circle /&gt;
            &lt;base-buttons type="gray" only-icon icon="icon-ArrowR02" size="medium" circle /&gt;
            &lt;base-buttons type="gray" only-icon icon="icon-ArrowR02" size="small" circle /&gt;
            &lt;!-- Plain --&gt;
            &lt;base-buttons type="gray" only-icon icon="icon-ArrowR02" plain /&gt;
            &lt;base-buttons type="gray" only-icon icon="icon-ArrowR02" size="medium" plain /&gt;
            &lt;base-buttons type="gray" only-icon icon="icon-ArrowR02" size="small" plain /&gt;
            &lt;!-- Circle - Plain --&gt;
            &lt;base-buttons type="gray" only-icon icon="icon-ArrowR02" circle plain /&gt;
            &lt;base-buttons type="gray" only-icon icon="icon-ArrowR02" size="medium" circle plain/&gt;
            &lt;base-buttons type="gray" only-icon icon="icon-ArrowR02" size="small" circle plain /&gt;
          </code></pre>
        </highlight-code>
      </li>
    </ul>
    <p class="guide-title">
      <span>Icon Only Black</span>
    </p>
    <ul class="guide-content">
      <li class="guide-list">
        <base-buttons type="black" only-icon icon="icon-Plus" />
        <base-buttons type="black" only-icon icon="icon-Plus" size="medium" />
        <base-buttons type="black" only-icon icon="icon-Plus" size="small" />
        <!-- //Default -->
        <base-buttons type="black" only-icon icon="icon-Plus" circle />
        <base-buttons type="black" only-icon icon="icon-Plus" size="medium" circle />
        <base-buttons type="black" only-icon icon="icon-Plus" size="small" circle />
        <!-- //Circle -->
        <base-buttons type="black" only-icon icon="icon-Plus" plain />
        <base-buttons type="black" only-icon icon="icon-Plus" size="medium" plain />
        <base-buttons type="black" only-icon icon="icon-Plus" size="small" plain />
        <!-- //Plain -->
        <base-buttons type="black" only-icon icon="icon-Plus" circle plain />
        <base-buttons
          type="black"
          only-icon
          icon="icon-Plus"
          size="medium"
          circle
          plain
        />
        <base-buttons
          type="black"
          only-icon
          icon="icon-Plus"
          size="small"
          circle
          plain
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
           &lt;!-- Default --&gt;
          &lt;base-buttons type="black" only-icon icon="icon-Plus" /&gt;
          &lt;base-buttons type="black" only-icon icon="icon-Plus" size="medium" /&gt;
          &lt;base-buttons type="black" only-icon icon="icon-Plus" size="small" /&gt;
          &lt;!-- Circle --&gt;
          &lt;base-buttons type="black" only-icon icon="icon-Plus" circle /&gt;
          &lt;base-buttons type="black" only-icon icon="icon-Plus" size="medium" circle /&gt;
          &lt;base-buttons type="black" only-icon icon="icon-Plus" size="small" circle /&gt;
          &lt;!-- Plain --&gt;
          &lt;base-buttons type="black" only-icon icon="icon-Plus" plain /&gt;
          &lt;base-buttons type="black" only-icon icon="icon-Plus" size="medium" plain /&gt;
          &lt;base-buttons type="black" only-icon icon="icon-Plus" size="small" plain /&gt;
          &lt;!-- Circle - Plain --&gt;
          &lt;base-buttons type="black" only-icon icon="icon-Plus" circle plain /&gt;
          &lt;base-buttons type="black" only-icon icon="icon-Plus" size="medium" circle plain/&gt;
          &lt;base-buttons type="black" only-icon icon="icon-Plus" size="small" circle plain /&gt;

          </code></pre>
        </highlight-code>
      </li>
      <li class="guide-list">
        <base-buttons type="black" only-icon icon="icon-ArrowR02" />
        <base-buttons type="black" only-icon icon="icon-ArrowR02" size="medium" />
        <base-buttons type="black" only-icon icon="icon-ArrowR02" size="small" />
        <!-- //Default -->
        <base-buttons type="black" only-icon icon="icon-ArrowR02" circle />
        <base-buttons type="black" only-icon icon="icon-ArrowR02" size="medium" circle />
        <base-buttons type="black" only-icon icon="icon-ArrowR02" size="small" circle />
        <!-- //Circle -->
        <base-buttons type="black" only-icon icon="icon-ArrowR02" plain />
        <base-buttons type="black" only-icon icon="icon-ArrowR02" size="medium" plain />
        <base-buttons type="black" only-icon icon="icon-ArrowR02" size="small" plain />
        <!-- //Plain -->
        <base-buttons type="black" only-icon icon="icon-ArrowR02" circle plain />
        <base-buttons
          type="black"
          only-icon
          icon="icon-ArrowR02"
          size="medium"
          circle
          plain
        />
        <base-buttons
          type="black"
          only-icon
          icon="icon-ArrowR02"
          size="small"
          circle
          plain
        />
      </li>
      <li class="guide-code">
        <highlight-code lang="html">
          <pre><code>
          &lt;!-- Default --&gt;
          &lt;base-buttons type="black" only-icon icon="icon-ArrowR02" /&gt;
          &lt;base-buttons type="black" only-icon icon="icon-ArrowR02" size="medium" /&gt;
          &lt;base-buttons type="black" only-icon icon="icon-ArrowR02" size="small" /&gt;
          &lt;!-- Circle --&gt;
          &lt;base-buttons type="black" only-icon icon="icon-ArrowR02" circle /&gt;
          &lt;base-buttons type="black" only-icon icon="icon-ArrowR02" size="medium" circle /&gt;
          &lt;base-buttons type="black" only-icon icon="icon-ArrowR02" size="small" circle /&gt;
          &lt;!-- Plain --&gt;
          &lt;base-buttons type="black" only-icon icon="icon-ArrowR02" plain /&gt;
          &lt;base-buttons type="black" only-icon icon="icon-ArrowR02" size="medium" plain /&gt;
          &lt;base-buttons type="black" only-icon icon="icon-ArrowR02" size="small" plain /&gt;
          &lt;!-- Circle - Plain --&gt;
          &lt;base-buttons type="black" only-icon icon="icon-ArrowR02" circle plain /&gt;
          &lt;base-buttons type="black" only-icon icon="icon-ArrowR02" size="medium" circle plain/&gt;
          &lt;base-buttons type="black" only-icon icon="icon-ArrowR02" size="small" circle plain /&gt;
          </code></pre>
        </highlight-code>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'guideLayout'
}
</script>

<style lang="scss" scoped>
 strong {
      font-weight: bold;
    }
.font-red{

  color:#E41913;
}

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
