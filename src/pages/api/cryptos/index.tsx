import { NextApiRequest, NextApiResponse } from 'next';
const apiKey = process.env.COINGECKO_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=12&x_cg_demo_api_key=${apiKey}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching cryptocurrency data:', error);
    res.status(500).json({ message: 'Error fetching cryptocurrency data' });
  }
}