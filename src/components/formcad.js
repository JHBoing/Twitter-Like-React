import React,{Component} from 'react';


class FormCad extends Component{



	render(){
		return(

			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12">
					<form className="form-inline" id="form-cad">
						<div className="form-group">
							<label htmlFor="nome" className='control-label'>	Nome:</label>
							<input type='text'  className="formcad form-control" id="nome" placeholder="Nome" name="nome"></input>
						</div>

						<div className="form-group">
							<label htmlFor="email" className='control-label'>	E-mail:</label>
							<input type='email'  className="formcad form-control" id="emailcad" placeholder="Enter email" name="email"></input>
						</div>

						<div className="form-group">
							<label htmlFor="senhacad" className="control-label">	Password:</label>
							<input type='password'  className=" formcad form-control" id="senhacad" placeholder="*******" name="senha" ></input>
						</div>

						<div className="form-group">
							<label htmlFor="senhacad2" className="control-label">	Re-Password:</label>
							<input type='password'  className=" formcad form-control" id="senhacad2" placeholder="*******" name="senha" ></input>
						</div>
						
						<input type="submit" value="Regiter" id ="button"/>
							
					</form>

		</div>
		</div>

			



			);


	}

}

export default FormCad;
