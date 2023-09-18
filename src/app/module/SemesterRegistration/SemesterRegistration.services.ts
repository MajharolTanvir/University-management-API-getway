import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService as HttpService } from '../../../shared/axios';

const createSemesterRegistrations = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.post(
    '/semester-registration/create-semester-registration',
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

const getAllSemesterRegistrations = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.get('/semester-registration', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const getSingleSemesterRegistrations = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.get(`/semester-registration/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const updateSemesterRegistrations = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.patch(
    `/semester-registration/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

const deleteSemesterRegistrations = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.delete(
    `/semester-registration/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};


const createStudentSemesterRegistrations = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.post(
    '/semester-registration/create-student-semester-registration',
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

const enrollFromCourses = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.post(
    '/semester-registration/enroll-from-course',
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

const withdrewFromCourses = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.post(
    '/semester-registration/withdrew-from-course',
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};


const confirmCourseRegistrations = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.post(
    '/semester-registration/confirm-registration-course',
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

const getMyRegistrations = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.get(
    '/semester-registration/get-my-registration',
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

const startNewSemesters = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.get(
    `/semester-registration/${req.params.id}/start-new-semester`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

const getMySemesterRegCourses = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.get(
    '/semester-registration/get-my-semester-courses',
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

export const SemesterRegistrationsService = {
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
