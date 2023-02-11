import React from 'react';
import styles from './PricingStatus.module.css';

const PricingStatus = (props) => {
    console.log(props.list)
    return (
        <div className={styles.card}>
           <div className={styles.squad} style={{border: `8px solid ${props.color}`}}>
                <article>
                    <p className={styles.name} style={{color: `${props.color}`}}>{props.name}</p>
                    <p className={styles.underName}>{props.underName}</p>
                </article>
                <p style={{color: `${props.color}`}}>{props.cost}</p>
           </div>
           {props.children}
           <button className={styles.button} style={{backgroundColor: `${props.color}`}}>Start</button>
        </div>
    );
}

export default PricingStatus;
