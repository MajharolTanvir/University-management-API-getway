import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService as HttpService } from '../../../shared/axios';

const createBuilding = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.post('/buildings/create-building', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const getAllBuilding = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.get('/buildings', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const getSingleBuilding = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.get(`/buildings/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const updateBuilding = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.patch(
    `/buildings/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

const deleteBuilding = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.delete(`/buildings/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

export const BuildingService = {
  createBuilding,
  getAllBuilding,
  getSingleBuilding,
  updateBuilding,
  deleteBuilding
};
