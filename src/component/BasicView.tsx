import { ReactNode } from 'react'
import styles from '../styles/basicview.module.css'

interface Props {
    title: string
    content?: string
    children?: ReactNode
}

function BasicView({ title, content, children }: Props) {
    return <>
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <div className={styles.content}>{content}{children}</div>
        </div>
    </>
}

export default BasicView