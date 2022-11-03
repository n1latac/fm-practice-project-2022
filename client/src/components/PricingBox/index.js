import React from 'react';
import styles from './PricingBox.module.css';

const PricingBox = (props) => {

    const {boxText: {header, descr, price}, color} = props;
    return (
       <section className={styles.container}>
            <div className={styles['top-box']} style={{borderColor: color}}>
                <h2>{header}</h2>
                <p>{descr}</p>
                <h3>US${price}</h3>
            </div>
            <div className={styles.children}>{props.children}</div> 
            <button className={styles['start-button']} style={{backgroundColor: color}}>&#10003; Start</button>
       </section>
    );
}

export default PricingBox;
