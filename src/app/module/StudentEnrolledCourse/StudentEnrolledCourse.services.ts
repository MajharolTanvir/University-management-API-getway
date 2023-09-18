import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService as HttpService } from '../../../shared/axios';

const createStudentEnrolledCourses = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.post(
    '/student-enrolled-courses',
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

const getAllStudentEnrolledCourses = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.get('/student-enrolled-courses', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const getSingleStudentEnrolledCourses = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.get(`/student-enrolled-courses/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const updateStudentEnrolledCourses = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.patch(
    `/student-enrolled-courses/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

const deleteStudentEnrolledCourses = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.delete(
    `/student-enrolled-courses/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

export const StudentEnrolledCoursesService = {
  createStudentEnrolledCourses,
  getAllStudentEnrolledCourses,
  getSingleStudentEnrolledCourses,
  updateStudentEnrolledCourses,
  deleteStudentEnrolledCourses
};
