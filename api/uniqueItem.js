import fs from 'node:fs/promises';

export default async (req, res) => {
  if (req.method === 'GET') {
    const uniqueItem = await fs.readFile('api/data/available-unique-items.json', 'utf8');
    res.json(JSON.parse(uniqueItem));
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
