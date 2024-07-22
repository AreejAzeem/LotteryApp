
import React, { useEffect, useState } from 'react';
import { fetchLotteryInfo } from '../utils/api';
import PreviousWinningTickets from '../components/PreviousWinningTickets';
import CardHeader from '../components/CardHeader';
import styles from '../styles/lottery_card.module.css';

const LotteryCard = ({ lotteryType ,theme}) => {
  const [lotteryData, setLotteryData] = useState(null);

  useEffect(() => {
    const fetchLatestResults = async () => {
      try {
        const data = await fetchLotteryInfo(lotteryType);
        setLotteryData(data.data);
        console.log("data",data.data)
        
      } catch (error) {
        console.error('Error fetching lottery information:', error);
      }
    };

    fetchLatestResults();
   
    const interval = setInterval(fetchLatestResults, 2000); 
    return () => clearInterval(interval);
  }, [lotteryType]);

  if (!lotteryData) return <p>Loading...</p>;
 
  return (
    <div className={`${styles.card} ${styles[theme]}`}>
      <CardHeader title={lotteryType} roundNumber={lotteryData.roundNumber}/>
      <PreviousWinningTickets winningTickets={lotteryData.previousWinningticket} />
      <p>Winning Pot: {lotteryData.winningPot}</p>
      <p>Next Draw: {lotteryData.nextDrawTime}</p>
      <p>Time left for the next draw: {lotteryData.timeLeft}</p>
      <p>Current count of LUCKI in the pool for the next draw:</p>
      <button>Play</button>
    
    </div>
  );
};

export default LotteryCard;
