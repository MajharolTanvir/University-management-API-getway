import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService as HttpService } from '../../../shared/axios';

const createRooms = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.post('/rooms/create-room', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const getAllRooms = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.get('/rooms', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const getSingleRooms = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.get(`/rooms/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const updateRooms = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.patch(
    `/rooms/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

const deleteRooms = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.delete(
    `/rooms/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

export const RoomService = {
  createRooms,
  getAllRooms,
  getSingleRooms,
  updateRooms,
  deleteRooms
};
