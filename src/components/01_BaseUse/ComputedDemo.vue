<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ myName }}</p>
    <button @click="setMyName">click me to change my name</button>
  </div>
</template>

<script>
export default {
  name: 'ComputedDemo',
  data() {
    return {
      firstName: 'bryant',
      lastName: 'kobe'
    }
  },
  computed: {
    name() {
      return this.firstName + ' ' + this.lastName
    },
    myName: {
      set(val) {
        console.log("setMyName")
        this.firstName = val.split(' ')[0]
        this.lastName = val.split(' ')[1]
      },
      get() {
        return this.lastName + ' ' + this.firstName
      }
    }
  },
  methods: {
    setMyName() {
      this.myName = 'dell lee'
    }
  }
}
</script>

<style>

</style>