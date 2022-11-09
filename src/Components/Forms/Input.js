import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
   return (
      <div className={styles.wrapper}>
         <label
            htmlFor={props.name}
            className={styles.label}>
            {props.label}
         </label>
         <input
            type={props.type}
            id={props.name}
            className={styles.input}
            onChange={props.onChange}
            onBlur={props.onBlur}
            value={props.value}
         />
         {props.error && <p className={styles.error}>{props.error}</p>}
      </div>
   )
}

export default Input
