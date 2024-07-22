import React from 'react';
import styles from '../styles/card_header.module.css';
export default function CardHeader({title}, {roundNumber}){
  return (
<div className={styles.card_header_content}>
   <div>
      <h1>{title}</h1></div>
      <h3>No . {roundNumber}</h3>
      </div>
  );
};

