import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.get('/', AcademicSemesterController.getAllAcademicSemester);
router.get('/:id', AcademicSemesterController.getSingleAcademicSemester);
router.post('/', AcademicSemesterController.createAcademicSemester);
router.patch('/:id', AcademicSemesterController.updateAcademicSemester);
router.delete('/:id', AcademicSemesterController.deleteAcademicSemester);


export const AcademicSemesterRouter = router;
