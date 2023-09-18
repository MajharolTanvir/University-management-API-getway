import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService as HttpService } from '../../../shared/axios';

const getMyPayment = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/student-semester-payments', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const StudentSemesterPaymentService = {
  getMyPayment
};
