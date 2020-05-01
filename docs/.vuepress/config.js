module.exports = {
  "title": "封尘之魂",
  "description": "陈峰的博客",
  "dest": "public",
  locales:{
    '/':{
      lang:'zh_CN'
    }
  },
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  plugins: [
      "vuepress-plugin-back-to-top",
      "vuepress-plugin-pagation",
      "vuepress-plugin-loading-page"
  ],
  "themeConfig": {
    locales: {
      '/': {
        recoLocals: {
          homeBlog: {
            article: '文章', // 默认 文章
            tag: '标签', // 默认 标签
            category: '分类', // 默认 分类
            friendLink: '友链' // 默认 友情链接
          }
        }
      }

  },
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "网站链接",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/fengchenzhihun1",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "封尘之魂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1659215140@qq.com",
        "link": "47.98.124.4"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "最后修改时间",
    "author": "chenfeng",
    "authorAvatar": "/avatar.png",
    "record": "无",
    "startYear": "2018"
  },
  "markdown": {
    "lineNumbers": true
  }
}