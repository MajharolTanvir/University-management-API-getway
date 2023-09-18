import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { OfferedCoursesService } from './offeredCourse.services';

const createOfferedCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCoursesService.createOfferedCourses(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllOfferedCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCoursesService.getAllOfferedCourses(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleOfferedCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCoursesService.getSingleOfferedCourses(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOfferedCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCoursesService.updateOfferedCourses(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOfferedCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCoursesService.deleteOfferedCourses(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCoursesController = {
  createOfferedCourses,
  getAllOfferedCourses,
  getSingleOfferedCourses,
  updateOfferedCourses,
  deleteOfferedCourses
};
