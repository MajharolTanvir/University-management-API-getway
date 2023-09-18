import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCourseClassSchedulesController } from './offeredCourseClassSchedule.controller';
import { OfferedCourseClassSchedulesValidation } from './offeredCourseClassSchedule.validation';

const router = express.Router();

router.get('/', OfferedCourseClassSchedulesController.getAllOfferedCourseClassSchedules);
router.get('/:id', OfferedCourseClassSchedulesController.getSingleOfferedCourseClassSchedules);
router.post(
  '/',
  validateRequest(OfferedCourseClassSchedulesValidation.create),
  OfferedCourseClassSchedulesController.createOfferedCourseClassSchedules
);
router.patch(
  '/:id',
  validateRequest(OfferedCourseClassSchedulesValidation.update),
  OfferedCourseClassSchedulesController.updateOfferedCourseClassSchedules
);
router.delete('/:id', OfferedCourseClassSchedulesController.deleteOfferedCourseClassSchedules);

export const OfferedCourseClassSchedulesRouter = router;
