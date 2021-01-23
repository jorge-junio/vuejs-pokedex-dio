<template>
	<div class="pokedex">
		<TopPanel/>
		<LeftPanel class="pokedex--left"></LeftPanel>
		<Divider></Divider>
		<RightPanel class="pokedex--right"></RightPanel>
	</div>
</template>

<script>
	import TopPanel from './TopPanel/TopPanel.vue'
	import LeftPanel from './LeftPanel/LeftPanel.vue'
	import Divider from './Divider/Divider.vue'
	import RightPanel from './RightPanel/RightPanel.vue'

	export default {
		name: "Pokedex",
		components: {
			TopPanel,
			LeftPanel,
			RightPanel,
			Divider
		}
	}
</script>

<style lang="scss" scoped>
	.pokedex{
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 960px;
		height: 100%;

		@media (min-width: $viewport-medium){
			max-height: 700px;
			flex-direction: row;
		}

		&--left,
		&--right {
			position: relative;
			display: flex;
			height: 50%;
			/*Quando falamos de perspectiva, nós estamos dando a esse nosso elemento uma perspectiva 3D. Posicionando 
			ele em 3 dimensões. E essa propriedade diz ao usuário o quanto esse elemento está distante dele.
			(se o valor for pequeno o elemento vai estar mais próximo, se for grande o elemento vai estar mais distante
			- logo se estiver perto os efeitos visuais serão mais aparentes e se estiver longe o contrário)*/
			perspective: 1700px;
			transform-style: preserve-3d;

			/*Define que quando estiver no desktop meus elementos --left e --rigth terão 100% de altura */
			@media (min-width: $viewport-medium) {
				height: 100%;
			}
		}
	}
</style>