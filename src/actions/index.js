import axios from 'axios';

//TYPE DISPATCH
export const ENVIAR_TWEET = 'ENVIAR_TWEET';
export const ATUALIZAR_TWEETS = 'ATUALIZAR_TWEETS';
export const AUTENTICADO = 'AUTENTICADO';
export const NAO_AUTENTICADO = 'NAO_AUTENTICADO';
export const ERRO_AUTENTICACAO = 'ERRO_AUTENTICACAO';
//URL API
export const URL_LOGIN = 'localhost/api/login';
export const URL_GET_TWEETS = 'localhost/api/user/posts';

export function enviarTweet(tweet, usuario) {
	//realiza o post, quais sao as informações interessantes pra gente?
	axios.post(URL_GET_TWEETS, {
		//EXEMPLO, O que o backend vai precisar para este post?
		//falta header(jwt)
		mensagem: tweet,
		usuario: usuario
	})
	//Apos o post completar, chama outra action para atualizar os tweets
	.then(function (response) {
		dispatch(atualizaTweet(usuario));
	});
	
	//sem payload?
	return {
		type: ENVIAR_TWEET
	};
}

export function atualizaTweet(usuario) {
	const url = 'urlbacanaparaget';
	//Faz o GET e transforma em json pq o negocio vem como um objeto promise
	const request = axios.get(url).then(response => response.json());

	return {
		//Fala pros reducers que ta na hora de atualizar os tweets e manda um json com os tweets para eles
		type: ATUALIZAR_TWEETS,
		payload: request
	}
}

export function signInAction({ email, password }, history) {
	return async (dispatch) => {
		try {
			const res = await axios.post(`${URL_LOGIN}`, { email, password});
			dispatch({ type: AUTENTICADO });
			localStorage.setItem('user_token', res.data.token);
			history.push('/feed');
		} catch(error) {
			dispatch({
				type: ERRO_AUTENTICACAO,
				payload: 'Erro ao logar'
			});
		}
	};
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