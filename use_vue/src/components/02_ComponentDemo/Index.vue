<template>
  <div class="todo-list">
    <input type="text" v-model="todo" @keyup.enter="addItem"> <button @click="addItem" >添加</button>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{item}}</li>
    </ul>
    <hr>
    <Input :text="text" @sendVal="getVal"/>
    <List :todoList="todoList" @delete="handleDelete"/>
  </div>
</template>

<script>
import Input from './Input'
import List from './List'
export default {
  components: {
    Input,
    List
  },
  data() {
    return {
      todo: '',
      list: [],
      text: '',
      todoList: []
    }
  },
  methods: {
    addItem() {
      this.list.push(this.todo)
      this.todo = ''
    },
    getVal(val) {
      // console.log(val)
      this.todoList.push({id: `id-${this.todoList.length}`, todo: val})
    },
    handleDelete(index) {
      this.todoList.splice(index, 1)
    }
  },
  created() {
    console.log('index created');
  },
  mounted() {
    console.log('index mounted')
  },
  beforeUpdate() {
    console.log('index beforeUpdate')
  },
  updated() {
    console.log('index updated')
  },
  beforeDestroy() {
    console.log('index before destroy');
  },
  destroyed() {
    console.log('index destroyed')
  }
}
</script>

<style>

</style>