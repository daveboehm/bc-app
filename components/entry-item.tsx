import React from "react"
import type { EntryType } from "../utils/types"
import styles from '../styles/Entry.module.css'
import Image from "next/image";

export const EntryItem = (props: EntryType) => {
    const { id, image, title, url } = props;

    if (!url || !id || !title) return null;

    return (
        <li className={styles.entryItem} data-testid="entry-item">
            <a className={styles.entryItemLink} href={url.value} target={url.target} title={image.url}>
                <div className={styles.entryImage}>
                    <Image src={image.url} alt={image.title} width={image.width} height={image.height} />
                </div>
                <h2 className={styles.entryTitle}>{title}</h2>
            </a>
        </li>
    )
}

export default EntryItem