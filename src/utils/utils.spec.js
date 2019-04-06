import { filterPokemons } from "./utils";

const pokemons = [
  {
    id: "UG9rZW1vbjowMDE=",
    number: "001",
    name: "Bulbasaur",
    image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    types: ["Grass", "Poison"],
    __typename: "Pokemon"
  },
  {
    id: "UG9rZW1vbjowMDI=",
    number: "002",
    name: "Ivysaur",
    image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
    types: ["Grass", "Poison"],
    __typename: "Pokemon"
  },
  {
    id: "UG9rZW1vbjowMDM=",
    number: "003",
    name: "Venusaur",
    image: "https://img.pokemondb.net/artwork/venusaur.jpg",
    types: ["Grass", "Poison"],
    __typename: "Pokemon"
  },
  {
    id: "UG9rZW1vbjowMDQ=",
    number: "004",
    name: "Charmander",
    image: "https://img.pokemondb.net/artwork/charmander.jpg",
    types: ["Fire"],
    __typename: "Pokemon"
  },
  {
    id: "UG9rZW1vbjowMDU=",
    number: "005",
    name: "Charmeleon",
    image: "https://img.pokemondb.net/artwork/charmeleon.jpg",
    types: ["Fire"],
    __typename: "Pokemon"
  },
  {
    id: "UG9rZW1vbjowMDY=",
    number: "006",
    name: "Charizard",
    image: "https://img.pokemondb.net/artwork/charizard.jpg",
    types: ["Fire", "Flying"],
    __typename: "Pokemon"
  }
];

describe("filterPokemons", () => {
  it("should return bulbasaur when searching for Bulb", () => {
    const expected = filterPokemons(pokemons, "Bulb");
    expect(expected).toEqual([pokemons[0]]);
  });
  it("should return bulbasaur when searching for bulb", () => {
    const expected = filterPokemons(pokemons, "bulb");
    expect(expected).toEqual([pokemons[0]]);
  });
  it("should return bulbasaur, venasaur, ivasaur when searching for saur", () => {
    const expected = filterPokemons(pokemons, "saur");
    expect(expected).toEqual([pokemons[0], pokemons[1], pokemons[2]]);
  });
  it("should return all pokemons when no search term", () => {
    const expected = filterPokemons(pokemons);
    expect(expected).toEqual(pokemons);
  });
});
