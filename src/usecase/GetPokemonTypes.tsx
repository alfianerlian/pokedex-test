import pokemonRepo from "../repo/PokemonRepo"

function getPokemonTypes(): string[] {
    return pokemonRepo.getPokemonTypes()
}

export default getPokemonTypes