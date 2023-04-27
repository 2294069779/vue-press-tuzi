---
title: rem
date: 2023-4-19
categories:
  - css
tags:
  - css
  - 响应式布局
sticky: 1
---

### rem

##### rem 介绍

- rem 相对于根元素设置的字体尺寸 font-size（默认 16px）

```js
（默认情况）1rem=16px  得出需要转换值/16 就可以得出rem
```

##### postCss 介绍

- 为了避免复杂的计算方式，可借用工具 postCss

- postCss 是一个用 javascript 工具和插件转换的 css 工具
- postcss-pxtorem /postcss-px2rem 转换工具

```

npm i postcss-pxtorem --save
postcss.config.js文件配置
module.exports = {
  plugins: {
    'postcss-pxtorem': {
       //根元素字体大小
       rootValue: 16,
       //匹配CSS中的属性，* 代表启用所有属性
       propList: ['*'],
       //转换成rem后保留的小数点位数
       unitPrecision: 5，
       //小于12px的样式不被替换成rem
       minPixelValue: 12,
       //忽略一些文件，不进行转换，比如我想忽略 依赖的UI框架
       exclude: ['node_modules']
     }
  }
}

```

- 为了不同设备宽度下对应不同的基准值

```
const baseSize = 14 ;
function setRem(){
 const scale = document.documentElement.clientWidth / 1920；  获取当前屏幕的框 除以设计稿1920.缩放比
 document.documentElement.style.fonSize = baseSize * Math.min(scale,2) +'px'
 }
 setRem() // 执行
 window.onresize=function （）{
     setRem()
 }

  // 在main函数中引用
```

```js
补充：Math.min(1,2,3) 函数返回作为输入参数的数字中最小的一个 1
onresize()  //浏览器发生改变时会执行该函数
```

补充方法二

useDebounceFn

```js
import {useDebouncdef} from '@vueuse/core'
//rem 等比适配配置文件
const baseSize = 16
//执行函数
function setRem(){
    let scale = 1 基准值
    if（document.documentElement.clientWidth<1325){ //  //1325的话就是1：1 根元素16px
    scale = document.documentElement.clientWidth / 1325
         if(document.documentElement.clientWidth <1097){
             scale=1097 / 1325                            // 最小1097		}
    }
}

setRem()
    // 改变窗口大小时重新设置rem
    window.onresize = useDeboounceFn(()=>{
        setRem()
    },150)
```

补充方法三,表格自适应

```text
export const computedTextWidth = （text：string）=》{
const span= document.createElement('div)
span.innerHTML = `<span id = "compute-text-wrapper">${text}</span>`
const app2 = document.querySelector('body') as  HTMLBodyElement
app2.appendChild(span)
const width = (document.querySelectore('#compute-text-wrapper) as HTMLElement).offsetWidth
document.getElementsByTagName('body')[0].removeChilod(span)
return width + 55
}

```
