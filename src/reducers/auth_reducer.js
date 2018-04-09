import { AUTENTICADO, NAO_AUTENTICADO, ERRO_AUTENTICACAO, ERRO_CADASTRO, LOGOUT } from '../actions/index';

export default function(state={}, action) {
	switch(action.type) {
	case AUTENTICADO:
  		return { ...state, autenticado: true };
	case NAO_AUTENTICADO:
 		return { ...state, autenticado: false };
	case ERRO_AUTENTICACAO:
		return { ...state, error: action.payload };
	case ERRO_CADASTRO:
		return { ...state, error: action.payload };
	case LOGOUT:
		return {};
	}
	return state;
}