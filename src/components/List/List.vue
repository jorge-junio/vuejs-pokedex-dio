<template>
	<ul class="list text--white bg--black">
		<p v-if="isSearching" class="list--message">Buscando pelo pokemon</p>
		<p v-else-if="hasSearchError" class="list--message">Não foi possível encontrar o pokemon</p>

		<ListItem v-else-if="isPokemonSearch" v-bind="pokemonsList[0]" />

		<template v-else>
			<ListItem v-for="pokemon in pokemonsList" :key="pokemon.id" v-bind="pokemon" />
			<infinite-loading @infinite="infiniteHandler" />
		</template>
	</ul>
</template>

<script>
	import {state, getters, actions} from "@/store"

	import ListItem from './ListItem.vue'
	
	export default {
		name: "List",
		components: {
			ListItem,
		},
		computed: {
			pokemonsList(){
				return getters.pokemonsInfo;
			},
			isSearching(){
				return state.isSearching;
			},
			isPokemonSearch(){
				return state.isPokemonSearch;
			},
			hasSearchError(){
				return state.hasSearchError;
			}
		},
		methods: {
			/*Semple que o infiniteHandler acontecer */
			async infiniteHandler($state){
				/*A gente chama a listagem de pokemons */
				await actions.getPokemons();

				/*Se ainda tiver coisa a ser buscada a gente executa a função loaded do infiniteHandler ($state referencia ele) */
				if(state.listHasNext){
					$state.loaded();
					return;
				}

				/*Verifica se está completo */
				if(state.listHasCompleted){
					$state.complete();
					return;
				}

				/*Verifica se está com erro */
				if(state.listHasError){
					$state.error();
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		border: 10px solid color(white);
		border-radius: 8px;
		padding: 0 8px 8px 0;
		/*Gerar um scroll em y*/
		overflow-y: scroll;

		/*As próximas 3 linhas são usadas para esconder a barra visual do scroll*/
		-ms-overflow-style: none;
		scrollbar-width: none;

		&::-webkit-scrollbar {
			display: none;
		}

		@media (min-width: $viewport-medium) {
			max-height: 72%;
			border: 20px solid color(white);
		}

		&--message{
			text-align: center;
			margin-top: 8px;
		}
	}
</style>