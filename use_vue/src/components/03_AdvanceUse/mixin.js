export default {
  data() {
    return {
      city: '杭州',
    }
  },
  methods: {
    alertName() {
      alert(this.name)
    }
  },
  mounted() {
    console.log('mixin mounted', this.name)
  },
}