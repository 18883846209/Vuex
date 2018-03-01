<template>
	<div class="hello">
		<!-- <input type="text" v-model="msg"> -->
		<!-- <p>your input: {{ msg }}</p> -->
		<input type="text" v-model="text">
		<button @click="add">添加事件</button>
		<div class="eventList">
			<ul>
				<li v-for="item in getAdd" :key="item.id">
					{{ item.text }}
					<button @click="del(item.id)">删除</button></li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	data () {
		return {
			text: ''
		};
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
			return this.$store.getters.getList;
		}
	},
	methods: {
		add () {
			let param = {
				id: 0,
				text: ''
			};
			param.text = this.text.trim();
			if (param.text) {
				this.$store.dispatch('addevent', param);
				this.text = '';
				console.log(this.$store.state.list);
			};
		},
		del (id) {
			this.$store.dispatch('delevent', id);
		}
	}
};
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
