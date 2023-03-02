import { gql } from "@apollo/client";

const GET_POKEMON_LIST = gql`
  query GetPokemonList($count: Int!) {
    pokemons(first: $count) {
      id
      name
      types
      image
    }
  }
`;

export default GET_POKEMON_LIST