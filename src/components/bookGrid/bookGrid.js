import React from 'react'
import styles from './bookGrid.module.scss'

function BookGrid(props) {
    return (
        <div className={styles.bookGrid}>
            {props.children}
        </div>
    )
}

export default BookGrid