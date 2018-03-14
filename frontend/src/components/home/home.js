import React from 'react';
import { connect } from 'react-redux';
//import reducers

class Home extends React.Component {
	render() {
		return (
			<div>
				<p>Home</p>
			</div>
		);
	}
}

const mapStateToProps = function (store) {
	return {
		//react_prop: store.sub_store.prop
	};
}

const mapDispatchToProps = function (dispatch) {
	return {
		//react_prop: (param) => { dispatch(redux_action(param)) }
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);