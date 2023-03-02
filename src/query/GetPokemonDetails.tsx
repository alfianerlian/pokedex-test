import { gql } from "@apollo/client";

const GET_POKEMON_DETAILS_BY_NAME = gql`
  query GetPokemonByName($name: String!) {
    pokemon(name: $name) {
      id
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      attacks {
        fast {
          name
        }
        special {
          name
        }
      }
      weaknesses
      evolutions {
        name
        image
      }
      image
    }
  }`;

export default GET_POKEMON_DETAILS_BY_NAME