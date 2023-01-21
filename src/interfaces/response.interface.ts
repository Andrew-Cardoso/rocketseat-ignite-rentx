import { Response } from 'express';

export type IResponse<T> = Omit<Response, 'json'> & { json(data: T): Response };
