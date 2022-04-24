import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-74bc627b","/about/",{"title":""},["/about/index.html","/about/README.md"]],
  ["v-7127aea3","/vuepress/vuepress.html",{"title":""},["/vuepress/vuepress","/vuepress/vuepress.md"]],
  ["v-69f76427","/grammer/c++/c++.html",{"title":""},["/grammer/c++/c++","/grammer/c++/c++.md"]],
  ["v-6cd61822","/grammer/python/python.html",{"title":""},["/grammer/python/python","/grammer/python/python.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
