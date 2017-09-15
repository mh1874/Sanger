export default function(state=[], action) {
	switch(action.type) {
		case "GET_Classify":
			return action.payload;
		default:
			return state;
	}
}
