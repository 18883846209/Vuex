import vue from 'vue';
import vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

vue.use(vuex);
export default new vuex.Store({
	state: {
		list: [],
		n: 0
	},
	actions,
	mutations,
	getters
	// getters: {
	//   getList (state) {
	//     return state.list
	//   }
	// },
	// actions: {
	//   add (context, param) {
	//     context.commit('addevent', param)
	//   },
	//   del (context, text) {
	//     context.commit('delevent', text)
	//   }
	// },
	// mutations: {
	//   addevent (state, text) {
	//     state.list.push(text)
	//   },
	//   delevent (state, text) {
	//     let pos = state.list.indexOf(text)
	//     state.list.splice(pos, 1)
	//   }
	// }
});
