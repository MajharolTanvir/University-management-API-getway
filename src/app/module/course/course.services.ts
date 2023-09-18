import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService as HttpService } from '../../../shared/axios';

const createCourses = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.post('/courses/create-course', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const getAllCourses = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.get('/courses', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const getSingleCourses = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.get(`/courses/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const updateCourses = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.patch(
    `/courses/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

const deleteCourses = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.delete(
    `/courses/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};


const assignFaculty = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.post(
    `/courses/${req.params.id}/assign-faculties`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

const removeFaculty = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.delete(
    `/courses/${req.params.id}/remove-faculties`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

export const CourseService = {
  createCourses,
  getAllCourses,
  getSingleCourses,
  updateCourses,
  deleteCourses,
  assignFaculty,
  removeFaculty
};
