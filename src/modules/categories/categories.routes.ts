import { Category } from '@prisma/client';
import { Router } from 'express';
import { container } from 'tsyringe';

import { IController } from '../../interfaces/controller.interface';
import { CategoriesController } from './categories.controller';

const router = Router();

const controller = container.resolve<IController<Category>>(CategoriesController);

router.get('/', (req, res) => controller.findAll(req, res));
router.get('/:id', (req, res) => controller.findOne(req, res));
router.post('/', (req, res) => controller.create(req, res));
router.put('/:id', (req, res) => controller.update(req, res));
router.delete('/:id', (req, res) => controller.delete(req, res));

export { router as categoriesRoutes };
