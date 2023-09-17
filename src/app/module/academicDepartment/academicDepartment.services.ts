import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService as HttpService } from '../../../shared/axios';

const createAcademicDepartment = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.post(
    '/academic-departments/create-department',
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

const getAllAcademicDepartment = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.get('/academic-departments', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const getSingleAcademicDepartment = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.get(`/academic-departments/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const updateAcademicDepartment = async (req: Request): Promise<IGenericResponse> => {   
  const result: IGenericResponse = await HttpService.patch(
    `/academic-departments/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

const deleteAcademicDepartment = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.delete(
    `/academic-departments/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

export const AcademicDepartmentService = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
  deleteAcademicDepartment
};
