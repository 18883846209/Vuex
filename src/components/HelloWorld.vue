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
          <button @click="del">删除</button></li>
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
    // const arr = [
    //   { id: 1, text: 'aa' },
    //   { id: 2, text: 'bb' },
    //   { id: 3, text: 'cc' },
    //   { id: 4, text: 'dd' },
    //   { id: 5, text: 'ee' }
    // ]
    // console.log(arr.filter(item => item.id === 3))
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
      this.text = ''
      console.log(this.$store.state.list)
    },
    del () {
      this.$store.dispatch('del', this.text)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
input {
  border-radius: 8px;
  outline: none;
  height: 30px;
  line-height: 30px;
}
.eventList {
  text-align: left;
  li {
    margin-bottom: 8px;
  }
}
</style>
