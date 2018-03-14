import React from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'semantic-ui-react';
//import reducers

class Navbar extends React.Component {
	render() {
		return (
			<Menu size="large" inverted>
				<Menu.Item header href="/">Joshua Carter</Menu.Item>
				<Menu.Item href="/">Resume</Menu.Item>
				<Menu.Item href="/">Stuff</Menu.Item>
				<Menu.Item href="https://github.com/JoshuaCarter" target="_blank" icon position="right">
					<Icon name="github" size="large" />
				</Menu.Item>
				<Menu.Item href="https://linkedin.com/in/joshua-carter-dev" target="_blank" icon>
					<Icon name="linkedin" size="large" />
				</Menu.Item>
			</Menu >
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);