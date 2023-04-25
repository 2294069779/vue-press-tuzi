---
title: 软件-smartGit
date: 2023-4-20
categories:
  - 工具
tags:
  - vscode
  - 配置
sticky: 1
---

#### 插件类

```text
翻译(英汉词典)--翻译
chinese--中文
css--peek
meterial icon Theme --图标
nested comments   -- 一键注释
one Dark Pro   -- 主题
open in browser -- 打开浏览器
path interllisense  -- 路径提示
prettier -Code formatter --格式化
tailwind css intelliSense  -- tailwind提示
typesctipt vue plugin（volar）--vue typescript
vue language features   -- 提示
vue vscode snippets   --vue
```

```js
{
  //eslint配置
  "eslint.enable": true,
  "eslint.run": "onType",
  "eslint.options": {
    "extensions": [".js", ".vue", ".jsx", ".tsx"]
  },
  // 在保存时运行的代码操作类型。
  // "editor.codeActionsOnSave": {
  //   "source.fixAll.eslint": true //保存时使用eslint校验文件
  // },
  "editor.tokenColorCustomizations": {
    "keywords": "#0abdf8", // 关键字
    "variables": "#f39a41", // 变量名
    "strings": "#b8d4e8", // 字符串
    "functions": "#d1ec69", // 函数名
    "numbers": "#1daf99", // 数字
    "types": "#78c6f3",
    "comments": {
      // 设置字体样式 加粗 下划线 斜体等
      "fontStyle": "bold underline", // bold italic underline
      // 设置字体颜色
      "foreground": "#766d6d"
    }, // 注释
    "textMateRules": [
      {
        "scope": "entity.name.tag", //html标签div，
        "settings": {
          "foreground": "#65c4f8",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "variable.other.readwrite",
        "settings": {
          "foreground": "#7ba4ae",
          "fontStyle": "bold"
        }
      },
      {
        "name": "One Dark italic",
        "scope": [
          "comment",
          "entity.other.attribute-name",
          "keyword",
          "markup.underline.link",
          "storage.modifier",
          "storage.type",
          "string.url",
          "variable.language.super",
          "variable.language.this"
        ],
        "settings": {
          // "fontStyle": "italic"
        }
      },
      {
        "name": "One Dark italic reset",
        "scope": [
          "keyword.operator",
          "keyword.other.type",
          "storage.modifier.import",
          "storage.modifier.package",
          "storage.type.built-in",
          "storage.type.function.arrow",
          "storage.type.generic",
          "storage.type.java",
          "storage.type.primitive"
        ],
        "settings": {
          // "fontStyle": ""
        }
      }
    ]
  },
  // "editor.suggest.insertMode": "replace", //允许配置替换
  "emmet.triggerExpansionOnTab": true, //使用tab键展开搜索
  "security.workspace.trust.untrustedFiles": "open", // 控制如何处理工作区中的松散文件。默认是提示
  "editor.suggestSelection": "recentlyUsed", //在建议列表如何选择 //recentlyUsed选择最近建议
  "editor.fontSize": 16, //字体
  "editor.tabSize": 2, //tab栏
  "editor.detectIndentation": false, // vscode 默认启用了"editor.detectIndentation": true”根据文件类型自动设置tabsize的选项
  "editor.formatOnType": true, //回车格式化
  "editor.formatOnSave": true, // 保存文档自动格式化
  "editor.copyWithSyntaxHighlighting": true, // 控制在复制时是否同时复制语法高亮。
  "editor.fontFamily": "Consolas, 'Courier New', monospace", //控制字体系列
  "explorer.confirmDelete": false, // 控制资源管理器是否在把文件删除到废纸篓时进行确认
  "workbench.editor.enablePreview": false, // 控制打开的编辑器是否为预览编辑器
  "editor.linkedEditing": true,
  // "explorer.compactFolders": false,

  //配置语言文件关联
  //  "files.associations": {
  //   "*.vue": "vue"
  // },
  //格式化默认配置
  // "prettier.printWidth": 130, //

  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "settingsSync.ignoredSettings": [],

  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "workbench.editorAssociations": {
    "*.xls": "default",
    "*.md": "vscode.markdown.preview.editor"
  },
  "workbench.iconTheme": "material-icon-theme",
  "files.autoSave": "onFocusChange",

  "workbench.colorTheme": "One Dark Pro Darker",
  "commentTranslate.hover.concise": true,
  "commentTranslate.source": "Baidu",
  "gitlens.proxy": {

  },
  "editor.minimap.enabled": false,
  "window.zoomLevel": -1
}
```

-------以下附带----

nvm 配合 node 安装 git 安装 smartgit 安装

gitlab 密钥配置
sh deploy.sh
