import BasicView from "./BasicView"
import styles from "../styles/pokemondetails.module.css"
import { IPokemonDetails } from "../entity"
import ThumbnailView from "./ThumbnailView"

interface Props {
    evolutions?: IPokemonDetails[]
}

function EvolutionView({ evolutions }: Props) {
    if (!evolutions || evolutions.length === 0) return null

    return <>
        <BasicView title={"Evolutions"}>
            <div className={styles.evolutionContainer}>
                {
                    evolutions.map((evol, idx) => {
                        return (
                            <a key={`evol-${idx}`} className={styles.evolutionLink} href={`/${evol.name}`}>
                                <ThumbnailView title={evol.name} url={evol.image} size="small" />
                            </a>
                        )
                    })
                }
            </div>
        </BasicView>
    </>
}

export default EvolutionView