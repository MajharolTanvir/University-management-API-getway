import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCoursesSectionsController } from './OfferedCourseSection.controller';
import { OfferedCoursesSectionsValidation } from './OfferedCourseSection.validation';


const router = express.Router();

router.get('/', OfferedCoursesSectionsController.getAllOfferedCoursesSections);
router.get('/:id', OfferedCoursesSectionsController.getSingleOfferedCoursesSections);
router.post(
  '/',
  validateRequest(OfferedCoursesSectionsValidation.create),
  OfferedCoursesSectionsController.createOfferedCoursesSections
);
router.patch(
  '/:id',
  validateRequest(OfferedCoursesSectionsValidation.update),
  OfferedCoursesSectionsController.updateOfferedCoursesSections
);
router.delete('/:id', OfferedCoursesSectionsController.deleteOfferedCoursesSections);

export const OfferedCoursesSectionsRouter = router;
