import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BasicView, EvolutionView, Header, ListView } from "../component"
import { IPokemonDetails } from "../entity"
import { getPokemonByName } from "../usecase"
import styles from "../styles/pokemondetails.module.css"

function PokemonDetailsPage() {
    const { pokemonName } = useParams<{pokemonName?: string}>()
    const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails|null>()

    useEffect(() => {
        if (pokemonName)
            (async () => {
                const data =  await getPokemonByName(pokemonName)
                setPokemonDetails(data)
            })()
    })

    const renderDetails = () => {
        if (!pokemonDetails) return null

        const {
            name,
            weight,
            height,
            classification,
            types,
            resistant,
            attacks,
            weaknesses,
            evolutions,
            image,
        } = pokemonDetails

        return <>
            <Header/>
            <div className={styles.mainContainer}>
                <div className={styles.leftCol}>
                    <p className={styles.name}>{name}</p>
                    <div className={styles.mainImageContainer}>
                        <img alt={name} className={styles.image} src={image}/>
                    </div>
                    <EvolutionView evolutions={evolutions} />
                </div>
                <div className={styles.rightCol}>
                    <BasicView title="Weight range" content={`${weight.minimum} - ${weight.maximum}`}/>
                    <BasicView title="Height range" content={`${height.minimum} - ${height.maximum}`}/>
                    <BasicView title="Classification" content={classification}/>
                    <BasicView title="Types" content={types.join(', ')}/>
                    <ListView title="Fast attacks" content={attacks.fast.map(item => item.name)}/>
                    <ListView title="Special attacks" content={attacks.special.map(item => item.name)}/>
                    <ListView title="Resistances" content={resistant}/>
                    <ListView title="Weaknesses" content={weaknesses}/>
                </div>
            </div>
        </>
    }

    return <>{ pokemonDetails ? renderDetails() : <p className={styles.loading}>loading...</p> }</>
}

export default PokemonDetailsPage