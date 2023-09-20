import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import { ICloudinaryResponse, IUploadFile } from '../../../interfaces/file';
import { authService } from '../../../shared/axios';
import { array } from 'zod';
import { IGenericResponse } from '../../../interfaces/common';

const createStudent = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);

  if (uploadedImage) {
    req.body.profileImage = uploadedImage.secure_url;
  }

  const { academicDepartment, academicFaculty, academicSemester } = req.body.student;

  const academicDepartmentResponse = await authService.get(
    `/academic-department?syncId=${academicDepartment}`
  );

  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.student.academicDepartment = academicDepartmentResponse.data[0]._id;
  }

  const academicFacultyResponse = await authService.get(
    `/academic-faculty?syncId=${academicFaculty}`
  );

  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.student.academicFaculty = academicFacultyResponse.data[0]._id;
  }

  const academicSemesterResponse = await authService.get(
    `/academic-semesters?syncId=${academicSemester}`
  );
  if (academicSemesterResponse.data && Array.isArray(academicSemesterResponse.data)) {
    req.body.student.academicSemester = academicSemesterResponse.data[0]._id;
  }

  const response: IGenericResponse = await authService.post('/users/create-student', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const createFaculty = async (req: Request): Promise<IGenericResponse> => {
  const file = req.file as IUploadFile;

  const uploadedProfileImage = await FileUploadHelper.uploadToCloudinary(file);

  if (uploadedProfileImage) {
    req.body.faculty.profileImage = uploadedProfileImage.secure_url;
  }

  const { academicDepartment, academicFaculty } = req.body.faculty;

  const academicDepartmentResponse = await authService.get(
    `/academic-department?syncId=${academicDepartment}`
  );

  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.faculty.academicDepartment = academicDepartmentResponse.data[0]._id;
  }

  const academicFacultyResponse = await authService.get(
    `/academic-faculty?syncId=${academicFaculty}`
  );

  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.faculty.academicFaculty = academicFacultyResponse.data[0]._id;
  }

  const response: IGenericResponse = await authService.post('/users/create-faculty', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const createAdmin = async (req: Request): Promise<IGenericResponse> => {
  const file = req.file as IUploadFile;

  const uploadedProfileImage = await FileUploadHelper.uploadToCloudinary(file);

  if (uploadedProfileImage) {
    req.body.admin.profileImage = uploadedProfileImage.secure_url;
  }

  const response: IGenericResponse = await authService.post('/users/create-admin', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const UserService = {
  createStudent,
  createFaculty,
  createAdmin
};
