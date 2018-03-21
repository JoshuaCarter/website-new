
const defaults = {
	sidebar_open: false,
};

export default function reducer(state = defaults, action) {
	switch (action.type) {
		case 'SIDEBAR_SET_STATE': {
			return { ...state, sidebar_open: action.payload };
		}
		default: {
			return { ...state };
		}
	}
}


export function sidebarSetState(open) {
	return (dispatch) => {
		dispatch({ type: 'SIDEBAR_SET_STATE', payload: open });
	};
}