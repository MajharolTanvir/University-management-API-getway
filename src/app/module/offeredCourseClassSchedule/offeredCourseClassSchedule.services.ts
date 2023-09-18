import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService as HttpService } from '../../../shared/axios';

const createOfferedCourseClassSchedules = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.post(
    '/offered-course-class-schedule/create-offered-course-class-schedule',
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

const getAllOfferedCourseClassSchedules = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.get('/offered-course-class-schedule', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const getSingleOfferedCourseClassSchedules = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.get(`/offered-course-class-schedule/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const updateOfferedCourseClassSchedules = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.patch(
    `/offered-course-class-schedule/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

const deleteOfferedCourseClassSchedules = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.delete(
    `/offered-course-class-schedule/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

export const OfferedCourseClassSchedulesService = {
  createOfferedCourseClassSchedules,
  getAllOfferedCourseClassSchedules,
  getSingleOfferedCourseClassSchedules,
  updateOfferedCourseClassSchedules,
  deleteOfferedCourseClassSchedules
};
