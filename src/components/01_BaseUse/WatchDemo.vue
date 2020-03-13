<template>
  <div>
    {{ message }}
    <button @click="changeMessage">click me</button>
    <li v-for="(value, name, index) in person" :key="name">
      {{ index }} {{ name }} {{ value }}
    </li>
    <button @click="changeName">change name</button>
  </div>
</template>

<script>
export default {
  name: "WatchDemo",
  data() {
    return {
      message: "hi",
      person: {
        name: "dell",
        age: 18,
        grade: {
          math: 78,
          english: 88
        }
      }
    };
  },
  methods: {
    changeMessage() {
      this.message = "hello";
    },
    changeName() {
      this.person.name = 'lee'
      // this.person.grade.math = 66
    }
  },
  watch: {
    message(newVal, oldVal) {
      console.log('message change')
      // 值类型， 可以正常拿到
      console.log(newVal, oldVal);
    },
    person:{
      handler(newVal, oldVal) {
        console.log('引用对象 person change')
        // 引用类型， 拿不到 oldVal 两个值相同
        console.log(newVal, oldVal)
      },
      deep: true
    }
  }
};
</script>

<style>
</style>