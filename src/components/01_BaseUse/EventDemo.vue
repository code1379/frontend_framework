<template>
  <div>
    <p>{{ counter }}</p> 
    <button @click="increment1">+1</button>
    <button @click="increment2(2, $event)">+2</button>
  </div>
</template>

<script>
export default {
  name: 'EventDemo',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment1(event) {
      // 没有参数传递的话，直接默认第一个参数就是 event
      console.log("event", event, event.__proto__.constructor) // 是原生的event对象
      console.log(event.target) // 事件监听是在哪个对象上监听的
      console.log(event.currentTarget) // 注意：事件是被注册到当前元素的，和React不一样
      this.counter += 1
      // 1. event 是原生的
      // 2. 事件被挂载到当前元素
    },
    increment2(num, event) {
      // 传递参数的话，需要把 事假对象也传递进来
      console.log("event", event, event.__proto__.constructor)
      console.log(event.target)
      console.log(event.currentTarget)
      this.counter += num
    },
  }
}
</script>

<style>

</style>