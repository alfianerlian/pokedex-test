import IPokemonAttack from "./IPokemonAttack"
import IPokemonDimension from "./IPokemonDimension"

interface IPokemonDetails {
    id: string
    name: string
    weight: IPokemonDimension
    height: IPokemonDimension
    classification: string
    types: string[]
    resistant: string[]
    attacks: IPokemonAttack
    weaknesses: string[]
    evolutions?: IPokemonDetails[]
    image: string
}

export default IPokemonDetails