import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { RoomController } from './room.controller';
import { RoomValidation } from './room.validation';
const router = express.Router();

router.get('/', RoomController.getAllRooms);
router.get('/:id', RoomController.getSingleRooms);
router.post(
  '/',
  validateRequest(RoomValidation.create),
  RoomController.createRooms
);
router.patch(
  '/:id',
  validateRequest(RoomValidation.update),
  RoomController.updateRooms
);
router.delete('/:id', RoomController.deleteRooms);

export const RoomRouter = router;
