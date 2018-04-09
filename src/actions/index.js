import axios from 'axios';
import { history } from '../helpers/history.js';

//TYPE DISPATCH
export const ENVIAR_TWEET = 'ENVIAR_TWEET';
export const ATUALIZAR_TWEETS = 'ATUALIZAR_TWEETS';
export const AUTENTICADO = 'AUTENTICADO';
export const NAO_AUTENTICADO = 'NAO_AUTENTICADO';
export const ERRO_AUTENTICACAO = 'ERRO_AUTENTICACAO';
export const ERRO_CADASTRO = 'ERRO_CADASTRO';
export const LOGOUT = 'LOGOUT';
//URL API
export const URL_LOGIN = 'http://localhost/api/login';
export const URL_CADASTRO = 'http://localhost/api/user';
export const URL_GET_TWEETS = 'http://localhost/api/user/posts';
export const URL_CREATE_TWEET = 'http://localhost/api/post';

export function enviarTweet(tweet) {
	console.log(tweet);
	return async function (dispatch) {
		let token = localStorage.getItem('user');
		let header = `Authorization: Bearer  + ${token}`;
        console.log(header);
		//realiza o post, quais sao as informações interessantes pra gente?
		const request = await axios.post(URL_CREATE_TWEET, {
			post: tweet
		}, {
		 headers: { Authorization: 'Bearer '  + token }
		})
		.then(function () {
			dispatch(atualizaTweet());
		});
	}

}

export function atualizaTweet() {
	let token = localStorage.getItem('user');
		let headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + token
        }
	//Faz o GET e transforma em json pq o negocio vem como um objeto promise
	return async function(dispatch) {
		const request = await axios.get(URL_GET_TWEETS,{
			headers: { Authorization: 'Bearer '  + token }
		});
		console.log(request);
		dispatch({
			type: ATUALIZAR_TWEETS,
			payload: request
		});
	}

	return {
		//Fala pros reducers que ta na hora de atualizar os tweets e manda um json com os tweets para eles
		type: ATUALIZAR_TWEETS,
		payload: request
	}
}

export function signInAction(user) {
	console.log(user);
	return async (dispatch) => {
		try {
			const res = await axios.post(`${URL_LOGIN}`, user)
			.then(function (response) {
				history.push('/feed');
				dispatch(success());
			})
			.catch(function (error) {
				console.log(error);
				dispatch({
					type: ERRO_AUTENTICACAO,
					payload: 'Erro ao logar'
				})
			});
			localStorage.setItem('user', res.data.access_token);			
		} catch(error) {
			dispatch({
				type: ERRO_AUTENTICACAO,
				payload: {
					erro: 'Erro ao logar'
				}
			});
		}
	};
}

export function signUpAction(user) {
	return async (dispatch) => {
		try {
			const request = await axios.post(`${URL_CADASTRO}`, user)
			.then(function() {
				history.push("/");
			})
			.catch(function (error) {
				dispatch(erro());
			});			
		} catch (error) {
			dispatch({
				type: "ERRO_CADASTRO",
				payload: {
					erro: 'Erro ao cadastrar'
				}
			});
		}
	}
}

export function logoutAction() {
	return async( dispatch) => {
		localStorage.clear();
		history.push("/");
		dispatch({type: LOGOUT});
	}
}

/* 
Exemplo de um post. Devemos usar middleware ou .then?
chamar um get 
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

*/