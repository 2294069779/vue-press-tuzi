---
title: css布局-Grid网格布局
date: 2023-4-18
categories:
  - css
tags:
  - css
  - 页面布局
sticky: 1
---

# Grid 网格

- display：grid/inline-grid 创建网格容器

- grid-template-rows：1fr 1fr 指定二行

- grid-template-colums:1fr 1fr 1fr 指定三列

###### 超过指定网格轨道个数 ，将会在隐式创建行和列

###### 超过指定网格轨道的子节点就是隐式网格

###### 按照默认，自动定义尺寸，根据内容改变尺寸

grid-auto-rows 和 grid-auto-colums 属性来定义一个设置大小尺寸的轨道

```l
先计算隐式网格内容的值。总尺寸减去隐式网格内容的值，在平分网格轨道个数
```

## 网格线

![1678763914114](C:\Users\wangqin\AppData\Roaming\Typora\typora-user-images\1678763914114.png)通过网格线可以实现网格元素多行多列的效果。

grid-column-start，grid-column-end，grid-row-start，grid-row-end

或者 grid-column，grid-row

还可以通过 span：xx 来表示

`rid-area`的顺序是`row-start` / `column-start` / `row-end` / `column-end`

使用 grid-column-gap/grid/grid-gap 设置网格间距

//行与行之间是 5px，列列之间是 2px

```js
grid:5px 2px ; ===grid-row-gap:6px;grid-column-gap:2px;
```

##### 技巧

```css
grid-template-colums:repeat(3,1fr)===grid-template-colums:1fr 1fr 1fr;

```

当父容器的尺寸是不确定的时候：auto-fill（自动填充）

```css
grid-template-rows: repeat(auto-fill, 50px); //每一行50px，如果小于50就会留白
```

每一行 50px，能放几列就放几列，不够 9 列的部分空白

如果不希望有空白，通过 minmax 函数指定最小值

```css
grid-template-columns: repeat(
  auto-fill,
  minmax(50px, 1fr)
); //最小一列，最小50px，然后会自使用
```

与 flex 类型，Grid 布局有 justify-content，justify-item，align-content，align-item 用于对齐。

另外 place-content 和 place-item 用于缩写
