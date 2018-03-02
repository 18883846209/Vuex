<template>
	<div class="hello" :class="classObj">
		<!-- <input type="text" v-model="msg"> -->
		<!-- <p>your input: {{ msg }}</p> -->
		<div class="inputact">
			<input type="text" v-model="text" @input="inputValue" @keydown.13="add">
			<div class="delbtn" v-show="showdelbtn" @click="deltext">x</div>
			<button @click="add">添加事件</button>
		</div>
		<div class="eventList">
			<ul>
				<li v-for="item in getAdd" :key="item.id">
					{{ item.text }}
					<button @click="del(item.id)">删除</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	data () {
		return {
			text: '',
			showdelbtn: false,
			classObj: {
				'classA': true
			}
		};
	},
	mounted () {
		// const arr = [
		// 	{ id: 1, text: 'aa' },
		// 	{ id: 2, text: 'bb' },
		// 	{ id: 3, text: 'cc' },
		// 	{ id: 4, text: 'dd' },
		// 	{ id: 5, text: 'ee' }
		// ];
		// console.log(arr.filter((item, index) => index === 3));
		// // arr.map((item, index) => { console.log(item.text); });
		// const set = Array.from(new Set([1, 3, 3, 2, 5])); // 数组去重
		// console.log(set);
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
				this.showdelbtn = false;
				// console.log(this.$store.state.list);
			};
		},
		del (id) {
			this.$store.dispatch('delevent', id);
		},
		deltext () {
			this.text = '';
			this.showdelbtn = false;
		},
		inputValue () {
			if (this.text.trim().length > 0) {
				this.showdelbtn = true;
			} else {
				this.showdelbtn = false;
			}
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.inputact {
	position: relative;
	height: 30px;
	line-height: 30px;
	input {
		// border-radius: 8px;
		height: 28px;
		box-sizing: border-box;
		line-height: 28px;
		border: 1px solid #000;
		outline: none;
	}
	input[type="text"]:focus {
		border: 1px solid brown;
	}
	.delbtn {
		position: absolute;
		right: 136px;
		top: 0;
	}
}
.eventList {
	text-align: left;
	li {
		margin-bottom: 8px;
	}
}
</style>
