import { AUTENTICADO, NAO_AUTENTICADO, ERRO_AUTENTICACAO } from '../actions/index';

export default function(state={}, action) {
	switch(action.type) {
	case AUTENTICADO:
  		return { ...state, autenticado: true };
	case NAO_AUTENTICADO:
 		return { ...state, autenticado: false };
	case ERRO_AUTENTICACAO:
		return { ...state, error: action.payload };
	}
	return state;
}