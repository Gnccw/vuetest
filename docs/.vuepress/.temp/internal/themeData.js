export const themeData = {
  "logo": "/assets/img/1.png",
  "navbar": [
    {
      "text": "首页",
      "link": "/"
    },
    {
      "text": "Guide",
      "link": "/about/"
    },
    {
      "text": "编程",
      "children": [
        {
          "text": "c++",
          "link": "/grammer/c++/c++"
        },
        {
          "text": "python",
          "link": "/grammer/python/python"
        }
      ]
    },
    {
      "text": "VuePress",
      "link": "/vuepress/vuepress"
    }
  ],
  "darkMode": false,
  "sidebarDepth": 3,
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
