import React ,{Component} from 'react';

import Logo	from './Logoimg';
import FormCadastro from './formCadastro';

class Cadastro extends Component{
	render() {
		return(
			<div id="teste">	
				<Logo/>
				<FormCadastro/>
			</div>
		);
	}
}

export default Cadastro;