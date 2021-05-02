module.exports = {
    port: '7778', // 生成网页端口（本地调试使用）
    title: "Plain-ww",
    base: '/Blogs/', //设置站点根路径 
    // base: '.', //设置站点根路径 
    description: "嘘~正在加载中····",
    dest: ".vuepress/dist",
    head: [
        ['link', { rel: "icon", href: "/image/favicon.ico" }], //图标
        ['meta', { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }],
        [
            "script", {},
            `
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?075adfc465e73bf946e90d4c1e1daef8";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();`
        ]
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
        valineConfig: {
            appId: 'Tcz1NlfCvaEK8mwrrKJCnHHa-gzGzoHsz', // your appId
            appKey: 't3LuGs2HUollqPoE2E1lfnqz', // your appKey
            visitor: true, //阅读量统计
            placeholder: "留下你想说的话吧(*^▽^*)"
        },
        friendLink: [{
            "title": "午后南杂",
            "desc": "Enjoy when you can, and endure when you must.",
            "email": "1156743527@qq.com",
            "link": "https://www.recoluan.com"
        }],
        subSidebar: 'auto', //全局自动侧边栏
        codeTheme: 'tomorrow', // default 'tomorrow' 默认代码主题
        logo: "/image/logo.png",
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: "Last Updated",
        author: "Wwei",
        authorAvatar: "/image/weixing.png",
        record: "Wwei",
        startYear: "2020"
    },
    "markdown": {
        "lineNumbers": true
    },
}