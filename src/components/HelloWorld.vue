<template>
  <div class="hello">
    <!-- <input type="text" v-model="msg"> -->
    <!-- <p>your input: {{ msg }}</p> -->
    <input type="text" v-model="text">
    <button @click="add">添加事件</button>
    <div class="eventList">
      <ol>
        <li v-for="item in getAdd" :key="item.index">
          {{ item }}
          <button>删除</button></li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      text: ''
    }
  },
  mounted () {
    console.log(this.$store)
  },
  computed: {
    getAdd () {
      return this.$store.getters.getList
    }
  },
  methods: {
    add () {
      this.text = this.text === '' ? '请输入事件' : this.text
      this.$store.dispatch('add', this.text)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.eventList {
  text-align: left;
}
</style>
