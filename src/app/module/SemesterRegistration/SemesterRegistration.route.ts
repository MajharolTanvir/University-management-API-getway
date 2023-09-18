import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { SemesterRegistrationsController } from './SemesterRegistration.controller';
import { SemesterRegistrationsValidation } from './SemesterRegistration.validation';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', SemesterRegistrationsController.getAllSemesterRegistrations);
router.get('/:id', SemesterRegistrationsController.getSingleSemesterRegistrations);

router.get(
  '/get-my-registration',
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationsController.getMyRegistrations
);

router.get(
  '/get-my-semester-courses',
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationsController.getMySemesterRegCourses
);


router.post(
  '/',
  validateRequest(SemesterRegistrationsValidation.createSemesterRegistration),
  SemesterRegistrationsController.createSemesterRegistrations
);


router.post(
  '/create-student-semester-registration',
  SemesterRegistrationsController.createStudentSemesterRegistrations
);

router.post(
  '/enroll-from-course',
  validateRequest(SemesterRegistrationsValidation.enrollOrWithdrawCourse),
  SemesterRegistrationsController.enrollFromCourses
);

router.post(
  '/withdrew-from-course',
  validateRequest(SemesterRegistrationsValidation.enrollOrWithdrawCourse),
  SemesterRegistrationsController.withdrewFromCourses
);

router.post(
  '/confirm-registration-course',
  SemesterRegistrationsController.confirmCourseRegistrations
);

router.post('/:id/start-new-semester', SemesterRegistrationsController.startNewSemesters);

router.patch(
  '/:id',
  validateRequest(SemesterRegistrationsValidation.updateSemesterRegistration),
  SemesterRegistrationsController.updateSemesterRegistrations
);

router.delete('/:id', SemesterRegistrationsController.deleteSemesterRegistrations);


export const SemesterRegistrationsRouter = router;
