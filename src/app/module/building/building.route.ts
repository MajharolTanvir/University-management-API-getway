import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BuildingsController } from './building.controller';
import { BuildingValidation } from './building.validation';
const router = express.Router();

router.get('/', BuildingsController.getAllBuildings);
router.get('/:id', BuildingsController.getSingleBuildings);
router.post('/', validateRequest(BuildingValidation.create), BuildingsController.createBuildings);
router.patch(
  '/:id',
  validateRequest(BuildingValidation.update),
  BuildingsController.updateBuildings
);
router.delete('/:id', BuildingsController.deleteBuildings);

export const BuildingRouter = router;
