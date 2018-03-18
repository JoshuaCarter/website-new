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
				<Container style={{ minHeight: '100vh', backgroundColor: '#f7f7f7' }}>
					<Navbar />
					<Route exact path="/" component={Home} />
				</Container>
			</Router>
		);
	}
}

export default App;
