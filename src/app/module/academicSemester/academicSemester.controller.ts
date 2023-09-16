import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.services';
import sendResponse from '../../../shared/response';

const createAcademicSemester = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  try {
    const result = await AcademicSemesterService.createAcademicSemester(req);

    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

const getAllAcademicSemester = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getAllAcademicSemester(req);

    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

const getSingleAcademicSemester = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getSingleAcademicSemester(req);

    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

const updateAcademicSemester = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.updateAcademicSemester(req);

    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

const deleteAcademicSemester = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.deleteAcademicSemester(req);

    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};


export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
  deleteAcademicSemester
};
