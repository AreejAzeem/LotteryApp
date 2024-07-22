export async function fetchLotteryInfo(lotteryType) {
    const response = await fetch(`https://testing-luckito-backend.rnssol.com/api/luckito/lottery/get-lottery?lotteryType=${lotteryType}`);
    if (!response.ok) {
      throw new Error('Failed to fetch lottery information');
    }
    console.log("response",response)
  
    const data = await response.json(); // Read the response body once
    return data;
  }
  