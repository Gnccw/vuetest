<template><h3 id="_1、建立一个空的网站" tabindex="-1"><a class="header-anchor" href="#_1、建立一个空的网站" aria-hidden="true">#</a> 1、建立一个空的网站</h3>
<p>$$
2^{xx}
$$</p>
<h4 id="_1-部署" tabindex="-1"><a class="header-anchor" href="#_1-部署" aria-hidden="true">#</a> 1. <strong>部署</strong></h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g vuepress // 全局安装vuepress
<span class="token function">npm</span> <span class="token function">install</span> -D vuepress // 将vuepress安装到当前文件夹
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>全局安装和本地安装的不同：全局安装是将所有的文件从安装文件夹在调用时复制到内存，本地安装调用时直接读取当前文件夹下的文件，每一次本地安装都会在当前文件产生所有的文件。vuepress2.0只支持本地安装。</p>
<h4 id="_2-运行" tabindex="-1"><a class="header-anchor" href="#_2-运行" aria-hidden="true">#</a> 2. <strong>运行</strong></h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> init -y //初始化文件夹，并在当前文件夹生成package.json文件
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>将package.json下的<code>scripts</code> 项改为如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>  <span class="token string">"scripts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"docs:dev"</span><span class="token builtin class-name">:</span> <span class="token string">"vuepress dev docs"</span>,
    <span class="token string">"docs:build"</span><span class="token builtin class-name">:</span> <span class="token string">"vuepress build docs"</span>
  <span class="token punctuation">}</span>,
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>命令详解(生成npm或yarn脚本)</p>
<ul>
<li><code>vuepress dev docs:</code> 将docs文件夹作为目标文件夹运行，即docs存储网站内容。eg：<code>vuepress dev .:</code> 将当前文件夹作为目标文件夹。</li>
<li><code>vuepress build docs:</code> 将docs作为目标文件夹生成静态html文件。</li>
<li><code>scripts:</code> 利用npm或yarn的命令来替代vuepress的命令。eg：<code>&quot;docs:dev&quot;: &quot;vuepress dev docs&quot;</code>: 运行<code>npm run docs:dev</code>等同于运行<code>vuepress dev docs</code>。</li>
</ul>
<h4 id="_3-vuepress的目录结构" tabindex="-1"><a class="header-anchor" href="#_3-vuepress的目录结构" aria-hidden="true">#</a> 3. <strong>vuepress的目录结构</strong></h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><ul>
<li><code>docs/.vuepress</code>: 用于存放全局的配置、组件、静态资源等。</li>
<li><code>docs/.vuepress/components</code>: 该目录中的 Vue 组件将会被自动注册为全局组件。</li>
<li><code>docs/.vuepress/theme</code>: 用于存放本地主题</li>
<li><code>docs/.vuepress/styles</code>: 用于存放样式相关的文件。</li>
<li><code>docs/.vuepress/styles/index.styl</code>: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。</li>
<li><code>docs/.vuepress/styles/palette.styl</code>: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。</li>
<li><code>docs/.vuepress/public</code>: 静态资源目录。</li>
<li><code>docs/.vuepress/templates</code>: 存储 HTML 模板文件。</li>
<li><code>docs/.vuepress/templates/dev.html</code>: 用于开发环境的 HTML 模板文件。</li>
<li><code>docs/.vuepress/templates/ssr.html</code>: 构建时基于 Vue SSR 的 HTML 模板文件。</li>
<li><code>docs/.vuepress/config.js</code>: 配置文件的入口文件，也可以是 YML 或 toml。</li>
<li><code>docs/.vuepress/enhanceApp.js</code>: 客户端应用的增强</li>
</ul>
<p>默认每个文件夹下的<code>README.md</code>文该文件夹的index，如果要访问<code>./xxx</code>则表示访问当前文件夹下的<code>xxx.md</code>文件，如果访问<code>./xxx/</code>则表示访问当前文件夹下的<code>xxx</code>文件夹。</p>
<h3 id="_2、各种配置" tabindex="-1"><a class="header-anchor" href="#_2、各种配置" aria-hidden="true">#</a> 2、各种配置</h3>
<p>两种不同的配置文件的存储方式：</p>
<ol>
<li>当前文件夹下，即顶级目录下，存储配置文件<code>vuepress.config.js</code>。</li>
<li>在<code>/.vuepress/</code>文件夹下，存储配置文件<code>config.js</code>。</li>
</ol>
<h4 id="_1-导航栏" tabindex="-1"><a class="header-anchor" href="#_1-导航栏" aria-hidden="true">#</a> 1. <strong>导航栏</strong></h4>
<ol>
<li>通过<code>themeConfig.logo</code>增加导航栏Logo,Logo可以被放置在公共文件目录,<code>hero.png</code>存储于<code>.vuepress/public/assets/img/</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// VUEPRESS/docs/.vuepress/config.js or VUEPRESS/vuepress.config.js</span>
module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">'assets/img/logo.img'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="2">
<li>配置导航栏,<code>config.js</code>变为如下：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">themeConfig</span><span class="token operator">:</span><span class="token punctuation">{</span>
       <span class="token literal-property property">navbar</span><span class="token operator">:</span><span class="token punctuation">[</span>
           <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'首页'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
           <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Guide'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/about/'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
           <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'编程语言'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
               <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'c++'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/grammer/c++/c++'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
               <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'python'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/grammer/python/python'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
               <span class="token punctuation">]</span><span class="token punctuation">,</span>
           <span class="token punctuation">}</span><span class="token punctuation">,</span>
           <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'VuePress'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/vuepress/vuepress'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>路径中不能有汉字，否则不能识别。配置文件有两种方式：</p>
<h4 id="_2-其他配置" tabindex="-1"><a class="header-anchor" href="#_2-其他配置" aria-hidden="true">#</a> 2. 其他配置</h4>
<p>所有的配置满足如下形式：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
  配置名<span class="token number">1</span><span class="token operator">:</span> 参数<span class="token punctuation">,</span>
  配置名<span class="token number">2</span><span class="token operator">:</span> 参数<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h5 id="_2-1-站点配置" tabindex="-1"><a class="header-anchor" href="#_2-1-站点配置" aria-hidden="true">#</a> 2.1 站点配置</h5>
<h5 id="_2-2-markdown配置" tabindex="-1"><a class="header-anchor" href="#_2-2-markdown配置" aria-hidden="true">#</a> 2.2 markdown配置</h5>
<p><code>markdown.xxx</code>在配置时表现为以下的形式：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">xxx</span><span class="token operator">:</span> 参数<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li><code>markdown.extractHeaders</code>: 自动生成左边的的侧边栏，生成侧边栏的标题由<code>markdown.extractHeaders.level</code>确定，默认值：<code>true</code>。</li>
<li><code>markdown.extractHeaders.level</code>: 指定生成侧边栏提取的标题，默认值<code>[2,3]</code>,提取<code>##</code>和<code>###</code>的标题。</li>
<li><code>themeConfig.sidebarDepth: num</code>: 自动生成侧边栏的深度，默认值为2。</li>
</ul>
<p>$2^{9}$</p>
</template>
