import { USUARIO_RECEBIDO, USUARIO_ATUALIZADO } from '../actions/index';

export default function(state={}, action) {
	switch(action.type) {
	case USUARIO_RECEBIDO:
  		return action.payload.data;
	case USUARIO_ATUALIZADO:
 		return action.payload.data;
	}
	return state;
}