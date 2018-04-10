import React, { Component } from 'react';

import Navbar from './navbar.js';
import FormConta from './formConta.js';

class Conta extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<FormConta />
      		</div>
		)
	}
}

export default Conta;