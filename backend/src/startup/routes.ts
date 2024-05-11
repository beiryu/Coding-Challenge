import express, { Application } from 'express';
import { getUserDatabase } from '../data/instances/user-database';
import { UserRepositoryImpl } from '../domain/repositories/user.repository';
import { CreateUser } from '../domain/use-cases/user/create-user.use-case';
import { DeleteUser } from '../domain/use-cases/user/delete-user.use-case';
import { GetAllUsers } from '../domain/use-cases/user/get-all-users.use-case';
import HealthCheckRouter from '../presentation/routers/health-check.router';
import UserRouter from '../presentation/routers/user.router';

export async function getHealthCheckRouter() {
  return HealthCheckRouter();
}

export async function getUserRouter() {
  const dataSource = await getUserDatabase();
  return UserRouter(
    new GetAllUsers(new UserRepositoryImpl(dataSource)),
    new CreateUser(new UserRepositoryImpl(dataSource)),
    new DeleteUser(new UserRepositoryImpl(dataSource)),
  );
}

export default async function setupRoutes(app: Application) {
  const healthCheckRouter = await getHealthCheckRouter();
  const userRouter = await getUserRouter();

  app.use(express.json());
  app.use('/healthcheck', healthCheckRouter);
  app.use('/users', userRouter);
}
