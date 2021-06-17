import React from 'react'
import styles from './spinner.module.scss'

function Spinner(props) {
    return (
        <div className={styles.spinner}>
            <div className={styles.spinWheel}></div>
        </div>
    )
}

export default Spinner