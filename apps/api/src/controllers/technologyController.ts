import { Request, Response } from 'express';
import { getAllTechnologies } from '../services/technologyService';

export const getTechnologies = async (req: Request, res: Response) => {
  try {
    const technologies = await getAllTechnologies();
    return res.json({ data: technologies });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch technologies' });
  }
};
