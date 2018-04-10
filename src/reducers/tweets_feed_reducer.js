import { ATUALIZAR_TWEETS } from '../actions/index';

export default function (state = [], action) {
	switch(action.type) {
		case ATUALIZAR_TWEETS:
			return action.payload.data;
	}

	return [
		{
			mensagem: 'Erro ao exibir os tweets.'
		}
	];
}

