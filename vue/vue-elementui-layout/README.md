## babel
js的语法编译器
class关键词 -> babel -> es5 的代码
里面有丰富的插件机制
vue提供了transform-vue-jsx 负责将template编译为js


```js
<el-row>
  <el-col>12</el-col>
</el-row>

h("el-row", [h("el-col", ["12"])]);
```

<template>
<!-- <section></section> -->
  <div class="my-el-row">
      <slot name="a"></slot>
  </div>
  <!-- h('MyRow') -->
</template>
```