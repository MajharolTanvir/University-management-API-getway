import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { StudentEnrolledCoursesService } from './StudentEnrolledCourse.services';

const createStudentEnrolledCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCoursesService.createStudentEnrolledCourses(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllStudentEnrolledCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCoursesService.getAllStudentEnrolledCourses(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleStudentEnrolledCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCoursesService.getSingleStudentEnrolledCourses(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateStudentEnrolledCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCoursesService.updateStudentEnrolledCourses(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteStudentEnrolledCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCoursesService.deleteStudentEnrolledCourses(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const StudentEnrolledCoursesController = {
  createStudentEnrolledCourses,
  getAllStudentEnrolledCourses,
  getSingleStudentEnrolledCourses,
  updateStudentEnrolledCourses,
  deleteStudentEnrolledCourses
};
