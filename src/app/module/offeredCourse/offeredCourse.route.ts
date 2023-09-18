import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCoursesController } from './offeredCourse.controller';
import { OfferedCoursesValidation } from './offeredCourse.validation';

const router = express.Router();

router.get('/', OfferedCoursesController.getAllOfferedCourses);
router.get('/:id', OfferedCoursesController.getSingleOfferedCourses);
router.post(
  '/',
  validateRequest(OfferedCoursesValidation.create),
  OfferedCoursesController.createOfferedCourses
);
router.patch(
  '/:id',
  validateRequest(OfferedCoursesValidation.update),
  OfferedCoursesController.updateOfferedCourses
);
router.delete('/:id', OfferedCoursesController.deleteOfferedCourses);

export const OfferedCoursesRouter = router;
