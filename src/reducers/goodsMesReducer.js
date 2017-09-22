export default function(state=[], action) {
	switch(action.type) {
		case "GET_GoodsMes":
			state.push(action.payload)
			return state;
		default:
			return state;
	}
}
