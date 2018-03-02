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
		<p>文字</p>
		<p>文字</p>
		<p>文字</p>
		<p>文字</p>
		<p>文字</p>
		<p>文字</p>
		<p>文字</p>
		<p>文字</p>
		<p>文字</p>
		<p>文字</p>
		<p>文字</p>
		<p>文字</p>
		<p>文字</p>
		<p>文字</p>
		<p>文字</p>
		<p>文字</p>
		<p>文字</p>
		<p>文字</p>
		<p>文字</p>
		<p>文字</p>
	</div>
</template>

<script>
let scrollAction = {x: 'undefined', y: 'undefined'};
let scrollDirection;
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
		let that = this;
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
		window.onscroll = function () {
			that.scrollFunc();
			console.log(scrollDirection);
		};
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
		},
		scrollFunc () { // 判断滚动方向
			if (typeof scrollAction.x === 'undefined') {
				scrollAction.x = window.pageXOffset;
				scrollAction.y = window.pageYOffset;
			}
			let diffX = scrollAction.x - window.pageXOffset;
			let diffY = scrollAction.y - window.pageYOffset;
			if (diffX < 0) {
				// Scroll right
				scrollDirection = 'right';
			} else if (diffX > 0) {
				// Scroll left
				scrollDirection = 'left';
			} else if (diffY < 0) {
				// Scroll down
				scrollDirection = 'down';
			} else if (diffY > 0) {
				// Scroll up
				scrollDirection = 'up';
			} else {
				// First scroll event
				scrollDirection = 'noscroll';
			}
			scrollAction.x = window.pageXOffset;
			scrollAction.y = window.pageYOffset;
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
