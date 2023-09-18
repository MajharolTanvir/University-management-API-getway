import express from 'express';
import { StudentSemesterPaymentController } from './SemesterPayment.controller';

const router = express.Router();

router.get('/my-semester-payments', StudentSemesterPaymentController.getMyPayment);

export const studentSemesterPaymentRoutes = router;
