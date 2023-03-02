import styles from '../styles/listview.module.css'

interface Props {
    title: string
    content: string[]
}

function ListView(props: Props) {
    const renderContent = () => {
        return props.content.map(item => <li key={`${props.title}-${item}`}>{item}</li>)
    }

    return <>
        <div className={styles.container}>
            <div className={styles.title}>{props.title}</div>
            <ul className={styles.content}>{renderContent()}</ul>
        </div>
    </>
}

export default ListView