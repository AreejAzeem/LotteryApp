import React from 'react';
import styles from '../styles/prev_win.module.css';

const PreviousWinningTickets = ({ winningTickets }) => {
    if (!winningTickets) {
        return <p>Loading...</p>;
    }
    console.log(winningTickets);

    return (
        <div className={styles.container}>
            {winningTickets.map((number, index) => (
                <div key={index} className={styles.ticket}>
                    <div className={styles.ticketNumber}>{number}</div>
                </div>
            ))}
        </div>
    );
};

export default PreviousWinningTickets;
