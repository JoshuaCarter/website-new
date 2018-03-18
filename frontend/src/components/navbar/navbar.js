import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// ui
import { Menu, Icon } from 'semantic-ui-react';
// import reducers

class Navbar extends React.Component {
	render() {
		return (
			<Menu size="large" inverted>
				<Link to="/">
					<Menu.Item header link>Joshua Carter</Menu.Item>
				</Link>
				<Link to="/skills">
					<Menu.Item link>Skills</Menu.Item>
				</Link>
				<Link to="/projects">
					<Menu.Item link>Projects</Menu.Item>
				</Link>
				<Link to="/resume">
					<Menu.Item link>Resume</Menu.Item>
				</Link>
				<Menu.Item href="https://github.com/JoshuaCarter/website-new" target="_blank" icon position="right">
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