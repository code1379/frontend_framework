<template>
  <div>
    <h4>自定义 v-model</h4>
    <!-- 例如：vue 颜色选择器 -->
    <input type="text"
    :value="text" @input="$emit('change', $event.target.value)">
    <hr>
    <!--  
      1. 上面的 input 使用的 :value 而不是 v-model
      2. 上面发出的事件 change 和 model.event 是对应起来的
      3. :value的 text 和 props.text 还有 model.prop的 text 是对应的
    -->

    <!-- 实现原理 -->
    <div>{{message}}</div>
    <!-- 
      @change当输入框失焦的时候触发而且在elementUI中使用change时是这样的@visible-change
      @input是输入框发生变化时触发，也就是说输入框一动就出触发了
    -->
    <input type="text" :value="message" @input="handleInputChange">
  </div>
</template>

<script>
export default {
  model: {
    prop: 'text', // 对应props里的 text 属性
    event: 'change'
  },
  props:{ 
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      message: '不要回复'
    }
  },
  methods: {
    handleInputChange(e) {
      console.log(e.target.value)
      console.log(e)
      this.message = e.target.value
    }
  },
}
</script>

<style>

</style>