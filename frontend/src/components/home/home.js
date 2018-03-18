import React from 'react';
import './style.css';
import { connect } from 'react-redux';
// ui
import { Container, Header, Divider, Icon } from 'semantic-ui-react';
// import reducers

class Home extends React.Component {
	render() {
		return (
			<main id="main">
				<Container text>
					<Header as="h1">Hi, I'm Josh</Header>
					<Divider />
					<p>And this is my personal website.</p>
					<p>I'm a budding web developer who's working hard to learn the <strong>bazillion</strong> tools used to make quality websites. This website is a way for me to demonstrate what I've learned and acts as a portal to information on my projects and skills.</p>
					<p>I used to teach C++/C# native app development for windows. This is fancy talk for "I don't want to tell you that I taught programming for video games". Why? Well, sometimes people hear this and worry that my real passion must be games, but honestly, I felt out of love with the games industry pretty hard and while ago.</p>
					<p>My real passion is programming, and while I obviously have my preferrences and scrupals, I mostly don't mind what language I use or what I'm building, but so far web apps have appealed to me the most. Currently I'm digging JavaScript (ES6 is a godsend) and I'd like to put my C++ skills to use in Golang in the future.</p>
					<p>Now, if only I could convince someone to pay me to do all this ;)</p>
				</Container>
				<Container textAlign="center">
					<Header as="h4">Download My Resume</Header>
					<Icon as="i" name="file pdf outline" size="huge" onClick={this.onClick} link />
				</Container>
			</main>
		);
	}

	onClick() {
		console.log("totes downloading pdf");
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