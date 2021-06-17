import React from 'react'
import styles from './view.module.scss'

function View(props) {
    return (
        <div className={styles.view}>
            <picture className={styles.picture}>
                <img src={props.imageUrl} alt={props.title} />
            </picture>
            <h1>{props.title}</h1>
            <h2>{props.author}</h2>
            <p>{'⭐'.repeat(props.rating)}</p>
            <p>{props.description}</p>
            <p>{props.review}</p>
        </div>
    )
}

export default View