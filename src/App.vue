<template>
  <div id="pokedex">
    <h1 class="text--yellow">Pokedex Dio</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss" scoped>
  #pokedex{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 1000px;
    margin: 0 auto;
    padding: 24px;
  }
</style>
