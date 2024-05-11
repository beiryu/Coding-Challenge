import { Request, Response } from 'express';

export default (
  _req: Request<object, object, object, object>,
  res: Response,
) => {
  const { apiResponse } = res.locals;
  return res.status(apiResponse.statusCode).send(apiResponse);
};
