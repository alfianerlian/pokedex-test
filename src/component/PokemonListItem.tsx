import styles from "../styles/pokemonlist.module.css"
import ThumbnailView from "./ThumbnailView"

interface PokemonListItemProps {
    imgUrl: string,
    name: string
}

function PokemonListItem({ imgUrl, name }: PokemonListItemProps) {
    return <>
        <a className={styles.item} href={`/${name.toLocaleLowerCase()}`}>
            <ThumbnailView title={name} url={imgUrl} size="normal"/>
        </a>
    </>
}

export default PokemonListItem