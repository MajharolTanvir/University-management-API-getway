import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CoursesController } from './course.controller';
import { CourseValidation } from './course.validation';


const router = express.Router();

router.get('/', CoursesController.getAllCourses);
router.get('/:id', CoursesController.getSingleCourses);
router.post(
  '/',
  validateRequest(CourseValidation.create),
  CoursesController.createCourses
);
router.patch(
  '/:id',
  validateRequest(CourseValidation.update),
  CoursesController.updateCourses
);
router.delete('/:id', CoursesController.deleteCourses);

router.post('/:id/assign-faculty', validateRequest(CourseValidation.assign), CoursesController.assignFaculty);
router.delete('/:id/remove-faculty', CoursesController.removeFaculty);

export const CoursesRouter = router;
