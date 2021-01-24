/*Vão guardar as funções que irão editar o nosso state para atualizar ele*/

import state from './state';

export default {
	//atualiza o efeito de loading da pokedex
	updateOffset(){
		state.offset += state.limit;
	},
	//adiciona pokemons na pokedex
	setList(list){
		state.list.push(...list);
		state.tempList.push(...list);
	},
	//informa se a pokedex precisa de mais dados
	setListHasNext(flag){
		state.listHasNext = flag;
	},
	//informa se a pokedex terminou de buscar os dados
	setListHasCompleted(flag){
		state.listHasCompleted = flag;
	},
	//informa se a pokedex deu algum erro ao buscar os dados
	setListHasError(flag){
		state.listHasError = flag;
	},
	//reseta a pokedex com os dados da última busca feita
	resetList(){
		state.list = [...state.tempList];
		state.isPokemonSearch = false;
		state.listHasError = false;
		state.searchHasError = false;
	},

	//adiciona a pokedex somente o pokemon que eu fiz a busca
	setPokemonSearched(pokemon){
		state.list = [pokemon];
	},
	//informar que a busca está acontecendo
	setIsSearching(flag){
		state.isSearching = flag;
	},
	//informar que a busca foi feita
	setIsPokemonSearch(flag){
		state.isPokemonSearch = flag;
	},
	//informa a interface se a busca deu algum erro
	setSearchHasError(flag){
		state.searchHasError = flag;
	},
};