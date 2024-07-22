
import Header from '@/components/Header';
import LotteryCard from '@/components/LotteryCard';
import Head from 'next/head';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Lottery App</title>
        <meta name="description" content="Lottery application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
       <h2>Latest Results</h2>
        <LotteryCard lotteryType="COSMIC" theme="theme-pink"  />
        <LotteryCard lotteryType="CLASSIC" theme="theme-green" />
        <LotteryCard lotteryType="ATOMIC" theme="theme-red" />
      </main>
    </div>
  );
}
