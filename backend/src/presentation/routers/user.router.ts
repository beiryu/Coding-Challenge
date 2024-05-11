import express, { NextFunction, Request, Response } from 'express';
import DataResponseInterceptor from '../../common/interceptors/data-response.interceptor';
import {
  UserCreateDto,
  UserDeleteDto,
  UserQueryDto,
} from '../../domain/dtos/user.dto';
import { CreateUserUseCase } from '../../domain/interfaces/use-cases/create-user.interface';
import { DeleteUserUseCase } from '../../domain/interfaces/use-cases/delete-user.interface';
import { GetAllUsersUseCase } from '../../domain/interfaces/use-cases/get-all-users.interface';

export default function UserRouter(
  getAllUsersUseCase: GetAllUsersUseCase,
  createUser: CreateUserUseCase,
  deleteUser: DeleteUserUseCase,
) {
  const router = express.Router();

  router.get(
    '/',
    async (
      req: Request<object, object, object, UserQueryDto>,
      res: Response,
      next: NextFunction,
    ) => {
      res.locals.apiResponse = await getAllUsersUseCase.execute(req.query);
      next();
    },
    DataResponseInterceptor,
  );

  router.post(
    '/',
    async (
      req: Request<object, object, UserCreateDto, object>,
      res: Response,
      next: NextFunction,
    ) => {
      res.locals.apiResponse = await createUser.execute(req.body);
      next();
    },
    DataResponseInterceptor,
  );

  router.delete(
    '/:id',
    async (
      req: Request<UserDeleteDto, object, object, object>,
      res: Response,
      next: NextFunction,
    ) => {
      res.locals.apiResponse = await deleteUser.execute(req.params.id);
      next();
    },
    DataResponseInterceptor,
  );

  return router;
}
