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

###### 容器和项目

容器：container 项目：item grid只会对顶层item生效

###### 行与列

行 row 列：cloumn

###### 单元格

行和列的交叉区域，称为单元格

n-row，n-cloumn =n * n

###### 网格线

划分网格的线，为网格线，正常情况下 多少row 和多少cloumn 就有row+1，cloumn+1条线

###### 容器属性

display：grid  // 指定容器采用网格布局

```js
元素1
元素容器2
元素3
```

display：inline-grid  // 指定div是一个行内元素，该元素内部采用网格布局 

```例如
元素1 元素容器 元素2
```

###### 注意

设置为网格布局以后，容器子元素（项目）的以下属性将失效：

```
是容器内的元素
float：浮动
display：inline-block 行内布局
display：table-table-cell 表格布局
vertical-align //行内元素的基线的垂直对齐方式，允许指定负长度值和百分比值
column-* 等设置都将失效
```

###### grid-template-columns-grid-template-rows

grid-template-columns 指定每一列的列宽

grid-template-rows   定义每一行的行高

除了使用绝对单位，也可以使用百分比

```lizi
.container{
display:grid;
grid-template-columns:20px 20px 20px;   三列
grid-template-rows:20px 20px 20px;		三行     // 33.33% 33.33% 33.33%
}
```

###### repeat

为了优化上述重复的值可以使用repeat（）函数

```js
.container{
	display:grid;
    grid-template-columns:repeat(3,20px)
    grid-template-rows:repeat(3,20px)
}
```

repeat() 接受两个参数，第一个参数是重复的次数，第二个参数是需要重复的值

repeat() 还可以重复某种模式也是可以的

```js
.container{
    grid-template-rows:repeat(2,100px 20px 80px) //重复两次 第一行是100 第二行是 20 一直重复2次
}
```

###### auto-fill

单元格大小是固定的，容器container是不确定的，就可以配合repeat进行填充

```例子
.container{
	display:grid;
	grid-template-columns:repeat(auto-fill,100px)  //自动填充每列宽度100px，
}
```

###### fr

fr为了方便表示比例关系，网格布局提供了fr关键字(片段)

```例子
.container {
   display:grid;
   grid-template-columns:150px 1fr 2fr; // 表示第一列的宽度为150像素，第二列的宽度是第三列的一半
}
```

###### minmax

函数产生一个长度范围， 表示长度就是这个范围之中，它接受两个参数，分别为最小值和最大值

```例子
grid-tempalte-columns：1fr 1fr minmax(100px,1fr) //表示列宽不小于100px，不大于1fr
```

###### auto

```
grid-template-columns:100px auto 100px  //自动，基本等于该列单元格的最大宽度
```

###### 布局实例（重点）

grid-template-columns 属性对于网页非常有用，

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
