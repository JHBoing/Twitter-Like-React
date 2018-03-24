export default function () {
	//Neste reducer devo fazer a requisição http para buscar os tweets/json
	return[
		{ 
			mensagem: 'Adoro estudar brainfuck',
			imagem: 'http://thecatapi.com/api/images/get?format=src&size=small'
		},
		{ 
			mensagem: 'Java é super divertido',
			imagem: 'http://thecatapi.com/api/images/get?format=src&size=small'
		},
		{ 
			mensagem: 'Estrutura de dados é super facil',
			imagem: 'http://thecatapi.com/api/images/get?format=src&size=small'
		},
		{ 
			mensagem: 'A aranha arranha a rã. A rã arranha a aranha. Nem a aranha arranha a rã. Nem a rã arranha a aranha.',
			imagem: 'http://thecatapi.com/api/images/get?format=src&size=small'
		}
	];
}