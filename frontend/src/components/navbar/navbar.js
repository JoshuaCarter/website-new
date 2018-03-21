import React from 'react';
import './navbar.css';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
// ui
import { Menu, Container, Icon, Sidebar } from 'semantic-ui-react';
// import reducers
import nav from '../../reducers/nav';

const NavItem = (props) => {
	return (
		<Menu.Item as={NavLink} {...props}></Menu.Item>
	);
};

const IconLink = (props) => {
	return (
		<Menu.Item href={props.href} target="_blank" icon>
			<Icon name={props.icon} size="large" />
		</Menu.Item>
	);
};

const IconBtn = (props) => {
	return (
		<Menu.Item icon onClick={props.onClick}>
			<Icon name={props.icon} size="large" />
		</Menu.Item>
	);
};

class Navbar extends React.Component {

	github = "https://github.com/JoshuaCarter/website-new";
	linkedin = "https://linkedin.com/in/joshua-carter-dev";

	onSidebarClick() {
		this.props.sidebarSetState(!this.props.sidebar_open);
	}

	renderMenuItems() {
		let items = [
			<NavItem key="skills" to="/skills" content="SKILLS" />,
			<NavItem key="projects" to="/projects" content="PROJECTS" />,
			<IconLink key="github" href={this.github} icon="github" />,
			<IconLink key="linkedin" href={this.linkedin} icon="linkedin" />,
		];
		return items;
	}

	render() {
		let burger = <IconBtn icon="sidebar" onClick={() => { this.onSidebarClick() }} />;

		return (
			<nav>
				<Menu fixed="top" size="large" inverted borderless>
					<Container>
						<NavItem to="/" header exact content={<h1>Joshua Carter</h1>} />
						<Menu.Item position="right" />
						{this.renderMenuItems()}
						{burger}
					</Container>
				</Menu>
				<Sidebar
					as={Menu}
					animation='overlay'
					width='thin'
					direction='right'
					visible={this.props.sidebar_open}
					icon='labeled'
					vertical
					inverted>
					{burger}
					{this.renderMenuItems()}
				</Sidebar>
				<Sidebar.Pushable >
					<Sidebar.Pusher />
				</Sidebar.Pushable>
			</nav >
		);
	}
}

const mapStateToProps = function (store) {
	return {
		//react_prop: store.sub_store.prop
		sidebar_open: store.nav.sidebar_open,
	};
}

const mapDispatchToProps = function (dispatch) {
	return {
		//react_prop: (param) => { dispatch(redux_action(param)) }
		sidebarSetState: (open) => { dispatch(nav.sidebarSetState(open)) },
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));