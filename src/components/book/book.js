import React from 'react'
import styles from './book.module.scss'

function Book(props) {
    return (       
            <article className={styles.book}>
                <picture className={styles.picture}>
                    <img src={props.imageUrl} alt={props.title} />
                </picture>
                <h1>{props.title}</h1>
                <h2>{props.author}</h2>
                <p>{'⭐'.repeat(props.rating)}</p>
                <p>{props.review}</p>
            </article>
    )
}

export default Book