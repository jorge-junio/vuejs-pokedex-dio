/*São como filtros utilizados para facilitar o acesso a dados específicos da nossa api sem a necessidade
de ficar tratando estes dados sempre que for utilizar */

import { parsePokemonInfo } from '@/utils';
import state from './state';

export default{
	get pokemonsInfo(){
		return state.list.map(parsePokemonInfo);
	},
};