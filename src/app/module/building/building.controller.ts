import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { BuildingService } from './building.services';

const createBuildings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.createBuilding(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllBuildings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.getAllBuilding(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleBuildings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.getSingleBuilding(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateBuildings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.updateBuilding(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteBuildings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.deleteBuilding(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const BuildingsController = {
  createBuildings,
  getAllBuildings,
  getSingleBuildings,
  updateBuildings,
  deleteBuildings
};
