import axios from 'axios';

export const ENVIAR_TWEET = 'ENVIAR_TWEET';
export const ATUALIZAR_TWEETS = 'ATUALIZAR_TWEETS';

export function enviarTweet(tweet, usuario) {
	//Por aqui o URL para post de novo tweet na api
	const url = `urlbacana`;
	//realiza o post, quais sao as informações interessantes pra gente?
	axios.post(url, {
		//EXEMPLO, O que o backend vai precisar para este post?
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