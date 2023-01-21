import { Request } from 'express';

import { IResponse } from './response.interface';

export type IUpdate<T> = (req: Request, res: IResponse<T>) => Promise<IResponse<T>>;
