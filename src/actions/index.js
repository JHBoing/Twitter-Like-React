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
export const USUARIO_ATUALIZADO = 'USUARIO_ATUALIZADO';
export const USUARIO_RECEBIDO = 'USUARIO_RECEBIDO';
//URL API
export const URL_LOGIN = 'http://localhost/api/login';
export const URL_LOGOUT = 'http://localhost/api/logout';
export const URL_CADASTRO = 'http://localhost/api/user';
export const URL_GET_TWEETS = 'http://localhost/api/user/posts';
export const URL_CREATE_TWEET = 'http://localhost/api/post';
export const URL_ME = 'http://localhost/api/me';
export const URL_EDIT_USER = 'localhost/api/user/';

export function enviarTweet(tweet) {
	return async function (dispatch) {
		let token = localStorage.getItem('user');
		//realiza o post, quais sao as informações interessantes pra gente?
		const request = await axios.post(URL_CREATE_TWEET, {
			post: tweet
		}, {
			headers: { Authorization: 'Bearer ' + token }
		})
		.then(function () {
			dispatch(atualizaTweet());
		});
	}

}

export function atualizaTweet() {
	let token = localStorage.getItem('user');
	//Faz o GET e transforma em json pq o negocio vem como um objeto promise
	return async function(dispatch) {
		const request = await axios.get(URL_GET_TWEETS, {
			headers: { Authorization: 'Bearer ' + token }
		});
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
	return async (dispatch) => {
		try {
			const res = await axios.post(URL_LOGIN, user);
			localStorage.setItem('user', res.data.access_token);
			if (res.data.access_token) {
				history.push('/feed');
			} else {
				dispatch({
					type: ERRO_AUTENTICACAO,
					payload: {
						erro: 'Erro ao logar'
					}
				});
			}
		} catch(error) {
			console.log(error);
		}
	};
}

export function signUpAction(user) {
	return async (dispatch) => {
		try {
			const request = await axios.post(URL_CADASTRO, user)
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
	return async(dispatch) => {
		try {
			localStorage.clear();
			history.push("/");
			dispatch({type: LOGOUT});
		} catch (error) {
			console.log(error);
		}
	}
}

export function getConta() {
	console.log("entrou");
	return async(dispatch) => {
		let token = localStorage.getItem('user');
		return async function(dispatch) {
			const request = await axios.post(URL_ME, {
				headers: { Authorization: 'Bearer ' + token }
			});
			console.log(request);
			dispatch({
				type: USUARIO_RECEBIDO,
				payload: request
			});
		}
	}
}

export function atualizaConta(user) {
	console.log("entrou no atualiza conta");
	return async(dispatch) => {
		let token = localStorage.getItem('user');
		return async function(dispatch) {
			const request = await axios.post(`${URL_ME}${user.id}`, {
				headers: { Authorization: 'Bearer ' + token }
			});
			dispatch(getConta());
		}
	}
}