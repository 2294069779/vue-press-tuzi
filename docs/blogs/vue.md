---
title: vue3-api
date: 2023-4-28
categories:
  - vue
tags:
  - vue
  - 框架
sticky: 1
---

### vue3

- vue3 没有 this，两种类型用法

  - 获取当前组件实例

  - 获取全局实例

    ```js
    import { getCurrentInstance } from 'vue'
    const { proxy，appContext} = getCurrentInstance()
    // proxy 就是当前组件实例，可以理解为组件级别的this，没有全局、路由、状态管理之类的

    const global = appContext.config.globalProperties //全局实例
    app.config.globalProperties.$echarts = echarts;  // 全局注册
    app.config.globalProperties.name='123'
    global.name //调用
    ```

- 获取 DOM(ref)

  - 方法一:ref

    ```
    const formRef=ref<InstanceType<typeof ChildComponent>>(null)
    ```

  - 方法二通过当前组件实例获取组件中的 DOM

    ```JS
    proxy.$refs.formRef.validate(()=>{})
    const formRef = ref<InstanceType<typeof ElForm>>()
    formRef.value?.validate((valid) => { ... })
    ```

- vue3 一般挂载后使用，因为 setup 是在创建好，才有的

- 销毁组件的时候使用 ，例如清除定时器、监听之类的

  ```js
  onBeforeUnmount(()=>{})
  onDeactivated(()=>{}})
  ```

- ref 和 reactive

  - ref // reactive，单表单数据随着 reactive 的变化而变化
  - toRef // 用于结构 //用于取出响应式里面的属性

- watch

  - 监听

    ```js
    //数值
    watch（name，（newName，oldName）=>{}）
    //属性，路由等
    watch(()=> data.age,(new,old)=>{}）
     // 监听多个属性，数组放多个值，返回的新值和老值也是数组形式
    watch([data.age, data.money], ([newAge, newMoney], [oldAge, oldMoney]) => { ... })
    ```

- computed

  ```js
  const a = computed(() => {});
  ```

- nextTick(在元素更新后执行的延迟回调)

  ```js
  nextTick(()=>{

  })
  await nextTick
  awaiy nextTick
  ```

- hooks 一个函数，可以传参，相当于封装一个公用方法

  ```js
  export const getData=（）=>{}
  export default function un(){
  }

  import un ,{getData} from 'xx.js'
  ```

- 编辑

  ```js
  // 父组件
  v-model：name="name"
  const emit = defineEmit(['update：name'，'update:age'])
  emit('update:name','这是新的名字')
  ```

- 样式穿透

  vue2：/deep/

  vue3 ：:deep

css 绑定 js 变量

```js
<template>
</template
script
const str = ref('#f00')

.name{
    background-color:v-bind(str);
}
```
