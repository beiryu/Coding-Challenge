import { StatusCodes } from 'http-status-codes';
import winston from 'winston';
import { DataResponse } from '../../../common/dtos/data-response.dto';
import { ResponseStatus } from '../../../common/enums/response-status.enum';
import { UserCreateDto } from '../../dtos/user.dto';
import { UserRepository } from '../../interfaces/repositories/user-repository.interface';
import { CreateUserUseCase } from '../../interfaces/use-cases/create-user.interface';

export class CreateUser implements CreateUserUseCase {
  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(body: UserCreateDto): Promise<DataResponse<null>> {
    try {
      await this.userRepository.createUser(body);

      return DataResponse.from(
        ResponseStatus.Success,
        'Users created successfully',
        null,
        StatusCodes.OK,
      );
    } catch (ex) {
      winston.error(`Error creating user: ${(ex as Error).message}`);

      return DataResponse.from(
        ResponseStatus.Failed,
        `Error creating: ${(ex as Error).message}`,
        null,
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
