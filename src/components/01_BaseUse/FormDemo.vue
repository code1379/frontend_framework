<template>
  <div class="form-demo">
    <p>输入框：{{ name }}</p>
    <input type="text" v-model.trim="name">
    <input type="text" v-model.lazy="name">
    <input type="text" v-model.number="age">

    <p>多行文本</p>
    <textarea v-model="desc"></textarea>
    <!-- 注意 <textarea>{{ desc }}</textarea> 是不被允许的-->

    <p>复选框</p>
    <input type="checkbox" v-model="checked">
    <p>多个复选框</p>
    <input type="checkbox" v-model="checkedName" value="Jack" id="Jack">
    <label for="Jack">Jack</label>
    <input type="checkbox" v-model="checkedName" value="Mike" id="Mike">
    <label for="Mike">Mike</label>
    <input type="checkbox" v-model="checkedName" value="Lily" id="Lily">
    <label for="Lily">Lily</label>

    <p>单选框 gender</p>
    <input type="radio" v-model="sex" value="1" id="female">
    <label for="female">female</label>
    <input type="radio" v-model="sex" value="0" id="male">
    <label for="male">male</label>

    <p>下拉菜单</p>
    <select name="" id="" v-model="select">
      <option disabled value="">请选择</option>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
    <p>下拉多选</p>
    <select v-model="selectList" multiple name="" id="">
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
    <br>
    <button @click="showAll">show all</button>
  </div>
</template>

<script>
export default {
  name: 'FormDemo',
  data() {
    return {
      name: 'dell',
      age: 18,
      desc: 'lorem',
      checked: false,
      sex: 0,
      checkedName: [],
      select: '',
      selectList: []
    }
  },
  methods: {
    showAll(){
      console.log(this.name, this.age, this.desc, this.checked, this.sex, this.select, this.selectList, this.checkedName)
    }
  },
}
</script>

<style>

</style>