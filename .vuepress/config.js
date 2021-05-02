module.exports = {
    port: '7778', // 生成网页端口（本地调试使用）
    title: "Plain-ww",
    base: '/Blogs/', //设置站点根路径 
    // base: '.', //设置站点根路径 
    description: "开始学习",
    dest: ".vuepress/dist",
    head: [
        ['link', { rel: "icon", href: "/image/favicon.ico" }], //图标
        ['meta', { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }]
    ],
    theme: "reco",
    themeConfig: {
        nav: require("./nav"), //上面的导航栏
        sidebar: require("./sidebar"), // 侧边栏
        type: "blog",
        // blogConfig: require("./blogConfig"),  //上面的导航栏

        blogConfig: {
            "category": {
                "location": 2,
                "text": "分类"
            },
            "tag": {
                "location": 3,
                "text": "标签"
            }
        },
        friendLink: [{
            "title": "午后南杂",
            "desc": "Enjoy when you can, and endure when you must.",
            "email": "1156743527@qq.com",
            "link": "https://www.recoluan.com"
        }],
        logo: "/image/logo.png",
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: "Last Updated",
        author: "Wwei",
        authorAvatar: "/image/touxiang.jpg",
        record: "Wwei",
        startYear: "2020"
    },
    "markdown": {
        "lineNumbers": true
    },
}