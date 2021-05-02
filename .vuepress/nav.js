module.exports = [{
        text: "主页",
        link: "/",
        icon: "reco-home"
    },
    {
        text: "时间线",
        link: "/timeline/",
        icon: "reco-date"
    },

    {
        text: '其他',
        icon: "reco-document",
        items: [{
                text: "项目",
                icon: "reco-document",
                items: [{
                    text: "后台管理系统",
                    link: "/docs/theme-reco/"
                }]
            },
            {
                text: '在线编辑',
                items: [
                    { text: '图片压缩', link: 'https://tinypng.com/' }
                ]
            },
            {
                text: '在线服务',
                items: [
                    { text: '阿里云', link: 'https://www.aliyun.com/' },
                    { text: '腾讯云', link: 'https://cloud.tencent.com/' }
                ]
            },
            {
                text: '博客指南',
                items: [
                    { text: '掘金', link: 'https://juejin.im/' },
                    { text: 'CSDN', link: 'https://blog.csdn.net/' }
                ]
            }
        ]
    },
    {
        text: "关于我",
        link: "/docs/theme-reco/",
        icon: "reco-account",
    },
    {
        text: "GitHub",
        link: "https://github.com/Plain-ww",
        icon: "reco-github"
    }
]