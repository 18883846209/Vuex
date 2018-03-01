import * as type from './mutations-types.js';

export default {
	[type.ADDEVENT] (state, obj) {
		state.n++;
		obj.text.id = state.n;
		state.list.push(obj.text);
	},
	[type.DELEVENT] (state, obj) {
		// let pos = state.list.indexOf(obj.text);
		state.list.filter((o, i) => {
			if (o.id === obj) {
				state.list.splice(i, 1);
			}
		});
	}
};
