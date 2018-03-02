import * as type from './mutations-types.js';

export default {
	[type.ADDEVENT] (state, obj) {
		state.n++;
		obj.text.id = state.n;
		state.list.push(obj.text);
	},
	[type.DELEVENT] (state, id) {
		// let pos = state.list.indexOf(obj.text);
		if (state.list[id] === id) {
			state.list.splice(id, 1);
		} else {
			state.list.filter((item, index) => {
				if (item.id === id) {
					state.list.splice(index, 1);
				}
			});
		}
	}
};
