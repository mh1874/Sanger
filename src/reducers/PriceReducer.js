export default function(state=[], action) {
	switch(action.type) {
		case "GET_Price":
			return action.payload;
		default:
			return state;
	}
}
