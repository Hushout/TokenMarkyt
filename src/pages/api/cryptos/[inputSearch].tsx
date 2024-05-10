import { NextApiRequest, NextApiResponse } from 'next';
const apiKey = process.env.COINGECKO_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { inputSearch } = req.query;        
        const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${inputSearch}&vs_currency=usd&x_cg_demo_api_key=${apiKey}`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
        res.status(500).json({ message: 'Error fetching cryptocurrency data' });
    }
}