<template>
  <div>
    <!-- Reset-->
    <div>
      <p class="guide-title">
        <span>플렉스 버튼</span>
      </p>

      <ul class="guide-content">
        <li class="guide-list">
          <div class="flex-button">
            <base-buttons type="white" size="small">
              이전화면 이동
            </base-buttons><base-buttons type="white" size="small">
              메인으로 이동
            </base-buttons>
          </div>
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
                &lt;div class="flex-button"&gt;
      &lt;base-buttons type="white" size="small"&gt;
      이전화면 이동
      &lt;/base-buttons&gt;&lt;base-buttons type="white" size="small"&gt;
      메인으로 이동
      &lt;/base-buttons&gt;
      &lt;/div&gt;
</code></pre>
          </highlight-code>
        </li>
      </ul>

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
    <!-- //Reset-->

    <!-- Button_Size -->
    <div>
      <p class="guide-title">
        Button_Size -
        <strong class="font-red">large(58px), medium(50px), small(38px), full 추가</strong>
      </p>
      <ul class="guide-content">
        <li class="guide-list">
          <base-buttons type="navy" size="large">
            large
          </base-buttons>
          <base-buttons type="navy" size="medium">
            medium
          </base-buttons>
          <base-buttons type="navy" size="small">
            small
          </base-buttons>
          <base-buttons type="navy" size="small" disabled>
            small
          </base-buttons>
          <base-buttons type="navy" size="small" full>
            small
          </base-buttons>
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
              &lt;base-buttons type="navy" size="large"&gt;large&lt;/base-buttons&gt;&lt;!-- size="large" --&gt;
              &lt;base-buttons type="navy" size="medium"&gt;medium&lt;/base-buttons&gt;&lt;!-- size="medium" --&gt;
              &lt;base-buttons type="navy" size="small"&gt;small&lt;/base-buttons&gt;&lt;!-- size="small" --&gt;
              &lt;base-buttons type="navy" size="small" disabled &gt;small&lt;/base-buttons&gt;&lt;!-- disabled --&gt;
              &lt;base-buttons type="navy" size="small" full&gt;small&lt;/base-buttons&gt;&lt;!-- full 추가--&gt;
            </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!--//Button_Size -->

    <!-- Button_Line -->
    <div>
      <p class="guide-title">
        <span>Button_Line - <em class="font-red">plain</em></span>
      </p>
      <P class="guide-sub-title">
        라인 스타일
      </P>
      <ul class="guide-content">
        <li class="guide-list">
          <base-buttons type="navy" size="large" plain>
            Button
          </base-buttons>
          <base-buttons type="navy" size="medium" plain>
            Button
          </base-buttons>
          <base-buttons type="navy" size="small" plain>
            Button
          </base-buttons>
          <base-buttons type="navy" size="small" disabled plain>
            Button
          </base-buttons>
          <base-buttons type="navy" size="small" full plain>
            Button
          </base-buttons>
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
              &lt;!-- plain 추가 --&gt;
              &lt;base-buttons type="navy" size="large" plain&gt;Button&lt;/base-buttons&gt;
              &lt;base-buttons type="navy" size="medium" plain&gt;Button&lt;/base-buttons&gt;
              &lt;base-buttons type="navy" size="small" plain&gt;Button&lt;/base-buttons&gt;
              &lt;base-buttons type="navy" size="small" plain disabled&gt;Button&lt;/base-buttons&gt;
              &lt;base-buttons type="navy" size="small" full plain&gt;Button&lt;/base-buttons&gt;
            </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!--// Button_Line -->

    <!-- Button_Round -->
    <div>
      <p class="guide-title">
        <span>Button_Round - <strong class="font-red">round</strong></span>
      </p>

      <ul class="guide-content">
        <li class="guide-list">
          <base-buttons type="navy" size="large" round>
            Button
          </base-buttons>
          <base-buttons type="navy" size="medium" round>
            Button
          </base-buttons>
          <base-buttons type="navy" size="small" round>
            Button
          </base-buttons>
          <base-buttons type="navy" size="small" round disabled>
            Button
          </base-buttons>
          <base-buttons type="navy" size="medium" round full>
            Button
          </base-buttons>

          <base-buttons type="navy" size="large" round plain>
            Button
          </base-buttons>
          <base-buttons type="navy" size="medium" round plain>
            Button
          </base-buttons>
          <base-buttons type="navy" size="small" round plain>
            Button
          </base-buttons>
          <base-buttons type="navy" size="small" round plain disabled>
            Button
          </base-buttons>
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
            &lt;!-- round --&gt;
            &lt;base-buttons type="navy" size="large" round&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="medium" round&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="small" round&gt;Button&lt;/base-buttons&gt;
             &lt;base-buttons type="navy" size="small" round disabled&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="small" round full&gt;Button&lt;/base-buttons&gt;
            &lt;!-- round, plain --&gt;
            &lt;base-buttons type="navy" size="large" round plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="medium" round plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="small" round plain&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="small" round plain disabled&gt;Button&lt;/base-buttons&gt;
            </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!--// Button_Round -->

    <!-- Button_Color -->
    <div>
      <p class="guide-title">
        <span>Button_Colcor - </span><strong class="font-red">
          navy, purple, magenta, green, sky-blue, black, gray, gray-light,
          sky-gray, white
        </strong>
      </p>
      <ul class="guide-content">
        <li class="guide-list">
          <base-buttons type="navy" size="medium">
            navy
          </base-buttons>
          <base-buttons type="purple" size="medium">
            purple
          </base-buttons>
          <base-buttons type="magenta" size="medium">
            magenta
          </base-buttons>
          <base-buttons type="green" size="medium">
            green
          </base-buttons>
          <base-buttons type="sky-blue" size="medium">
            sky-blue
          </base-buttons>
          <base-buttons type="black" size="medium">
            black
          </base-buttons>
          <base-buttons type="gray" size="medium">
            gray
          </base-buttons>
          <base-buttons type="gray-light" size="medium">
            gray-light
          </base-buttons>
          <base-buttons type="sky-gray" size="medium">
            sky-gray
          </base-buttons>
          <base-buttons type="white" size="medium">
            white
          </base-buttons>
          <base-buttons type="gray" size="medium" disabled>
            gray
          </base-buttons>
          <br>
          <base-buttons type="navy" size="medium" plain>
            navy
          </base-buttons>
          <base-buttons type="purple" size="medium" plain>
            purple
          </base-buttons>
          <base-buttons type="magenta" size="medium" plain>
            magenta
          </base-buttons>
          <base-buttons type="green" size="medium" plain>
            green
          </base-buttons>

          <base-buttons type="sky-blue" size="medium" plain>
            sky-blue
          </base-buttons>
          <base-buttons type="black" size="medium" plain>
            black
          </base-buttons>
          <base-buttons type="gray" size="medium" plain>
            gray
          </base-buttons>
          <base-buttons type="gray-light" size="medium" plain>
            gray-light
          </base-buttons>
          <base-buttons type="sky-gray" size="medium" plain>
            sky-gray
          </base-buttons>
          <base-buttons type="white" size="medium" plain>
            white
          </base-buttons>
          <base-buttons type="gray" size="medium" plain disabled>
            gray
          </base-buttons>
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
              &lt;base-buttons type="navy" size="medium"&gt;navy&lt;/base-buttons&gt;
              &lt;base-buttons type="purple" size="medium"&gt;purple&lt;/base-buttons&gt;
              &lt;base-buttons type="magenta" size="medium"&gt;magenta&lt;/base-buttons&gt;
              &lt;base-buttons type="green" size="medium"&gt;green&lt;/base-buttons&gt;
              &lt;base-buttons type="sky-blue" size="medium"&gt;sky-blue&lt;/base-buttons&gt;
              &lt;base-buttons type="black" size="medium"&gt;black&lt;/base-buttons&gt;
              &lt;base-buttons type="gray" size="medium"&gt;gray&lt;/base-buttons&gt;
              &lt;base-buttons type="gray-light" size="medium"&gt;gray-light&lt;/base-buttons&gt;
              &lt;base-buttons type="sky-gray" size="medium" plain&gt;sky-gray&lt;/base-buttons&gt;
              &lt;base-buttons type="white" size="medium"&gt;white&lt;/base-buttons&gt;
              &lt;base-buttons type="gray" disabled&gt;gray&lt;/base-buttons&gt;
              &lt;!-- Plain Style --&gt;
              &lt;base-buttons type="navy" size="medium" plain&gt;navy&lt;/base-buttons&gt;
              &lt;base-buttons type="purple" size="medium" plain&gt;purple&lt;/base-buttons&gt;
              &lt;base-buttons type="magenta" size="medium" plain&gt;magenta&lt;/base-buttons&gt;
              &lt;base-buttons type="green" size="medium" plain&gt;green&lt;/base-buttons&gt;
              &lt;base-buttons type="sky-blue" size="medium" plain &gt;sky-blue&lt;/base-buttons&gt;
              &lt;base-buttons type="black" size="medium" plain&gt;black&lt;/base-buttons&gt;
              &lt;base-buttons type="gray" size="medium" plain&gt;gray&lt;/base-buttons&gt;
              &lt;base-buttons type="gray-light" size="medium" plain&gt;gray-light&lt;/base-buttons&gt;
              &lt;base-buttons type="white" size="medium" plain&gt;white&lt;/base-buttons&gt;
              &lt;base-buttons type="gray" size="medium" plain disabled&gt;gray&lt;/base-buttons&gt;

            </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!--//Button_Color -->

    <!-- Button_Icon_Plus-->
    <div>
      <p class="guide-title">
        <span>Button_Icon - <em class="font-red">icon="icon-Plus"</em> </span>
      </p>
      <ul class="guide-content">
        <li class="guide-list">
          <base-buttons type="navy" size="large" icon="icon-Plus">
            Button
          </base-buttons>
          <base-buttons type="navy" size="medium" icon="icon-Plus">
            Button
          </base-buttons>
          <base-buttons type="navy" size="small" icon="icon-Plus">
            Button
          </base-buttons>
          <base-buttons type="navy" size="large" icon="icon-Plus" round>
            Button
          </base-buttons>
          <base-buttons type="navy" size="medium" icon="icon-Plus" round>
            Button
          </base-buttons>
          <base-buttons type="navy" size="small" icon="icon-Plus" round>
            Button
          </base-buttons>
          <br>
          <base-buttons type="navy" size="large" icon="icon-Plus" plain>
            Button
          </base-buttons>
          <base-buttons type="navy" size="medium" icon="icon-Plus" plain>
            Button
          </base-buttons>
          <base-buttons type="navy" size="small" icon="icon-Plus" plain round>
            Button
          </base-buttons>
          <base-buttons type="navy" size="large" icon="icon-Plus" plain round>
            Button
          </base-buttons>
          <base-buttons type="navy" size="medium" icon="icon-Plus" plain round>
            Button
          </base-buttons>
          <base-buttons type="navy" size="small" icon="icon-Plus" plain round>
            Button
          </base-buttons>
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
            &lt;base-buttons type="navy" size="large" icon="icon-Plus"&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="medium" icon="icon-Plus"&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="small" icon="icon-Plus"&gt;Button&lt;/base-buttons&gt;
            &lt;!-- round --&gt;
            &lt;base-buttons type="navy" size="large" icon="icon-Plus" round&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="medium" icon="icon-Plus" round&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="small" icon="icon-Plus" round&gt;Button&lt;/base-buttons&gt;
            &lt;!-- plain --&gt;
            &lt;base-buttons type="navy" size="large" icon="icon-Plus" plain &gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="medium" icon="icon-Plus" plain &gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="small" icon="icon-Plus" plain &gt;Button&lt;/base-buttons&gt;
            &lt;!-- plain round --&gt;
            &lt;base-buttons type="navy" size="large" icon="icon-Plus" plain  round&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="medium" icon="icon-Plus" plain  round&gt;Button&lt;/base-buttons&gt;
            &lt;base-buttons type="navy" size="small" icon="icon-Plus" plain round&gt;Button&lt;/base-buttons&gt;
              </code>
            </pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!--//Button_Icon_Plus-->

    <!-- Button_Icon_Next -->
    <div>
      <p class="guide-title">
        <span>Button_Icon - <em class="font-red">i class="icon-arror2L"</em>
        </span>
      </p>
      <ul>
        <li class="guide-list">
          <base-buttons type="purple" size="large">
            Button <i class="icon-arror2L" />
          </base-buttons>
          <base-buttons type="purple" size="medium">
            Button <i class="icon-arror2L" />
          </base-buttons>
          <base-buttons type="purple" size="small">
            Button <i class="icon-arror2L" />
          </base-buttons>
          <base-buttons type="purple" size="large" round>
            Button <i class="icon-arror2L" />
          </base-buttons>
          <base-buttons type="purple" size="medium" round>
            Button <i class="icon-arror2L" />
          </base-buttons>
          <base-buttons type="purple" size="small" round>
            Button <i class="icon-arror2L" />
          </base-buttons>
          <br>
          <base-buttons type="purple" size="large" plain>
            Button <i class="icon-arror2L" />
          </base-buttons>
          <base-buttons type="purple" size="medium" plain>
            Button <i class="icon-arror2L" />
          </base-buttons>
          <base-buttons type="purple" size="small" plain>
            Button <i class="icon-arror2L" />
          </base-buttons>
          <base-buttons type="purple" size="large" plain round>
            Button <i class="icon-arror2L" />
          </base-buttons>
          <base-buttons type="purple" size="medium" plain round>
            Button <i class="icon-arror2L" />
          </base-buttons>
          <base-buttons type="purple" size="small" plain round>
            Button <i class="icon-arror2L" />
          </base-buttons>
          <br>
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
            &lt;base-buttons type="purple" size="large"&gt;Button &lt;i class="icon-arror2L" /&gt;&lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="medium"&gt;Button &lt;i class="icon-arror2L" /&gt;&lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="small"&gt;Button &lt;i class="icon-arror2L" /&gt;&lt;/base-buttons&gt;
            &lt;!-- round --&gt;
            &lt;base-buttons type="purple" size="large" round&gt;Button &lt;i class="icon-arror2L" /&gt;&lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="medium" round&gt;Button &lt;i class="icon-arror2L" /&gt;&lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="small" round&gt;Button &lt;i class="icon-arror2L" /&gt;&lt;/base-buttons&gt;
            &lt;!-- plain --&gt;
            &lt;base-buttons type="purple" size="large" plain&gt;Button &lt;i class="icon-arror2L" /&gt;&lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="medium" plain&gt;Button &lt;i class="icon-arror2L" /&gt;&lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="small" plain&gt;Button &lt;i class="icon-arror2L" /&gt;&lt;/base-buttons&gt;
            &lt;!-- plain, round --&gt;
            &lt;base-buttons type="purple" size="large"plain  round&gt;Button &lt;i class="icon-arror2L" /&gt;&lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="medium" plain round&gt;Button &lt;i class="icon-arror2L" /&gt;&lt;/base-buttons&gt;
            &lt;base-buttons type="purple" size="small" plain round&gt;Button &lt;i class="icon-arror2L" /&gt;&lt;/base-buttons&gt;
            </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!--//Button_Icon_Next -->

    <!--Text_Button-->
    <div>
      <p class="guide-title">
        <span>Button_Text</span>
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
          <base-buttons type="text" size="mini" disabled>
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
              &lt;base-buttons type="text" size="mini" disabled&gt; Mini &lt;/base-buttons&gt;
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
          <base-buttons type="text" text-icon size="mini" disabled>
            Mini
            <i class="icon-arror2L" />
          </base-buttons>
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
              &lt;!-- text-icon 추가 --&gt;
              &lt;base-buttons type="text" text-icon&gt; Default &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
              &lt;base-buttons type="text" text-icon size="medium"&gt; Medium &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
              &lt;base-buttons type="text" text-icon size="small"&gt; Small &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
              &lt;base-buttons type="text" text-icon size="mini"&gt; Mini &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
              &lt;base-buttons type="text" text-icon size="mini" disabled&gt; Mini &lt;i class="icon-arror2L" /&gt; &lt;/base-buttons&gt;
            </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!--//Text_Button-->

    <!--Text_Button_gray -->
    <div>
      <p class="guide-title">
        <span>Text_Button_gray</span>
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
          <base-buttons type="text-gray" size="mini" disabled>
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
              &lt;base-buttons type="text-gray" size="mini" disabled&gt; Mini &lt;/base-buttons&gt;
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
          <base-buttons type="text-gray" text-icon size="mini" disabled>
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
             &lt;base-buttons type="text-gray" text-icon size="mini" disabled&gt;Mini &lt;i class="icon-arror2L" /&gt;&lt;/base-buttons&gt;
            </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!--//Text_Button_gray -->

    <!-- Icon_Only_Plus -->
    <div>
      <p class="guide-title">
        <span>Icon Only - <em class="font-red">icon-Plus</em> </span>
      </p>
      <ul class="guide-content">
        <li class="guide-list">
          <base-buttons type="navy" only-icon icon="icon-Plus" />
          <base-buttons type="navy" only-icon icon="icon-Plus" size="medium" />
          <base-buttons type="navy" only-icon icon="icon-Plus" size="small" />
          <base-buttons type="navy" only-icon icon="icon-Plus" circle />
          <base-buttons
            type="navy"
            only-icon
            icon="icon-Plus"
            size="medium"
            circle
          />
          <base-buttons
            type="navy"
            only-icon
            icon="icon-Plus"
            size="small"
            circle
          />

          <!-- black -->
          <base-buttons type="black" only-icon icon="icon-Plus" />
          <base-buttons type="black" only-icon icon="icon-Plus" size="medium" />
          <base-buttons type="black" only-icon icon="icon-Plus" size="small" />
          <base-buttons type="black" only-icon icon="icon-Plus" circle />
          <base-buttons
            type="black"
            only-icon
            icon="icon-Plus"
            size="medium"
            circle
          />
          <base-buttons
            type="black"
            only-icon
            icon="icon-Plus"
            size="small"
            circle
          />

          <!-- white -->
          <base-buttons type="white" only-icon icon="icon-Plus" />
          <base-buttons type="white" only-icon icon="icon-Plus" size="medium" />
          <base-buttons type="white" only-icon icon="icon-Plus" size="small" />
          <base-buttons type="white" only-icon icon="icon-Plus" circle />
          <base-buttons
            type="white"
            only-icon
            icon="icon-Plus"
            size="medium"
            circle
          />
          <base-buttons
            type="white"
            only-icon
            icon="icon-Plus"
            size="small"
            circle
          />
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
              &lt;!-- Navy --&gt;
              &lt;base-buttons type="navy" only-icon icon="icon-Plus" /&gt;&lt;!-- Size : 40px X 40px --&gt;
              &lt;base-buttons type="navy" only-icon icon="icon-Plus" size="medium" /&gt;&lt;!-- Size : 32px X 32px --&gt;
              &lt;base-buttons type="navy" only-icon icon="icon-Plus" size="small" /&gt;&lt;!-- Size : 24px X 24px --&gt;
              &lt;!-- Navy - circle --&gt;
              &lt;base-buttons type="navy" only-icon icon="icon-Plus" circle /&gt;
              &lt;base-buttons type="navy" only-icon icon="icon-Plus" size="medium" circle /&gt;
              &lt;base-buttons type="navy" only-icon icon="icon-Plus" size="small" circle /&gt;
              &lt;!-- Black --&gt;
              &lt;base-buttons type="black" only-icon icon="icon-Plus" /&gt;
              &lt;base-buttons type="black" only-icon icon="icon-Plus" size="medium" /&gt;
              &lt;base-buttons type="black" only-icon icon="icon-Plus" size="small" /&gt;
              &lt;!-- Black - Circle --&gt;
              &lt;base-buttons type="black" only-icon icon="icon-Plus" circle /&gt;
              &lt;base-buttons type="black" only-icon icon="icon-Plus" size="medium" circle /&gt;
              &lt;base-buttons type="black" only-icon icon="icon-Plus" size="small" circle /&gt;
              &lt;!-- White --&gt;
              &lt;base-buttons type="white" only-icon icon="icon-Plus" /&gt;
              &lt;base-buttons type="white" only-icon icon="icon-Plus" size="medium" /&gt;
              &lt;base-buttons type="white" only-icon icon="icon-Plus" size="small" /&gt;
              &lt;!-- White - Circle --&gt;
              &lt;base-buttons type="white" only-icon icon="icon-Plus" circle /&gt;
              &lt;base-buttons type="white" only-icon icon="icon-Plus" size="medium" circle /&gt;
              &lt;base-buttons type="white" only-icon icon="icon-Plus" size="small" circle /&gt;
            </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!--// Icon_Only_Plus -->

    <!-- Icon_Only_Next -->
    <div>
      <p class="guide-title">
        <span>Icon Only <em class="font-red">icon-ArrowR02</em></span>
      </p>
      <ul class="guide-content">
        <li class="guide-list">
          <base-buttons type="navy" only-icon icon="icon-ArrowR02" />
          <base-buttons
            type="navy"
            only-icon
            icon="icon-ArrowR02"
            size="medium"
          />
          <base-buttons
            type="navy"
            only-icon
            icon="icon-ArrowR02"
            size="small"
          />
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

          <!-- black -->
          <base-buttons type="black" only-icon icon="icon-ArrowR02" />
          <base-buttons
            type="black"
            only-icon
            icon="icon-ArrowR02"
            size="medium"
          />
          <base-buttons
            type="black"
            only-icon
            icon="icon-ArrowR02"
            size="small"
          />
          <base-buttons type="black" only-icon icon="icon-ArrowR02" circle />
          <base-buttons
            type="black"
            only-icon
            icon="icon-ArrowR02"
            size="medium"
            circle
          />
          <base-buttons
            type="black"
            only-icon
            icon="icon-ArrowR02"
            size="small"
            circle
          />

          <!-- white -->
          <base-buttons type="white" only-icon icon="icon-ArrowR02" />
          <base-buttons
            type="white"
            only-icon
            icon="icon-ArrowR02"
            size="medium"
          />
          <base-buttons
            type="white"
            only-icon
            icon="icon-ArrowR02"
            size="small"
          />
          <base-buttons type="white" only-icon icon="icon-ArrowR02" circle />
          <base-buttons
            type="white"
            only-icon
            icon="icon-ArrowR02"
            size="medium"
            circle
          />
          <base-buttons
            type="white"
            only-icon
            icon="icon-ArrowR02"
            size="small"
            circle
          />
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
              &lt;!-- Navy --&gt;
              &lt;base-buttons type="navy" only-icon icon="icon-ArrowR02" /&gt;
              &lt;base-buttons type="navy" only-icon icon="icon-ArrowR02" size="medium" /&gt;
              &lt;base-buttons type="navy" only-icon icon="icon-ArrowR02" size="small" /&gt;
              &lt;!-- Navy - circle --&gt;
              &lt;base-buttons type="navy" only-icon icon="icon-ArrowR02" circle /&gt;
              &lt;base-buttons type="navy" only-icon icon="icon-ArrowR02" size="medium" circle /&gt;
              &lt;base-buttons type="navy" only-icon icon="icon-ArrowR02" size="small" circle /&gt;
              &lt;!-- Black --&gt;
              &lt;base-buttons type="black" only-icon icon="icon-ArrowR02" /&gt;
              &lt;base-buttons type="black" only-icon icon="icon-ArrowR02" size="medium" /&gt;
              &lt;base-buttons type="black" only-icon icon="icon-ArrowR02" size="small" /&gt;
              &lt;!-- Black - Circle --&gt;
              &lt;base-buttons type="black" only-icon icon="icon-ArrowR02" circle /&gt;
              &lt;base-buttons type="black" only-icon icon="icon-ArrowR02" size="medium" circle /&gt;
              &lt;base-buttons type="black" only-icon icon="icon-ArrowR02" size="small" circle /&gt;
              &lt;!-- White --&gt;
              &lt;base-buttons type="white" only-icon icon="icon-ArrowR02" /&gt;
              &lt;base-buttons type="white" only-icon icon="icon-ArrowR02" size="medium" /&gt;
              &lt;base-buttons type="white" only-icon icon="icon-ArrowR02" size="small" /&gt;
              &lt;!-- White - Circle --&gt;
              &lt;base-buttons type="white" only-icon icon="icon-ArrowR02" circle /&gt;
              &lt;base-buttons type="white" only-icon icon="icon-ArrowR02" size="medium" circle /&gt;
              &lt;base-buttons type="white" only-icon icon="icon-ArrowR02" size="small" circle /&gt;

            </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!--//Icon_Only_Next -->
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
.font-red {
  color: #e41913;
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
