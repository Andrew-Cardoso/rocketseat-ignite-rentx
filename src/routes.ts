import { Router } from 'express';

import { categoriesRoutes } from './modules/categories/categories.routes';

const appRoutes = Router();

appRoutes.use('/categories', categoriesRoutes);

export { appRoutes };
