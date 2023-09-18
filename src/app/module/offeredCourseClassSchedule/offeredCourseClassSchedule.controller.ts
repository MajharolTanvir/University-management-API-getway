import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { OfferedCourseClassSchedulesService } from './offeredCourseClassSchedule.services';

const createOfferedCourseClassSchedules = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseClassSchedulesService.createOfferedCourseClassSchedules(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllOfferedCourseClassSchedules = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseClassSchedulesService.getAllOfferedCourseClassSchedules(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleOfferedCourseClassSchedules = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseClassSchedulesService.getSingleOfferedCourseClassSchedules(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOfferedCourseClassSchedules = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseClassSchedulesService.updateOfferedCourseClassSchedules(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOfferedCourseClassSchedules = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseClassSchedulesService.deleteOfferedCourseClassSchedules(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseClassSchedulesController = {
  createOfferedCourseClassSchedules,
  getAllOfferedCourseClassSchedules,
  getSingleOfferedCourseClassSchedules,
  updateOfferedCourseClassSchedules,
  deleteOfferedCourseClassSchedules
};
