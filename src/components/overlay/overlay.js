import React from 'react'
import styles from './overlay.module.scss'

function Overlay(props) {
    return (
        <div className={styles.overlay}>
            {props.children}
        </div>
    )
}

export default Overlay