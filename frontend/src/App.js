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
				<div>
					<Container>
						<Navbar />
					</Container>
					<Container style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
						<Route exact path="/" component={Home} />
					</Container>
				</div>
			</Router>
		);
	}
}

export default App;
