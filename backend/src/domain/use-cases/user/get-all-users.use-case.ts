import { StatusCodes } from 'http-status-codes';
import winston from 'winston';
import { DataResponse } from '../../../common/dtos/data-response.dto';
import { ResponseStatus } from '../../../common/enums/response-status.enum';
import { UserQueryDto, UserResponseDto } from '../../dtos/user.dto';
import { UserRepository } from '../../interfaces/repositories/user-repository.interface';
import { GetAllUsersUseCase } from '../../interfaces/use-cases/get-all-users.interface';

export class GetAllUsers implements GetAllUsersUseCase {
  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(
    query: UserQueryDto,
  ): Promise<DataResponse<UserResponseDto[] | null>> {
    try {
      const users: UserResponseDto[] =
        await this.userRepository.getUsers(query);

      if (!users) {
        return DataResponse.from(
          ResponseStatus.Failed,
          'No users found',
          null,
          StatusCodes.NOT_FOUND,
        );
      }

      return DataResponse.from<UserResponseDto[]>(
        ResponseStatus.Success,
        'Users found',
        users,
        StatusCodes.OK,
      );
    } catch (ex) {
      winston.error(`Error fetching users: ${(ex as Error).message}`);

      return DataResponse.from(
        ResponseStatus.Failed,
        `Error fetching users: ${(ex as Error).message}`,
        null,
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
