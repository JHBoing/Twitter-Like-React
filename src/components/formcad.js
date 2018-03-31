import React,{Component} from 'react';


class FormCad extends Component{



	render(){
		return(

			<div className="row" id="form-cad">
					<div className="col-md-12">
						<form  className="form-horizontal" >
							<div className="form-group">
								<label htmlFor="Nome" className='form'>	Nome:</label>
								<input type="text" className="form form-control" id="nome" placeholder="Nome"></input>
							</div>

							<div className="form-group">
								<label htmlFor="email" className="form ">	E-mail:</label>
								<input type='email'  className="form form-control" id="email" placeholder="Enter E-mail" name="email"></input>
							</div>
							<div className="form-group">
								<label htmlFor="senha" className="form">	Password:</label>
								<input type='password'  className=" form form-control" id="senha" placeholder="*********" name="senha" ></input>
							</div>

							<div className="form-group">
								<label htmlFor="re-senha" className="form">	Re-Password:</label>
								<input type='password'  className=" form form-control" id="re-senha" placeholder="*********" name="senha" ></input>
							</div>


							<input type="submit" value="Register" id="btn-register"/>

						</form>


					</div>

					<div className="row" id="login-link">
					<div className="col-xs-12 col-sm-12 col-md-12"> 
						<a href="#">Log in</a>
						
					</div>
				</div>

			</div>

			



			);


	}

}

export default FormCad;
