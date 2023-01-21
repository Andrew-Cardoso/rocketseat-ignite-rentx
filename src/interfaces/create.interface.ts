import { Request } from 'express';

import { IResponse } from './response.interface';

export type ICreate<T> = (req: Request, res: IResponse<T>) => Promise<IResponse<T>>;
