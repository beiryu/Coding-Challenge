import { StatusCodes } from 'http-status-codes';
import winston from 'winston';
import { DataResponse } from '../../../common/dtos/data-response.dto';
import { ResponseStatus } from '../../../common/enums/response-status.enum';
import { UserRepository } from '../../interfaces/repositories/user-repository.interface';
import { DeleteUserUseCase } from '../../interfaces/use-cases/delete-user.interface';

export class DeleteUser implements DeleteUserUseCase {
  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(id: string): Promise<DataResponse<null>> {
    try {
      const userFound = await this.userRepository.findUserById(id);
      if (!userFound) {
        throw new Error(`user with id ${id} not found`);
      }
      await this.userRepository.deletUser(id);

      return DataResponse.from(
        ResponseStatus.Success,
        'User deleted successfully',
        null,
        StatusCodes.OK,
      );
    } catch (ex) {
      winston.error(`Error deleting user: ${(ex as Error).message}`);

      return DataResponse.from(
        ResponseStatus.Failed,
        `Error deleting: ${(ex as Error).message}`,
        null,
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
