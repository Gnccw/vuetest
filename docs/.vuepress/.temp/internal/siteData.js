export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "我的记",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css"
      }
    ],
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
