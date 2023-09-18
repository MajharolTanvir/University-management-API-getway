import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService as HttpService } from '../../../shared/axios';

const createOfferedCoursesSections = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.post(
    '/offered-course-sections/create-offered-course-section',
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

const getAllOfferedCoursesSections = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.get('/offered-course-sections', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const getSingleOfferedCoursesSections = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.get(`/offered-course-sections/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const updateOfferedCoursesSections = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.patch(
    `/offered-course-sections/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

const deleteOfferedCoursesSections = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await HttpService.delete(
    `/offered-course-sections/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

export const OfferedCoursesSectionsService = {
  createOfferedCoursesSections,
  getAllOfferedCoursesSections,
  getSingleOfferedCoursesSections,
  updateOfferedCoursesSections,
  deleteOfferedCoursesSections
};
