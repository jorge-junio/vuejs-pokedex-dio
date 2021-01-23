<template>
	<ul class="list text--white bg--black">

	</ul>
</template>

<script>
	export default {
		name: "List"
	}
</script>

<style lang="scss" scoped>
	.list{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		border: 20px solid color(white);
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
		}
	}
</style>