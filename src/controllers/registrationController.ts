/** Libs */
import { Request, Response } from 'express';

/** Services */
import { getPersons, createPerson, updatePerson, deletePerson } from '../services/registrationService';

/** Utils */
import { handleResponse } from '../utils/responseHandler';

export const getPersonsController = async (req: Request, res: Response) => {
  const response = await getPersons();
  handleResponse(res, response);
};

export const createPersonController = async (req: Request, res: Response) => {
  const response = await createPerson(req.body);
  handleResponse(res, response);
};

export const updatePersonController = async (req: Request, res: Response) => {
  const response = await updatePerson(req.params.id, req.body);
  handleResponse(res, response);
};

export const deletePersonController = async (req: Request, res: Response) => {
  const response = await deletePerson(req.params.id);
  handleResponse(res, response);
};
