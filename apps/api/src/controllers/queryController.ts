import { Request, Response, response } from 'express';
import { filterUsersByQueryBuilder } from '../services/userService';
import { QueryBuilderSubmitObject, UserResponse } from '@edgar/common-types';

export const queryUsers = async (req: Request, res: Response) => {
  const query: QueryBuilderSubmitObject = req.body;

  if (!query) {
    return res.status(400).send();
  }

  try {
    const users = await filterUsersByQueryBuilder(query);
    const response: UserResponse = { count: users.length, items: users };
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Failed to query users' });
  }
};
