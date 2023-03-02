import { IPokemonListItem } from "../entity"
import PokemonListItem from "./PokemonListItem"

interface Props {
    pokemonList: IPokemonListItem[]
}

function PokemonList({ pokemonList }: Props) {
    return <>
        {pokemonList.map(pokemon => <PokemonListItem key={`pokemon-${pokemon.name}`} name={pokemon.name} imgUrl={pokemon.image}/>)}
    </>
}

export default PokemonList