import { PrismaClient } from '@prisma/client';
import { singleton } from 'tsyringe';

@singleton()
export default class Prisma extends PrismaClient {}
