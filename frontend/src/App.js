import React, { Component } from 'react';
import './App.css';
// router
import { BrowserRouter as Router, Route } from 'react-router-dom';
// ui
import { Container } from 'semantic-ui-react';
// components
import Navbar from './components/navbar';
import Home from './components/home';

class App extends Component {
	render() {
		return (
			<Router>
				<Container style={{ minHeight: '100vh' }}>
					<Navbar />
					<main>
						<Route exact path="/" component={Home} />
						<Route exact path="/skills" component={Home} />
						<Route exact path="/projects" component={Home} />
					</main>
				</Container>
			</Router>
		);
	}
}

export default App;
