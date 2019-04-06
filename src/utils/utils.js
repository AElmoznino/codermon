export const filterPokemons = (pokemons, searchTerm) => {
  if (!searchTerm) {
    return pokemons;
  }
  return pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
