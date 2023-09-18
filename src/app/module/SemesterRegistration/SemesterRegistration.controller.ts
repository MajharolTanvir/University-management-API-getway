import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { SemesterRegistrationsService } from './SemesterRegistration.services';

const createSemesterRegistrations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationsService.createSemesterRegistrations(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllSemesterRegistrations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationsService.getAllSemesterRegistrations(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleSemesterRegistrations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationsService.getSingleSemesterRegistrations(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateSemesterRegistrations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationsService.updateSemesterRegistrations(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteSemesterRegistrations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationsService.deleteSemesterRegistrations(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const createStudentSemesterRegistrations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await SemesterRegistrationsService.createStudentSemesterRegistrations(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const enrollFromCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationsService.enrollFromCourses(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const withdrewFromCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationsService.withdrewFromCourses(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const confirmCourseRegistrations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationsService.confirmCourseRegistrations(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyRegistrations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationsService.getMyRegistrations(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const startNewSemesters = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationsService.startNewSemesters(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMySemesterRegCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationsService.getMySemesterRegCourses(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const SemesterRegistrationsController = {
  createSemesterRegistrations,
  getAllSemesterRegistrations,
  getSingleSemesterRegistrations,
  updateSemesterRegistrations,
  deleteSemesterRegistrations,
  createStudentSemesterRegistrations,
  enrollFromCourses,
  withdrewFromCourses,
  confirmCourseRegistrations,
  getMyRegistrations,
  startNewSemesters,
  getMySemesterRegCourses
};
