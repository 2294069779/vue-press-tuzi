---
title: css预处理器-Sass
date: 2023-4-26
categories:
  - css
tags:
  - css
  - css预处理器
sticky: 1
---

#### sass

###### 全局变量在全局设置

```sass
$变量
```

###### 属性变量

```scss
#{} div {
  border-#{$side}: 1px solid $color;
}
```

###### 嵌套

```sass
<div class='a'>
	<div class='a-b></div>
<div>
-------
.a{
	&-b{                      //属性嵌套
		background{
            color：red         //属性嵌套
		}
	&:hover{
		color:red       // 伪类嵌套
	}
	}
}

```

###### 继承

```sass
.class1{
    color:red
}
.class2{
@extend .class1;         // 相关于 继承clasa1的color
font-size:14px;
}
```

###### 混合

```sass
 @mixin left($value:10px){   // 混合 left名 变量value  默认是10px
	color:red;
}
.class{
    @include left（4px）；
}
```

###### 引用外部样式

```sass
@import './'    // 不建议使用
```

###### sass 运算

```sass
-- 加减乘除 --
$width:10px;
div{
	width:$width + 10px;
	height:$width * 10px
	height:(10px / 2)
}
-- 拼接 --
div{
    content：'hello'+'11';
}
```

###### 命令

```sass
@mixin isHidden($bool:true){
    @if $bool{
		display:block;
	}
	@else{
        display:none;
	}
}
```

###### 循环

```sass
@for $i from 1 to 10 {
    .margin-#{$i}{
		left:#{$i}px;
	}
}

---each---
@each $item in a,b,c,d{
	.#$(item){                // 注意属性变量需要#
}
}

```
