import { Response } from 'express';

export const handleResponse = (res: Response, response: any) => {
  if (response.error) {
    res.status(response.status).json({ error: response.error });
  } else {
    res.status(response.status).json(response.data);
  }
};
