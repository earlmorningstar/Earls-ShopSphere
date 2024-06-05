import fs from 'node:fs/promises';

export default async (req, res) => {
  if (req.method === 'GET') {
    const gadgets = await fs.readFile('api/data/available-gadget.json', 'utf8');
    res.json(JSON.parse(gadgets));
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
