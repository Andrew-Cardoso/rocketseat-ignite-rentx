import { Category } from '@prisma/client';
import { inject, singleton } from 'tsyringe';

import Prisma from '../../database';

@singleton()
export class CategoriesService {
  constructor(@inject(Prisma) private readonly prisma: Prisma) {
    console.log('init categories service');
  }

  async create(data: Category) {
    return this.prisma.category.create({ data });
  }

  async update(id: string, data: Category) {
    return this.prisma.category.update({ where: { id }, data });
  }

  async findOne(id: string) {
    return this.prisma.category.findUnique({ where: { id } });
  }

  async findAll() {
    return this.prisma.category.findMany();
  }

  async delete(id: string) {
    return this.prisma.category.delete({ where: { id } });
  }
}
