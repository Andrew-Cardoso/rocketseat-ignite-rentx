import { Category } from '@prisma/client';
import { Request } from 'express';
import { inject, singleton } from 'tsyringe';

import { IController } from '../../interfaces/controller.interface';
import { IResponse } from '../../interfaces/response.interface';
import { CategoriesService } from './categories.service';

@singleton()
export class CategoriesController implements IController<Category> {
  constructor(@inject(CategoriesService) private service: CategoriesService) {
    console.log('service');
  }

  async create(req: Request, res: IResponse<Category>) {
    return res.json(await this.service.create(req.body));
  }

  async update(req: Request, res: IResponse<Category>) {
    return res.json(await this.service.update(req.params.id, req.body));
  }

  async findOne(req: Request, res: IResponse<Category | null>) {
    return res.json(await this.service.findOne(req.params.id));
  }

  async findAll(req: Request, res: IResponse<Category[]>) {
    return res.json(await this.service.findAll());
  }

  async delete(req: Request, res: IResponse<Category>) {
    return res.json(await this.service.delete(req.params.id));
  }
}
