module.exports = {
  title: "Tuzi",
  description: "一曲肝肠断，天涯何处觅知音",
  theme: "reco",
  base: "/vue-press-tuzi/",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }], //favicon图标设置
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  themeConfig: {
    nav: [
      { text: "首页", link: "/", icon: "reco-home" },
      { text: "时间线", link: "/timeline/", icon: "reco-date" },
    ],
    blogConfig: {
      //头部下拉
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认4
        text: "标签", // 默认文案 “标签”
      },
      socialLinks: [
        {
          icon: "reco-juejin",
          link: "https://juejin.cn/user/435870010454062",
        },
        {
          icon: "reco-github",
          text: "11",
          link: "https://github.com/2294069779",
        },
      ],
    },

    search: true,
    logo: "/logo.jpg",
    authorAvatar: "/logo.jpg",
    loading: true,
    type: "blog",
    markdown: {
      lineNumbers: true,
    },

    vssueConfig: {
      platform: "github",
      owner: "2294069779",
      repo: "vue-press-tuzi",
      clientId: "a421e64add57c76f4fee",
      clientSecret: "19c4b7ff82b37e7f129c9fdab69983bfe00cbf5d",
    },
  },
  plugins: [
    [
      "sakura",
      {
        num: 20, // 默认数量
        show: true, //  是否显示
        zIndex: 1, // 层级
        img: {
          replace: false, // false 默认图 true 换图 需要填写httpUrl地址
        },
      },
    ],
    [
      "cursor-effects",
      {
        size: 2, // size of the particle, default: 2
        shape: "circle", // ['star' | 'circle'], // shape of the particle, default: 'star'
      },
    ],
    // 音乐
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          {
            name: "思念是一种病",
            artist: "蔡健雅/张震岳 ",
            url: "http://music.163.com/song/media/outer/url?id=5237790.mp3",
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
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["wanko"],
        clean: true,
        modelStyle: {
          position: "fixed",
          right: "65px",
          bottom: "0px",
          zIndex: 99999,
          pointerEvents: "none",
        },
      },
    ],
    [
      //动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000,
      },
    ],
  ],
};
