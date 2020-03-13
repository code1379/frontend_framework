<template>
  <div class="input">
    <input type="text" v-model="myText"> <button @click="addItem">添加</button>
  </div>
</template>

<script>
import event from './event'
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      myText: this.text
    }
  },
  methods: {
    addItem(){
      // console.log(this.myText)
      this.$emit("sendVal", this.myText)
      // 自定义事件发射事件
      event.$emit("addItemByCustomComponent", this.myText)
      this.myText = ''
    }
  }
}
</script>

<style>

</style>