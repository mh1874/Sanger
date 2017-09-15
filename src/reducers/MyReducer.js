export default function(state=[], action) {
	switch(action.type) {
		case "GET_MY":
			return action.payload;
		default:
			return state;
	}
}
