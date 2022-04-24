module.exports = {
    title: '我的记',
    markdown:{ 
        code: true,
        extractHeaders: {
            level: [3,4],
        },

        extendMarkdown: md => {
            md.use(require('markdown-it-katex'))
        },

    },

    head: [
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
        ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }]
      ],

    themeConfig:{
        logo: '/assets/img/1.png',
        navbar:[
            {text: '首页', link: '/'},
            {text: 'Guide', link: '/about/'},
            {text: '编程', children: [
                    {text: 'c++', link: '/grammer/c++/c++'},
                    {text: 'python', link: '/grammer/python/python'},
                ],
            },
            {text: 'VuePress', link: '/vuepress/vuepress'},
        ],
        darkMode: false,
        sidebarDepth: 3,

    },

    plugins: [
        [
          '@vuepress/plugin-search',
          {
            locales: {
              '/': {
                placeholder: 'Search',
              },
              '/zh/': {
                placeholder: '搜索',
              },
            },
          },
        ],
    ],

}