import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { StudentEnrolledCoursesController } from './StudentEnrolledCourse.controller';
import { StudentEnrolledCoursesValidation } from './StudentEnrolledCourse.validation';

const router = express.Router();

router.get('/', StudentEnrolledCoursesController.getAllStudentEnrolledCourses);
router.get('/:id', StudentEnrolledCoursesController.getSingleStudentEnrolledCourses);
router.post(
  '/',
  validateRequest(StudentEnrolledCoursesValidation.create),
  StudentEnrolledCoursesController.createStudentEnrolledCourses
);
router.patch(
  '/:id',
  validateRequest(StudentEnrolledCoursesValidation.update),
  StudentEnrolledCoursesController.updateStudentEnrolledCourses
);
router.delete('/:id', StudentEnrolledCoursesController.deleteStudentEnrolledCourses);

export const StudentEnrolledCoursesRouter = router;
