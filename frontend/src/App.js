import React, { Component } from 'react';
import './App.css';
// ui
import { Container } from 'semantic-ui-react';
// components
import Navbar from './components/navbar';

class App extends Component {
	render() {
		return (
			<Container>
				<Navbar></Navbar>
				<div>
					<p>
						This is some text.
					</p>
				</div>
			</Container>
		);
	}
}

export default App;
