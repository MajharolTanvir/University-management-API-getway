import { Request } from 'express';
import { coreService as HttpService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const createAcademicSemester = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.post(
    '/academic-semesters/create-semester',
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

const getAllAcademicSemester = async (req: Request): Promise<IGenericResponse> => {
    const result: IGenericResponse = await HttpService.get('/academic-semesters', {
      params: req.query,
      headers: {
        Authorization: req.headers.authorization
      }
    });

  return result;
};

const getSingleAcademicSemester = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.get(`/academic-semesters/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const updateAcademicSemester = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.patch(`/academic-semesters/${req.params.id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};


const deleteAcademicSemester = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.delete(`/academic-semesters/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

export const AcademicSemesterService = {
  createAcademicSemester,
  getAllAcademicSemester,
    getSingleAcademicSemester,
  updateAcademicSemester,
  deleteAcademicSemester
};
