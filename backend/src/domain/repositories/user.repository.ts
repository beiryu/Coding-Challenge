import { UserDataSource } from '../../data/interfaces/data-sources/user-data-source.interface';
import { UserCreateDto, UserQueryDto, UserResponseDto } from '../dtos/user.dto';
import { UserRepository } from '../interfaces/repositories/user-repository.interface';

export class UserRepositoryImpl implements UserRepository {
  userDataSource: UserDataSource;

  constructor(userDataSource: UserDataSource) {
    this.userDataSource = userDataSource;
  }

  async findUserById(id: string): Promise<UserResponseDto | null> {
    const result = await this.userDataSource.getById(id);
    return result;
  }

  async createUser(user: UserCreateDto): Promise<void> {
    await this.userDataSource.createOne(user);
  }

  async deletUser(id: string): Promise<void> {
    await this.userDataSource.deleteOne(id);
  }

  async getUsers(query: UserQueryDto): Promise<UserResponseDto[]> {
    const result = await this.userDataSource.getAll(query);
    return result;
  }
}
