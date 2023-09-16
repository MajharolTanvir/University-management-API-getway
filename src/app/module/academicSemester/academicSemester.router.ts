import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.get('/', AcademicSemesterController.getAllAcademicSemester);
router.get('/:id', AcademicSemesterController.getSingleAcademicSemester);
router.post('/', validateRequest(AcademicSemesterValidation.create), AcademicSemesterController.createAcademicSemester);
router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.update),
  AcademicSemesterController.updateAcademicSemester
);
router.delete('/:id', AcademicSemesterController.deleteAcademicSemester);


export const AcademicSemesterRouter = router;
