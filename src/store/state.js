/*O arquivo com as nossas variáveis reativas ou variáveis de estados. Que serão responsáveis por 
informar se houve alteração em algo ou não. No caso alguns são variáveis apenas para controle, e outras são 
variáveis que guardam dados como 'list' e 'tempList' que guardarão listas de pokemons. */

import Vue from 'vue';

const LIMIT = 25;
const OFFSET = 0;

export default Vue.observable({
	list: [],
	tempList: [],
	listHasNext: false,
	listHasCompleted: false,
	listHasError: false,

	isSearching: false,
	isPokemonSearch: false,
	searchHasError: false,

	limit: LIMIT,
	offset: OFFSET,
});