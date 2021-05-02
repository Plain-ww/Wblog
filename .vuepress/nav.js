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
        text: "项目",
        icon: "reco-document",
        items: [{
            text: "后台管理系统",
            link: "/docs/theme-reco/"
        }]
    },
    // {
    // text: "Contact",
    // icon: "reco-message",
    // items: [{
    //     text: "GitHub",
    //     link: "https://github.com/recoluan",
    //     icon: "reco-github"
    // }]
    // },
    {
        text: '其他',
        icon: "reco-document",
        items: [{
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
    }
]