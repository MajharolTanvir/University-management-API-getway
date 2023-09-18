import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { RoomService } from './room.services';

const createRooms = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.createRooms(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllRooms = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.getAllRooms(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleRooms = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.getSingleRooms(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateRooms = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.updateRooms(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteRooms = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.deleteRooms(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const RoomController = {
  createRooms,
  getAllRooms,
  getSingleRooms,
  updateRooms,
  deleteRooms
};
