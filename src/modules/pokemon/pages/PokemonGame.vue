<template>
  <div v-if="false" class="flex flex-col justify-center items-center h-screen w-screen">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokemons</h3>
  </div>

  <section v-else class="flex flex-col justify-center items-center h-screen w-screen">
    <h1 class="text-3xl">¿Quién es este Pokémon?</h1>
    <PokemonPicture />
  </section>
</template>

<script setup lang="ts">
import PokemonPicture from '../components/PokemonPicture.vue';
</script>

<style lang="scss" scoped></style>
