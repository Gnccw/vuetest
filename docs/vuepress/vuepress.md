### 1、建立一个空的网站
$$
2^{xx}
$$
#### 1. __部署__
``` bash
npm install -g vuepress // 全局安装vuepress
npm install -D vuepress // 将vuepress安装到当前文件夹
```
全局安装和本地安装的不同：全局安装是将所有的文件从安装文件夹在调用时复制到内存，本地安装调用时直接读取当前文件夹下的文件，每一次本地安装都会在当前文件产生所有的文件。vuepress2.0只支持本地安装。

#### 2. __运行__
```bash
npm init -y //初始化文件夹，并在当前文件夹生成package.json文件
```
将package.json下的`scripts` 项改为如下：
``` bash
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
```
命令详解(生成npm或yarn脚本)
- `vuepress dev docs:` 将docs文件夹作为目标文件夹运行，即docs存储网站内容。eg：`vuepress dev .:` 将当前文件夹作为目标文件夹。
- `vuepress build docs:` 将docs作为目标文件夹生成静态html文件。
- `scripts:` 利用npm或yarn的命令来替代vuepress的命令。eg：`"docs:dev": "vuepress dev docs"`: 运行`npm run docs:dev`等同于运行`vuepress dev docs`。

#### 3. __vuepress的目录结构__
```
.
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
```
- `docs/.vuepress`: 用于存放全局的配置、组件、静态资源等。
- `docs/.vuepress/components`: 该目录中的 Vue 组件将会被自动注册为全局组件。
- `docs/.vuepress/theme`: 用于存放本地主题
- `docs/.vuepress/styles`: 用于存放样式相关的文件。
- `docs/.vuepress/styles/index.styl`: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
- `docs/.vuepress/styles/palette.styl`: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
- `docs/.vuepress/public`: 静态资源目录。
- `docs/.vuepress/templates`: 存储 HTML 模板文件。
- `docs/.vuepress/templates/dev.html`: 用于开发环境的 HTML 模板文件。
- `docs/.vuepress/templates/ssr.html`: 构建时基于 Vue SSR 的 HTML 模板文件。
- `docs/.vuepress/config.js`: 配置文件的入口文件，也可以是 YML 或 toml。
- `docs/.vuepress/enhanceApp.js`: 客户端应用的增强
  
默认每个文件夹下的`README.md`文该文件夹的index，如果要访问`./xxx`则表示访问当前文件夹下的`xxx.md`文件，如果访问`./xxx/`则表示访问当前文件夹下的`xxx`文件夹。

### 2、各种配置

   两种不同的配置文件的存储方式：
   1. 当前文件夹下，即顶级目录下，存储配置文件`vuepress.config.js`。
   2. 在`/.vuepress/`文件夹下，存储配置文件`config.js`。

#### 1. __导航栏__
   1. 通过`themeConfig.logo`增加导航栏Logo,Logo可以被放置在公共文件目录,`hero.png`存储于`.vuepress/public/assets/img/`
```javascript
// VUEPRESS/docs/.vuepress/config.js or VUEPRESS/vuepress.config.js
module.exports={
    themeConfig:{
        logo: 'assets/img/logo.img',
    }
}
```
   2. 配置导航栏,`config.js`变为如下：
   ```javascript
  module.exports = {
      themeConfig:{
          navbar:[
              {text: '首页', link: '/'},
              {text: 'Guide', link: '/about/'},
              {text: '编程语言', children: [
                  {text: 'c++', link: '/grammer/c++/c++'},
                  {text: 'python', link: '/grammer/python/python'},
                  ],
              },
              {text: 'VuePress', link: '/vuepress/vuepress'},
          ],
      },
  }
   ```
   路径中不能有汉字，否则不能识别。配置文件有两种方式：

#### 2. 其他配置
所有的配置满足如下形式：
```js
module.exports={
  配置名1: 参数,
  配置名2: 参数,
}
```
##### 2.1 站点配置

##### 2.2 markdown配置
`markdown.xxx`在配置时表现为以下的形式：
```js
module.exports={
  markdown: {
    xxx: 参数,
  },
}
```
- `markdown.extractHeaders`: 自动生成左边的的侧边栏，生成侧边栏的标题由`markdown.extractHeaders.level`确定，默认值：`true`。
- `markdown.extractHeaders.level`: 指定生成侧边栏提取的标题，默认值`[2,3]`,提取`##`和`###`的标题。
- `themeConfig.sidebarDepth: num`: 自动生成侧边栏的深度，默认值为2。

$2^{9}$