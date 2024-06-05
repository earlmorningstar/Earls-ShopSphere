import fs from 'node:fs/promises';

export default async (req, res) => {
  if (req.method === 'GET') {
    const fits = await fs.readFile('api/data/available-fashion.json', 'utf8');
    res.json(JSON.parse(fits));
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
