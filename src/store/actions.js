/*Aqui é onde são feitas as chamadas assíncronas/chamadas a api. E baseado nos retornos da api nós atualizamos
o nosso estado usando as mutações */

import PokeApi from '@/services/pokeapi';

import state from './state';
import mutations from  './mutations';

export default{
	async getPokemons(){
		const {
			setList,
			setIsPokemonSearch,
			setListHasError,
			setListHasNext,
			setListHasCompleted,
			updateOffset,
		} = mutations;

		try {
			setIsPokemonSearch(false);
			setListHasError(false);

			const pokemonsList = await PokeApi.getPokemons({limit: state.limit, offset: state.offset});
			//isso é como se fosse if(pokemonList && pokemonList.results && pokemonList.lenght)
			if(pokemonsList?.results?.lenght){
				//aqui eu defino um array de Promises e preparo Promises para cada pokemon que a api irá me retornar
				const prepareInfo = pokemonsList.results.map(item => PokeApi.getPokemonByName(item.name));

				/*aqui resolve as Promises efetivamente. Porém importante lembrar de usar o await que garante que o 
				código vai esperar a finalização da função 'all' antes de prosseguir. Caso n use o await acaba 
				gerando outra Promise. Após a execução eu vou ter todos os dados dos pokemons guardados na minha 
				variável 'pokemonsInfo e só preciso setar ela para a variável de estado que guarda a lista*/
				const pokemonsInfo = await Promise.all(prepareInfo);

				setList(pokemonsInfo);
			}

			if(pokemonsList?.next){
				setListHasNext(true);
				updateOffset();
			}else{
				setListHasNext(false);
				setListHasCompleted(true);
			}
		} catch (error) {
			setListHasError(true);
		}
	},
	async getPokemonByName(name){
		const { setPokemonSearched } = mutations;

		const pokemon = PokeApi.getPokemonByName(name);

		if(pokemon){
			setPokemonSearched(pokemon);
		}
	},
	async searchPokemon(name){
		const {
			setPokemonSearched,
			setIsSearching,
			setIsPokemonSearch,
			setSearchHasError,
			resetList,
		} = mutations;
		
		if(!name){
			resetList();
			return;
		}

		try {
			setSearchHasError(false);
			setIsSearching(true);
			setIsPokemonSearch(true);

			const pokemon = state.list.find(info => info.name.toLowerCase() === name.toLowerCase());

			//verifica se o nome do pokemon existe na listagem
			if(pokemon){
				setPokemonSearched(pokemon);
				return;
			}

			//se ele não existir na listagem ai executa a chamada do método getPokemonByName que irá buscar na api
			await this.getPokemonByName(name)
		} catch (error) {
			setSearchHasError(true);
		}finally{
			setIsSearching(false);
		}
	}
};