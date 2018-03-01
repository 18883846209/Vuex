export default {
	addevent: ({ commit }, obj) => commit('ADDEVENT', { text: obj }),
	delevent: ({ commit }, obj) => commit('DELEVENT', obj)
};
