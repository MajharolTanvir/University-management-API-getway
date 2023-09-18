import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { OfferedCoursesSectionsService } from './OfferedCourseSection.services';

const createOfferedCoursesSections = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCoursesSectionsService.createOfferedCoursesSections(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllOfferedCoursesSections = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCoursesSectionsService.getAllOfferedCoursesSections(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleOfferedCoursesSections = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCoursesSectionsService.getSingleOfferedCoursesSections(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOfferedCoursesSections = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCoursesSectionsService.updateOfferedCoursesSections(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOfferedCoursesSections = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCoursesSectionsService.deleteOfferedCoursesSections(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCoursesSectionsController = {
  createOfferedCoursesSections,
  getAllOfferedCoursesSections,
  getSingleOfferedCoursesSections,
  updateOfferedCoursesSections,
  deleteOfferedCoursesSections
};
