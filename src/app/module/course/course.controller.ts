import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { CourseService } from './course.services';

const createCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.createCourses(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.getAllCourses(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.getSingleCourses(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.updateCourses(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.deleteCourses(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const assignFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.assignFaculty(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const removeFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.removeFaculty(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const CoursesController = {
  createCourses,
  getAllCourses,
  getSingleCourses,
  updateCourses,
  deleteCourses,
  assignFaculty,
  removeFaculty
};
