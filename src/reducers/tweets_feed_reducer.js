import { ATUALIZAR_TWEETS } from '../actions/index';

export default function (state = [], action) {
	switch(action.type) {
		case ATUALIZAR_TWEETS:
			//Supostamente estara mandado um novo array de tweets pro componente tweet-list
			//que vai renderizar e exibir os novos tweets
			return action.payload.data;
	}
	//um return default é obrigatorio
	return [
		{
			mensagem: 'oi'
		}
	];
}

