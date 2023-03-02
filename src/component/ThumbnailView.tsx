import styles from '../styles/thumbnailview.module.css'

interface Props {
    title: string
    url: string
    size: string
}

function ThumbnailView({ title, url, size }: Props) {
    return <>
        <div className={styles.container}>
            <div className={`${styles.imageContainer} ${styles[size]}`}>
                <img alt={title} className={styles.image} src={url}/>
            </div>
            <p className={styles.title}>{title}</p>
        </div>
    </>
}

export default ThumbnailView