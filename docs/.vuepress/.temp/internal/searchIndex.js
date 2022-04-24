export const searchIndex = [
  {
    "title": "",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/about/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [
      {
        "level": 3,
        "title": "1、建立一个空的网站",
        "slug": "_1、建立一个空的网站",
        "children": [
          {
            "level": 4,
            "title": "1. 部署",
            "slug": "_1-部署",
            "children": []
          },
          {
            "level": 4,
            "title": "2. 运行",
            "slug": "_2-运行",
            "children": []
          },
          {
            "level": 4,
            "title": "3. vuepress的目录结构",
            "slug": "_3-vuepress的目录结构",
            "children": []
          }
        ]
      },
      {
        "level": 3,
        "title": "2、各种配置",
        "slug": "_2、各种配置",
        "children": [
          {
            "level": 4,
            "title": "1. 导航栏",
            "slug": "_1-导航栏",
            "children": []
          },
          {
            "level": 4,
            "title": "2. 其他配置",
            "slug": "_2-其他配置",
            "children": []
          }
        ]
      }
    ],
    "path": "/vuepress/vuepress.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/grammer/c++/c++.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/grammer/python/python.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
