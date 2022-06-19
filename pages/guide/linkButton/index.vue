<template>
  <div>
    <!--Button reset -->
    <div>
      <p class="guide-title">
        <span>타입 리셋</span>
      </p>
      <ul class="guide-content">
        <li class="guide-list">
          <base-link-buttons to="/" type="reset">
            Default
          </base-link-buttons>
          <base-link href="javascript:void(0);" type="reset">
            Default
          </base-link>
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
              &lt;base-link-buttons to="/" type="reset"&gt; Default &lt;/base-link-buttons&gt; &lt;!-- 내부링크 --&gt;
              &lt;base-link href="#" title="새창" target="_blank" type="reset"&gt;Default&lt;/base-link&gt;&lt;!-- 외부링크 --&gt;
            </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!--// Button reset -->

    <!-- Button_Size -->
    <div>
      <p class="guide-title">
        <span>Button_Size -  <em class="font-red">large(58px), medium(50px), small(38px), full 추가</em> </span>
      </p>
      <ul class="guide-content">
        <li class="guide-list">
          <base-link-buttons to="/" type="navy" size="large">
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="navy" size="medium">
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="navy" size="small">
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="navy" size="small" full>
            Button
          </base-link-buttons>
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
              &lt;base-link-buttons to="/" type="navy" size="large"&gt;Button&lt;/base-link-buttons&gt;&lt;!-- size="large" --&gt;
              &lt;base-link-buttons to="/" type="navy" size="medium"&gt;Button&lt;/base-link-buttons&gt;&lt;!-- size="medium" --&gt;
              &lt;base-link-buttons to="/" type="navy" size="small"&gt;Button&lt;/base-link-buttons&gt;&lt;!-- size="small" --&gt;
              &lt;base-link-buttons to="/" type="navy" size="small" full&gt;Button&lt;/base-link-buttons&gt;&lt;!-- full 추가--&gt;
            </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!--//button_Size -->

    <!-- Button_Line -->
    <div>
      <p class="guide-title">
        <span>Button_Line - <em class="font-red">plain</em></span>
      </p>
      <ul class="guide-content">
        <li class="guide-list">
          <base-link-buttons to="/" type="navy" size="large" plain>
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="navy" size="medium" plain>
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="navy" size="small" plain>
            Button
          </base-link-buttons>
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
            &lt;base-link-buttons to="/" type="navy" size="large" plain&gt;Button&lt;/base-link-buttons&gt;
            &lt;base-link-buttons to="/" type="navy" size="medium" plain&gt;Button&lt;/base-link-buttons&gt;
            &lt;base-link-buttons to="/" type="navy" size="small" plain&gt;Button&lt;/base-link-buttons&gt;
          </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!--//Button_Line -->

    <!-- Button_Round -->
    <div>
      <p class="guide-title">
        <span>Button_Round - <em class="font-red">round</em></span>
      </p>
      <ul class="guide-content">
        <li class="guide-list">
          <base-link-buttons to="/" type="navy" size="large" round>
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="navy" size="medium" round>
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="navy" size="small" round>
            Button
          </base-link-buttons>
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
              &lt;base-link-buttons to="/" type="navy" size="large" round&gt;Button&lt;/base-link-buttons&gt;
              &lt;base-link-buttons to="/" type="navy" size="medium" round&gt;Button&lt;/base-link-buttons&gt;
              &lt;base-link-buttons to="/" type="navy" size="small" round&gt;Button&lt;/base-link-buttons&gt;
            </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!-- //Button_Round -->

    <!-- Button_Round_line -->
    <div>
      <p class="guide-title">
        <span>Button_Round_Line - <em class="font-red">plain, round</em></span>
      </p>
      <ul class="guide-content">
        <li class="guide-list">
          <base-link-buttons to="/" type="navy" size="large" plain round>
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="navy" size="medium" plain round>
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="navy" size="small" plain round>
            Button
          </base-link-buttons>
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
            &lt;base-link-buttons to="/" type="navy" size="large" plain round&gt;Button&lt;/base-link-buttons&gt;
            &lt;base-link-buttons to="/" type="navy" size="medium" plain round&gt;Button&lt;/base-link-buttons&gt;
            &lt;base-link-buttons to="/" type="navy" size="small" plain round&gt;Button&lt;/base-link-buttons&gt;
          </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!--//B Button_Round_line -->

    <!-- Button_Color -->
    <div>
      <p class="guide-title">
        <span>Button_Colcor - </span><strong class="font-red"> navy, purple, magenta, green, sky-blue, black, gray, gray-light, white </strong>
      </p>
      <ul class="guide-content">
        <li class="guide-list">
          <base-link-buttons to="/" type="navy" size="medium">
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="purple" size="medium">
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="magenta" size="medium">
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="green" size="medium">
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="sky-blue" size="medium">
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="black" size="medium">
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="gray" size="medium">
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="gray-light" size="medium">
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="white" size="medium">
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="gray" size="medium" disabled>
            Button
          </base-link-buttons>
          <br>

          <base-link-buttons to="/" type="navy" size="medium" plain>
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="purple" size="medium" plain>
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="magenta" size="medium" plain>
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="green" size="medium" plain>
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="sky-blue" size="medium" plain>
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="black" size="medium" plain>
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="gray" size="medium" plain>
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="gray-light" size="medium" plain>
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="white" size="medium" plain>
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="gray" size="medium" plain disabled>
            Button
          </base-link-buttons>
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
              &lt;base-link-buttons to="/" type="navy" size="medium"&gt;Button&lt;/base-link-buttons&gt;
              &lt;base-link-buttons to="/" type="purple" size="medium"&gt;Button&lt;/base-link-buttons&gt;
              &lt;base-link-buttons to="/" type="magenta" size="medium"&gt;Button&lt;/base-link-buttons&gt;
              &lt;base-link-buttons to="/" type="green" size="medium"&gt;Button&lt;/base-link-buttons&gt;
              &lt;base-link-buttons to="/" type="sky-blue" size="medium"&gt;Button&lt;/base-link-buttons&gt;
              &lt;base-link-buttons to="/" type="black" size="medium"&gt;Button&lt;/base-link-buttons&gt;
              &lt;base-link-buttons to="/" type="gray" size="medium"&gt;Button&lt;/base-link-buttons&gt;
              &lt;base-link-buttons to="/" type="gray-light" size="medium"&gt;Button&lt;/base-link-buttons&gt;
              &lt;base-link-buttons to="/" type="white" size="medium"&gt;Button&lt;/base-link-buttons&gt;
              &lt;base-link-buttons to="/" type="gray" size="medium" disabled&gt;Button&lt;/base-link-buttons&gt;
              &lt;br&gt;

              &lt;base-link-buttons to="/" type="navy" size="medium" plain&gt;Button&lt;/base-link-buttons&gt;
              &lt;base-link-buttons to="/" type="purple" size="medium" plain&gt;Button&lt;/base-link-buttons&gt;
              &lt;base-link-buttons to="/" type="magenta" size="medium" plain&gt;Button&lt;/base-link-buttons&gt;
              &lt;base-link-buttons to="/" type="green" size="medium" plain&gt;Button&lt;/base-link-buttons&gt;
              &lt;base-link-buttons to="/" type="sky-blue" size="medium" plain&gt;Button&lt;/base-link-buttons&gt;
              &lt;base-link-buttons to="/" type="black" size="medium" plain&gt;Button&lt;/base-link-buttons&gt;
              &lt;base-link-buttons to="/" type="gray" size="medium" plain&gt;Button&lt;/base-link-buttons&gt;
              &lt;base-link-buttons to="/" type="gray-light" size="medium" plain&gt;Button&lt;/base-link-buttons&gt;
              &lt;base-link-buttons to="/" type="white" size="medium" plain&gt;Button&lt;/base-link-buttons&gt;
              &lt;base-link-buttons to="/" type="gray" size="medium" plain disabled&gt;Button&lt;/base-link-buttons&gt;
            </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!-- //Button_Color -->

    <!-- Button_Icon -->
    <div>
      <p class="guide-title">
        <span>Button_Icon - <em class="font-red">icon="icon-Plus"</em> </span>
      </p>
      <ul class="guide-content">
        <li class="guide-list">
          <base-link-buttons to="/" type="navy" size="large" icon="icon-Plus">
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="navy" size="medium" icon="icon-Plus">
            Button
          </base-link-buttons>
          <base-link-buttons to="/" type="navy" size="small" icon="icon-Plus">
            Button
          </base-link-buttons>
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
          &lt;base-link-buttons to="/" type="navy" size="large" icon="icon-Plus"&gt;Button&lt;/base-link-buttons&gt;
          &lt;base-link-buttons to="/" type="navy" size="medium" icon="icon-Plus"&gt;Button&lt;/base-link-buttons&gt;
          &lt;base-link-buttons to="/" type="navy" size="small" icon="icon-Plus"&gt;Button&lt;/base-link-buttons&gt;
          </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!--//Button_Icon -->

    <!-- Button_Text -->
    <div>
      <p class="guide-title">
        <span>Button_Text</span>
      </p>
      <ul class="guide-content">
        <li class="guide-list">
          <base-link-buttons to="/" type="text">
            Default
          </base-link-buttons>
          <base-link-buttons to="/" type="text" size="medium">
            Medium
          </base-link-buttons>
          <base-link-buttons to="/" type="text" size="small">
            Small
          </base-link-buttons>
          <base-link-buttons to="/" type="text" size="mini">
            Mini
          </base-link-buttons>
          <base-link-buttons to="/" type="text" size="mini" disabled>
            Mini
          </base-link-buttons>
          <br>
          <base-link-buttons to="/" type="text" text-icon>
            Default<i class="icon-arror2L" />
          </base-link-buttons>
          <base-link-buttons to="/" type="text" size="medium" text-icon>
            Medium<i class="icon-arror2L" />
          </base-link-buttons>
          <base-link-buttons to="/" type="text" size="small" text-icon>
            Small<i class="icon-arror2L" />
          </base-link-buttons>
          <base-link-buttons to="/" type="text" size="mini" text-icon>
            Mini<i class="icon-arror2L" />
          </base-link-buttons>
          <base-link-buttons to="/" type="text" size="mini" text-icon disabled>
            Mini<i class="icon-arror2L" />
          </base-link-buttons>
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
            &lt;base-link-buttons to="/" type="text"&gt; Default&lt;/base-link-buttons&gt;
            &lt;base-link-buttons to="/" type="text" size="medium"&gt;Medium&lt;/base-link-buttons&gt;
            &lt;base-link-buttons to="/" type="text" size="small"&gt;Small&lt;/base-link-buttons&gt;
            &lt;base-link-buttons to="/" type="text" size="mini"&gt;Mini&lt;/base-link-buttons&gt;
            &lt;base-link-buttons to="/" type="text" size="mini" disabled&gt;Mini&lt;/base-link-buttons&gt;
            &lt;!-- Icon_Syle  text-icon 추가 --&gt;
            &lt;base-link-buttons to="/" type="text" text-icon&gt;Default&lt;i class="icon-arror2L" /&gt;&lt;/base-link-buttons&gt;
            &lt;base-link-buttons to="/" type="text" size="medium" text-icon&gt;Medium&lt;i class="icon-arror2L" /&gt;&lt;/base-link-buttons&gt;
            &lt;base-link-buttons to="/" type="text" size="small" text-icon&gt;Small&lt;i class="icon-arror2L" /&gt;&lt;/base-link-buttons&gt;
            &lt;base-link-buttons to="/" type="text" size="mini" text-icon&gt;Mini&lt;i class="icon-arror2L" /&gt;&lt;/base-link-buttons&gt;
            &lt;base-link-buttons to="/" type="text" size="mini" text-icon disabled&gt;Mini&lt;i class="icon-arror2L" /&gt;&lt;/base-link-buttons&gt;
          </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!--// Button_Text -->

    <!--Button_Gray_Text -->
    <div>
      <p class="guide-title">
        <span>Button_Gray_Text - <em class="font-red">text-gray</em></span>
      </p>
      <ul class="guide-content">
        <li class="guide-list">
          <base-link-buttons to="/" type="text-gray">
            Default
          </base-link-buttons>
          <base-link-buttons to="/" type="text-gray" size="medium">
            Medium
          </base-link-buttons>
          <base-link-buttons to="/" type="text-gray" size="small">
            Small
          </base-link-buttons>
          <base-link-buttons to="/" type="text-gray" size="mini">
            Mini
          </base-link-buttons>
          <base-link-buttons to="/" type="text-gray" size="mini" disabled>
            Mini
          </base-link-buttons>
          <br>
          <base-link-buttons to="/" type="text-gray" text-icon>
            Default<i class="icon-arror2L" />
          </base-link-buttons>
          <base-link-buttons to="/" type="text-gray" size="medium" text-icon>
            Medium<i class="icon-arror2L" />
          </base-link-buttons>
          <base-link-buttons to="/" type="text-gray" size="small" text-icon>
            Small<i class="icon-arror2L" />
          </base-link-buttons>
          <base-link-buttons to="/" type="text-gray" size="mini" text-icon>
            Mini<i class="icon-arror2L" />
          </base-link-buttons>
          <base-link-buttons to="/" type="text-gray" size="mini" text-icon disabled>
            Mini<i class="icon-arror2L" />
          </base-link-buttons>
        </li>
        <li class="guide-code">
          <highlight-code lang="html">
            <pre><code>
            &lt;base-link-buttons to="/" type="text-gray"&gt; Default&lt;/base-link-buttons&gt;
            &lt;base-link-buttons to="/" type="text-gray" size="medium"&gt;Medium&lt;/base-link-buttons&gt;
            &lt;base-link-buttons to="/" type="text-gray" size="small"&gt;Small&lt;/base-link-buttons&gt;
            &lt;base-link-buttons to="/" type="text-gray" size="mini"&gt;Mini&lt;/base-link-buttons&gt;
            &lt;base-link-buttons to="/" type="text-gray" size="mini" disabled&gt;Mini&lt;/base-link-buttons&gt;
             &lt;!-- Icon_Syle  text-icon 추가 --&gt;
            &lt;base-link-buttons to="/" type="text-gray" text-icon&gt;Default&lt;i class="icon-arror2L" /&gt;&lt;/base-link-buttons&gt;
            &lt;base-link-buttons to="/" type="text-gray" size="medium" text-icon&gt;Medium&lt;i class="icon-arror2L" /&gt;&lt;/base-link-buttons&gt;
            &lt;base-link-buttons to="/" type="text-gray" size="small" text-icon&gt;Small&lt;i class="icon-arror2L" /&gt;&lt;/base-link-buttons&gt;
            &lt;base-link-buttons to="/" type="text-gray" size="mini" text-icon&gt;Mini&lt;i class="icon-arror2L" /&gt;&lt;/base-link-buttons&gt;
            &lt;base-link-buttons to="/" type="text-gray" size="mini" text-icon disabled&gt;Mini&lt;i class="icon-arror2L" /&gt;&lt;/base-link-buttons&gt;
          </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!--//Button_Gray_Text -->

    <!-- Icon Only -->
    <div>
      <p class="guide-title">
        <span>Icon Only - <em class="font-red">icon-Plus</em></span>
      </p>
      <ul class="guide-content">
        <li class="guide-list">
          <!-- Navy -->
          <base-link-buttons to="/" type="navy" only-icon icon="icon-Plus" />
          <base-link-buttons to="/" type="navy" only-icon icon="icon-Plus" size="medium" />
          <base-link-buttons to="/" type="navy" only-icon icon="icon-Plus" size="small" />
          <!-- Navy - circle -->
          <base-link-buttons to="/" type="navy" only-icon icon="icon-Plus" circle />
          <base-link-buttons
            to="/"
            type="navy"
            only-icon
            icon="icon-Plus"
            size="medium"
            circle
          />
          <base-link-buttons
            to="/"
            type="navy"
            only-icon
            icon="icon-Plus"
            size="small"
            circle
          />
          <!-- Black -->
          <base-link-buttons to="/" type="black" only-icon icon="icon-Plus" />
          <base-link-buttons to="/" type="black" only-icon icon="icon-Plus" size="medium" />
          <base-link-buttons to="/" type="black" only-icon icon="icon-Plus" size="small" />
          <!-- Black - Circle -->
          <base-link-buttons to="/" type="black" only-icon icon="icon-Plus" circle />
          <base-link-buttons
            to="/"
            type="black"
            only-icon
            icon="icon-Plus"
            size="medium"
            circle
          />
          <base-link-buttons
            to="/"
            type="black"
            only-icon
            icon="icon-Plus"
            size="small"
            circle
          />
          <!-- White -->
          <base-link-buttons to="/" type="white" only-icon icon="icon-Plus" />
          <base-link-buttons to="/" type="white" only-icon icon="icon-Plus" size="medium" />
          <base-link-buttons to="/" type="white" only-icon icon="icon-Plus" size="small" />
          <!-- White - Circle -->
          <base-link-buttons to="/" type="white" only-icon icon="icon-Plus" circle />
          <base-link-buttons
            to="/"
            type="white"
            only-icon
            icon="icon-Plus"
            size="medium"
            circle
          />
          <base-link-buttons
            to="/"
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
          &lt;base-link-buttons to="/" type="navy" only-icon icon="icon-Plus" /&gt; &gt;&lt;!-- Size : 40px X 40px --&gt;
          &lt;base-link-buttons to="/" type="navy" only-icon icon="icon-Plus" size="medium" /&gt;&lt;!-- Size : 32px X 32px --&gt;
          &lt;base-link-buttons to="/" type="navy" only-icon icon="icon-Plus" size="small" /&gt;&lt;!-- Size : 24px X 24px --&gt;
          &lt;!-- Navy - circle --&gt;
          &lt;base-link-buttons to="/" type="navy" only-icon icon="icon-Plus" circle /&gt;
          &lt;base-link-buttons to="/" type="navy" only-icon icon="icon-Plus" size="medium" circle /&gt;
          &lt;base-link-buttons to="/" type="navy" only-icon icon="icon-Plus" size="small" circle /&gt;
          &lt;!-- Black --&gt;
          &lt;base-link-buttons to="/" type="black" only-icon icon="icon-Plus" /&gt;
          &lt;base-link-buttons to="/" type="black" only-icon icon="icon-Plus" size="medium" /&gt;
          &lt;base-link-buttons to="/" type="black" only-icon icon="icon-Plus" size="small" /&gt;
          &lt;!-- Black - Circle --&gt;
          &lt;base-link-buttons to="/" type="black" only-icon icon="icon-Plus" circle /&gt;
          &lt;base-link-buttons to="/" type="black" only-icon icon="icon-Plus" size="medium" circle /&gt;
          &lt;base-link-buttons to="/" type="black" only-icon icon="icon-Plus" size="small" circle /&gt;
          &lt;!-- White --&gt;
          &lt;base-link-buttons to="/" type="white" only-icon icon="icon-Plus" /&gt;
          &lt;base-link-buttons to="/" type="white" only-icon icon="icon-Plus" size="medium" /&gt;
          &lt;base-link-buttons to="/" type="white" only-icon icon="icon-Plus" size="small" /&gt;
          &lt;!-- White - Circle --&gt;
          &lt;base-link-buttons to="/" type="white" only-icon icon="icon-Plus" circle /&gt;
          &lt;base-link-buttons to="/" type="white" only-icon icon="icon-Plus" size="medium" circle /&gt;
          &lt;base-link-buttons to="/" type="white" only-icon icon="icon-Plus" size="small" circle /&gt;
          </code></pre>
          </highlight-code>
        </li>
      </ul>

      <p class="guide-title">
        <span>Icon Only <em class="font-red">icon-ArrowR02</em></span>
      </p>
      <ul class="guide-content">
        <li class="guide-list">
          <!-- Navy -->
          <base-link-buttons to="/" type="navy" only-icon icon="icon-ArrowR02" />
          <base-link-buttons to="/" type="navy" only-icon icon="icon-ArrowR02" size="medium" />
          <base-link-buttons to="/" type="navy" only-icon icon="icon-ArrowR02" size="small" />
          <!-- Navy - circle -->
          <base-link-buttons to="/" type="navy" only-icon icon="icon-ArrowR02" circle />
          <base-link-buttons
            to="/"
            type="navy"
            only-icon
            icon="icon-ArrowR02"
            size="medium"
            circle
          />
          <base-link-buttons
            to="/"
            type="navy"
            only-icon
            icon="icon-ArrowR02"
            size="small"
            circle
          />
          <!-- Black -->
          <base-link-buttons to="/" type="black" only-icon icon="icon-ArrowR02" />
          <base-link-buttons to="/" type="black" only-icon icon="icon-ArrowR02" size="medium" />
          <base-link-buttons to="/" type="black" only-icon icon="icon-ArrowR02" size="small" />
          <!-- Black - Circle -->
          <base-link-buttons to="/" type="black" only-icon icon="icon-ArrowR02" circle />
          <base-link-buttons
            to="/"
            type="black"
            only-icon
            icon="icon-ArrowR02"
            size="medium"
            circle
          />
          <base-link-buttons
            to="/"
            type="black"
            only-icon
            icon="icon-ArrowR02"
            size="small"
            circle
          />
          <!-- White -->
          <base-link-buttons to="/" type="white" only-icon icon="icon-ArrowR02" />
          <base-link-buttons to="/" type="white" only-icon icon="icon-ArrowR02" size="medium" />
          <base-link-buttons to="/" type="white" only-icon icon="icon-ArrowR02" size="small" />
          <!-- White - Circle -->
          <base-link-buttons to="/" type="white" only-icon icon="icon-ArrowR02" circle />
          <base-link-buttons
            to="/"
            type="white"
            only-icon
            icon="icon-ArrowR02"
            size="medium"
            circle
          />
          <base-link-buttons
            to="/"
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
            &lt;base-link-buttons to="/" type="navy" only-icon icon="icon-ArrowR02" /&gt;&lt;!-- Size : 40px X 40px --&gt;
            &lt;base-link-buttons to="/" type="navy" only-icon icon="icon-ArrowR02" size="medium" /&gt;&lt;!-- Size : 32px X 32px --&gt;
            &lt;base-link-buttons to="/" type="navy" only-icon icon="icon-ArrowR02" size="small" /&gt;&lt;!-- Size : 24px X 24px --&gt;
            &lt;!-- Navy - circle --&gt;
            &lt;base-link-buttons to="/" type="navy" only-icon icon="icon-ArrowR02" circle /&gt;
            &lt;base-link-buttons to="/" type="navy" only-icon icon="icon-ArrowR02" size="medium" circle /&gt;
            &lt;base-link-buttons to="/" type="navy" only-icon icon="icon-ArrowR02" size="small" circle /&gt;
            &lt;!-- Black --&gt;
            &lt;base-link-buttons to="/" type="black" only-icon icon="icon-ArrowR02" /&gt;
            &lt;base-link-buttons to="/" type="black" only-icon icon="icon-ArrowR02" size="medium" /&gt;
            &lt;base-link-buttons to="/" type="black" only-icon icon="icon-ArrowR02" size="small" /&gt;
            &lt;!-- Black - Circle --&gt;
            &lt;base-link-buttons to="/" type="black" only-icon icon="icon-ArrowR02" circle /&gt;
            &lt;base-link-buttons to="/" type="black" only-icon icon="icon-ArrowR02" size="medium" circle /&gt;
            &lt;base-link-buttons to="/" type="black" only-icon icon="icon-ArrowR02" size="small" circle /&gt;
            &lt;!-- White --&gt;
            &lt;base-link-buttons to="/" type="white" only-icon icon="icon-ArrowR02" /&gt;
            &lt;base-link-buttons to="/" type="white" only-icon icon="icon-ArrowR02" size="medium" /&gt;
            &lt;base-link-buttons to="/" type="white" only-icon icon="icon-ArrowR02" size="small" /&gt;
            &lt;!-- White - Circle --&gt;
            &lt;base-link-buttons to="/" type="white" only-icon icon="icon-ArrowR02" circle /&gt;
            &lt;base-link-buttons to="/" type="white" only-icon icon="icon-ArrowR02" size="medium" circle /&gt;
            &lt;base-link-buttons to="/" type="white" only-icon icon="icon-ArrowR02" size="small" circle /&gt;
          </code></pre>
          </highlight-code>
        </li>
      </ul>
    </div>
    <!--// Icon Only -->
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
