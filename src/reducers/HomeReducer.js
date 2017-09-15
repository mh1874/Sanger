export default function(state=[], action) {
	switch(action.type) {
		case "GET_HOME":
			return action.payload;
		default:
			return state;
	}
}
