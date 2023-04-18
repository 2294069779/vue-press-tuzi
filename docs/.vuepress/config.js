module.exports = {
  title: "hello",
  description: "一个学习网站",
  theme: "reco",
  base: "/vue-press-tuzi/",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      // {
      //   text: "xx的博客",
      //   item: [
      //     {
      //       text: "掘金",
      //       link: "地址",
      //     },
      //     {
      //       text: "github",
      //       link: "地址",
      //     },
      //   ],
      // },
    ],
    // sidebar: [
    //   {
    //     title: "积累成多",
    //     path: "/",
    //     collapsable: false, // 是否折叠
    //     children: [
    //       {
    //         title: "介绍",
    //         path: "/",
    //       },
    //     ],
    //   },
    //   {
    //     title: "学习",
    //     path: "/blogs",
    //     collapsable: false, // 是否折叠
    //     children: [
    //       {
    //         title: "1",
    //         path: "/blogs/1",
    //       },
    //       {
    //         title: "2",
    //         path: "/blogs/2",
    //       },
    //     ],
    //   },
    // ],
    blogConfig: {
      //头部下拉
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "博客", // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认4
        text: "Tag", // 默认文案 “标签”
      },
    },
    locales: {
      //时间格式
      "/": {
        lang: "zh-CN",
      },
    },
    subSidebar: "auto",
    logo: "/logo.jpg",
    authorAvatar: "/logo.jpg",
    type: "blog",
    author: "tuzi",
  },
  plugins: [
    [
      "sakura",
      {
        num: 20, // 默认数量
        show: true, //  是否显示
        zIndex: -1, // 层级
        img: {
          replace: false, // false 默认图 true 换图 需要填写httpUrl地址
        },
      },
    ],
    [
      "cursor-effects",
      {
        size: 4, // size of the particle, default: 2
        shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      },
    ],
    // 音乐
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          {
            name: "思念是一种病",
            artist: "蔡鲁/张震岳 ",
            url: "http://m10.music.126.net/20230418143106/77e28447f639e734577032cf313165d8/ymusic/4589/e2ef/ed1a/1eeea2a566519df0baecdde68e3b14b8.mp3",
            cover: "https://assets.smallsunnyfox.com/music/3.jpg",
          },
        ],
        // 是否默认缩小
        autoShrink: true,
        // 缩小时缩为哪种模式
        shrinkMode: "float",
        // 悬浮窗样式
        floatStyle: { bottom: "20px", "z-index": "999999" },
      },
    ],
  ],
};
