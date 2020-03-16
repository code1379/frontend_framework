<template>
  <div v-if="todoList.length !== 0">
    <ul>
      <li v-for="(item, index) in todoList" :key="item.id" @click="deleteItem(index)">{{item.todo}}</li>
    </ul>
  </div>
</template>

<script>
import event from './event'
export default {
  props: {
    todoList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {
    console.log('list created');
  },
  beforeUpdate() {
    console.log('list beforeUpdate')
  },
  updated() {
    console.log('list updated')
  },
  mounted(){
    console.log('list mounted')
    // vue监听自定义事件
    event.$on('addItemByCustomComponent', this.recieveCustomComponent)
  },
  beforeDestroy() {
    console.log('list before destroy');
    // 及时解绑，否则可能造成内存泄露
    event.$off('addItemByCustomComponent', this.recieveCustomComponent)
  },
  destroyed() {
    console.log('list destroyed')
  },
  methods: {
    deleteItem(index) {
      // console.log(index)
      this.$emit("delete", index)
    },
    recieveCustomComponent(item) {
      console.log('recieveCustomComponent ' + item)
    }
  }
}
</script>

<style>

</style>