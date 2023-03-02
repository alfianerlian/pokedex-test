interface IAttack {
    name: string
    type: string
    damage: number
}
    
interface IPokemonAttack {
    fast: IAttack[],
    special: IAttack[]
}

export default IPokemonAttack