// const Events = require('events');
// const ev = new Events();
// //订阅
// ev.on('price',()=>{
//     console.log('123');
// })
// ev.on('price',()=>{
//     console.log('456');
// })
// //发布
// ev.emit('price');
const subPub = {
    'price': [],
    'paraer': []
  }
  for (let i = 0; i < subPub.price.length; i ++) {
    console.log('---', subPub.price[i]);
    subPub.price[i]();
  }
  // price 对应的方法执行一遍
  function foo() {
    console.log('foo');
  }
  // foo: [ foo ]
  // 在 subPub 上面添加一个 value 为数组的 key (foo)
  // 把 foo 放到数组去
  subPub.foo = [foo];
  console.log(subPub);
  