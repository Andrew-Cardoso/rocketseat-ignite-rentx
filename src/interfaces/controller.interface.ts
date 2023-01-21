import { ICreate } from './create.interface';
import { IDelete } from './delete.interface';
import { IFindAll } from './find-all.interface';
import { IFindOne } from './find-one.interface';
import { IUpdate } from './update.interface';

export interface IController<T> {
  create: ICreate<T>;
  update: IUpdate<T>;
  findAll: IFindAll<T>;
  findOne: IFindOne<T | null>;
  delete: IDelete<T>;
}
